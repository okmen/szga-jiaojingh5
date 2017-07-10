<template>
  <div class="carService-outer">
    <div class="query-link" v-bind:class="{ 'show' : applyShow}">
      <p @click.stop="applyShow = !applyShow">申请类<i v-bind:class="{ 'arrow-open' : applyShow, 'arrow-close' : applyShow == false}"></i></p>
      <div class="li-box">
        <router-link :to="isLogin ? 'applyClass' : 'login'">申请通行证（外地车）</router-link>
        <router-link :to="isLogin ? 'applyClass' : 'login'">申请机动车临牌</router-link>
      </div>
    </div>
    <div class="query-link" v-bind:class="{ 'show' : lawlessShow}">
      <p @click.stop="lawlessShow = !lawlessShow">违法处理类<i v-bind:class="{ 'arrow-open' : lawlessShow, 'arrow-close' : lawlessShow == false}"></i></p>
      <div class="li-box">
        <router-link :to="isLogin ? 'confirm' : 'login'">违法在线处理</router-link>
        <router-link :to="isLogin ? 'early' : 'login'">违法缴款</router-link>
        <router-link :to="isLogin ? 'appeal' : 'login'">违法申诉</router-link>
      </div>
    </div>
    <div class="query-link" v-bind:class="{ 'show' : changeShow}">
      <p @click.stop="changeShow = !changeShow">补换领证类<i v-bind:class="{ 'arrow-open' : changeShow, 'arrow-close' : changeShow == false}"></i></p>
      <div class="li-box">
        <router-link :to="isLogin ? '/userAgreement/szjj_hander_ctmvdl' : 'login'">补领行驶证</router-link>
        <router-link :to="isLogin ? '/userAgreement/szjj_hander_icr' : 'login'">换领行驶证</router-link>
        <router-link :to="isLogin ? '/userAgreement/szjj_hander_rim' : 'login'">补换检验合格标志</router-link>
        <router-link :to="isLogin ? '/userAgreement/szjj_hander_rmvp' : 'login'">补换机动车号牌</router-link>
      </div>
    </div>
    <div class="query-link">
      <router-link :to="isLogin ? '/userAgreement/szjj_hander_cvi' : 'login'">六年免检</router-link>
    </div>
    <div class="query-link">
      <router-link :to="isLogin ? '/userAgreement/szjj_hander_iccc' : 'login'">机动车联系方式变更</router-link>
    </div>
    <div class="query-link">
      <router-link :to="isLogin ? '/userAgreement/szjj_hander_id' : 'login'">机动车委托异地定期检验申报</router-link>
    </div>
    <div class="query-link">
      <router-link :to="isLogin ? 'freeForFirst' : 'login'">首违免罚查询</router-link>
    </div>
    <div class="query-link">
      <router-link to="carServicePage">一键挪车</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'carService',
    data () {
      return {
        applyShow: false,
        lawlessShow: false,
        changeShow: false,
        businesses: [],
        isLogin: window.localStorage.getItem('isLogin')
      }
    },
    methods: {
      clickShow: function () {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="less">
  .carService-outer {
    position: relative;
    background-color: white;
    font-size: 26px;
    color: #000;
    .query-link {
      border-bottom: 1px solid #dbdbdb;
      line-height: 88px;
      a {
        display: block;
        padding-left: 50px;
      }
      p {
        padding: 0 50px;
        position: relative;
        i {
          width: 26px;
          height: 26px;
          display: inline-block;
          position: absolute;
          right: 40px;
          background-size: cover;
          top: 28px;
          &.arrow-open {
            background-image: url("../../../images/arrow-open.png");
          }
          &.arrow-close {
            background-image: url("../../../images/arrow-close.png");
          }
        }
      }
      .li-box {
        padding: 0 20px;
        background-color: #e9e9e9;
        display: none;
        a {
          display: block;
          text-align: center;
          text-indent: -50px;
          border-bottom: 1px solid #b5b4b4;
          background-color: #e9e9e9;
          &:last-child {
            border: none;
          }
        }
      }
      &.show {
        p {
          color: #fff;
          background-color: #7ab8df;
        }
        .li-box {
          display: block;
        }
      }
    }
  }

</style>
