<template>
  <div class="query-appointment-box">
    <div class="appointmentTime-form">
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>手机号码</span>
        </div>
        <div class="form-line-item div-select width-100">
          <input v-model="mobilephone" class="text-input bgcolor-fff" type="tel" name="" value="" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>验证码</span>
        </div>
        <div class="form-line-item div-select width-50">
          <input v-model="validateCode" class="text-input bgcolor-fff" type="tel" name="" value="" placeholder="请输入验证码">
        </div>
        <div class="form-line-item div-select width-46 float-right">
          <button class="blue-btn">点击发送验证码</button>
        </div>
      </div>
    </div>
    <div class="appointment-content">
      <div class="appointment-content-title">
        <div class="line"></div>
        <div class="appointment-title-color">预约结果</div>
        <div class="line"></div>
      </div>
      <div class="appointment-content-item" v-for="item in list">
        <div class="appointment-item-number group">
            <div class="appointment-item-number-ms">预约编号:</div>
            <div class="appointment-item-number-nr">{{item.reservationNo}}</div>
        </div>
        <div class="item-content">
          <div class="item-content-info">
            <div class="item-content-info-ms">车牌号码: <span class="item-content-info-nr">{{item.reservationNo}}</span></div>
            <div class="item-content-info-ms">手机号码: <span class="item-content-info-nr">{{item.mobilephone}}</span></div>
            <div class="item-content-info-ms">预约片区: <span class="item-content-info-nr">{{item.address}}</span></div>
          </div>
          <div class="item-content-time">
            <div class="item-content-time-ms">预约时间</div>
            <div class="item-content-time-nr">{{item.date}} 上午</div>
            <div class="item-content-time-nr">0:00~12:00</div>
          </div>
        </div>
        <div class="item-cancel">
          <!--<div class="item-cancel-ms" @click="cancelSubscribe">取消预约</div>-->
          <!--<div class="item-cancel-ms" style="background: #999999">已取消</div>-->
          <div class="item-cancel-ms overdue">已过期</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import { resultPost } from '../../../service/getData'
  // import { getElectronicPolicy } from '../../../config/baseUrl'
  export default {
    name: 'queryAppointment',
    data () {
      return {
        mobilephone: '',
        validateCode: '',
   /* eslint-disable */
        list: [
          {
            "address": "梅沙片区",
            "date": "2017.05.28",
            "mobilephone": "13688888888",
            "plateNumber": "粤B877N9",
            "reservationNo": "8989776755665",
            "reservationStatus": "已过期",
            "time": "am"
          },
          {
            "address": "梅沙片区",
            "date": "2017.05.28",
            "mobilephone": "136444444",
            "plateNumber": "粤B477N9",
            "reservationNo": "898977532665",
            "reservationStatus": "预约中",
            "time": "bm"
          },
          {
            "address": "梅沙片区",
            "date": "2017.05.28",
            "mobilephone": "136444444",
            "plateNumber": "粤B477N9",
            "reservationNo": "898977532665",
            "reservationStatus": "已取消",
            "time": "bm"
          },
        ]
        /* eslint-enable */
      }
    },
    methods: {
      cancelSubscribe () {
        console.log(222)
      }
    }
  }
</script>
<style lang="less" scoped>
  .query-appointment-box{
    position: relative;
    min-height: 1150px;
    background: url('../../../images/eastSubscribe-bottom.png') no-repeat center bottom #dfefff;
    background-size: contain;
    padding: 0 50px 480px;
  }
  .appointment-content{
    margin-top: 75px;
    overflow: hidden;
  }
  .line{
    background: #a7d9f9;
    width: 250px;
    height: 2px;
  }
  .appointment-content-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .appointment-title-color{
    color: #2696dd;
  }
  .width-46 {
    width: 46% !important;
  }
  .width-50{
    width: 50% !important;
  }
  .width-100 {
    width: 100% !important;
  }
  .form-line {
    padding: 35px 0 0 130px;
    position: relative;
    line-height: 60px;
    vertical-align:middle;
    .form-line-item {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-size: 28px;
      vertical-align:middle;
      span {
        vertical-align: super;
      }
      .text-input{
        vertical-align: middle;
      }
      .bgcolor-fff{
        background-color: #fff;
      }
      .blue-btn{
        width: 100%;
        line-height: 60px;
        background-color: #2696dd;
        color: #fff;
        font-size: 26px;
        border-radius: 8px;
        outline: none;
      }
    }
    .abs-p{
      position: absolute;
      top: 0;
      text-align: center;
      font-size: 22px;
      color: #999;
      line-height: 35px;
    }
  }
  .appointment-content-item{
    border: 1px solid #a7d9f9;
    background: white;
    margin-top: 30px;
    overflow: hidden;
  }
  .appointment-item-number{
    padding: 20px 32px;
    border-bottom: 1px solid #a7d9f9;
    font-weight: 600;
  }
  .group{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .appointment-item-number-nr{
    color: #ff0000;
    margin-left: 20px;
  }
  .item-content{
    padding-left: 32px;
    padding-top: 20px;
  }
  .item-content-info-ms{
    height: 55px;
    line-height: 55px;
  }
  .item-content-info-nr{
    color: #333;
    font-weight: 600;
  }
  .item-content-time{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
  }
  .item-content-time-ms{
    margin-bottom: 12px;
  }
  .item-content-time-nr{
    height: 50px;
    line-height: 50px;
    font-weight: 600;
    color: #333333;
  }
  .item-cancel{
    float: right;
    padding-right: 32px;
    height: 160px;
  }
  .item-cancel-ms{
    width: 207px;
    height: 60px;
    margin-top: 60px;
    border-radius: 8px;
    background: #f95553;
    text-align: center;
    line-height: 60px;
    color: white;
  }
  .overdue{
    color: #999999;
    background: white;
    border: 1px solid #2d2d2d;
  }
</style>
