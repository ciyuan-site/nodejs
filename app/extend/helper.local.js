/**
 * Created by army8735 on 2017/10/1.
 */

'use strict';

module.exports = {
  getAssetUrl(url) {
    console.log(this.ctx);
    if (url.indexOf('//') > -1) {
      return url;
    }
    return this.app.config.host + '/public' + url;
  },
};
