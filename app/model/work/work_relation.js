'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.work.define('work_relation', {
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
    target_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    work_kind: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0音频；1视频；2图绘；3文词',
    },
    target_kind: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0音频；1视频；2图绘；3文词',
    },
    relation_id: {
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
        name: 'work_id_target_id_work_kind_target_kind',
        unique: true,
        fields: ['work_id', 'target_id', 'work_kind', 'target_kind'],
      },
      {
        name: 'target_id_target_kind',
        fields: ['target_id', 'target_kind'],
      },
    ],
    comment: '作品关系',
  });
};
