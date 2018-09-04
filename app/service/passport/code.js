'use strict';

const egg = require('egg');
const Spark = require('spark-md5');
const SMSClient = require('@alicloud/sms-sdk');

const TEMPLATE = {
  '1': 'SMS_80275178', // 注册
  '2': 'SMS_80275177', // 忘记密码
  '3': 'SMS_80275182', // 绑定手机
};

class Service extends egg.Service {
  async register(phone) {
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return {
        success: false,
        message: '手机号不合法~',
      };
    }
    const { app } = this;
    let check = await app.model.passport.Account.findOne({
      attributes: [
        'id'
      ],
      where: {
        name: phone,
        type: 1,
      },
      raw: true,
    });
    if(check) {
      return {
        success: false,
        message: '这个账号已经注册过了哦~',
      };
    }
    let code = Math.floor(Math.random() * 10000) + '';
    if(code.length < 4) {
      code = '0000' + code;
      code = code.slice(-4);
    }
    let cacheKey = 'codeRegister_' + phone;
    app.redis.setex(cacheKey, app.config.redis.time, JSON.stringify(code));
    let smsClient = new SMSClient({
      accessKeyId: app.config.aliyun.sms.accessKeyId,
      secretAccessKey: app.config.aliyun.sms.secretAccessKey,
    });
    let res = await smsClient.sendSMS({
      PhoneNumbers: phone,
      SignName: '转圈Circling',
      TemplateCode: TEMPLATE[1] || 'SMS_80275178',
      TemplateParam: '{"code":"' + code + '"}',
    });
    return {
      success: res.Code === 'OK',
    };
  }
}

module.exports = Service;
