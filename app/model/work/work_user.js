'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.work.define('work_user', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    work_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    profession_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
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
        name: 'work_id_user_id_profession_id',
        unique: true,
        fields: ['work_id', 'user_id', 'profession_id'],
      },
      {
        name: 'user_id_profession_id',
        fields: ['user_id', 'profession_id'],
      },
    ],
    comment: '作品包含用户关系',
  });
};
