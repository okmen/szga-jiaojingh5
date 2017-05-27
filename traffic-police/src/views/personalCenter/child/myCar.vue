<template>
  <div class="myCar-outer">
    <mt-swipe :continuous="false" id="car-swipe-box" :auto="0" :speed="300" v-if="show">
      <mt-swipe-item v-for="(car, index) in carMsg">
        <div class="car-box">
          <div class="car-number">
            <i class="car-icon"></i>
            {{ car.numberPlateNumber }}
            <span class="myself" v-if="car.isMyself == '本人'">本人</span>
            <span class="others" v-else>他人</span>
          </div>
          <div class="car-deal" @click="hrefBtn(car)">
            当前本车有{{ car.illegalNumber }}宗违法尚未处理
        <i class="arrow"></i>
          </div>
          <div class="car-status">
            <ul>
              <li>号牌种类:<span>{{ plateTypeList[car.plateType] }}</span></li>
              <li>年审时间:<span>{{ car.annualReviewDate }}</span><span style="color:#aaa">{{ car.annualReviewDateRemind
                }}</span></li>
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
      </mt-swipe-item>
    </mt-swipe>
    <div class="addCar-box">
      <router-link to="addVehicle" class="add-car btn">添加车辆</router-link>
    </div>
  </div>
</template>
<style lang="less">
  .myCar-outer {
    margin-top: 40px;
    padding:0 50px;
    height: 100%;
    overflow: hidden;
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
      text-align: center;
      padding-bottom: 100px;
      .add-car {
        margin-top: 0;
        color:#fff;
        display: inline-block;
        text-align: center;
        line-height: 80px;
        font-weight: bold;
        width: 70%;
      }
    }
  }
  #car-swipe-box{
    box-sizing: border-box;
    width: 100%;
    height: 680px;
  }
</style>
<script>
  import { bindCar, queryLawlessByCar } from '../../../config/baseUrl'
//  import { queryLawlessByCar } from '../../../config/baseUrl'
  import { resultPost } from '../../../service/getData'
  import { Indicator, MessageBox, Toast } from 'mint-ui'
//  import { MessageBox } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    name: 'myCar',
    data () {
      return {
        show: false,
        carMsg: '',
        identityCard: window.localStorage.getItem('identityCard'),
        numberPlateNumber: window.localStorage.getItem('myNumberPlate'),
        mobilephone: window.localStorage.getItem('mobilePhone'),
        vehicleIdentifyNoLast4: window.localStorage.getItem('behindTheFrame4Digits'),
        plateTypeList: {
          '02': '蓝牌',
          '01': '黄牌',
          '06': '黑牌'
        }
      }
    },
    methods: {
      hrefBtn: function (item) {
        let that = this
        let reqData = {
          licensePlateType: item.plateType,
          licensePlateNo: item.numberPlateNumber,
          vehicleIdentifyNoLast4: this.vehicleIdentifyNoLast4,
          identityCard: item.identityCard,
          mobilephone: item.mobilephone,
          drivingLicenceNo: this.identityCard
        }
        resultPost(queryLawlessByCar, reqData).then(json => {
          if (json.code === '0000') {
            this.reserveList = json.data
            if (!json.data) {
              MessageBox('提示', '该车辆暂无违法信息')
            } else {
              json.data.forEach((item, index) => { // 循环dataList 给每个item上面添加 check关联属性
                item.checkAddBorder = false
              })
              that.postAppealQuery(json.data)
              that.$router.push('/illegalOrderDeal')
            }
          } else {
            MessageBox('提示', json.msg)
          }
        })
      },
      ...mapActions({
        postAppealQuery: 'postAppealQuery'
      })
    },
    mounted () {
      Indicator.open()
      let reqData = {
        identityCard: this.identityCard,
        mobilephone: this.mobilephone
      }
      resultPost(bindCar, reqData).then(json => {
        Indicator.close()
        console.log(json)
        if (json.code === '0000') {
          if (json.data.length !== 0) {
            this.show = true
            this.carMsg = json.data
          }
        } else {
          Toast({
            message: json.msg,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    }
  }
</script>
