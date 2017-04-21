<template>
    <div id="login-outer">
      <div class="logo"></div>
      <div class="login-form">
        <input v-model:value="loginName" type="tel" placeholder="请输入手机号或身份证号">
        <input v-model:value="password" id="login-password" type="password" placeholder="请输入密码">
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
import { Toast } from 'mint-ui'

export default {
  name: 'login',
  data () {
    return {
      loginName: '',
      password: ''
    }
  },
  methods: {
    loginClick: function () {
      let openId = window.localStorage.getItem('openId')
      let reqData = {
        loginName: this.loginName,
        password: this.password,
        openId: openId,
        loginClient: 'weixin'
      }
      console.log(reqData)
      resultPost(login, reqData).then(data => {
        console.log(data)
        if (data.code === '0000') {
          let userData = data.data.authenticationBasicInformation
          console.log(userData)
          window.localStorage.setItem('identityCard', decodeURIComponent(userData.identityCard)) // 身份证照
          window.localStorage.setItem('mobilePhone', decodeURIComponent(userData.mobilePhone)) // 手机号码
          window.localStorage.setItem('myNumberPlate', decodeURIComponent(userData.myNumberPlate)) // 车牌号码
          window.localStorage.setItem('userName', decodeURIComponent(userData.trueName)) // 用户名字
          window.localStorage.setItem('behindTheFrame4Digits', decodeURIComponent(userData.behindTheFrame4Digits)) // 车架号后4位
          window.localStorage.setItem('plateType', decodeURIComponent(userData.plateType)) // 车牌类型
          window.localStorage.setItem('isLogin', true) // 是否登录
          window.location.href = '/'
        } else {
          Toast({
            message: data.msg,
            position: 'bottom',
            duration: 2000
          })
        }
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
