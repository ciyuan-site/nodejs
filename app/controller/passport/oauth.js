'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async weibo() {
    const { app, ctx, } = this;
    let query = ctx.query;
    if(query.goto) {
      ctx.session.goto = query.goto;
    }
    let appKey = app.config.weibo.appKey;
    let redirect = app.config.weibo.redirect;
    ctx.redirect(`https://api.weibo.com/oauth2/authorize?client_id=${appKey}&response_type=code&redirect_uri=${redirect}`);
  }

  async weiboLogin() {
    const { app, ctx, service, } = this;
    let query = ctx.query;
    let code = query.code;
    let appKey = app.config.weibo.appKey;
    let appSecret = app.config.weibo.appSecret;
    let redirect = app.config.weibo.redirect;
    let res = await ctx.curl('https://api.weibo.com/oauth2/access_token', {
      method: 'POST',
      data: {
        client_id: appKey,
        client_secret: appSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirect,
      },
      dataType: 'json',
      gzip: true,
    });
    let data = res.data;
    let token = data.access_token;
    let openId = data.uid;
    if(openId && token) {
      let res = await service.passport.oauth.weiboLogin(openId, token);
      if(res.success) {
        let user = res.data;
        ctx.session.uid = user.id;
        ctx.session.nickname = user.nickname;
        ctx.session.headUrl = user.head_url;
      }
    }
    let goto = ctx.session.goto || '/';
    delete ctx.session.goto;
    ctx.redirect(goto);
  }
}

module.exports = Controller;
