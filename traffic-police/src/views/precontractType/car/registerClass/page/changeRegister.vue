<template>
  <div class="register">
    <div class="register-item">
      <span class="register-item-title">车主姓名</span>
      <input type="text" placeholder="请输入车主姓名" class="register-item-input" v-model="ownerName">
    </div>
    <div-select :childInfo="credentialsName" @getSelected="getCredentialsNameOne"></div-select>
    <div class="register-item">
      <span class="register-item-title">证件号码</span>
      <input type="text" placeholder="请输入证件号码" class="register-item-input" v-model="IDcard">
    </div>
    <div class="register-item">
      <span class="register-item-title">手机号码</span>
      <input type="text" placeholder="请输入手机号码" class="register-item-input" v-model="mobilePhone">
    </div>
    <div class="register-item">
      <span class="register-item-title">验证码</span>
      <div class="register-item-input send-code">
        <input type="text" placeholder="请输入验证码" maxlength="6" class="send-code-input" v-model="verificationCode">
        <span class="send-code-btn" @click="getVerificationCode" v-if="showTime">获取验证码</span>
        <span class="send-code-btn" style="background: gray" v-if="!showTime">{{countDown}} s</span>
      </div>
    </div>
    <div class="register-item">
      <span class="register-item-title">车牌号码</span>
      <div class="register-item-input send-code ">
        <div class="province-code">
          <div-select :childInfo="provinceCode" @getSelected="getProvinceCodeOne"></div-select>
        </div>
        <input type="text" placeholder="请输入车牌号码" class="province-code-input" v-model="plateNum">
      </div>
    </div>
    <div-select :childInfo="carSelectData" @getSelected="getCarSelectDataOne"></div-select>
    <div-select :childInfo="useNature" @getSelected="getUseNatureOne"></div-select>
    <div class="register-item">
      <span class="register-item-title">车身架号</span>
      <input type="text" placeholder="请输入车架号后四位" maxlength="4" class="register-item-input" v-model="vehicleNum">
    </div>
    <div-select :childInfo="appointmentLocation" @getSelected="getAppointmentLocationOne"></div-select>
    <div class="register-item">
      <span class="register-item-title">选择预约日期</span>
    </div>
    <div class="choose-date">
      <div class="choose-date-item">
        <div class="date-item-input">
          <input type="text" readonly v-model="fullYear">
        </div>
        <span class="date-item-time">年</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="month"></div-select>
        </div>
        <span class="date-item-time">月</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="month"></div-select>
        </div>
        <span class="date-item-time">日</span>
      </div>
    </div>
    <div class="surplus-info">
      <div class="surplus-info-item" :class="{'no-surplus': item.num == 0,'toggle-active':index==activeIndex&&item.num != 0 }" v-for="(item, index) in surplusData" @click="toggleActive(index)">
        <div class="surplus-item-time">{{item.time}}</div>
        <div class="surplus-item-num" v-if="item.num!=0">剩余名额 <span class="surplus-item-number">{{item.num}}</span> 位</div>
        <div class="surplus-item-num" v-if="item.num == 0">已满</div>
      </div>
    </div>
    <div class="register-submit" @click="registerSubmit">预  约</div>
  </div>
</template>
<style lang="less" scoped>
  input {
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    outline: none;
    height: 70px;
    font-size: 30px;
    padding-left: 20px;
  }
  .register-item {
    display: flex;
    height: 85px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    .register-item-title {
      width: 31%;
    }
    .province-code {
      width: 140px;
    }
    .register-item-input {
      width: 68%;
      padding-left: 20px;
      height: 70px;
      font-size: 30px;
    }
    .province-code-input {
      width: 300px;
    }
    .send-code {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0;
      .send-code-input {
        width: 250px;
      }
      .send-code-btn {
        background: #09bb07;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: white;
        width: 180px;
        border-radius: 8px;
      }
    }
  }
  .choose-date {
    display: flex;
    .choose-date-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date-item-input {
        width: 165px;
        input{
          width: 100%;
          text-align: center;
          padding-left: 0;
        }
      }
      .date-item-time{
        margin-left: 15px;
        margin-right: 15px;
      }
    }

  }
  .surplus-info{
    border: 2px solid #eaeaed;
    border-radius: 8px;
    max-height: 389px;
    overflow: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    .no-surplus{
      background: #eaeaed;
    }
    .surplus-info-item{
      display: flex;
      justify-content: space-between;
      height: 78px;
      padding:0 35px ;
      align-items: center;
      border: 2px solid;
      border-color: transparent;
      border-bottom-color:#eaeaed ;
      .surplus-item-number{
        color: #19d051;
        width: 80px;
        display: inline-block;
        text-align: center;
      }
    }
    .toggle-active{
      border-color: #2696dd;
    }
  }
  .register-reminder{
    color: #f02b28;
    margin: 34px 0 142px;
  }
  .register-submit{
    height: 80px;
    background: #10aeff;
    text-align: center;
    line-height: 80px;
    color: white;
    border-radius: 8px;
    margin-top: 80px;
  }
