'use strict';

const path = require('path');
const fs = require('fs');
const SparkMD5 = require('spark-md5');
const OSS = require('ali-oss');

let client = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAIUBlJw6RGb0Ht',
  accessKeySecret: 'hMHVWLyX4w6Yr46aHH7T8FPNpFtSpD',
  bucket: 'ciyuan-assets'
});

let list = fs.readdirSync('./app/public');

async function upload() {
  console.warn('===start===');
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    if(item.endsWith('.js') || item.endsWith('.css')) {
      let suffix = item.slice(item.lastIndexOf('.'));
      let file = fs.readFileSync(path.join('./app/public', item), { encoding: 'utf-8' });
      let md5 = SparkMD5.hash(file);
      let name = md5+ suffix;
      let check = await client.list({
        prefix: 'assets/' + name,
      });
      if(check.res && check.res.status === 200) {
        let objects = check.objects;
        if(objects && objects.length) {
          console.log(item + ' has already exists.', md5);
        }
        else {
          //
        }
      }
      else {
        throw new Error(item + ' check error', md5);
      }
    }
  }
  console.warn('===end===');
}
upload();
