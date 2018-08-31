const Sequelize = require('sequelize');

async function passport() {
  let oauth = require('./app/model/passport/oauth');
  let account = require('./app/model/passport/account');
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
  oauth = oauth({
    Sequelize,
    model: {
      passport: sequelize,
    },
  });
  account = account({
    Sequelize,
    model: {
      passport: sequelize,
    },
  });
  await oauth.sync({ alter: true });
  await account.sync({ alter: true });
}
async function audio() {
  let audio = require('./app/model/audio/audio');
  let bitrate = require('./app/model/audio/bitrate');
  let audioBitrate = require('./app/model/audio/audio_bitrate');
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
  bitrate = bitrate({
    Sequelize,
    model: {
      audio: sequelize,
    },
  });
  audioBitrate = audioBitrate({
    Sequelize,
    model: {
      audio: sequelize,
    },
  });
  await audio.sync({ alter: true });
  await bitrate.sync({ alter: true });
  await audioBitrate.sync({ alter: true });
}
async function video() {
  let video = require('./app/model/video/video');
  let bitrate = require('./app/model/video/bitrate');
  let videoBitrate = require('./app/model/video/video_bitrate');
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
  bitrate = bitrate({
    Sequelize,
    model: {
      video: sequelize,
    },
  });
  videoBitrate = videoBitrate({
    Sequelize,
    model: {
      video: sequelize,
    },
  });
  await video.sync({ alter: true });
  await bitrate.sync({ alter: true });
  await videoBitrate.sync({ alter: true });
}
async function image() {
  let image = require('./app/model/image/image');
  let sequelize = new Sequelize('image', 'root', '87351984', {
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
  image = image({
    Sequelize,
    model: {
      image: sequelize,
    },
  });
  await image.sync({ alter: true });
}
async function text() {
  let text = require('./app/model/text/text');
  let sequelize = new Sequelize('text', 'root', '87351984', {
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
  text = text({
    Sequelize,
    model: {
      text: sequelize,
    },
  });
  await text.sync({ alter: true });
}
async function comment() {
  let comment = require('./app/model/comment/comment');
  let sequelize = new Sequelize('comment', 'root', '87351984', {
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
  comment = comment({
    Sequelize,
    model: {
      comment: sequelize,
    },
  });
  await comment.sync({ alter: true });
}
async function work() {
  let tag = require('./app/model/work/tag');
  let type = require('./app/model/work/type');
  let relation = require('./app/model/work/relation');
  let profession = require('./app/model/work/profession');
  let workRelation = require('./app/model/work/work_relation');
  let workUser = require('./app/model/work/work_user');
  let workComment = require('./app/model/work/work_comment');
  let workTag = require('./app/model/work/work_tag');
  let sequelize = new Sequelize('work', 'root', '87351984', {
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
  tag = tag({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  type = type({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  relation = relation({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  profession = profession({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  workRelation = workRelation({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  workUser = workUser({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  workComment = workComment({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  workTag = workTag({
    Sequelize,
    model: {
      work: sequelize,
    },
  });
  await tag.sync({ alter: true });
  await type.sync({ alter: true });
  await relation.sync({ alter: true });
  await profession.sync({ alter: true });
  await workRelation.sync({ alter: true });
  await workUser.sync({ alter: true });
  await workComment.sync({ alter: true });
  await workTag.sync({ alter: true });
}
async function user() {
  let user = require('./app/model/user/user');
  let upload = require('./app/model/user/upload');
  let userAlias = require('./app/model/user/user_alias');
  let userRelation = require('./app/model/user/user_relation');
  let sequelize = new Sequelize('user', 'root', '87351984', {
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
      user: sequelize,
    },
  });
  upload = upload({
    Sequelize,
    model: {
      user: sequelize,
    },
  });
  userAlias = userAlias({
    Sequelize,
    model: {
      user: sequelize,
    },
  });
  userRelation = userRelation({
    Sequelize,
    model: {
      user: sequelize,
    },
  });
  await user.sync({ alter: true });
  await upload.sync({ alter: true });
  await userAlias.sync({ alter: true });
  await userRelation.sync({ alter: true });
}
async function message() {
  let notify = require('./app/model/message/notify');
  let sequelize = new Sequelize('message', 'root', '87351984', {
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
  notify = notify({
    Sequelize,
    model: {
      message: sequelize,
    },
  });
  await notify.sync({ alter: true });
}

async function exec() {
  await passport();
  await audio();
  await video();
  await image();
  await text();
  await comment();
  await work();
  await user();
  await message();
  console.warn('end');
}
exec();