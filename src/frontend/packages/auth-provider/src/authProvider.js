import jwtDecode from 'jwt-decode';
import urlJoin from 'url-join';

// Transform the URI to the one used to find the ACL
// To be compatible with all servers, we should do a HEAD request to the resource URI
const getAclUri = (middlewareUri, resourceUri) => urlJoin(middlewareUri, resourceUri.replace(middlewareUri, '_acl/'));

const authProvider = ({ middlewareUri, httpClient, checkPermissions, resources }) => ({
  login: params => {
    window.location.href = `${middlewareUri}auth?redirectUrl=` + encodeURIComponent(window.location.href);
    return Promise.resolve();
  },
  logout: () => {
    // Redirect to login page after disconnecting from SSO
    // The login page will remove the token, display a notification and redirect to the homepage
    const url = new URL(window.location.href);
    window.location.href =
      `${middlewareUri}auth/logout?redirectUrl=` + encodeURIComponent(url.origin + '/login?logout');

    // Avoid displaying immediately the login page
    return Promise.resolve('/');
  },
  checkAuth: () => {
    if (localStorage.getItem('token')) {
      return Promise.resolve();
    } else {
      return Promise.resolve();
    }
  },
  checkError: error => Promise.resolve(),
  getPermissions: async resourceId => {
    if (!checkPermissions) return true;

    // If a resource name is passed, get the corresponding container, otherwise assume we have the URI
    const resourceUri = resources[resourceId] ? resources[resourceId].containerUri : resourceId;

    const aclUri = getAclUri(middlewareUri, resourceUri);

    let { json } = await httpClient(aclUri);

    return json['@graph'];
  },
  addPermission: async (resourceId, agentId, agentType, mode) => {
    // If a resource name is passed, get the corresponding container, otherwise assume we have the URI
    const resourceUri = resources[resourceId] ? resources[resourceId].containerUri : resourceId;

    const aclUri = getAclUri(middlewareUri, resourceUri);

    let authorization = {
      '@id': aclUri + '#' + mode.replace('acl:', ''),
      '@type': 'acl:Authorization',
      'acl:accessTo': resourceUri,
      'acl:mode': mode
    };

    switch (agentType) {
      case 'user':
        authorization['acl:agent'] = agentId;
        break;
      case 'group':
        authorization['acl:agentGroup'] = agentId;
        break;
      case 'anon':
      case 'anyUser':
        authorization['acl:agentClass'] = agentId;
        break;
      default:
        throw new Error('Unknown agent type: ' + agentType);
    }

    const result = await httpClient(aclUri, {
      method: 'PATCH',
      body: JSON.stringify({
        '@context': {
          acl: 'http://www.w3.org/ns/auth/acl#',
          foaf: 'http://xmlns.com/foaf/0.1/'
        },
        '@graph': [authorization]
      })
    });

    return result.status === 204;
  },
  getIdentity: () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { webId, name } = jwtDecode(token);
      return { id: webId, fullName: name };
    }
  }
});

export default authProvider;
