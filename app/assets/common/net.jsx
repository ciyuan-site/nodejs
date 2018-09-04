'use strict';

import xhr from 'xhr';

let net = {
  xhr,
  postJSON(options, callback) {
    options = options || {};
    let csrfToken = $util.cookie('csrfToken');
    options.headers = {
      'x-csrf-token': csrfToken,
    };
    options.method = 'post';
    options.json = true;
    xhr(options, callback);
  },
};

export default net;
