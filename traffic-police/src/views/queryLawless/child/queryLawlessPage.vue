<template>
  <div class="queryLawlessPage-outer">
    <!--Tab切换栏-->
    <div class="nav">
      <div class="nav-tab" :class="{ 'active': cur_tab == 'car'}" @click="cur_tab = 'car'">车牌号查询</div>
      <div class="nav-tab" :class="{ 'active': cur_tab == 'card'}" @click="cur_tab = 'card'">驾驶证查询</div>
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
    <!--<router-view v-wechat-title="$route.meta.title"></router-view>-->
    <!--分类查询块-->
    <queryByCard v-if="cur_tab == 'card'"></queryByCard>
    <queryByCar  v-else></queryByCar>
    <!--结果块(循环)-->
    <div class="queryResults pad-side-50">
      <div class="results-box">
        <div class="box-header">
          <div class="header-item left">违章信息</div>
          <div class="header-item right order-print">需要打单</div>
        </div>
        <div class="box-body">
          <div class="body-left-side">
            <div class="left-number">违法编号 :<i>112233445566</i></div>
            <div class="left-line">
              <span><i></i></span>
              <p>粤B   666666</p>
            </div>
            <div class="left-line">
              <span><i class="time"></i></span>
              <p>2016年1月1日  12：30：10</p>
            </div>
            <div class="left-line"><span>
              <i class="local"></i></span>
              <p>鹏程四路</p>
            </div>
            <div class="left-line">
              <span><i class="warn"></i></span>
              <p>违反规定停放违反规定停放违反规定停放违反规定停放违反规定停放违反规定停放违反规定停放</p></div>
            <div class="left-line">
              <span><i></i></span>
              <p>200元</p>
            </div>
          </div>
          <a class="body-right-side">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'queryTab',
    data () {
      return {
        cur_tab: 'car'
      }
    },
    components: {
      'queryByCard': require('./queryByCard.vue'),
      'queryByCar': require('./queryByCar.vue')
    }
  }
</script>
<style lang="less" >
  @import "./../../../style/base";
  .queryLawlessPage-outer {
    position: absolute;
    left: 0;
    right:0;
    top:0;
    background-color: #fff;
    .nav{
      font-size: 0;
      background-color:#fff;
      border-bottom:1px solid #dbdbdb;
      .nav-tab {
        font-size: 1rem;
        display: inline-block;
        width: 50%;
        text-align: center;
        height: 100px;
        line-height: 100px;
      &.active {
         color: #2696dd;
         border-bottom: 6px solid #2696dd;
       }
      }
    }
    .queryResults {
      color:#333!important;
      margin: 100px 0;
    }
    .results-box {
      border:1px solid #a7d9f9;
      background-color: #fff;
      border-radius:4px;
      .box-header{
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #a7d9f9;
        &:after{display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;}
        .header-item {
          padding: 0 24px;
          font-weight:bold;
          &.order-print {
       color:#2696dd;
       text-decoration: underline;
     }
        }
      }
      .box-body{
        color:#333;
        padding: 0 24px;
        position: relative;
        .body-left-side {
          width: 80%;
          .left-number {
            font-size: 0.95rem;
            font-weight: bold;
            height: 80px;
            line-height: 80px;
            i {
              color:#f46263;
              margin-left: 30px;
            }
          }
          .left-line {
            padding: 8px 0;
            font-size:0.9rem;
            &:after{display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;}
            span {
              display: inline-block;
              width: 50px;
              text-align: center;
              position: absolute;
            }
            p {
              display: inline-block;
              position: relative;
              left: 70px;
            }
            i {
              display: inline-block;
              width: 34px;
              height: 34px;
              background-image: url("./../../../images/A.png");
              background-size: 100%;
              vertical-align: -6px;
              &.time{
                 background-image: url("./../../../images/time_2.png");
               }
              &.local{
                 background-image: url("./../../../images/local.png");
                 width: 32px;
                 height: 40px;
               }
              &.warn{
                 background-image: url("./../../../images/warn.png");
                 width: 36px;
                 height: 38px;
               }
            }
          }
        }
        .body-right-side {
          position: absolute;
          top:50%;
          right:20px;
          margin-top: -20px;
          display: block;
          width: 20px;
          height: 40px;
          background-image: url("./../../../images/login-right.png");
          background-size: cover;
        }
      }
    }
  }
</style>
