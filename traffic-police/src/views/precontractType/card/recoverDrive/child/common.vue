<!-- 
* 公共部分
* 标星(*) 注释 为 接口所需参数
 -->
<template>
  <div class="order-alter-class" id="orderAlterClass">
    <ul class="alter-hbs-list">
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>车主姓名</span></div>
        <div class="alter-hbs-text">
          <input class="text-input bg-white" maxlength="10" v-model="carOwnerName" placeholder="请输入车主姓名">
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>证件名称</span></div>
        <div class="div-select">
          <span class="btn-select bg-white" @click.stop="cardSelectClick()">{{ cardMassage }}</span>
          <div class="div-select-ul" v-if="cardSelectShow">
            <ul>
              <li v-for="(item, index) in cardSelectData" card-id="item.code"
                  @click.stop="cardSelectClick(item.name, item.code)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>证件号码</span></div>
        <div class="alter-hbs-text">
          <input class="text-input bg-white" type="text" maxlength="19" v-model="cardNum" placeholder="请输入证件号码">
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>手机号码</span></div>
        <div class="alter-hbs-text">
          <input class="text-input bg-white" v-model="userTelphone" type="tel" maxlength="11" 
                 placeholder="请输入您的手机号码">
        </div>
      </li>
      <li class="alter-hbs-item clear">
        <div class="alter-hbs-name"><span>验证码</span></div>
        <div class="alter-hbs-text width-60 left">
          <input class="text-input bg-white" type="tel" maxlength="6" v-model="validCode" placeholder="请输入验证码">
        </div>
        <div class="left alter-hbs-code">
          <button class="verifyButton" type="button" name="button" @click.stop="getVerification()"
            :class="{disabled: isdisabled}" :disabled="this.isdisabled">{{getValidCodeMsg}}
          </button>
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>预约地点</span></div>
        <div class="div-select">
          <span class="btn-select bg-white" @click.stop="orderPlaceClick()">{{ orderPlaceValue }}</span>
          <div class="div-select-ul" v-if="orderPlaceShow">
            <ul>
              <li v-for="item in appointPlaceData" place-id="item.id"
                  @click.stop="orderPlaceClick(item.name, item.id)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-item pad-0"><p class="alter-order-date">选择预约日期</p></li>
      <li class="alter-item pad-0 flex">
        <div class="div-select year">
          <span class="btn-select" @click.stop="yearClick()">{{getYear}}</span>
          <div class="div-select-ul" v-if="yearShow">
            <ul>
              <li v-for="item in years" @click.stop="yearClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        年
        <div class="div-select month">
          <span class="btn-select" @click.stop="monthClick()">{{getMonth}}</span>
          <div class="div-select-ul" v-if="monthShow">
            <ul>
              <li v-for="item in months" @click.stop="monthClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        月
        <div class="div-select date">
          <span class="btn-select" @click.stop="dayClick()">{{getDay}}</span>
          <div class="div-select-ul" v-if="dayShow">
            <ul>
              <li v-for="item in days" @click.stop="dayClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        日
      </li>
    </ul>
    <ul class="alter-detail">
      <li class="alter-detail-time" v-for="(item, index) in orderDetailsTime" @click="selectOrderTime(index)"
          :class="{'time-full': item.leftNum === 0, 'active': index === activeIndex && item.leftNum !== 0}">
        <p>{{item.time}}</p>
        <p v-if="item.leftNum === 0">已满</p>
        <p v-else="item.leftNum !== 0">剩余名额<span class="yy_yysl">{{item.leftNum}}</span>位</p>
      </li>
    </ul>
    <div class="alter-button-box">
      <button class="btn alterButton" @click="appointTaskClick">预约</button>
    </div>
  </div>
