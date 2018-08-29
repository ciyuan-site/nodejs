'use strict';

module.exports = app => {
  const { STRING, DATE, NOW, TINYINT, INTEGER, BIGINT, } = app.Sequelize;

  return app.model.passport.define('oauth', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    open_id: {
      type: STRING,
      allowNull: false,
    },
    token: {
      type: STRING,
      allowNull: false,
    },
    type: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0微博，1微信',
    },
    user_id: {
      type: BIGINT.UNSIGNED,
      allowNull: false,
    },
    create_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    update_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  }, {
    indexes: [
      {
        name: 'user_id_type',
        unique: true,
        fields: ['user_id', 'type'],
      }
    ],
    comment: 'oauth账户',
  });
};
