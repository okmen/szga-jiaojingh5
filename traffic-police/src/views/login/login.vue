<template>
    <div id="login-outer">
      <div class="logo"></div>
      <div class="login-form">
        <input v-model="loginName" type="tel" placeholder="请输入手机号或身份证号">
        <input v-model="password" id="login-password" type="text" placeholder="请输入密码">
        <button id="login-btn" @click.stop="loginClick()">登 录</button>
        <div class="login-link">
          <router-link to="/peopleWillCloud" class="login-link-forget">忘记密码</router-link>
          <router-link to="/starUser" class="login-link-register">注册</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { resultPost } from '../../service/getData'
import { login } from '../../config/baseUrl'

export default {
  name: 'login',
  data () {
    return {
      loginName: '',
      password: ''
    }
  },
  methods: {
    loginClick: () => {
      let reqData = {
        loginName: this.loginName,
        password: this.password
      }
      resultPost(login, JSON.stringify(reqData)).then(json => {
        console.log(json)
      })
    }
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
}
#login-outer{
  width: 100%;
  height: 100%;
  background-image: url('../../images/login-banner.png');
  background-size: cover;
  padding-top: 330px;
  box-sizing: border-box;
  position: relative;
  .logo{
    width: 200px;
    height: 174px;
    background-image: url('../../images/login-logo.png');
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 80px;
    right: 50%;
    transform: translateX(-50%);
  }
  .login-form{
    padding: 0 64px;
    input{
      display: block;
      width: 100%;
      height: 80px;
      font-size: 30px;
      line-height: 80px;
      box-sizing: border-box;
      border: none;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, .2);
      margin-bottom: 24px;
      padding-left: 90px;
      outline: none;
      background-image: url('../../images/login-user.png');
      background-repeat: no-repeat;
      background-size: 35px;
      background-position: 30px center;
      &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .5);
      }
    }
    #login-password{
      background-image: url('../../images/login-password.png');
    }
    #login-btn{
      display: block;
      width: 100%;
      height: 80px;
      background-color: #ffbe00;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 36px;
      margin-top: 70px;
    }
    .login-link{
      width: 100%;
      height: 70px;
      padding: 0 45px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        color: #fff;
        font-size: 28px;
        text-decoration: underline;
      }
    }
  }
}
</style>