</template>
<script>
  import { resultPost, resultPostNoLoading } from '../../../../../service/getData'
  import { isPhone, specialCharacters } from '../../../../../service/regExp.js'
  import {
    getIdTypeId,
    getOrgsByBusinessTypeId,
    getAppointmentDate,
    getAppTimes,
    simpleSendMessage } from '../../../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  export default {
    props: ['currentBusinessId', 'currentBusinessCode'],
    data () {
      return {
        carOwnerName: '',                   // * 车主姓名
        cardNum: '',                        // * 证件号码
        cardMassage: '居民户口簿',          // 证件名称 选中值
        cardCode: 'H',
        cardID: '',                         // * 证件名称 选中 id
        cardSelectShow: false,              // 是否显示 证件名称 ul列表
        cardSelectData: [                   // 证件名称 li
          { 'code': 'H', 'name': '居民户口簿' },
          { 'code': 'J', 'name': '单位注销证明' },
          { 'code': 'L', 'name': '驻华机构证明' },
          { 'code': 'P', 'name': '个体工商户营业执照注册' },
          { 'code': 'K', 'name': '居住暂住证明' },
          { 'code': 'A', 'name': '居民身份证' },
          { 'code': 'M', 'name': '临时居民身份证' },
          { 'code': 'C', 'name': '军官证' },
          { 'code': 'E', 'name': '军官离退休证' },
          { 'code': 'G', 'name': '外交人员身份证明' },
          { 'code': 'D', 'name': '士兵证' },
          { 'code': 'F', 'name': '境外人员身份证明' },
          { 'code': 'N', 'name': '统一社会信用代码' },
          { 'code': 'B', 'name': '组织机构代码证书' }
        ],
        userTelphone: '',                   // * 手机号
        validCode: '',                      // * 验证码
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        orderPlaceValue: '',                // 预约地点 选中值
        orderPlaceID: '',                   // * 预约地点 选中 id
        orderPlaceShow: false,              // 是否显示 预约地点 ul列表
        appointPlaceData: [],               // 预约地点 li
        getYear: '',                        // * 年
        getMonth: '',                       // * 月
        getDay: '',                         // * 日
        yearShow: false,                    // 是否显示 年月日 下拉框
        monthShow: false,
        dayShow: false,
        years: [],                          // 从接口获取 日期
        months: [],
        days: [],
        orderDetailsTime: [],               // 预约 具体时间 li
        activeIndex: '',                    // 当前点击时间的li
        selectDetailTime: '',               // * 选择的具体时间
        // * 预约方式  0’非代办（或本人）‘1’普通代办‘2’专业代办（企业代办）
        orderWay: this.carOwnerName === window.localStorage.getItem('userName') ? 0 : 1
      }
    },
    mounted () {
    },
    watch: {
      currentBusinessId (val) {
        this.getCardId()        // 获取证件 id
        this.getOrderPlace()    // 获取预约地点 id
        console.log('业务ID', val)
      },
      timeRequest (val) {
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getAllYearMonthDay()
      },
      currentBusinessCode (val) {
        console.log('业务code', val)
      }
    },
    computed: {
      // 获取 预约日期 请求参数
      timeRequest () {
        return {
          businessTypeId: this.currentBusinessId,
          orgId: this.orderPlaceID
        }
      },
      // 获取 具体预约时间 传年月日
      yearMonthDay () {
        return `${this.getYear}-${this.getMonth}-${this.getDay}`
      }
    },
    methods: {
      // 证件名称 选择
      cardSelectClick: function (str, code) {
        if (str) {
          this.cardMassage = str
          this.cardCode = code
          this.getCardId()
        }
        if (this.cardSelectShow === true) {
          this.cardSelectShow = false
        } else {
          this.cardSelectShow = true
          this.abbreviationSelectShow = false  // 如果其它的下拉框是显示的，关闭
          this.useNatureShow = false
          this.orderPlaceShow = false
          this.carTypeShow = false
        }
      },

      // 获取预约地点
      getOrderPlace: function () {
        resultPost(getOrgsByBusinessTypeId, { businessTypeId: this.currentBusinessId }).then(json => {
          console.log('预约地点', json)
          if (json.code === '0000') {
            this.appointPlaceData = json.data
            this.orderPlaceValue = this.appointPlaceData[0].name  // 默认预约地点
            this.orderPlaceID = this.appointPlaceData[0].id
            this.getAllYearMonthDay()   // 获取预约日期
          } else {
            Toast({ message: json.msg, className: 'white', duration: 1500 })
          }
        })
      },

      // 预约地点 选择
      orderPlaceClick: function (str, placeID) {
        if (str) {
          this.orderPlaceValue = str
          this.orderPlaceID = placeID
          this.getAllYearMonthDay()
          console.log('预约地点id', this.orderPlaceID)
        }
        if (this.orderPlaceShow === true) {
          this.orderPlaceShow = false
        } else {
          this.orderPlaceShow = true
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.useNatureShow = false
          this.carTypeShow = false
        }
      },

      // 根据预约地点 获取预约日期
      getAllYearMonthDay () {
        resultPost(getAppointmentDate, this.timeRequest).then(json => {
          console.log(json, '时间获取成功')
          let allYear = []
          let allmonth = []
          let allDay = []
          json.data.map((item, index) => {
            let yearMonthDay = item.split('-')
            if (index === 0) {
              allYear.push({'str': yearMonthDay[0]})
              allmonth.push({'str': yearMonthDay[1]})
              allDay.push({'str': yearMonthDay[2]})
            } else {
              if (allYear[allYear.length - 1].str !== yearMonthDay[0]) {
                allYear.push({'str': yearMonthDay[0]})
              }
              if (allmonth[allmonth.length - 1].str !== yearMonthDay[1]) {
                allmonth.push({'str': yearMonthDay[1]})
              }
              if (allDay[allDay.length - 1].str !== yearMonthDay[2]) {
                allDay.push({'str': yearMonthDay[2]})
              }
            }
          })
          this.years = allYear
          this.months = allmonth
          this.days = allDay
          this.getYear = allYear[0].str
          this.getMonth = allmonth[0].str
          this.getDay = allDay[0].str
          this.getDetailsTime()
        })
      },

      // 根据预约日期 获取 具体预约时间
      getDetailsTime: function () {
        let getTimesData = {
          businessTypeId: this.currentBusinessId,  // 业务类型
          orgId: this.orderPlaceID,                // 预约地点
          date: this.yearMonthDay,                              // 预约日期
          carTypeId: this.carTypeID                // 车辆类型ID
        }
        console.log('具体时间', getTimesData)
        resultPost(getAppTimes, getTimesData).then(json => {
          if (json.code === '0000') {
            let timeData = []
            json.data.map(item => {
              timeData.push({'time': item.apptime, 'leftNum': item.maxnumber - item.yetnumber})
            })
            this.orderDetailsTime = timeData
          } else {
            Toast({message: json.msg, className: 'white', duration: 1500})
          }
        })
      },

      // 选择年
      yearClick: function (str) {
        if (str) {
          this.getYear = str
          this.getDetailsTime()
        }
        this.monthShow = false
        this.dayShow = false
        if (this.yearShow === true) {
          this.yearShow = false
        } else {
          this.yearShow = true
        }
      },

      // 选择月
      monthClick: function (str) {
        if (str) {
          this.getMonth = str
          this.getDetailsTime()
        }
        this.yearShow = false
        this.dayShow = false
        if (this.monthShow === true) {
          this.monthShow = false
        } else {
          this.monthShow = true
        }
      },

      // 选择日
      dayClick: function (str) {
        if (str) {
          this.getDay = str
          this.getDetailsTime()
        }
        this.monthShow = false
        this.yearShow = false
        if (this.dayShow === true) {
          this.dayShow = false
        } else {
          this.dayShow = true
        }
      },

      // 选择预约时间 添加 选中样式
      selectOrderTime: function (index) {
        this.activeIndex = index
        if (this.orderDetailsTime[index].leftNum === 0) {
          return
        }
        this.selectDetailTime = this.orderDetailsTime[index].time
      },

      // 获取验证码
      getVerification: function () {
        let time = 60
        let phonedata = {
          mobile: this.userTelphone,         // 手机号码
          idType: this.cardID,               // 证件id
          lx: '1',                           // 业务类型 (机动车业务)
          bookerType: this.orderWay,         // 预约方式
          bookerName: this.name,             // 预约人名字
          bookerIdNumber: window.localStorage.getItem('identityCard'),  // 预约人身份证号码
          idNumber: this.cardNum,            // 本次预约业务填写的证件号码
          codes: this.currentBusinessCode    // 业务类型 code
        }
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.userTelphone))) {
          Toast({message: '请输入正确的手机号码', className: 'white'})
        } else {
          this.getValidCodeMsg = `${time}s`
          this.isdisabled = true
          countDown(this)
          resultPost(simpleSendMessage, phonedata).then(json => {
            if (json.code === '0000') {
              Toast({ message: '验证码已发送，请查收', className: 'white', duration: 1500 })
            } else {
              Toast({ message: json.msg, className: 'white', duration: 1500 })
            }
          })
        }
        function countDown (that) {
          setTimeout(() => {
            if (time === 0) {
              that.isdisabled = false
              that.getValidCodeMsg = '发送验证码'
            } else {
              time--
              that.getValidCodeMsg = `${time}s`
              countDown(that)
            }
          }, 1000)
        }
      },

      // 预约 点击事件
      appointTaskClick () {
        if (this.judgeInput()) {
          let reqData = {
            businessTypeId: this.currentBusinessId, // 预约类型 id
            name: this.carOwnerName,                // 车主姓名
            idTypeId: this.cardID,                  // 证件种类 id
            idNumber: this.cardNum,                 // 证件号码
            mobile: window.localStorage.getItem('mobilePhone'),                   // 手机号
            msgNumber: this.validCode,                   // 验证码
            orgId: this.orderPlaceID,               // 预约地点 id
            appointmentDate: this.yearMonthDay,     // 预约日期
            appointmentTime: this.selectDetailTime, // 预约具体时间
            bookerName: window.localStorage.getItem('userName'),               // 预约车主姓名
            bookerIdNumber: window.localStorage.getItem('identityCard'),       // 预约人身份证号码
            bookerType: this.orderWay,              // 预约方式
            bookerMobile: this.userTelphone         // 获取验证码 手机号
          }
          this.$emit('appointTaskClick', reqData, this.orderPlaceValue)
        }
      },

      // 获取证件 id
      getCardId () {
        let cardCodeReq = {
          code: this.cardCode,
          businessTypeId: this.currentBusinessId
        }
        resultPostNoLoading(getIdTypeId, cardCodeReq).then(json => {   // 根据证件类型Code获取证件类型Id
          if (json.code === '0000') {
            this.cardID = json.data
            console.log('证件类型id', this.cardID)
          } else {
            Toast({ message: json.msg, className: 'white', duration: 1500 })
          }
        })
      },

      // 非空 or 错误判断
      judgeInput () {
        if (specialCharacters(this.carOwnerName)) {
          Toast({ message: '车主姓名不能含有特殊字符', className: 'white', duration: 1500 })
          return false
        } else if (!this.carOwnerName) {
          Toast({ message: '请输入车主姓名', className: 'white', duration: 1500 })
          return false
        } else if (!this.cardNum) {
          Toast({ message: '证件号码不能为空', className: 'white', duration: 1500 })
          return false
        } else if (!isPhone(this.userTelphone)) {
          Toast({ message: '手机号码格式不正确', className: 'white', duration: 1500 })
          return false
        } else if (!this.validCode) {
          Toast({ message: '请输入验证码', className: 'white', duration: 1500 })
          return false
        }
        return true
      },

      // 不显示 select下拉框
      dontShowUL () {
        this.cardSelectShow = false
        this.orderPlaceShow = false
        this.carTypeShow = false
        this.typeSelectShow = false
      }
    },
    created () {
      document.addEventListener('click', this.dontShowUL)
    },
    destroyed () {
      document.removeEventListener('click', this.dontShowUL)
    }
  }
</script>
<style lang="less">
  @import '../../../../../style/orderAlter';
</style>
