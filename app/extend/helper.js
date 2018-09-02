/**
 * Created by army8735 on 2017/10/1.
 */

'use strict';

const R8232 = new RegExp(String.fromCharCode(8232), 'g');

module.exports = {
  getAssetUrl(url) {console.log(this.ctx);
    if(url.indexOf('//') > -1) {
      return url;
    }
    return this.app.config.host + '/public' + url + '?0';
  },
  okJSON(data) {
    return {
      success: true,
      data,
    };
  },
  errorJSON(data) {
    if(typeof data === 'string') {
      data = {
        message: data,
      };
    }
    data = data || {};
    return {
      success: false,
      code: data.code,
      message: data.message,
      data: data.data,
    };
  },
  loginJSON() {
    return {
      success: false,
      code: 1000,
      message: '请先登录',
    };
  },
  autoSsl: function(url) {
    return (url || '').replace(/^https?:\/\//i, '//');
  },
  start: function(data) {
    return `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta charset="UTF-8"/>
<title>${ '次元站' + (data.title ? '-' + data.title : '') }</title>
<link rel="icon" href="//zhuanquan.xin/ciyuan/cd88e9d2300fd6d0b44b124c6467d480.png" type="image/x-icon">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="renderer" content="webkit"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<meta name="format-detection" content="telephone=no"/>
<meta name="format-detection" content="email=no"/>
<meta name="wap-font-scale" content="no"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
<link rel="stylesheet" href="${this.getAssetUrl('/common.css')}"/>
${ (Array.isArray(data.css) ? data.css : [data.css]).filter((item) => {
  return item;
}).map((item) => {
  return `<link rel="stylesheet" href="${this.getAssetUrl(item)}"/>`;
}) }
</head>
<body>`;
  },
  end: function(data) {
    return `<script>var $CONFIG = {};</script>
<script src="${this.getAssetUrl('/common.js')}" defer="defer"></script>
${ (Array.isArray(data.js) ? data.js : [data.js]).filter((item) => {
  return item;
}).map((item) => {
  return `<script src="${this.getAssetUrl(item)}" defer="defer"></script>`;
}) }
</body></html>`;
  },
  stringify: function(data) {
    if(data === undefined) {
      return 'undefined';
    }
    if(data === null) {
      return 'null';
    }
    return this.encode(JSON.stringify(data));
  },
  encode: function(str) {
    if(!str) {
      return '';
    }
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(R8232, '&#8232;');
  },
  $CONFIG: 'var $CONFIG = {};',
};

// module.exports = helper;
