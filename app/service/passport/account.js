'use strict';

const egg = require('egg');
const uuidv4 = require('uuid/v4');
const Spark = require('spark-md5');

class Service extends egg.Service {
  async registerPhone(phone, password, code) {
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return {
        success: false,
        message: '手机号不合法~',
      };
    }
    const { app, ctx, } = this;
    let cacheKey = 'codeRegister_' + phone;
    let c = await app.redis.get(cacheKey);
    if(!c) {
      return {
        success: false,
        message: '验证码不合法~',
      };
    }
    c = JSON.parse(c);
    if(c.code !== code) {
      return {
        success: false,
        message: '验证码不合法~',
      };
    }
    let type = 0;
    let check = await app.model.passport.Account.findOne({
      attributes: [
        'id'
      ],
      where: {
        name: phone,
        type,
      },
      raw: true,
    });
    if(check) {
      return {
        success: false,
        message: '这个账号已经注册过了哦~',
      };
    }
    let transactionUser = await app.model.user.transaction();
    let transactionPassport = await app.model.passport.transaction();
    try {
      let user = await app.model.user.User.create({
        nickname: uuidv4().replace(/-/g, ''),
      }, {
        transaction: transactionUser,
        raw: true,
      });
      user = user.toJSON();
      await Promise.all([
        app.model.passport.Account.create({
          type,
          name: phone,
          user_id: user.id,
          password: Spark.hash(password + 'ciyuan'),
        }, {
          transaction: transactionPassport,
          raw: true,
        }),
        app.model.user.User.update({
          nickname: user.id,
        }, {
          where: {
            id: user.id,
          },
          transaction: transactionUser,
          raw: true,
        })
      ]);
      await transactionUser.commit();
      await transactionPassport.commit();
      ctx.session.uid = user.id;
      ctx.session.nickname = user.nickname;
      ctx.session.headUrl = user.head_url;
      let url = ctx.session.goto || app.config.host;
      delete ctx.session.goto;
      return {
        success: true,
        data: url,
      };
    }
    catch(e) {
      await transactionUser.rollback();
      await transactionPassport.rollback();
      ctx.logger.error(e.toString());
      return {
        success: false,
      };
    }
  }
  async registerEmail(email, password, code) {
    if(!email || !/^[A-Za-z0-9\u4e00-\u9fa5]+@[\w-]+(\.[\w-]+)+$/.test(email)) {
      return {
        success: false,
        message: 'Email不合法~',
      };
    }
    const { app, ctx, } = this;
    let cacheKey = 'codeRegister_' + email;
    let c = await app.redis.get(cacheKey);
    if(!c) {
      return {
        success: false,
        message: '验证码不合法~',
      };
    }
    c = JSON.parse(c);
    if(c.code !== code) {
      return {
        success: false,
        message: '验证码不合法~',
      };
    }
    let type = 1;
    let check = await app.model.passport.Account.findOne({
      attributes: [
        'id'
      ],
      where: {
        name: email,
        type,
      },
      raw: true,
    });
    if(check) {
      return {
        success: false,
        message: '这个账号已经注册过了哦~',
      };
    }
    let transactionUser = await app.model.user.transaction();
    let transactionPassport = await app.model.passport.transaction();
    try {
      let user = await app.model.user.User.create({
        nickname: uuidv4().replace(/-/g, ''),
      }, {
        transaction: transactionUser,
        raw: true,
      });
      user = user.toJSON();
      await Promise.all([
        app.model.passport.Account.create({
          type,
          name: email,
          user_id: user.id,
          password: Spark.hash(password + 'ciyuan'),
        }, {
          transaction: transactionPassport,
          raw: true,
        }),
        app.model.user.User.update({
          nickname: user.id,
        }, {
          where: {
            id: user.id,
          },
          transaction: transactionUser,
          raw: true,
        })
      ]);
      await transactionUser.commit();
      await transactionPassport.commit();
      ctx.session.uid = user.id;
      ctx.session.nickname = user.nickname;
      ctx.session.headUrl = user.head_url;
      let url = ctx.session.goto || app.config.host;
      delete ctx.session.goto;
      return {
        success: true,
        data: url,
      };
    }
    catch(e) {
      await transactionUser.rollback();
      await transactionPassport.rollback();
      ctx.logger.error(e.toString());
      return {
        success: false,
      };
    }
  }
}

module.exports = Service;
