'use strict';

class PassportIndex extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="passport-index g-wrap">
      <ul class="card fn-clear">
        <li>已有账号直接登录。</li>
        <li>还没注册？创建一个新账号。</li>
      </ul>
    </div>;
  }
}

export default PassportIndex;
