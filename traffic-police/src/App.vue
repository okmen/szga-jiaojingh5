<template>
<div id="Home">
  <div id="banner">
    <div class="success-login" v-if="isLogin">
      <div class="success-login-top">
        <div class="success-login-userImg">
          <img :src="userImg">
        </div>
        <div class="success-login-userName">
          <p>{{ userName }}</p>
          <router-link to="/myECard" class="success-login-btn">我的电子证件</router-link>
        </div>
      </div>
      <div class="success-login-bottom">
        <div class="success-login-identityCard">{{ userIdentityCard }}</div>
        <div class="success-login-plateNumber">{{ userNumberPlate }}</div>
      </div>
      <router-link to="/personalCenter"><div class="login-right"></div></router-link>
    </div>
    <div class="not-login" v-else>
      <div class="logo"></div>
      <p>请<router-link to="/login" class="enter">  登录 </router-link>/<router-link to="/userAgreement#xjyhrz" class="enroll"> 注册 </router-link>星级用户</p>
    </div>
  </div>
  <div id="nav-outer">
    <div class="home-nav-top">
      <dl>
        <router-link :to="isLogin ? '/trafficCivilization' : '/login'">
        <dt><img class="top1" src="./images/nav1.png" alt=""></dt>
        <dd>交通文明我做主</dd>
        </router-link>
      </dl>
      <dl>
        <router-link :to="isLogin ? '/queryLawless' : '/login'">
        <dt><img class="top2" src="./images/nav2.png" alt=""></dt>
        <dd>违法处理</dd>
        </router-link>
      </dl>
      <dl>
        <router-link to="/takePicturesTips">
        <dt><img class="top3" src="./images/nav3.png" alt=""></dt>
        <dd>随手拍举报</dd>
        </router-link>
      </dl>
      <dl>
        <a :href="'http://szjj.u-road.com/szjjpro/Business/HomePage/feePayment/'+openId">
        <dt><img class="top4" src="./images/nav4.png" alt=""></dt>
        <dd>车管规费缴纳</dd>
        </a>
      </dl>
    </div>
    <div class="home-nav-bottom">
      <dl>
        <a :href="'http://szjj.u-road.com/szjjpro/Business/HomePage/appointList/'+openId">
        <dt><img class="top5" src="./images/nav5.png" alt=""></dt>
        <dd>预约类服务</dd>
        </a>
      </dl>
      <dl>
        <a :href="'http://szjj.u-road.com/szjjpro/Business/HomePage/businessList/'+openId">
        <dt><img class="top6" src="./images/nav6.png" alt=""></dt>
        <dd>办理类服务</dd>
        </a>
      </dl>
      <dl>
        <a :href="'http://szjj.u-road.com/szjjpro/Business/HomePage/proveList/'+openId">
        <dt><img class="top7" src="./images/nav7.png" alt=""></dt>
        <dd>信息单据证明</dd>
        </a>
      </dl>
      <dl>
        <router-link :to="isLogin ? '/handyService' : '/login'">
        <dt><img class="top8" src="./images/nav8.png" alt=""></dt>
        <dd>便民服务</dd>
        </router-link>
      </dl>
      <dl>
        <router-link :to="isLogin ? '/userAgreement#ddcNotice' : '/login'">
        <dt><img class="top9" src="./images/nav9.png" alt=""></dt>
        <dd>电动车管理</dd>
        </router-link>
      </dl>
      <dl>
        <router-link :to="isLogin ? '/wschool' : '/login'">
        <dt><img class="top10" src="./images/nav10.png" alt=""></dt>
        <dd>微课堂</dd>
        </router-link>
      </dl>
      <dl>
        <a :href="icpTara">
        <dt><img class="top6" src="./images/nav11.png" alt=""></dt>
        <dd>轻微事故远程<br/>处理中心</dd>
        </a>
      </dl>
      <dl>
        <a :href="'http://szjj.u-road.com/szjjpro/index.php/Business/Member/unlogin/selfbook/'+openId">
        <dt><img class="top6" src="./images/nav12.png" alt=""></dt>
        <dd>自主考试</dd>
        </a>
      </dl>
    </div>
  </div>
  <div v-wechat-title="$route.meta.title"></div>
