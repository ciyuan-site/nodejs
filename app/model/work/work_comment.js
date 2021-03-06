'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.work.define('work_comment', {
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
    kind: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0音频；1视频；2图绘；3文词',
    },
    comment_id: {
      type: Sequelize.INTEGER.UNSIGNED,
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
        name: 'work_id_kind_comment_id',
        unique: true,
        fields: ['work_id', 'kind', 'comment_id'],
      },
    ],
    comment: '作品留言',
  });
};
