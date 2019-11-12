'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(name) {
    const { app } = this;
    const user = await app.mysql.get('user', { name });
    return user;
  }
}

module.exports = UserService;
