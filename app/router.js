'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.index.index);

  router.get('/passport', controller.passport.index);
  router.get('/passport/login', controller.passport.login);
  router.get('/passport/register', controller.passport.register);
};
