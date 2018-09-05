'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async login() {
    const { ctx, service, } = this;
    if(ctx.session.uid) {
      ctx.body = ctx.helper.errorJSON('已登录请先退出');
    }
    else {
      let body = ctx.request.body;
      let name = body.name;
      let password = body.password;
      if(!name || !password) {
        return ctx.body = ctx.helper.errorJSON('请输入用户名和密码');
      }
      if(/^1\d{10}$/.test(name)) {}
      else if(/^1\d{10}$/.test(name)) {}
      else {}
      ctx.body = ctx.helper.ajaxJSON();
    }
  }

  async exist() {
    const { ctx, } = this;
    ctx.session = null;
    ctx.body = ctx.helper.okJSON();
  }
}

module.exports = Controller;
