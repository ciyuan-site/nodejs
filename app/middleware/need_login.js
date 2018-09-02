/**
 * Created by army8735 on 2017/10/9.
 */

'use strict';

module.exports = () => {
  return async function(ctx, next) {
    if(!ctx.session.uid) {
      let url = ctx.request.url;
      let host = ctx.request.header.host.replace(/:\d+$/, '');
      if(ctx.app.config.host.indexOf(host) > -1) {
        host = 'http://' + host;
      }
      else {
        host = 'http://' + host;
      }
      let redirect = ctx.app.config.hostPassport + '/login?goto=' + encodeURIComponent(host + '/' + url);
      return ctx.redirect(redirect);
    }
    await next();
  };
};
