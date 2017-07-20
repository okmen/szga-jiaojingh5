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
        <input type="text" placeholder="请输入验证码" class="send-code-input" v-model="verificationCode" maxlength="6">
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
    <div-select :childInfo="modelOfCar" @getSelected="getModelOfCarOne"></div-select>
    <div-select :childInfo="useNature" @getSelected="getUseNatureOne"></div-select>
    <div class="register-item">
      <span class="register-item-title">车身架号</span>
      <input type="text" placeholder="请输入车架号后四位" class="register-item-input" v-model="vehicleNum" maxlength="4">
    </div>
    <div-select :childInfo="appointmentLocation" @getSelected="getAppointmentLocationOne"></div-select>
    <div class="register-item">
      <span class="register-item-title">选择预约日期</span>
    </div>
    <div class="choose-date">
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allYear" @getSelected="getAllYearOne"></div-select>
        </div>
        <span class="date-item-time">年</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allmonth" @getSelected="getAllmonthOne"></div-select>
        </div>
        <span class="date-item-time">月</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allDay" @getSelected="getAllDayOne"></div-select>
        </div>
        <span class="date-item-time">日</span>
      </div>
    </div>
    <div class="surplus-info">
      <div class="surplus-info-item"
           :class="{'no-surplus': item.num == 0,'toggle-active':index===activeIndex}"
           v-for="(item, index) in surplusData" @click="toggleActive(index)">
        <div class="surplus-item-time">{{item.time}}</div>
        <div class="surplus-item-num" v-if="item.num!=0">剩余名额 <span class="surplus-item-number">{{item.num}}</span> 位
        </div>
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
        input {
          width: 100%;
          text-align: center;
          padding-left: 0;
        }
      }
      .date-item-time {
        margin-left: 15px;
        margin-right: 15px;
      }
    }

  }

  .surplus-info {
    border: 2px solid #eaeaed;
    border-radius: 8px;
    max-height: 389px;
    overflow: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    .no-surplus {
      background: #eaeaed;
    }
    .surplus-info-item {
      display: flex;
      justify-content: space-between;
      height: 78px;
      padding: 0 35px;
      align-items: center;
      border: 2px solid;
      border-color: transparent;
      border-bottom-color: #eaeaed;
      .surplus-item-number {
        color: #19d051;
        width: 80px;
        display: inline-block;
        text-align: center;
      }
    }
    .toggle-active {
      border-color: #2696dd;
    }
  }

  .register-reminder {
    color: #f02b28;
    margin: 34px 0 142px;
  }

  .register-submit {
    height: 80px;
    background: #10aeff;
    margin-top: 140px;
    text-align: center;
    line-height: 80px;
    color: white;
    border-radius: 8px;
  }
</style>
<script>
  import {isPhone, specialCharacters, plateNumberDetection} from 'service/regExp.js'
  import {resultPost} from 'service/getData'
  import {Toast, MessageBox} from 'mint-ui'
  import {
    getOrgsByBusinessTypeId,
    getAppointmentDate,
    getAppTimes,
    getBusinessCarTypeId,
    getIdTypeId,
    simpleSendMessage,
    createVehicleInfo
  } from 'config/baseUrl.js'
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
            {'str': '居民户口簿', 'id': 'H'},
            {'str': '单位注销证明', 'id': 'J'},
            {'str': '驻华机构证明', 'id': 'L'},
            {'str': '个体工商营业执照注册', 'id': 'P'},
            {'str': '居住暂时证明', 'id': 'K'},
            {'str': '居住身份证', 'id': 'A'},
            {'str': '临时居民身份', 'id': 'M'},
            {'str': '军官证', 'id': 'C'},
            {'str': '军官离退休证', 'id': 'E'},
            {'str': '外交人员身份证明', 'id': 'G'},
            {'str': '士兵证', 'id': 'D'},
            {'str': '境外人员身份证明', 'id': 'F'},
            {'str': '统一社会信用代码', 'id': 'N'},
            {'str': '组织机构代码证书', 'id': 'B'}
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
            {'str': '非运营', 'id': 'A'},
            {'str': '公路客运', 'id': 'B'},
            {'str': '公交客运', 'id': 'C'},
            {'str': '旅游客运', 'id': 'E'},
            {'str': '货运', 'id': 'F'},
            {'str': '租赁', 'id': 'G'}
          ]
        },   // 使用性质
        allYearMonthDay: {}, // 所有的年月日
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
        modelOfCarOne: '', // 车辆型号
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
        appointmentTime: '', // 预约时间