</style>
<script>
  import {isPhone, specialCharacters, plateNumberDetection} from 'service/regExp.js'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        activeIndex: '',  // 点击出现蓝色边框序号
        provinceCode: {
          option: [
            {
              'str': '粤'
            },
            {
              'str': '鄂'
            },
            {
              'str': '豫'
            },
            {
              'str': '皖'
            },
            {
              'str': '赣'
            },
            {
              'str': '冀'
            },
            {
              'str': '鲁'
            },
            {
              'str': '浙'
            },
            {
              'str': '苏'
            },
            {
              'str': '湘'
            },
            {
              'str': '闽'
            },
            {
              'str': '蒙'
            },
            {
              'str': '京'
            },
            {
              'str': '辽'
            },
            {
              'str': '渝'
            },
            {
              'str': '沪'
            },
            {
              'str': '陕'
            },
            {
              'str': '川'
            },
            {
              'str': '黑'
            },
            {
              'str': '晋'
            },
            {
              'str': '桂'
            },
            {
              'str': '吉'
            },
            {
              'str': '宁'
            },
            {
              'str': '贵'
            },
            {
              'str': '琼'
            },
            {
              'str': '甘'
            },
            {
              'str': '青'
            },
            {
              'str': '津'
            },
            {
              'str': '云'
            },
            {
              'str': '藏'
            },
            {
              'str': '新'
            }
          ]
        },  // 省份 简称
        credentialsName: {
          title: '证件名称',
          option: [
            {'str': '居民户口簿'},
            {'str': '单位注销证明'},
            {'str': '驻华机构证明'},
            {'str': '个体工商营业执照注册'},
            {'str': '居住暂时证明'},
            {'str': '临时居民身份'},
            {'str': '军官证'},
            {'str': '军官离退休证'},
            {'str': '外交人员身份证明'},
            {'str': '士兵证'},
            {'str': '境外人员身份证明'},
            {'str': '统一社会信用代码'},
            {'str': '组织机构代码证书'}
          ]
        },  // 证件名称
        carSelectData: {
          title: '车辆类型',
          option: [
            {
              'id': '01',
              'str': '大型汽车'
            },
            {
              'id': '02',
              'str': '小型汽车'
            },
            {
              'id': '03',
              'str': '使馆汽车'
            },
            {
              'id': '04',
              'str': '领馆汽车'
            },
            {
              'id': '05',
              'str': '境外汽车'
            },
            {
              'id': '06',
              'str': '外籍汽车'
            },
            {
              'id': '07',
              'str': '普通摩托车'
            },
            {
              'id': '08',
              'str': '轻便摩托车'
            },
            {
              'id': '09',
              'str': '使馆摩托车'
            },
            {
              'id': '10',
              'str': '领馆摩托车'
            },
            {
              'id': '15',
              'str': '挂车'
            },
            {
              'id': '16',
              'str': '教练汽车'
            },
            {
              'id': '17',
              'str': '教练摩托车'
            },
            {
              'id': '18',
              'str': '实验汽车'
            },
            {
              'id': '19',
              'str': '实验摩托车'
            },
            {
              'id': '22',
              'str': '临时行驶车'
            },
            {
              'id': '23',
              'str': '警用汽车'
            },
            {
              'id': '24',
              'str': '警用摩托'
            },
            {
              'id': '20',
              'str': '临时入境车'
            },
            {
              'id': '51',
              'str': '新能源大型车'
            },
            {
              'id': '52',
              'str': '新能源小型车'
            }
          ]
        },  // 车辆类型
        useNature: {
          title: '使用性质',
          option: [
            {'str': '非运营'},
            {'str': '公路客运'},
            {'str': '公交客运'},
            {'str': '旅游客运'},
            {'str': '货运'},
            {'str': '租赁'}
          ]
        },   // 使用性质
        appointmentLocation: {
          title: '预约地点',
          option: [
            {'str': '福田车管分所'},
            {'str': '澳康达服务站'},
            {'str': '龙岗车管分所'},
            {'str': '宝安车管分所'},
            {'str': '盐田车管分所'},
            {'str': '龙华车管分所'},
            {'str': '坪山车管分所'},
            {'str': '深圳市车管所'},
            {'str': '罗湖车管所'}
          ]
        },  // 预约地点
        fullYear: new Date().getFullYear(), // 整年
        month: {
          option: [
            {'str': '1'},
            {'str': '2'},
            {'str': '3'},
            {'str': '4'},
            {'str': '5'},
            {'str': '6'},
            {'str': '7'},
            {'str': '8'},
            {'str': '9'},
            {'str': '10'},
            {'str': '11'},
            {'str': '12'}
          ]
        },
        surplusData: [
          {'time': '9:00 - 10:00', 'num': '0'},
          {'time': '9:00 - 10:00', 'num': '20'},
          {'time': '9:00 - 10:00', 'num': '20'},
          {'time': '9:00 - 10:00', 'num': '20'},
          {'time': '9:00 - 10:00', 'num': '0'},
          {'time': '9:00 - 10:00', 'num': '20'},
          {'time': '9:00 - 10:00', 'num': '0'},
          {'time': '9:00 - 10:00', 'num': '20'}
        ],   // 剩余数量
        ownerName: '',  // 车主姓名
        IDcard: '',
        mobilePhone: '',
        verificationCode: '',  // 验证码
        plateNum: '',
        vehicleNum: '',   // 车身架号
        provinceCodeOne: '',  // 车牌省份简称
        carSelectDataOne: '', // 车辆类型
        useNatureOne: '', // 使用性质
        appointmentLocationOne: '',     // 预约地点
        credentialsNameOne: '', // 证件名称一项
        showTime: true,
        countDown: 5,
        timer: ''
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      getCredentialsNameOne (val) {
        this.credentialsNameOne = val
      },
      getProvinceCodeOne (val) {
        this.provinceCodeOne = val
      },
      getCarSelectDataOne (val) {
        this.carSelectDataOne = val
      },
      getUseNatureOne (val) {
        this.useNatureOne = val
      },
      getAppointmentLocationOne (val) {
        this.appointmentLocationOne = val
      },
      toggleActive (index) {
        this.activeIndex = index
      },
      getVerificationCode (val) {
        this.showTime = false
        this.timer = setInterval(() => {
          if (this.countDown === 0) {
            clearInterval(this.timer)
            this.showTime = true
            this.countDown = 5
            return
          }
          this.countDown--
        }, 1000)
      },
      beforeSubmit () {
        if (specialCharacters(this.ownerName)) {
          Toast({
            message: '车主姓名不能含有特殊字符',
            duration: 2000
          })
          return false
        } else if (!this.ownerName) {
          Toast({
            message: '请输入车主姓名',
            duration: 2000
          })
          return false
        }
        if (!this.IDcard) {
          Toast({
            message: '证件号码不能为空',
            duration: 2000
          })
          return false
        }
        if (!isPhone(this.mobilePhone)) {
          Toast({
            message: '手机号码格式不正确',
            duration: 2000
          })
          return false
        }
        if (!this.verificationCode) {
          Toast({
            message: '请输入验证码',
            duration: 2000
          })
          return false
        }
        if (!plateNumberDetection(this.provinceCodeOne + this.plateNum.toUpperCase())) {
          Toast({
            message: '车牌号码格式不正确',
            duration: 2000
          })
          return false
        }
        if (!this.vehicleNum) {
          Toast({
            message: '请输入车架号后四位',
            duration: 2000
          })
          return false
        }
        return true
      },
      registerSubmit () {
        //        if (!this.beforeSubmit()) return
        let requestObj = {
          ownerName: this.ownerName,
          credentialsNameOne: this.credentialsNameOne,  // 证件名称
          IDcard: this.IDcard,
          mobilePhone: this.mobilePhone,
          verificationCode: this.verificationCode,
          plateNum: this.provinceCodeOne + this.plateNum.toUpperCase(),
          vehicleNum: this.vehicleNum,
          useNatureOne: this.useNatureOne,
          carSelectDataOne: this.carSelectDataOne,
          appointmentLocationOne: this.appointmentLocationOne
        }
        console.log(requestObj)
      }
    }
  }
</script>
