'use strict';

import UploadIndex from '../assets/upload_index/UploadIndex.jsx';

export default function(data) {

  let uploadIndex = migi.preRender(
    <UploadIndex/>
  );

  return data.helper.start({
    title: '上传',
    css: '/upload_index.css',
  }) + uploadIndex + data.helper.end({
    js: '/upload_index.js',
  });
};