//        businessTypeId: '',  // 业务类型编码
        businessCarTypeId: '', // 车辆类型编码
        bookerType: 0 // 预约方式，0 本人， 1普通代办 2专业代办
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    props: ['businessTypeId', 'modelOfCar', 'achieveCode'],
    computed: {
      // 时间 年月日
      yearMonthDay () {
        return `${this.allYearOne}-${this.allmonthOne}-${this.allDayOne}`
      },
      // 余量请求参数
      quotaRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne,
          date: this.yearMonthDay,
          carTypeId: this.businessCarTypeId
        }
      },
      // 时间请求参数
      timeRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne
        }
      },
      // 证件类型请求参数
      certificateRequest () {
        return {
          businessTypeId: this.businessTypeId,
          code: this.credentialsNameOne
        }
      }
    },
    watch: {
      allYearOne (val) {
        let option = []
        for (let key in this.allYearMonthDay[val]) {
          option.push({'str': key})
        }
        this.allmonth.option = option
      },
      allmonthOne (val) {
        let option = []
        this.allYearMonthDay[this.allYearOne][val].map(item => {
          option.push({'str': item})
        })
        this.allDay.option = option
      },
      carSelectDataOne () {
        this.getBusinessCarTypeId()
      },
      businessTypeId () {
        this.getBusinessAddressId()
      },
      timeRequest (val) {
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getAllYearMonthDay()
      },
      quotaRequest (val) {
        if (this.allYearOne === '') {
          return
        }
        if (this.allmonthOne === '') {
          return
        }
        if (this.allDayOne === '') {
          return
        }
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getQuotaInformation()
      },
      certificateRequest (val) {
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getCertificateTypeId()
      }
    },
    methods: {
      /*  // 获取业务类型编码
       getBusinessTypeId () {
       let requestData = {
       type: '1',
       part: '1',
       code: 'JD15'
       }
       resultPost(getBusinessTypeId, requestData).then(data => {
       console.log(data, '业务类型编码获取')
       this.businessTypeId = data.data
       })
       }, */
      // 获取车辆型号
      getModelOfCarOne (val) {
        this.modelOfCarOne = val
      },
      // 获取证件类型ID
      getCertificateTypeId () {
        resultPost(getIdTypeId, this.certificateRequest).then(data => {
          console.log(data, '证件类型ID')
          this.certificateTypeId = data.data
        })
      },
      //  获取地点
      getBusinessAddressId () {
        resultPost(getOrgsByBusinessTypeId, {businessTypeId: this.businessTypeId}).then(json => {
          console.log(json, '地点获取成功')
          json.data.map(item => {
            this.appointmentLocation.option.push({'str': item.name, 'id': item.id})
          })
        })
      },
      // 获取时间
      getAllYearMonthDay () {
        resultPost(getAppointmentDate, this.timeRequest).then(json => {
          this.allYearMonthDay = {}
          console.log(json, '时间获取成功')
          if (json.code === '0000') {
            json.data.map((item, index) => {
              let yearMonthDay = item.split('-')
              if (!this.allYearMonthDay[yearMonthDay[0]]) {
                this.allYearMonthDay[yearMonthDay[0]] = {}
              }
              if (!this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]]) {
                this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]] = []
              }
              this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]].push(yearMonthDay[2])
            })
            let option = []
            for (let key in this.allYearMonthDay) {
              option.push({'str': key})
            }
            this.allYear.option = option
          } else {
            this.allYear.option = ''
            this.allmonth.option = ''
            this.allDay.option = ''
            MessageBox('提示', json.data)
          }
        })
      },
      // 获取配额信息
      getQuotaInformation () {
        resultPost(getAppTimes, this.quotaRequest).then(json => {
          console.log(json, '配额信息')
          if (json.code === '0000') {
            let arrData = []
            json.data.map(item => {
              arrData.push({'time': item.apptime, 'num': item.maxnumber - item.yetnumber})
            })
            this.surplusData = arrData
          } else {
            this.surplusData = ''
            MessageBox('提示', json.data)
          }
        })
      },
      // 获取车辆类型编号
      getBusinessCarTypeId () {
        let requestData = {
          code: this.carSelectDataOne
        }
        resultPost(getBusinessCarTypeId, requestData).then(json => {
          console.log(json, '车辆类型编码获取成功')
          this.businessCarTypeId = json.data
        })
      },
      getCredentialsNameOne (val) {
        this.credentialsNameOne = val
      },
      getProvinceCodeOne (val) {
        this.provinceCodeOne = val
      },
      // 选择车辆 获取对应的车辆类型编码
      getCarSelectDataOne (val) {
        this.carSelectDataOne = val
      },
      getUseNatureOne (val) {
        this.useNatureOne = val
      },
      // 切换地点
      getAppointmentLocationOne (val) {
        this.appointmentLocationOne = val
      },
      getAllYearOne (val) {
        this.allYearOne = val
      },
      getAllmonthOne (val) {
        this.allmonthOne = val
      },
      getAllDayOne (val) {
        this.allDayOne = val
      },
      toggleActive (index) {
        if (this.surplusData[index].num === 0) {
          return
        }
        this.activeIndex = index
        this.appointmentTime = this.surplusData[index].time
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
        if (!this.appointmentTime) {
          Toast({
            message: '请选择预约时间段',
            duration: 2000
          })
          return false
        }
        return true
      },
      registerSubmit () {
        //        if (!this.beforeSubmit()) return
        let requestObj = {
          name: this.ownerName,
          businessTypeId: this.businessTypeId,
          idTypeId: this.certificateTypeId, // 证件名称
          idNumber: this.IDcard,
          mobile: window.localStorage.getItem('mobilePhone'),
          msgNumber: this.verificationCode,
          platNumber: this.provinceCodeOne + this.plateNum.toUpperCase(),
          carTypeId: this.businessCarTypeId,
          useCharater: this.useNatureOne,
          carFrame: this.vehicleNum,  // 车身架号
          orgId: this.appointmentLocationOne,
          appointmentDate: this.yearMonthDay,
          appointmentTime: this.appointmentTime,
          bookerName: window.localStorage.getItem('userName'),
          bookerIdNumber: window.localStorage.getItem('identityCard'),
          bookerType: this.bookerType,
          modelName: this.modelOfCarOne,
          bookerMobile: this.mobilePhone
        }
        console.log(requestObj, '请求的数据')
        resultPost(createVehicleInfo, requestObj).then(data => {
          console.log(data, '预约信息')
          if (data.code === '0000') {
            this.appointmentLocation.option.map(item => {
              if (item.id === this.appointmentLocationOne) {
                this.appointmentLocationStr = item.str
              }
            })
            let dataInfo = {
              type: 2,
              textObj: {
                reserveNo: data.data,
                numberPlate: this.provinceCodeOne + this.plateNum.toUpperCase(),
                mobilephone: this.mobilePhone,
                reserveAddress: this.appointmentLocationStr,
                reserveTime: `${this.yearMonthDay} ${this.appointmentTime}`
              }
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
