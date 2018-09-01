'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async login() {
    this.ctx.body = 'hi, egg';
  }

  async register() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = Controller;
