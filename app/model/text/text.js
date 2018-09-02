'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.text.define('text', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
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
    comment: '文本基本信息',
  });
};
