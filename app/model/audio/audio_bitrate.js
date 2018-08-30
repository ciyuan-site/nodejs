'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.audio.define('audio_bitrate', {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    audio_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    bitrate_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    md5: {
      type: Sequelize.STRING(32),
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
        name: 'audio_id_bitrate_id',
        unique: true,
        fields: ['audio_id', 'bitrate_id'],
      },
      {
        name: 'md5',
        unique: true,
        fields: ['md5'],
      },
    ],
    comment: '音频不同码率文件',
  });
};
