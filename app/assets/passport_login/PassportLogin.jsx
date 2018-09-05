'use strict';

class PassportLogin extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind name
  @bind password
  @bind remember
  @bind dis
  submit(e) {
    e.preventDefault();
  }
  render() {
    return <div class="g-wrap passport-login">
      <form class="login" onSubmit={ this.submit }>
        <div className="line right">
          <a href="/register">还没注册？</a>
          <a href="/findpassword">忘记密码？</a>
        </div>
        <div class="line">
          <label class="lab">登录名：</label>
          <input type="text" autoComplete="off" maxLength="32" placeholder="用户名/邮箱/手机号" value={ this.name }/>
        </div>
        <div class="line">
          <label class="lab">密码：</label>
          <input type="text" autoComplete="off" maxLength="32" placeholder="账号密码" value={ this.password }/>
        </div>
        <div class="line">
          <label><input type="checkbox" value={ this.remember }/>记住密码</label>
          <small>不是自己的电脑不要勾选此项</small>
        </div>
        <button disabled={ !this.name || !this.password }>登录</button>
      </form>
      <ul class="oauth">
        <li><a href="/oauth/weibo" class="weibo">微博登录</a></li>
        <li><a href="/oauth/weixin" class="weixin">微信登录</a></li>
        <li><a href="/oauth/qq" class="qq">QQ登录</a></li>
      </ul>
    </div>;
  }
}

export default PassportLogin;
