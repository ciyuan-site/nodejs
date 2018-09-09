'use strict';

let hash = {
  0: {
    class: 'audio',
    name: '音频',
  },
  1: {
    class: 'video',
    name: '视频',
  },
  2: {
    class: 'image',
    name: '图绘',
  },
  3: {
    class: 'text',
    name: '文词',
  },
};

class UploadIndex extends migi.Component {
  constructor(data) {
    super(data);
  }
  render() {
    return <div class="upload-index g-wrap fn-clear">
      <h2>请选择投稿上传品类：</h2>
      <ul class="kind">
        {
          [0, 1, 2, 3].map((item) => {
            return <li>
              <a class={ hash[item].class }
                 href={ '/' + hash[item].class }>{ hash[item].name }</a>
            </li>;
          })
        }
      </ul>
    </div>;
  }
}

export default UploadIndex;
