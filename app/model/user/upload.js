'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.user.define('upload', {
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
    work_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
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
        name: 'user_id_work_id_create_time',
        fields: ['user_id', 'work_id', 'create_time'],
      },
      {
        name: 'work_id',
        unique: true,
        fields: ['work_id'],
      },
    ],
    comment: '作品关系',
  });
};
