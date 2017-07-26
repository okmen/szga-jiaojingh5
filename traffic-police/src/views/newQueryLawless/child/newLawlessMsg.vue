<template>
  <div class="newLawlessMsg-outer">
    <div class="newLawlessMsg-top">
      <p v-if="type == 1">共有<span>2</span>条违法记录</p>
      <p v-else>共记 <span>6</span> 分</p>
    </div>
    <div class="newLawlessMsg-list">
      <ul>
        <li>
          <div class="newLawlessMsg-item-title">
            <p>违法信息</p>
            <span>此项可预约处理</span>
          </div>
          <div class="newLawlessMsg-item-content">
            <p class="newLawlessMsg-item-content-No">违法编号：<span>454651321349874213</span></p>
            <p class="newLawlessMsg-item-content-car">粤B66666</p>
            <p class="newLawlessMsg-item-content-time">2016年12月12日 12:30:10</p>
            <p class="newLawlessMsg-item-content-add">厚街镇康乐路段(流动)(执法单位:东莞市公安局交通警察支队厚街大队)</p>
            <p class="newLawlessMsg-item-content-desc">7027-机动车违反禁止停车标志、禁止长时停车标志或禁止停车线指示的</p>
            <p class="newLawlessMsg-item-content-amt">200</p>
            <p class="newLawlessMsg-item-content-score">0</p>
            <p class="newLawlessMsg-item-content-unit">东莞市公安局交通警察支队厚街大队</p>
            <p class="newLawlessMsg-item-content-fun">不需要打单</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  // import { resultPost } from '../../../service/getData'
  // import { queryLawlessByCar } from '../../../config/baseUrl'
  // import { verifyCode } from '../../../config/verifyCode'
  // import { Toast } from 'mint-ui'
  export default {
    name: 'newLawlessMsg',
    data () {
      return {
        lawlessArr: []
      }
    },
    created () {
      // this.init() // 初始化页面，查询名下所有车辆的违法
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import "./../../../style/base";
  .newLawlessMsg-outer{
    background-color: #eee;
    .newLawlessMsg-top{
      background-color: #fff;
      margin-bottom: 15px;
      p{
        font-size: 32px;
        color: #333;
        text-align: center;
        line-height: 85px;
        span{
          color: #2696dd;
          font-weight: 600;
        }
      }
    }
    .newLawlessMsg-list{
      padding: 35px 50px 100px;
      background-color: #fff;
      li{
        border: 1px solid #2696dd;
        .newLawlessMsg-item-title{
          padding: 0 30px;
          font-size: 30px;
          display: flex;
          justify-content: space-between;
          line-height: 75px;
          border-bottom: 1px solid #2696dd;
          span{
            color: #2696dd;
            text-decoration: underline;
          }
        }
        .newLawlessMsg-item-content{
          padding: 15px 35px;
          p{
            line-height: 32px;
            padding-left: 55px;
            font-size: 26px;
            color: #333;
            margin-bottom: 15px;
            position: relative;
          }
          .newLawlessMsg-item-content-No{
            font-size: 28px;
            padding-left: 0;
            span{
              color: #ff0000;
            }
          }
          .newLawlessMsg-item-content-car{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 30px;
              height: 23px;
              background-image: url('../../../images/carIco.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-time{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 30px;
              height: 30px;
              background-image: url('../../../images/time_2.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-add{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 25px;
              height: 34px;
              background-image: url('../../../images/local.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-desc{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 30px;
              background-image: url('../../../images/warn.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-amt{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/punish.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-score{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/score_p.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-unit{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/unit.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-fun{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/fun.png');
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>
