'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async find() {
    const { ctx, service } = this;
    const rs = await service.test.find(ctx.query.name);
    ctx.body = rs;
  }
}

module.exports = HomeController;
