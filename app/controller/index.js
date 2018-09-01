'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 123;
    await ctx.render('index', {});
  }
}

module.exports = Controller;
