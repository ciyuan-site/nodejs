'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.user.define('user_alias', {
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
    alias: {
      type: Sequelize.STRING(128),
      allowNull: false,
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
        name: 'user_id_alias',
        unique: true,
        fields: ['user_id', 'alias'],
      },
      {
        name: 'alias',
        fields: ['alias'],
      },
    ],
    comment: '用户别名信息',
  });
};
