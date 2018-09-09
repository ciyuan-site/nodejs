'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async index() {
    const { ctx, } = this;
    await ctx.render('upload_index', {});
  }

  async audio() {
    const { ctx, } = this;
    await ctx.render('upload_audio', {});
  }
}

module.exports = Controller;
