<template>
  <div class="myCar-outer">
    <div v-show="show">
      <div class="car-box" v-for="car in carMsg">
        <div class="car-number">
          <i class="car-icon"></i>
          {{ car.numberPlateNumber }}
          <span class="myself" v-if="car.isMyself == '本人'">本人</span>
          <span class="others" v-else>他人</span>
        </div>
        <div class="car-deal">
          {{ car.illegalNumber }}
          <i class="arrow"></i>
        </div>
        <div class="car-status">
          <ul>
            <li>号牌种类:<span>{{ plateTypeList[car.plateType] }}</span></li>
            <li>年审时间:<span>{{ car.annualReviewDate }}</span><span style="color:#aaa">{{ car.annualReviewDateRemind }}</span></li>
            <li>{{ car.otherPeopleUse }}<span></span></li>
          </ul>
        </div>
        <div class="car-owner">
          <ul>
            <li>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:<span>{{ car.name }}</span></li>
            <li>身份证号:<span>{{ car.identityCard }}</span></li>
            <li>手机号码:<span>{{ car.mobilephone }}</span></li>
          </ul>
        </div>
      </div>
      <div class="addCar-box">
        <router-link to="addVehicle" class="add-car btn">添加车辆</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .myCar-outer {
    margin-top: 40px;
    padding:0 50px;
    .car-box {
      font-size:0.75rem;
      border:1px solid #a7d9f9;
      background-color: #fff;
      border-radius: 4px;
      span {
        margin-left: 20px;
      }
      .car-number {
        padding-left: 40px;
        height: 80px;
        line-height: 80px;
        color:#2696dd;
        font-weight: bold;
        border-bottom:1px solid #a7d9f9;
        .car-icon {
          background-image: url("../../../images/car1.png");
          background-size: cover;
          display: inline-block;
          width: 52px;
          height: 40px;
          vertical-align: -8px;
        }
        span {
          padding: 0 10px;
          height: 20px;
          color: #fff;
          font-size: 0.7rem;
          border-radius: 20px;
        &.myself {
           background-color: #2696dd;
         }
        &.others {
           background-color: #ffbe00;
         }
        }
      }
      .car-deal {
        padding:0 36px;
        height: 74px;
        line-height: 74px;
        border-bottom:1px solid #a7d9f9;
        i {
          display: inline-block;
          width: 10px;
          height: 20px;
          background-image: url("../../../images/arrow_right.png");
          background-size: cover;
          float:right;
          margin-top:24px;
        }
      }
      .car-status {
        padding: 22px 36px;
        border-bottom:1px solid #a7d9f9;
        ul li{
          height: 60px;
          line-height: 60px;
        }
      }
      .car-owner {
        padding: 22px 36px;
        ul li{
          height: 60px;
          line-height: 60px;
        }
      }
    }
    .addCar-box {
      position: fixed;
      left: 0;
      right: 0;
      bottom:60px;
      text-align: center;
      .add-car {
        display: inline-block;
        text-align: center;
        line-height: 80px;
        font-weight: bold;
        width: 70%;
      }
    }
  }
</style>
<script>
  import { bindCar } from '../../../config/baseUrl'
  import { resultPost } from '../../../service/getData'
  import { Indicator } from 'mint-ui'
  export default {
    name: 'myCar',
    data () {
      return {
        show: false,
        carMsg: [],
        identityCard: window.localStorage.getItem('identityCard'),
        numberPlateNumber: window.localStorage.getItem('myNumberPlate'),
        mobilephone: window.localStorage.getItem('mobilePhone'),
        plateTypeList: {
          '02': '蓝牌',
          '01': '黄牌',
          '06': '黑牌'
        }
      }
    },
    mounted () {
      Indicator.open()
      let reqData = {
        identityCard: this.identityCard,
        mobilephone: this.mobilephone
      }
      resultPost(bindCar, reqData).then(json => {
        Indicator.close()
        this.show = true
        this.carMsg = json.data
      })
    }
  }
</script>
