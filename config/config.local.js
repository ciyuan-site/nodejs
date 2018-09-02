'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1533449579600_6240';

  config.session = {
    domain: 'ciyuan.net',
  };

  config.sequelize = {
    datasources: [
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.passport',
        baseDir: 'model/passport',
        database: 'passport',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.user',
        baseDir: 'model/user',
        database: 'user',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.audio',
        baseDir: 'model/audio',
        database: 'audio',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.video',
        baseDir: 'model/video',
        database: 'video',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.work',
        baseDir: 'model/work',
        database: 'work',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
    ],
  };

  config.weibo = {
    appKey: '3849149094',
    appSecret: 'dbda0048f2b966f37f11e5bfaae6462e',
    redirect: 'http://passport.ciyuan.net/oauth/weibo_login',
  };

  config.hotDeploy = true;

  config.host = 'http://ciyuan.net';
  config.hostPassport = 'http://passport.ciyuan.net';
  config.hostMy = 'http://my.ciyuan.net';
  config.hostAudio = 'http://audio.ciyuan.net';
  config.hostVideo = 'http://video.ciyuan.net';
  config.hostImage = 'http://image.ciyuan.net';
  config.hostText = 'http://text.ciyuan.net';
  config.hostContribute = 'http://contribute.ciyuan.net';

  return config;
};
