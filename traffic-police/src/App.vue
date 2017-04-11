<template>
<div id="Home">
  <div id="banner">
    <div class="not-login">
      <div class="logo"></div>
      <p>请<a class="enter"> 登录 </a>/<a class="enroll"> 注册 </a>星级用户</p>
    </div>
    <!-- <div class="success-login">
      <div class="success-login-top">
      </div>
      <div class="success-login-bottom"></div>
    </div> -->
    <div class="login-right"></div>
  </div>
  <div id="nav-outer">
    <div class="home-nav-top">
      <dl>
        <dt><img src="./images/nav1.png" alt=""></dt>
        <dd>交通文明我做主</dd>
      </dl>
      <dl>
        <dt><img src="./images/nav2.png" alt=""></dt>
        <dd>违法处理</dd>
      </dl>
      <dl>
        <dt><img src="./images/nav3.png" alt=""></dt>
        <dd>随手拍举报</dd>
      </dl>
      <dl>
        <dt><img src="./images/nav4.png" alt=""></dt>
        <dd>车管规费缴纳</dd>
      </dl>
    </div>
    <!-- <div class="nav-bottom"></div> -->
  </div>
</div>
</template>
<script>
// import Hello from './components/Hello'

export default {
  name: 'app'
}
</script>
<style lang="less">
@import './style/base';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  min-height: 100%;
}
.pad-side-50 {
  padding: 0 50px;
}
#banner{
  height: 360px;
  width: 100%;
  position: relative;
  background-color: #fff;
  .not-login{
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 196px;
    box-sizing: border-box;
    text-align: center;
    font-size: 28px;
    background-image: url('./images/not-login-banner.png');
    background-size: cover;
    .logo{
      width: 159px;
      height: 149px;
      background-image: url('./images/login-logo.png');
      background-size: cover;
      position: absolute;
      left: 50%;
      top: 30px;
      right: 50%;
      transform: translateX(-50%);
    }
    p{
      color: #fff;
    }
    .enter{
      font-size: 30px;
      color: #97f900;
    }
    .enroll{
      font-size: 30px;
      color: #ffbe00;
    }
  }
  .success-login{
    height: 100%;
    width: 100%;
    position: relative;
    font-size: 28px;
    background-image: url('./images/success-login-banner.png');
    background-size: cover;
  }
  .login-right{
    position: absolute;
    height: 230px;
    width: 72px;
    right: 0;
    top: 0;
    background: url('./images/login-right.png') no-repeat center center;
    background-size: 23px;
  }
}
#nav-outer{
  width: 100%;
  position: relative;
  padding: 0 18px;
  box-sizing: border-box;
  color: #666;
  font-size: 20px;
  .home-nav-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    dl{
      img{
        display: block;
        width: 67px;
      }
    }
  }
}
</style>
