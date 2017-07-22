<template>
    <div class="form-template">
      <div class="form-template-item">
        <span class="form-template-item-left">业务类型</span>
        <div class="form-template-item-type">转出、注销恢复</div>
      </div>
      <div class="exchange-license-line"></div>
      <div class="register">
        <div class="form-template-item">
          <span class="form-template-item-left">车主姓名</span>
          <input type="text" placeholder="请输入车主姓名" class="form-template-item-right" v-model="ownerName">
        </div>
        <div-select :childInfo="credentialsName" @getSelected="getCredentialsNameOne"></div-select>
        <div class="form-template-item">
          <span class="form-template-item-left">证件号码</span>
          <input type="text" placeholder="请输入证件号码" class="form-template-item-right" v-model="IDcard">
        </div>
        <div class="form-template-item">
          <span class="form-template-item-left">手机号码</span>
          <input type="text" placeholder="请输入手机号码" class="form-template-item-right" v-model="mobilePhone">
        </div>
        <div class="form-template-item">
          <span class="form-template-item-left">验证码</span>
          <div class="form-template-item-right send-code">
            <input type="text" placeholder="请输入验证码" maxlength="6" class="send-code-input" v-model="verificationCode">
            <span class="send-code-btn" @click="getVerificationCode" v-if="showTime">获取验证码</span>
            <span class="send-code-btn" style="background: gray" v-if="!showTime">{{countDown}} s</span>
          </div>
        </div>
        <div class="form-template-item">
          <span class="form-template-item-left">车牌号码</span>
          <div class="form-template-item-right send-code ">
            <div class="province-code">
              <div-select :childInfo="provinceCode" @getSelected="getProvinceCodeOne"></div-select>
            </div>
            <input type="text" placeholder="请输入车牌号码" class="province-code-input" v-model="plateNum">
          </div>
        </div>
        <div-select :childInfo="carSelectData" @getSelected="getCarSelectDataOne"></div-select>
        <div-select :childInfo="useNature" @getSelected="getUseNatureOne"></div-select>
        <div class="form-template-item">
          <span class="form-template-item-left">车身架号</span>
          <input type="text" placeholder="请输入车架号后四位" maxlength="4" class="form-template-item-right" v-model="vehicleNum">
        </div>
        <div-select :childInfo="appointmentLocation" @getSelected="getAppointmentLocationOne"></div-select>
        <div class="register-item">
          <span class="register-item-title">预约日期</span>
          <div class="register-item-input register-item-select">
            <input type="text" placeholder="请选择预约日期" readonly  v-model="yearMonthDay" @click.stop="toggleData">
            <ul class="register-item-ul" v-if="showItemData" >
              <li class="register-item-li" v-for="item in allYearMonthDay" @click="chooseData(item)">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="register-item">
          <span class="register-item-title">预约时间</span>
          <div class="register-item-input register-item-select">
            <input type="text" placeholder="请选择预约时间" readonly  v-model="appointmentTime" @click.stop="toggleTime">
            <ul class="register-item-ul" v-if="showItemTime">
              <li class="register-item-li" v-for="item in surplusData" @click="chooseTime(item)" :class="{'bg-gray': item.num == 0}">
                <div class="register-item-li-time">{{item.time}}</div>
                <div class="register-item-li-num" v-if="item.num!=0">剩余名额 <span class="register-item-li-number">{{item.num}}</span> 位
                </div>
                <div class="register-item-li-num" v-if="item.num == 0">已满</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-template-submit" @click="registerSubmit">预  约</div>
      </div>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
