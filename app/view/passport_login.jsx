'use strict';

import PassportLogin from '../assets/passport_login/PassportLogin.jsx';

export default function(data) {

  let passportLogin = migi.preRender(<PassportLogin/>);

  return data.helper.start({
    title: '首页',
    css: '/passport_index.css',
  }) + passportLogin + data.helper.end({
    js: '/passport_index.js',
  });
};
