'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.user.define('user', {
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
    kind: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0音频；1视频；2图绘；3文词',
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
        name: 'user_id_work_id_kind_create_time',
        fields: ['user_id', 'work_id', 'kind', 'create_time'],
      },
      {
        name: 'work_id_kind_user_id',
        unique: true,
        fields: ['work_id', 'kind', 'user_id'],
      },
    ],
    comment: '用户上传记录',
  });
};
