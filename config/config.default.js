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

  config.host = 'http://ciyuan.site';
  config.hostPassport = 'http://passport.ciyuan.site';
  config.hostMy = 'http://my.ciyuan.site';
  config.hostAudio = 'http://audio.ciyuan.site';
  config.hostVideo = 'http://video.ciyuan.site';
  config.hostImage = 'http://image.ciyuan.site';
  config.hostText = 'http://text.ciyuan.site';
  config.hostContribute = 'http://contribute.ciyuan.site';

  return config;
};
