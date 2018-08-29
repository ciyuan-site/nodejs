const Sequelize = require('sequelize');

async function passport() {
  let user = require('./app/model/passport/user');
  let oauth = require('./app/model/passport/oauth');
  let sequelize = new Sequelize('passport', 'root', '87351984', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_unicode_ci',
      },
    },
  });
  user = user({
    Sequelize,
    model: {
      passport: sequelize,
    },
  });
  oauth = oauth({
    Sequelize,
    model: {
      passport: sequelize,
    },
  });
  await user.sync({ force: true });
  await oauth.sync({ force: true });
}
async function audio() {
  let audio = require('./app/model/audio/audio');
  let sequelize = new Sequelize('audio', 'root', '87351984', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_unicode_ci',
      },
    },
  });
  audio = audio({
    Sequelize,
    model: {
      audio: sequelize,
    },
  });
  await audio.sync({ force: true });
}
async function video() {
  let video = require('./app/model/video/video');
  let sequelize = new Sequelize('video', 'root', '87351984', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_unicode_ci',
      },
    },
  });
  video = video({
    Sequelize,
    model: {
      video: sequelize,
    },
  });
  await video.sync({ force: true });
}

async function exec() {
  await passport();
  await audio();
  await video();
  console.warn('end');
}
exec();