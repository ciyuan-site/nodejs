'use strict';

module.exports = app => {
  const { STRING, DATE, NOW, INTEGER, BIGINT, BOOLEAN, TEXT, SMALLINT, TINYINT, } = app.Sequelize;

  return app.model.audio.define('audio', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    cover: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
    },
    url: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
    },
    duration: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lrc: {
      type: TEXT,
      allowNull: false,
      defaultValue: '',
    },
    type: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    review: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0未审核，1审核中，2违规，3通过',
    },
    is_delete: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    create_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    update_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  }, {
    indexes: [],
    initialAutoIncrement: 2001000000000000,
    comment: '音频基本信息',
  });
};
