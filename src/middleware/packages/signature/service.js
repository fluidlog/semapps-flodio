const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { generateKeyPair, createSign, createHash } = require('crypto');
const { parseRequest, verifySignature } = require('http-signature');
const { createAuthzHeader, createSignatureString } = require('http-signature-header');

const getSlugFromUri = str => str.replace(/\/$/, '').replace(/.*\//, '');

const SignatureService = {
  name: 'signature',
  settings: {
    actorsKeyPairsDir: null
  },
  actions: {
    async getActorPublicKey(ctx) {
      const { actorUri } = ctx.params;
      const actorId = getSlugFromUri(actorUri);
      const publicKeyPath = path.join(this.settings.actorsKeyPairsDir, actorId + '.key.pub');

      try {
        return await fs.promises.readFile(publicKeyPath);
      } catch (e) {
        return null;
      }
    },
    async generateActorKeyPair(ctx) {
      const { actorUri } = ctx.params;

      const publicKey = await this.actions.getActorPublicKey({ actorUri }, { parentCtx: ctx });
      if (publicKey) {
        console.log(`Key for ${actorUri} already exists, skipping...`);
        return publicKey;
      }

      return new Promise((resolve, reject) => {
        const actorId = getSlugFromUri(actorUri);
        const privateKeyPath = path.join(this.settings.actorsKeyPairsDir, actorId + '.key');
        const publicKeyPath = path.join(this.settings.actorsKeyPairsDir, actorId + '.key.pub');

        generateKeyPair(
          'rsa',
          {
            modulusLength: 4096,
            publicKeyEncoding: {
              type: 'spki',
              format: 'pem'
            },
            privateKeyEncoding: {
              type: 'pkcs8',
              format: 'pem'
            }
          },
          (err, publicKey, privateKey) => {
            if (!err) {
              fs.writeFile(privateKeyPath, privateKey, err => reject(err));
              fs.writeFile(publicKeyPath, publicKey, err => reject(err));
              resolve(publicKey);
            } else {
              reject(err);
            }
          }
        );
      });
    },
    async deleteActorKeyPair(ctx) {
      const { actorUri } = ctx.params;
      const actorId = getSlugFromUri(actorUri);

      try {
        await fs.promises.unlink(path.join(this.settings.actorsKeyPairsDir, actorId + '.key'));
        await fs.promises.unlink(path.join(this.settings.actorsKeyPairsDir, actorId + '.key.pub'));
      } catch (e) {
        console.log(`Could not delete key pair for actor ${actorId}`);
      }
    },
    async generateSignatureHeaders(ctx) {
      const { url, body, actorUri } = ctx.params;
      const actorId = getSlugFromUri(actorUri);

      const headers = {
        Date: new Date().toUTCString(),
        Digest: this.buildDigest(body)
      };

      // Generate signature string
      const requestOptions = { url, method: 'POST', headers };
      const includeHeaders = ['(request-target)', 'host', 'date', 'digest'];
      const signatureString = createSignatureString({ includeHeaders, requestOptions });

      // Hash signature string
      const signer = createSign('sha256');
      signer.update(signatureString);
      const privateKey = await fsPromises.readFile(path.join(this.settings.actorsKeyPairsDir, actorId + '.key'));
      const signatureHash = signer.sign(privateKey).toString('base64');

      headers.Signature = createAuthzHeader({
        includeHeaders,
        keyId: actorUri,
        signature: signatureHash,
        algorithm: 'rsa-sha256'
      }).substr('Signature '.length);

      return headers;
    },
    async verifyDigest(ctx) {
      const { body, headers } = ctx.params;
      return headers.digest ? this.buildDigest(body) === headers.digest : true;
    },
    async verifyHttpSignature(ctx) {
      const { url, headers } = ctx.params;

      const parsedSignature = parseRequest({
        url: url.replace(new URL(url).origin, ''), // URL without domain name
        method: 'POST',
        headers
      });

      const keyId = parsedSignature.params.keyId;
      if (!keyId) return false;
      const [actorUrl] = keyId.split('#');

      const publicKey = await this.getRemoteActorPublicKey(actorUrl);
      if (!publicKey) return false;

      return verifySignature(parsedSignature, publicKey);
    }
  },
  methods: {
    buildDigest(body) {
      return (
        'SHA-256=' +
        createHash('sha256')
          .update(body)
          .digest('base64')
      );
    },
    // TODO use cache mechanisms
    async getRemoteActorPublicKey(actorUrl) {
      const response = await fetch(actorUrl, { headers: { Accept: 'application/json' } });
      if (!response) return false;

      const actor = await response.json();
      if (!actor || !actor.publicKey) return false;

      return actor.publicKey.publicKeyPem;
    }
  }
};

module.exports = SignatureService;
