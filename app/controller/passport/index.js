'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async index() {
    const { ctx, app, } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || app.config.host;
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    else {
      await ctx.render('passport_index', {});
    }
  }

  async login() {
    const { ctx, app, } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || app.config.host;
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    else {
      await ctx.render('passport_login', {});
    }
  }

  async register() {
    const { ctx, } = this;
    if(ctx.session.uid) {
      let goto = ctx.session.goto || ctx.query.goto || app.config.host;
      delete ctx.session.goto;
      ctx.redirect(goto);
    }
    else {
      await ctx.render('passport_register', {});
    }
  }

  async exit() {
    const { ctx, app, } = this;
    ctx.session = null;
    ctx.redirect(app.config.host);
  }
}

module.exports = Controller;
