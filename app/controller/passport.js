'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async index() {
    const { ctx } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || '/';
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    else {
      await ctx.render('passport_index', {});
    }
  }

  async login() {
    const { ctx } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || '/';
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    else {
      await ctx.render('passport_login', {});
    }
  }

  async register() {
    const { ctx } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || '/';
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    ctx.body = 'register';
  }
}

module.exports = Controller;
