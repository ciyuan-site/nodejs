'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async phone() {
    const { ctx, service, } = this;
    if(ctx.session.uid) {
      ctx.body = ctx.helper.errorJSON('已登录无需注册码');
    }
    else {
      let body = ctx.request.body;
      let name = body.name;
      if(!name || !/^1\d{10}$/.test(name)) {
        return ctx.helper.errorJSON('手机号不合法~');
      }
      let res = await service.passport.code.register(name);
      ctx.body = ctx.helper.ajaxJSON(res);
    }
  }

  async email() {
    const { ctx, app, } = this;
    if(ctx.session.uid) {
      ctx.body = ctx.helper.errorJSON('已登录无需注册码');
    }
    else {
      //
    }
  }
}

module.exports = Controller;
