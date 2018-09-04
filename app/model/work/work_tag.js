'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.work.define('work_tag', {
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
    tag_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
    work_kind: {
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
        name: 'work_id_tag_id_work_kind',
        unique: true,
        fields: ['work_id', 'tag_id', 'work_kind'],
      },
    ],
    comment: '作品标签',
  });
};