</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      userName: '',
      userImg: require('./images/no-network-logo.png'),
      userIdentityCard: '',
      userNumberPlate: '',
      isLogin: false,
      openId: '',
      icpTara: '',
      mobilePhone: '',
      plateType: ''
    }
  },
  created () {
    this.openId = !window.localStorage.getItem('openId') ? '' : window.localStorage.getItem('openId')
    this.userName = !window.localStorage.getItem('userName') ? '' : window.localStorage.getItem('userName')
    this.userImg = !window.localStorage.getItem('headImgUrl') ? '' : window.localStorage.getItem('headImgUrl')
    this.mobilePhone = !window.localStorage.getItem('mobilePhone') ? '' : window.localStorage.getItem('mobilePhone')
    this.userIdentityCard = !window.localStorage.getItem('identityCard') ? '' : window.localStorage.getItem('identityCard')
    if (window.localStorage.getItem('myNumberPlate') !== 'undefined') {
      this.userNumberPlate = !window.localStorage.getItem('myNumberPlate') ? '' : window.localStorage.getItem('myNumberPlate')
    }
    if (window.localStorage.getItem('plateType') !== 'undefined') {
      this.plateType = !window.localStorage.getItem('plateType') ? '' : window.localStorage.getItem('plateType')
    }
    this.isLogin = window.localStorage.getItem('isLogin')
    this.icpTara = `https://icp-tara.pingan.com.cn:10443/icp-tara/do/page/changePage?cername=${this.userName}&certno=${this.userIdentityCard}&carMark=${this.userNumberPlate}&openid=${this.openId}&mobile=${this.mobilePhone}&userType=1&carType=${this.plateType}`
  }
}
</script>
<style lang="less">
@import './style/base';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  height: 100%;
}
.pad-side-50 {
  padding: 0 50px;
}
.mint-toast-text{
  color: #fff;
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
    .success-login-top{
      height: 174px;
      padding-top: 36px;
      padding-left: 30px;
      box-sizing: border-box;
      .success-login-userImg{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid #e4e4e4;
        box-sizing: border-box;
        float: left;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .success-login-userName{
        float: left;
        height: 100%;
        padding-left: 20px;
        p{
          line-height: 80px;
          color: #fff;
          font-size: 30px;
        }
        .success-login-btn{
          display: block;
          padding: 0 10px;
          line-height: 40px;
          border: 4px solid #fff;
          border-radius: 8px;
          color: #fff;
        }
      }
    }
    .success-login-bottom{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      padding-top: 30px;
      div{
        color: #fff;
      }
      .success-login-identityCard{
        background: url('./images/idCard.png') no-repeat left center;
        background-size: 42px;
        padding-left: 60px;
        padding-right:30px;
      }
      .success-login-plateNumber{
        border-left: 2px solid #fff;
        padding-left: 112px;
        background: url('./images/plateNumber.png') no-repeat 34px center;
        background-size: 60px;
      }
    }
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
  margin-top: -68px;
  .home-nav-top{
    display: flex;
    justify-content: space-around;
    height: 140px;
    padding-top: 24px;
    line-height: 70px;
    background-color: #fff;
    border-radius: 6px;
    font-size: 22px;
    box-shadow:0 5px 5px rgba(0, 0, 0, .2);
    dl{
      height: 100%;
      text-align: center;
      img{
        display: block;
        margin: 0 auto;
      }
      dt{
        height: 45px;
      }
      .top1{
        width: 67px;
        height: 46px;
      }
      .top2{
        width: 49px;
        height: 47px;
      }
      .top3{
        width: 52px;
        height: 44px;
      }
      .top4{
        width: 48px;
        height: 48px;
      }
    }
  }
  .home-nav-bottom{
    overflow: hidden;
    margin-top: 20px;
    box-shadow:0 5px 5px rgba(0, 0, 0, .2);
    border-radius: 6px;
    dl{
      width: 50%;
      height: 138px;
      float: left;
      box-sizing: border-box;
      border-bottom: 2px solid #f5f5f5;
      border-right: 2px solid #f5f5f5;
      background-color: #fff;
      a{
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        dt{
          padding-left: 62px;
          width: 30%;
          box-sizing: border-box;
        }
        dd{
          width: 70%;
          text-align: center;
        }
      }
      .top5{
        width: 46px;
        height: 49px;
      }
      .top6{
        width: 45px;
        height: 52px;
      }
      .top7{
        width: 44px;
        height: 49px;
      }
      .top8{
        width: 47px;
        height: 52px;
      }
      .top9{
        width: 42px;
        height: 55px;
      }
      .top10{
        width: 40px;
        height: 51px;
      }
    }
  }
}
</style>