</template>
<style lang="less" scoped>
  .province-code {
    width: 140px;
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
    .register-item-select{
      padding-left: 0;
      width: 68%;
      position: relative;
      input{
        width: 100%;
        background: white url("../../../../images/select1.png") 95% center/22px 13px no-repeat;
      }
      .register-item-ul{
        position: absolute;
        top: 72px;
        border: 1px solid #e5e5e5;
        width: 100%;
        z-index: 3;
        background: white;
        max-height: 400px;
        overflow: auto;
        .register-item-li{
          font-size: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          line-height: 65px;
          padding-left: 20px;
          padding-right: 20px;
          .register-item-li-number{
            color: #19D051;
          }
        }
      }
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
  .form-template-item-type {
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    outline: none;
    height: 70px;
    font-size: 30px;
    padding-left: 15px;
    line-height: 70px;
    width: 68%;
  }
  .province-code-input {
    width: 300px;
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
  .form-template .exchange-license-line{
    height: 10px;
    background: #eeeeee;
    margin-left: 0;
    margin-right: 0;
  }
</style>
<script>
  import {isPhone, specialCharacters, plateNumberDetection} from 'service/regExp.js'
  import {resultPost} from 'service/getData'
  import {Toast, MessageBox} from 'mint-ui'
  import {
    getBusinessTypeId,
    getPageInit,
    getAppointmentDate,
    getAppTimes,
    simpleSendMessage,
    createVehicleInfoJD41
  } from 'config/baseUrl.js'
  export default {
    data () {
      return {
        showItemData: false, // 日期选择框
        showItemTime: false, // 时间选择框
        allYearMonthDay: '', // 所有的年月日
        yearMonthDay: '',
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
          option: []
        },  // 证件名称
        carSelectData: {
          title: '车辆类型',
          option: []
        },  // 车辆类型
        useNature: {
          title: '使用性质',
          option: []
        },   // 使用性质
        appointmentLocation: {
          title: '预约地点',
          option: []
        },  // 预约地点
        allYear: {
          option: []
        }, // 年
        allYearOne: '',
        allmonth: {
          option: []
        }, // 月份
        allmonthOne: '',
        allDay: {
          option: []
        }, // 日
        allDayOne: '',
        // modelOfCarOne: '', // 车辆型号
        surplusData: [],   // 剩余数量
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
        pointerTypeOne: '',
        credentialsNameOne: '', // 证件名称一项
        certificateTypeId: '', // 证件类型ID
        showTime: true,
        countDown: 5,
        timer: '',
        businessTypeId: '', // 业务类型编码
        appointmentTime: '', // 预约时间
        // businessCarTypeId: '', // 车辆类型编码
        bookerType: 0 // 预约方式，0 本人， 1普通代办 2专业代办
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    computed: {
      // 时间请求参数
      timeRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne
        }
      },
      // 余量请求参数
      quotaRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne,
          date: this.yearMonthDay,
          carTypeId: this.carSelectDataOne
        }
      }
    },
    created () {
      this.getBusinessTypeId()
    },
    watch: {
      appointmentLocationOne () {
        this.allYearMonthDay = ''
        this.surplusData = ''
        this.yearMonthDay = ''
        this.appointmentTime = ''
      },
      yearMonthDay () {
        this.surplusData = ''
        this.appointmentTime = ''
      },
      carSelectDataOne () {
        this.surplusData = ''
        this.appointmentTime = ''
      }
    },
    methods: {
      // 获取业务类型ID
      getAllData () {
        let requestData = {
          businessTypeId: this.businessTypeId
        }
        resultPost(getPageInit, requestData).then(data => {
          console.log(requestData)
          console.log(data.data.orgVOs, '所有数据获取成功')
          // 证件名称
          data.data.idTypeVOs.map(item => {
            this.credentialsName.option.push({'code': item.code, 'description': item.description, 'id': item.id, 'str': item.name})
          })
          // console.log(this.credentialsName, '数据')
          // 车辆类型
          data.data.carTypeVOs.map(item => {
            this.carSelectData.option.push({'code': item.code, 'id': item.id, 'description': item.description, 'str': item.name})
          })
          // 使用性质
          data.data.useCharaters.map(item => {
            this.useNature.option.push({'str': item.name, 'id': item.id})
          })
          // 预约地点
          data.data.orgVOs.map(item => {
            this.appointmentLocation.option.push({'description': item.description, 'id': item.id, 'str': item.name, 'pointx': item.pointx, 'pointy': item.pointy})
          })
        })
      },
      // 获取业务类型ID
      getBusinessTypeId (val) {
        let requestData = {
          type: '1',
          part: '0',
          code: 'JD41'
        }
        resultPost(getBusinessTypeId, requestData).then(data => {
          this.businessTypeId = data.data
          console.log(data, '业务类型编码获取成功')
          this.getAllData()
        })
      },
      // 点击获取验证码
      getVerificationCode () {
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
        this.showTime = false
        if (window.localStorage.getItem('userName') !== this.ownerName || this.IDcard === window.localStorage.getItem('identityCard')) {
          this.bookerType = 1
        }
        let requestData = {
          mobile: this.mobilePhone,
          idType: this.certificateTypeId,
          lx: 2,
          bookerType: this.bookerType,
          bookerName: this.ownerName,
          bookerIdNumber: this.IDcard,
          idNumber: this.IDcard,
          codes: this.achieveCode
        }
        resultPost(simpleSendMessage, requestData).then(data => {
          console.log(requestData)
          console.log(data, '验证码')
        })
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
      // 选择预约日期
      chooseData (item) {
        this.yearMonthDay = item
        this.showItemData = false
      },
      // 选择预约时间
      chooseTime (item) {
        if (item.num === '0') {
          return
        }
        this.appointmentTime = item.time
        this.showItemTime = false
      },
      toggleData () {
        if (!this.allYearMonthDay) {
          this.getAllYearMonthDay()
        } else {
          this.showItemData = !this.showItemData
        }
      },
      toggleTime () {
        if (!this.surplusData) {
          this.getQuotaInformation()
        } else {
          this.showItemTime = !this.showItemTime
        }
      },
      // 获取时间
      getAllYearMonthDay () {
        resultPost(getAppointmentDate, this.timeRequest).then(json => {
          console.log(json, '时间获取成功')
          if (json.code === '0000') {
            this.allYearMonthDay = json.data
            this.showItemData = !this.showItemData
          } else {
            this.allYearMonthDay = ''
            // MessageBox('提示', json.data)
          }
        })
      },
      // 获取配额信息
      getQuotaInformation () {
        console.log(this.quotaRequest)
        resultPost(getAppTimes, this.quotaRequest).then(json => {
          console.log(json, '配额信息')
          this.activeIndex = ''
          this.appointmentTime = ''
          if (json.code === '0000') {
            let arrData = []
            json.data.map(item => {
              arrData.push({'time': item.apptime, 'num': item.maxnumber - item.yetnumber})
            })
            this.surplusData = arrData
            this.showItemTime = !this.showItemTime
          } else {
            this.surplusData = ''
            MessageBox('提示', json.msg)
          }
        })
      },
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
        console.log(this.appointmentLocation.option)
        // if (!this.beforeSubmit()) return
        let requestObj = {
          name: this.ownerName,
          businessTypeId: this.businessTypeId,
          idTypeId: this.certificateTypeId, // 证件名称
          idNumber: this.IDcard,
          mobile: window.localStorage.getItem('mobilePhone'),
          msgNumber: this.verificationCode,
          platNumber: this.provinceCodeOne + this.plateNum.toUpperCase(),
          carTypeId: this.carSelectDataOne,
          useCharater: this.useNatureOne,
          carFrame: this.vehicleNum,  // 车身架号
          orgId: this.appointmentLocationOne,
          appointmentDate: this.yearMonthDay,
          appointmentTime: this.appointmentTime,
          bookerName: window.localStorage.getItem('userName'),
          bookerIdNumber: window.localStorage.getItem('identityCard'),
          bookerType: this.bookerType,
          // modelName: this.modelOfCarOne,
          bookerMobile: this.mobilePhone
        }
        console.log(requestObj, '请求的数据')
        resultPost(createVehicleInfoJD41, requestObj).then(data => {
          console.log(data, '预约信息')
          if (data.code === '0000') {
            this.appointmentLocation.option.map(item => {
              if (item.id === this.appointmentLocationOne) {
                this.appointmentLocationStr = item.str
              }
            })
            let dataInfo = {
              type: 2,
              reserveNo: data.data,
              numberPlate: this.provinceCodeOne + this.plateNum.toUpperCase(),
              mobilephone: this.mobilePhone,
              reserveAddress: this.appointmentLocationStr,
              reserveTime: `${this.yearMonthDay} ${this.appointmentTime}`
            }
//          this.$store.commit('saveResponseData', data)
            this.$store.commit('saveSuccessInfo', dataInfo)
            this.$router.push('/submitSuccess')
          }
        })
      }
    }
  }
</script>
