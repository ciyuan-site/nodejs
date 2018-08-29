'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.video.define('video_comment', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    video_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
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
        name: 'video_id_comment_id',
        unique: true,
        fields: ['video_id', 'comment_id'],
      },
    ],
    comment: '视频留言',
  });
};
