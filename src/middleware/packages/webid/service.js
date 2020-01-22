'use strict';

module.exports = {
  name: 'webid',
  dependencies: ['ldp'],
  actions: {
    async create(ctx) {
      const { nick, email, name, familyName } = ctx.params;
      await ctx.call('ldp.post', {
        typeURL: 'foaf:Person',
        nick,
        email,
        name,
        familyName
      });
      return ctx.meta.$responseHeaders.Location;
    }
  }
};
