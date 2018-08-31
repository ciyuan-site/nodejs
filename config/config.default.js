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

  // add your config here
  config.middleware = [];

  return config;
};
