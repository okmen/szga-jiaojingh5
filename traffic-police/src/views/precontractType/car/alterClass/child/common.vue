<!--
* 公共部分
* 标星(*) 注释 为 接口所需参数
 -->
<template>
  <div class="order-alter-class" id="orderAlterClass">
    <div class="alter-select pad-side-50">
      <div class="alter-chose"><span>业务类型</span></div>
      <div class="div-select alter-wd"><span>{{currentBusinessName}}</span></div>
    </div>
    <!-- 列表 -->
    <div class="alter-hbs-list pad-side-50">
      <ul>
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
                <li v-for="(item, index) in cardSelectData" card-id="item.id"
                    @click.stop="cardSelectClick(item.name, item.id)">{{item.name}}</li>
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
          <div class="alter-hbs-name"><span>预约方式</span></div>
          <div class="div-select">
            <span class="btn-select bg-white" @click.stop="bookerClick()">{{ bookerValer }}</span>
            <div class="div-select-ul" v-if="bookerShow">
              <ul>
                <li v-for="(item, index) in bookerData" use-id="item.id"
                    @click.stop="bookerClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="alter-hbs-item" v-if="this.bookerValerID === '1'">
          <div class="alter-hbs-name"><span>代办人姓名</span></div>
          <div class="alter-hbs-text">
            <input class="text-input bg-white" v-model="bookerName" placeholder="请输入代办人姓名">
          </div>
        </li>
        <li class="alter-hbs-item" v-if="this.bookerValerID === '1'">
          <div class="alter-hbs-name"><span>代办人证件号</span></div>
          <div class="alter-hbs-text">
            <input class="text-input bg-white" v-model="bookerID" placeholder="请输入代办人证件号">
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
        <li class="alter-hbs-item clear">
          <div class="alter-hbs-name"><span>车牌号码</span></div>
          <div class="div-select bg-white width-120 left">
            <span class="btn-select bg-white min-btn-select"
                  @click.stop="abbreviationSelectClick()">{{ abbreSelectValue }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop = "abbreviationSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="alter-hbs-text width-70 right">
            <input class="text-input bg-white" placeholder="请输入车牌号码" v-model="carCardNum" type="text" maxlength="10">
          </div>
        </li>
        <li class="alter-hbs-item clear">
          <div class="alter-hbs-name"><span>车辆类型</span></div>
          <div class="div-select">
            <span class="btn-select bg-white" @click.stop="carTypeClick()">{{ carTypeMassage }}</span>
            <div class="div-select-ul" v-if="carTypeShow">
              <ul>
                <li v-for="(item, index) in carTypeData" car-code="item.id"
                    @click.stop="carTypeClick(item.name, item.id)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="alter-hbs-item">
          <div class="alter-hbs-name"><span>使用性质</span></div>
          <div class="div-select">
            <span class="btn-select bg-white" @click.stop="useNatureClick()">{{ useNatureMassage }}</span>
            <div class="div-select-ul" v-if="useNatureShow">
              <ul>
                <li v-for="(item, index) in useNatureData" use-id="item.id"
                    @click.stop="useNatureClick(item.name, item.id)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="alter-hbs-item clear">
            <div class="alter-hbs-name"><span>车身架号</span></div>
            <div class="alter-hbs-text">
              <input class="text-input bg-white" maxlength="4" type="text" v-model="VIN" placeholder="请输入车架号后四位" />
            </div>
        </li>
        <li class="alter-hbs-item">
          <div class="alter-hbs-name"><span>预约地点</span></div>
          <div class="div-select">
            <span class="btn-select bg-white" @click.stop="orderPlaceClick()">{{ orderPlaceValue }}</span>
            <div class="div-select-ul" v-if="orderPlaceShow">
              <ul>
                <li v-for="item in appointPlaceData" place-id="item.id"
                    @click.stop="orderPlaceClick(item.name, item.id, item.description)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="alter-hbs-item">
          <div class="alter-hbs-name"><span>预约日期</span></div>
          <div class="div-select">
            <input class="btn-select bg-white" type="text" readonly placeholder="请选择预约日期"
                   @click.stop="dateClick()" v-model="orderAllDate"/>
            <div class="div-select-ul date-style" v-if="dateShow">
              <ul>
                <li v-for="(item, index) in orderAllDateData" @click.stop="dateClick(item, index)">{{item}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="alter-hbs-item">
          <div class="alter-hbs-name"><span>预约时间</span></div>
          <div class="div-select">
            <input class="btn-select bg-white" type="text" readonly placeholder="请选择预约时间"
                  @click.stop="selectOrderTime()" v-model="selectDetailTime">
            <div class="div-select-ul date-style" v-if="detailTimeShow">
              <ul>
                <li class="alter-detail-time" v-for="(item, index) in orderDetailsTime"
                    @click="selectOrderTime(item.time, index, item.leftNum)"
                    :class="{'time-full': item.leftNum === 0, 'active': index === activeIndex && item.leftNum !== 0}">
                  <p>{{item.time}}</p>
                  <p v-if="item.leftNum === 0">已满</p>
                  <p v-else="item.leftNum !== 0">剩余名额<span class="yy_yysl">{{item.leftNum}}</span>位</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <div class="alter-button-box">
        <button class="btn alterButton" @click="appointTaskClick">预 约</button>
      </div>
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../../../../service/getData'
  import { isPhone, specialCharacters, plateNumberDetection } from '../../../../../service/regExp.js'
  import { simpleSendMessage,
           getPageInit,
           getAppointmentDate,
           getAppTimes } from '../../../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  export default {
    props: ['currentBusinessId', 'currentBusinessCode', 'currentBusinessName'],
    data () {
      return {
        carOwnerName: '',                   // * 车主姓名
        cardNum: '',                        // * 证件号码
        cardMassage: '',                    // 证件名称 选中值
        cardID: '',                         // * 证件名称 选中 id
        cardSelectShow: false,              // 是否显示 证件名称 ul列表
        cardSelectData: [],                 // 证件名称 li
        userTelphone: '',                   // * 手机号
        validCode: '',                      // * 验证码
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        abbreSelectValue: '粤',             // * 车牌号 选中值
        carCardNum: '',                     // * 车牌号码
        abbreviationSelectShow: false,      // 是否显示 车牌号 ul列表
        abbreviationSelectData: [           // 车牌号  li
          { 'str': '粤' }
        ],
        carTypeMassage: '',                 // * 车辆类型 选中值
        carTypeID: '',                      // * 车辆类型 选中值 id
        carTypeShow: false,                 // 是否显示 车辆类型 ul列表
        carTypeData: [],                    // 车辆类型 li列表
        useNatureMassage: '',               // * 使用性质 选中值
        useNatureID: '',
        useNatureShow: false,               // 是否显示 使用性质 ul列表
        useNatureData: [],                  // 使用性质 li
        VIN: '',                            // * 车架号
        orderPlaceValue: '',                // * 预约地点 选中值
        orderPlaceAddress: '',              // * 预约地点 address
        orderPlaceID: '',                   // * 预约地点 选中 id
        orderPlaceShow: false,              // 是否显示 预约地点 ul列表
        appointPlaceData: [],               // 预约地点 li
        dateShow: false,
        orderAllDate: '',                   // 获取 年月日 值
        orderAllDateData: [],               // 获取 日期 li
        orderDetailsTime: [],               // 预约 具体时间 li
        detailTimeShow: false,
        activeIndex: '',                    // 当前点击时间的li
        selectDetailTime: '',               // * 选择的具体时间
        orderWay: '',                       // * 预约方式
        bookerName: '',                     // 代办人姓名
        bookerID: '',                        // 代办人证件号
        bookerData: [
          {
            id: '0',
            str: '本人'
          },
          {
            id: '1',
            str: '代办'
          }
        ],
        bookerValer: '本人',
        bookerShow: false,
        bookerValerID: '0'
      }
    },
    mounted () {
    },
    computed: {
      // 获取 预约日期 请求参数
      timeRequest () {
        return {
          businessTypeId: this.currentBusinessId,
          orgId: this.orderPlaceID   // 预约地点
        }
      },
      // 获取 具体时间 参数
      getTimesData () {
        return {
          businessTypeId: this.currentBusinessId,    // 业务类型
          orgId: this.orderPlaceID,                  // 预约地点
          date: this.orderAllDate,                   // 预约日期
          carTypeId: this.carTypeID                  // 车辆类型ID
        }
      }
    },
    watch: {
      currentBusinessId (val) {
        console.log('业务ID', val)
        this.initData()
      },
      currentBusinessCode (val) {
        console.log('业务code', val)
      },
      carTypeID () {      // 当车辆类型改变的时候 清空预约时间
        this.selectDetailTime = ''
        this.orderDetailsTime = []
      },
      orderPlaceID () {   // 当预约地点改变的时候 清空预约日期和预约时间
        this.orderAllDate = ''
        this.orderAllDateData = []
        this.selectDetailTime = ''
        this.orderDetailsTime = []
      },
      orderAllDate () {   // 预约日期改变的时候 清空预约时间
        this.selectDetailTime = ''
        this.orderDetailsTime = []
      }
    },
    methods: {
      // 初始化页面 证件，车辆类型，使用性质
      initData () {
        let init = {
          businessTypeId: this.currentBusinessId,
          type: '1'
        }
        resultPost(getPageInit, init).then(json => {
          console.log(json)
          if (json.code === '0000') {
            if (json.data) {
              // 证件 id name
              this.cardSelectData = json.data.idTypeVOs
              this.cardMassage = this.cardSelectData[0].name
              this.cardID = this.cardSelectData[0].id
              console.log(this.cardMassage + this.cardID)
              // 车辆类型 id name
              this.carTypeData = json.data.carTypeVOs
              this.carTypeMassage = this.carTypeData[0].name
              this.carTypeID = this.carTypeData[0].id
              console.log(this.carTypeMassage + this.carTypeID)
              // 使用性质
              this.useNatureData = json.data.useCharaters
              this.useNatureMassage = this.useNatureData[0].name
              this.useNatureID = this.useNatureData[0].id
              // 预约地点 id name address
              this.appointPlaceData = json.data.orgVOs
              this.orderPlaceValue = this.appointPlaceData[0].name
              this.orderPlaceID = this.appointPlaceData[0].id
              this.orderPlaceAddress = this.appointPlaceData[0].description
            }
          }
        })
      },

      // 证件名称 选择
      cardSelectClick: function (str, id) {
        if (str) {
          this.cardMassage = str
          this.cardID = id
          console.log('证件id', this.cardID)
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

      // 号牌 选择
      abbreviationSelectClick: function (str, index) {
        if (str) {
          this.abbreSelectValue = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        } else {
          this.abbreviationSelectShow = true
          this.cardSelectShow = false
          this.useNatureShow = false
          this.orderPlaceShow = false
          this.carTypeShow = false
        }
      },

      // 车辆选择
      carTypeClick: function (str, id) {
        if (str) {
          this.carTypeMassage = str
          this.carTypeID = id
        }
        if (this.carTypeShow === true) {
          this.carTypeShow = false
        } else {
          this.carTypeShow = true
          this.useNatureShow = false
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.orderPlaceShow = false
        }
      },

      // 使用性质 选择
      useNatureClick: function (str, id) {
        if (str) {
          this.useNatureMassage = str
          this.useNatureID = id
          console.log(id, '使用性质')
        }
        if (this.useNatureShow === true) {
          this.useNatureShow = false
        } else {
          this.useNatureShow = true
          this.carTypeShow = false
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.orderPlaceShow = false
        }
      },
      // 是否代办 选择
      bookerClick: function (str, id) {
        if (str) {
          this.bookerValer = str
          this.bookerValerID = id
        }
        if (id === '0') {
          this.bookerName = ''
          this.bookerID = ''
        }
        if (this.bookerShow === true) {
          this.bookerShow = false
        } else {
          this.bookerShow = true
          this.carTypeShow = false
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.orderPlaceShow = false
        }
      },
      // 预约地点 选择
      orderPlaceClick: function (str, placeID, address) {
        if (str) {
          this.orderPlaceValue = str
          this.orderPlaceID = placeID
          this.orderPlaceAddress = address.replace(/<(?!\/?img.+?>)[^<>]*>/gi, '')
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
      getOrderDate () {
        resultPost(getAppointmentDate, this.timeRequest).then(json => {
          console.log(json, '时间获取成功')
          if (json.code === '0000') {
            this.orderAllDateData = json.data
            this.dateShow = true
          } else {
            Toast({message: json.msg, className: 'white', duration: 1500})
          }
        })
      },

      // 选择日期
      dateClick: function (item, index) {
        if (!item && !this.orderAllDate) {  // 当有日期的时候再点击选择日期 不调接口
          this.getOrderDate()
        }
        if (item) {
          this.orderAllDate = item
          console.log(this.orderAllDate)
        }
        if (this.dateShow === true) {
          this.dateShow = false
        } else if (this.dateShow === false && this.orderAllDate) {
          this.dateShow = true
          this.detailTimeShow = false
        }
      },

      // 根据预约日期 获取 具体预约时间
      getDetailsTime: function () {
        resultPost(getAppTimes, this.getTimesData).then(json => {
          if (json.code === '0000') {
            let detailData = []
            json.data.map(item => {
              detailData.push({'time': item.apptime, 'leftNum': item.maxnumber - item.yetnumber})
            })
            this.orderDetailsTime = detailData
            this.detailTimeShow = true
          } else {
            this.orderDetailsTime = ''
            Toast({message: json.msg, className: 'white', duration: 1500})
          }
        })
      },

      // 选择预约时间
      selectOrderTime: function (time, index, leftNum) {
        if (!this.orderAllDate) {
          Toast({message: '请先选择预约日期', className: 'white', duration: 2000})
          return
        }
        if (leftNum === 0) {
          Toast({message: '当前预约日期已满，请选择其它时间', className: 'white', duration: 2000})
          return
        }
        if (!time && !this.selectDetailTime) {  // 当有时间的时候再点击选择日期 不调接口
          this.getDetailsTime()
        }
        if (time) {
          this.activeIndex = index
          this.selectDetailTime = time
        }
        if (this.detailTimeShow === true) {
          this.detailTimeShow = false
        } else if (this.detailTimeShow === false && this.selectDetailTime) {
          this.detailTimeShow = true
          this.dateShow = false
        }
      },

      // 获取验证码
      getVerification: function () {
        // this.orderType()
        let time = 60
        let phonedata = {
          mobile: this.userTelphone,         // 手机号码
          idType: this.cardID,               // 证件id
          lx: '2',                           // 业务类型 (机动车业务)
          bookerType: this.bookerValerID,         // 预约方式
          // bookerName: this.bookerValerID === '0' ? window.localStorage.getItem('userName') : this.bookerName,           // 预约人名字
          // bookerIdNumber: this.bookerValerID === '0' ? window.localStorage.getItem('identityCard') : this.bookerID,  // 预约人身份证号码
          bookerName: this.bookerValerID === '0' ? this.carOwnerName : this.bookerName,           // 预约人名字
          bookerIdNumber: this.bookerValerID === '0' ? this.cardNum : this.bookerID,  // 预约人身份证号码
          idNumber: this.cardNum,            // 本次预约业务填写的证件号码
          codes: this.currentBusinessCode    // 业务类型 code
        }
        if (!isPhone(this.userTelphone)) {
          Toast({message: '请输入正确的手机号码', className: 'white'})
          return
        } else if (!this.carOwnerName) {
          Toast({ message: '请输入车主姓名', className: 'white', duration: 1500 })
          return
        } else if (!this.cardNum) {
          Toast({ message: '请输入证件号码', className: 'white', duration: 1500 })
          return
        } else if (this.bookerValerID === '1' && !this.bookerName) {
          Toast({ message: '请输入代办人姓名', className: 'white', duration: 1500 })
          return
        } else if (this.bookerValerID === '1' && !this.bookerID) {
          Toast({ message: '请输入代办人证件号', className: 'white', duration: 1500 })
          return
        } else {
          resultPost(simpleSendMessage, phonedata).then(json => {
            if (json.code === '0000') {
              this.getValidCodeMsg = `${time}s`
              this.isdisabled = true
              countDown(this)
              Toast({ message: '验证码已发送', className: 'white', duration: 1500 })
            } else {
              this.getValidCodeMsg = '发送验证码'
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
          // this.orderType()
          console.log(this.orderWay)
          let reqData = {
            businessTypeId: this.currentBusinessId, // 预约类型 id
            name: this.carOwnerName,                // 车主姓名
            idTypeId: this.cardID,                  // 证件种类 id
            idNumber: this.cardNum,                 // 证件号码
            mobile: this.userTelphone,              // 手机号
            msgNumber: this.validCode,              // 验证码
            platNumber: this.abbreSelectValue + this.carCardNum.toUpperCase(), // 车牌号
            carTypeId: this.carTypeID,              // 车辆类型 id
            carTypeName: this.carTypeMassage,       // 车辆类型 name
            useCharater: this.useNatureID,          // 使用性质
            carFrame: this.VIN,                     // 车架号
            orgId: this.orderPlaceID,               // 预约地点 id
            orgName: this.orderPlaceValue,          // 预约地点 name
            orgAddr: this.orderPlaceAddress,        // 预约地点 address
            appointmentDate: this.orderAllDate,     // 预约日期
            appointmentTime: this.selectDetailTime, // 预约具体时间
            // bookerName: window.localStorage.getItem('userName') || this.carOwnerName,    // 预约车主姓名
            // bookerIdNumber: window.localStorage.getItem('identityCard') || this.cardNum,  // 预约人身份证号码
            bookerType: this.bookerValerID,              // 预约方式
            bookerMobile: this.userTelphone,        // 获取验证码 手机号
            bookerName: this.bookerName || this.carOwnerName,            // 预约车主姓名
            bookerIdNumber: this.bookerID || this.cardNum           // 预约人身份证号码
          }
          let code = `createVehicleInfo_${this.currentBusinessCode}`  // 网约车 传参
          let bussiness = this.currentBusinessName                    // 网约车 传参
          this.$emit('appointTaskClick', reqData, code, bussiness)
        }
      },

      // 预约方式
      // orderType () {
      //   // 预约方式  0非代办（或本人） 1普通代办  2专业代办（企业代办）
      //   if (window.localStorage.getItem('userName')) {
      //     this.orderWay = this.carOwnerName === window.localStorage.getItem('userName') ? 0 : 1
      //   } else {
      //     this.orderWay = 0
      //   }
      // },

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
        } else if (this.bookerValerID === '1' && !this.bookerName) {
          Toast({ message: '请输入代办人姓名', className: 'white', duration: 1500 })
          return false
        } else if (this.bookerValerID === '1' && !this.bookerID) {
          Toast({ message: '请输入代办人证件号', className: 'white', duration: 1500 })
          return false
        } else if (!this.userTelphone) {
          Toast({ message: '手机号码不能为空', className: 'white', duration: 1500 })
          return false
        } else if (!isPhone(this.userTelphone)) {
          Toast({ message: '手机号码格式不正确', className: 'white', duration: 1500 })
          return false
        } else if (!this.validCode) {
          Toast({ message: '请输入验证码', className: 'white', duration: 1500 })
          return false
        } else if (!plateNumberDetection(this.abbreSelectValue + this.carCardNum.toUpperCase())) {
          Toast({ message: '车牌号码格式不正确', className: 'white', duration: 1500 })
          return false
        } else if (!this.VIN) {
          Toast({ message: '请输入车架号后四位', className: 'white', duration: 1500 })
          return false
        } else if (!this.selectDetailTime) {
          Toast({ message: '请选择预约时间', className: 'white', duration: 1500 })
          return false
        }
        return true
      },

      // 不显示 select下拉框
      dontShowUL () {
        this.cardSelectShow = false
        this.abbreviationSelectShow = false
        this.useNatureShow = false
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
