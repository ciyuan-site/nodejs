'use strict';

class PassportRegister extends migi.Component {
  constructor(...data) {
    super(...data);
    this.type = 0;
    this.dis = true;
    this.name = 15921858411;
    this.password = 1234;
    this.on(migi.Event.DOM, () => {
      let last = parseInt(localStorage.getItem('passportCodeTime'));
      last = last || 0;
      let now = Date.now();
      if(now - last < 60) {
        this.dis = false;
        this.interval = now - last;
      }
      else {
        this.interval = 0;
      }
    });
  }
  @bind name
  @bind password
  @bind type
  @bind code
  @bind interval
  @bind dis
  changeType(e, vd, tvd) {
    this.type = tvd.props.value;
  }
  clickCode(e) {
    e.preventDefault();
    let res = this.checkValid();
    if(res) {
      $net.postJSON({
        url: '/code/phone',
        body: {
          name: this.name,
        },
      }, (err, resp, body) => {
        console.log(err, resp, body);
      });
    }
  }
  checkValid(includeCode) {
    if(this.type === 0) {
      if(!/^1\d{10}$/.test(this.name)) {
        alert('手机号格式不正确');
        return false;
      }
    }
    else {
      if(!/^1\d10$/.test(this.name)) {
        alert('邮箱格式不正确');
        return false;
      }
    }
    if(!this.password || this.password.length < 4) {
      alert('密码最少4位');
      return false;
    }
    if(includeCode) {
      if(!/^\d{4}$/.test(this.code)) {
        alert('验证码需要4位数字');
        return false;
      }
    }
    return true;
  }
  submit(e) {
    e.preventDefault();
    console.log(1)
  }
  render() {
    return <div class="g-wrap passport-register">
      <form class="register" onSubmit={ this.submit }>
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
          <input type="text" class="code" autoComplete="off" maxLength="4" value={ this.code }/>
          <button disabled={ !this.name || !this.password || this.interval }
                  onClick={ this.clickCode }>{ this.interval ? this.interval : '发送' }</button>
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
