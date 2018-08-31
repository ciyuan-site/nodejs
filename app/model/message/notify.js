'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.message.define('notify', {
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
    content: {
      type: Sequelize.TEXT,
    },
    is_read: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_delete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
        name: 'user_id_create_time',
        fields: ['user_id', 'create_time'],
      },
      {
        name: 'user_id_is_read_create_time',
        fields: ['user_id', 'is_read', 'create_time'],
      },
    ],
    comment: '提醒信息',
  });
};
