'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533449579600_6240';

  config.session = {
    key: 'sessionid',
    maxAge: 7 * 24 * 3600 * 1000,
    domain: 'ciyuan.site',
  };

  config.sequelize = {
    datasources: [],
  };

  config.middleware = ['jsConfig', 'report'];

  config.view = {
    defaultViewEngine: 'migi',
    defaultExtension: '.js',
    mapping: {
      '.html': 'nunjucks',
      '.htm': 'nunjucks',
      '.js': 'migi',
    },
  };

  config.sequelize = {
    datasources: [
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'Army8735@',
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
        password: 'Army8735@',
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
        password: 'Army8735@',
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
        password: 'Army8735@',
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
        password: 'Army8735@',
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
    appKey: '1846028038',
    appSecret: '6c966bbba798ff9f9d8a5e9b02cb4747',
    redirect: 'http://passport.ciyuan.site/oauth/weibo_login',
  };

  config.host = 'http://ciyuan.site';
  config.hostAssets = '';
  config.hostPassport = 'http://passport.ciyuan.site';
  config.hostMy = 'http://my.ciyuan.site';
  config.hostAudio = 'http://audio.ciyuan.site';
  config.hostVideo = 'http://video.ciyuan.site';
  config.hostImage = 'http://image.ciyuan.site';
  config.hostText = 'http://text.ciyuan.site';
  config.hostContribute = 'http://contribute.ciyuan.site';

  return config;
};
