'use strict';

import UploadAudio from '../assets/upload_audio/UploadAudio.jsx';

export default function(data) {

  let uploadAudio = migi.preRender(
    <UploadAudio/>
  );

  return data.helper.start({
    title: '上传',
    css: '/upload_audio.css',
  }) + uploadAudio + data.helper.end({
    js: '/upload_audio.js',
  });
};
