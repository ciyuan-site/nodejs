'use strict';

class PassportRegister extends migi.Component {
  constructor(...data) {
    super(...data);
    this.type = 0;
    this.codeDesc = '发送';
  }
  @bind name
  @bind password
  @bind type
  @bind code
  @bind codeDesc
  @bind dis
  changeType(e, vd, tvd) {
    this.type = tvd.props.value;
  }
  render() {
    return <div class="g-wrap passport-register">
      <form class="register">
        <div class="line right">
          <a href="/register">已有账号直接登录？</a>
        </div>
        <div class="line">
          <label class="lab">{ this.type === 0 ? '手机号' : '邮箱地址' }：</label>
          <input type="text" autoComplete="off" maxLength={ this.type === 0 ? 11 : 32 }
                 placeholder={ this.type === 0 ? '11位手机号' : 'xx@yy.zz' }
                 value={ this.name }/>
        </div>
        <div class="line">
          <label class="lab">密码：</label>
          <input type="text" autoComplete="off" maxLength="32" placeholder="账号密码" value={ this.password }/>
        </div>
        <div className="line">
          <label className="lab">验证码：</label>
          <input type="text" class="code" autoComplete="off" maxLength="6" value={ this.code }/>
          <button>{ this.codeDesc }</button>
        </div>
        <div class="line center" onChange={ { input: this.changeType } }>
          <label><input type="radio" name="type" value={ 0 } checked={ this.type === 0 }/>手机注册</label>
          <label><input type="radio" name="type" value={ 1 } checked={ this.type === 1 }/>邮箱注册</label>
        </div>
        <button class="sub" disabled={ this.dis }>注册</button>
      </form>
      <ul class="oauth">
        <li><a href="/oauth/weibo" class="weibo">微博登录</a></li>
        <li><a href="/oauth/weixin" class="weixin">微信登录</a></li>
        <li><a href="/oauth/qq" class="qq">QQ登录</a></li>
      </ul>
    </div>;
  }
}

export default PassportRegister;
