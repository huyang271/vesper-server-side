'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const rs = await service.test.find('hyd');
    ctx.body = rs;
  }
}

module.exports = HomeController;
