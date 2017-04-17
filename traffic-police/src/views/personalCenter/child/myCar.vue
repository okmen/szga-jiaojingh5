<template>
  <div class="myCar-outer">
    <div class="car-box">
      <div class="car-number">
        <i class="car-icon"></i>
        {{ numberPlateNumber }}
        <span class="myself" v-if="isMyself == '本人'">本人</span>
        <span class="others" v-else>他人</span>
      </div>
      <div class="car-deal">
        当前本车有0宗违法尚未处理
        <i class="arrow"></i>
      </div>
      <div class="car-status">
        <ul>
          <li>号牌种类:<span>{{ plateType }}</span></li>
          <li>年审时间:<span>{{ annualReviewDate }}</span><span style="color:#aaa">{{ annualReviewDateRemind }}</span></li>
          <li>车辆其他使用人:<span></span></li>
        </ul>
      </div>
      <div class="car-owner">
        <ul>
          <li>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:<span>{{ name }}</span></li>
          <li>身份证号:<span>{{ identityCard }}</span></li>
          <li>手机号码:<span>{{ mobilephone }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less">
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
</style>
<script>
  import { bindCar } from '../../../config/baseUrl'
  import { resultPost } from '../../../service/getData'
  export default {
    name: 'myCar',
    data () {
      return {
        identityCard: '622822198502074110',
        numberPlateNumber: '',
        plateType: '',
        annualReviewDate: '',
        annualReviewDateRemind: '',
        name: '',
        isMyself: '',
        mobilephone: '15920071829',
        illegalNumber: '',
        otherPeopleUse: ''
      }
    },
    mounted () {
      let reqData = {
        identityCard: this.identityCard,
        mobilephone: this.mobilephone
      }
      resultPost(bindCar, reqData).then(json => {
        console.log(json)
        this.annualReviewDate = json.data[0].annualReviewDate
        this.illegalNumber = json.data[0].illegalNumber
        this.numberPlateNumber = json.data[0].numberPlateNumber
        this.name = json.data[0].name
        this.annualReviewDate = json.data[0].annualReviewDate
        this.annualReviewDateRemind = json.data[0].annualReviewDateRemind
        this.otherPeopleUse = json.data[0].otherPeopleUse
        this.isMyself = json.data[0].isMyself
        this.plateType = json.data[0].plateType
      })
    }
  }
</script>
