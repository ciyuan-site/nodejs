'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.user.define('user_relation', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    target_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0关注；1黑名单',
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    update_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    indexes: [
      {
        name: 'user_id_target_id',
        unique: true,
        fields: ['user_id', 'target_id'],
      },
      {
        name: 'user_id_type_create_time',
        fields: ['user_id', 'type', 'create_time'],
      },
      {
        name: 'target_id_type_create_time',
        fields: ['target_id', 'type', 'create_time'],
      },
    ],
    comment: '用户关系类型',
  });
};
