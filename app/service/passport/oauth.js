'use strict';

const egg = require('egg');
const uuidv4 = require('uuid/v4');

class Service extends egg.Service {
  async weiboLogin(openId, token) {
    if(!openId || !token) {
      return {
        success: false,
      };
    }
    const { app, ctx, } = this;
    let find = await app.model.passport.Oauth.findOne({
      attributes: [
        ['user_id', 'userId'],
      ],
      where: {
        open_id: openId,
      },
      raw: true,
    });
    if(find) {
      let [user] = await Promise.all([
        app.model.user.User.findOne({
          attributes: [
            'id',
            'nickname',
            'head_url',
          ],
          where: {
            id: find.userId,
          },
          raw: true,
        }),
        app.model.passport.Oauth.update({
          token,
          update_time: new Date(),
        }, {
          where: {
            open_id: openId,
          },
          raw: true,
        }),
      ]);
      return {
        success: true,
        data: user,
      };
    }
    else {
      let weibo = await ctx.curl('https://api.weibo.com/2/users/show.json', {
        data: {
          uid: openId,
          access_token: token,
        },
        dataType: 'json',
        gzip: true,
      });
      if(!weibo || weibo.error || !weibo.data) {
        return {
          success: false,
        };
      }
      weibo = weibo.data;
      let name = weibo.screen_name || weibo.name;
      let headUrl = weibo.avatar_hd || weibo.avatar_large || weibo.profile_image_url;
      let transactionUser = await app.model.user.transaction();
      let transactionPassport = await app.model.passport.transaction();
      try {
        let exist = await app.model.user.User.findOne({
          attributes: [
            'id',
          ],
          where: {
            nickname: name,
          },
          raw: true,
        });
        if(exist) {
          name = uuidv4();
        }
        let user = await app.model.user.User.create({
          nickname: name,
          head_url: headUrl,
        }, {
          transaction: transactionUser,
          raw: true,
        });
        user = user.toJSON();
        user.nickname = user.id;
        await Promise.all([
          app.model.passport.Oauth.create({
            open_id: openId,
            token,
            type: 0,
            user_id: user.id,
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
        return {
          success: true,
          data: user,
        };
      } catch(e) {
        await transactionUser.rollback();
        await transactionPassport.rollback();
        ctx.logger.error(e.toString());
        return {
          success: false,
        };
      }
    }
  }
}

module.exports = Service;
