'use strict';

module.exports = app => {
  const { STRING, DATE, NOW, TINYINT, BIGINT, BOOLEAN, } = app.Sequelize;

  return app.model.passport.define('user', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nickname: {
      type: STRING,
      allowNull: false,
    },
    sex: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0未知，1男，2女，3其它',
    },
    head_url: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
    },
    sign: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
    },
    is_delete: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
        name: 'nickname',
        unique: true,
        fields: ['nickname'],
      }
    ],
    initialAutoIncrement: 2066000000010000,
    comment: '用户基本信息',
  });
};
