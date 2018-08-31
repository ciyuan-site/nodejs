'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.video.define('video', {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cover: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    width: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    height: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    duration: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lrc: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    type: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    review: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0未审核，1审核中，2违规，3通过',
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
        name: 'title_is_delete_review',
        fields: ['title', 'is_delete', 'review'],
      },
      {
        name: 'type_is_delete_review',
        fields: ['type', 'is_delete', 'review'],
      },
      {
        name: 'is_delete_review',
        fields: ['is_delete', 'review'],
      },
    ],
    initialAutoIncrement: 2002000000000000,
    comment: '视频基本信息',
  });
};
