<!-- 
* 公共部分
* 标星(*) 注释 为 接口所需参数
 -->
<template>
  <div class="order-alter-class">
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
              <li v-for="(item, index) in cardSelectData" @click.stop="cardSelectClick(item.str, index)">{{item.str}}</li>
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
                  @click.stop="carTypeClick(item.str, item.id)">{{item.str}}</li>
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
              <li v-for="(item, index) in useNatureData" @click.stop="useNatureClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-hbs-item clear">
          <div class="alter-hbs-name"><span>车身架号</span></div>
          <div class="alter-hbs-text">
            <input class="text-input bg-white" type="text" v-model="VIN" placeholder="请输入车架号后四位" />
          </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name"><span>预约地点</span></div>
        <div class="div-select">
          <span class="btn-select bg-white" @click.stop="orderPlaceClick()">{{ orderPlaceValue }}</span>
          <div class="div-select-ul" v-if="orderPlaceShow">
            <ul>
              <li v-for="(item, index) in orderPlaceData" @click.stop="orderPlaceClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-item pad-0"><p class="alter-order-date">选择预约日期</p></li>
      <li class="alter-item pad-0 flex">
        <input type="text" class="text-input year" v-model="getYear" readonly>
        年
        <div class="div-select month">
          <span class="btn-select">{{getMonth}}</span>
          <div class="div-select-ul" v-if="monthShow">
            <ul>
              <li v-for="item in months" @click.stop="monthClick(item)">{{item}}</li>
            </ul>
          </div>
        </div>
        月
        <div class="div-select date">
          <span class="btn-select" @click.stop="dateClick()">{{getDate}}</span>
          <div class="div-select-ul" v-if="dateShow">
            <ul>
              <li v-for="item in dates" @click.stop="dateClick(item)">{{item}}</li>
            </ul>
          </div>
        </div>
        日
      </li>
    </ul>
    <ul class="alter-detail">
      <li class="alter-detail-time" v-for="(item, index) in orderTime" @click="selectOrderTime(index)"
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
  import { resultPost } from '../../../../../service/getData'
  import {isPhone, specialCharacters, plateNumberDetection} from '../../../../../service/regExp.js'
  import { sendSMS, getBusinessCarTypeId } from '../../../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  export default {
    props: ['orderPlaceData', 'currentBusinessId'],
    data () {
      return {
        carOwnerName: '',                   // * 车主姓名
        cardNum: '',                        // * 证件号码
        cardMassage: '居民户口簿',          // * 证件名称 选中值
        cardSelectShow: false,              // 是否显示 证件名称 ul列表
        cardSelectData: [                   // 证件名称 li
          { 'str': '居民户口簿' },
          { 'str': '单位注销证明' },
          { 'str': '驻华机构证明' },
          { 'str': '个体工商营业执照注册' },
          { 'str': '居住暂住证明' },
          { 'str': '临时居民身份证' },
          { 'str': '军官证' },
          { 'str': '军官离退休证' },
          { 'str': '外交人员身份证明' },
          { 'str': '士兵证' },
          { 'str': '境外人员身份证明' },
          { 'str': '统一社会信用代码' },
          { 'str': '组织机构代码证书' }
        ],
        userTelphone: '',                   // * 手机号
        validCode: '',                      // * 验证码
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        abbreSelectValue: '粤',             // * 车牌号 选中值
        carCardNum: '',                     // * 车牌号码
        abbreviationSelectShow: false,      // 是否显示 车牌号 ul列表
        abbreviationSelectData: [           // 车牌号  li
          { 'str': '粤' }, { 'str': '鄂' }, { 'str': '豫' }, { 'str': '皖' },
          { 'str': '赣' }, { 'str': '冀' }, { 'str': '鲁' }, { 'str': '浙' },
          { 'str': '苏' }, { 'str': '湘' }, { 'str': '闽' }, { 'str': '蒙' },
          { 'str': '京' }, { 'str': '辽' }, { 'str': '渝' }, { 'str': '沪' },
          { 'str': '陕' }, { 'str': '川' }, { 'str': '黑' }, { 'str': '晋' },
          { 'str': '桂' }, { 'str': '吉' }, { 'str': '宁' }, { 'str': '贵' },
          { 'str': '琼' }, { 'str': '甘' }, { 'str': '青' }, { 'str': '津' },
          { 'str': '云' }, { 'str': '藏' }, { 'str': '新' }
        ],
        carTypeMassage: '大型汽车',         // 车辆类型 选中值
        carTypeID: '',                    // * 车辆类型 选中值 id
        carTypeShow: false,                 // 是否显示 车辆类型 ul列表
        carTypeData: [                      // 车辆类型 li列表
          { 'id': '01', 'str': '大型汽车(黄色)' },
          { 'id': '02', 'str': '小型汽车(蓝色)' },
          { 'id': '03', 'str': '使馆汽车' },
          { 'id': '04', 'str': '领馆汽车' },
          { 'id': '05', 'str': '境外汽车' },
          { 'id': '06', 'str': '外籍汽车(黑色)' },
          { 'id': '07', 'str': '普通摩托车' },
          { 'id': '08', 'str': '轻便摩托车' },
          { 'id': '09', 'str': '使馆摩托车' },
          { 'id': '10', 'str': '领馆摩托车' },
          { 'id': '15', 'str': '挂车' },
          { 'id': '16', 'str': '教练汽车' },
          { 'id': '17', 'str': '教练摩托车' },
          { 'id': '18', 'str': '实验汽车' },
          { 'id': '19', 'str': '实验摩托车' },
          { 'id': '22', 'str': '临时行驶车' },
          { 'id': '23', 'str': '警用汽车' },
          { 'id': '24', 'str': '警用摩托' },
          { 'id': '20', 'str': '临时入境车' },
          { 'id': '51', 'str': '新能源大型车' },
          { 'id': '52', 'str': '新能源小型车' }
        ],
        useNatureMassage: '非运营',         // * 使用性质 选中值
        useNatureShow: false,               // 是否显示 使用性质 ul列表
        useNatureData: [                    // 使用性质 li
          { 'str': '非运营' },
          { 'str': '公路客运' },
          { 'str': '公交客运' },
          { 'str': '旅游客运' },
          { 'str': '货运' },
          { 'str': '租赁' }
        ],
        VIN: '',                            // * 车架号
        orderPlaceValue: '深圳市车管分所',  // * 预约地点 选中值
        orderPlaceShow: false,              // 是否显示 预约地点 ul列表
        getYear: new Date().getFullYear(),  // * 年
        getMonth: '2',                      // * 月
        getDate: '22',                      // * 日
        monthShow: false,
        dateShow: false,
        months: ['1', '2', '3'],
        dates: ['2', '31'],
        orderTime: [
          {'time': '9:00 - 10:00', 'leftNum': 0},
          {'time': '10:00 - 11:00', 'leftNum': 80},
          {'time': '11:00 - 12:00', 'leftNum': 60},
          {'time': '14:00 - 15:00', 'leftNum': 40},
          {'time': '15:00 - 16:00', 'leftNum': 0},
          {'time': '16:00 - 17:00', 'leftNum': 20},
          {'time': '17:00 - 18:00', 'leftNum': 0}
        ],
        activeIndex: ''                     // 当前点击时间的li
      }
    },
    mounted () {
    },
    watch: {
      currentBusinessId (val) {    // 从业务选择接收的 当前选择的业务 id
        console.log(val)
      }
    },
    methods: {
      // 证件名称 选择
      cardSelectClick: function (str, index) {
        if (str) {
          this.cardMassage = str
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
      carTypeClick: function (str, code) {
        if (str && code) {
          this.carTypeMassage = str   // 选中车辆 value
          resultPost(getBusinessCarTypeId, { code: code }).then(json => {
            if (json.code === '0000') {
              this.carTypeID = json.data
              console.log('车辆类型id', this.carTypeID)
            } else {
              Toast({ message: json.msg, className: 'white', duration: 1500 })
            }
          })
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
      useNatureClick: function (str, index) {
        if (str) {
          this.useNatureMassage = str
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

      // 预约地点 选择
      orderPlaceClick: function (str, index) {
        if (str) {
          this.orderPlaceValue = str
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

      // 选择月
      monthClick: function (item) {
        console.log('选择月')
      },

      // 选择日
      dateClick: function (item) {
        console.log('选择日')
      },

      // 选择预约时间
      selectOrderTime: function (index) {
        this.activeIndex = index
      },

      // 获取验证码
      getVerification: function () {
        let sendPhoneNumber = {
          mobilephone: this.userTelphone,
          businessType: 'szjj'
        }
        let time = 30
        if (/^1[34578]\d{9}$/.test(this.userTelphone)) {
          this.getValidCodeMsg = `已发送（${time}）`
          this.isdisabled = true
          countDown(this)
          resultPost(sendSMS, sendPhoneNumber).then(json => {
            if (json.code === '0000') {
              Toast({
                message: '验证码已发送，请查收',
                position: 'bottom',
                className: 'white',
                duration: 1500
              })
            }
          })
        } else {
          Toast({ message: '请输入正确的手机号码', className: 'white', duration: 1500 })
        }
        function countDown (that) {
          setTimeout(() => {
            if (time === 0) {
              that.isdisabled = false
              that.getValidCodeMsg = '发送验证码'
            } else {
              time--
              that.getValidCodeMsg = `已发送（${time}）`
              countDown(that)
            }
          }, 1000)
        }
      },

      // 预约 点击事件
      appointTaskClick () {
        if (this.judgeInput()) {
          let reqData = {
            name: this.carOwnerName,                // 车主姓名
            idCardName: this.cardMassage,           // 证件名称
            idCardNumber: this.cardNum,             // 证件号码
            mobilephone: this.userTelphone,         // 手机号
            verify: this.validCode,                 // 验证码
            abbreviation: this.abbreSelectValue,    // 车牌类型
            abbreVaule: this.carCardNum,            // 车牌号码
            carType: this.carTypeMassage,           // 车辆类型
            useNature: this.useNatureMassage,       // 使用性质
            vin: this.VIN,                          // 车架号
            appointPlace: this.orderPlaceValue,     // 预约地点
            orderYear: this.getYear,                // 预约时间 年
            orderMonth: this.getMonth,              // 预约时间 月
            orderDate: this.getDate                 // 预约时间 日
          }
          this.$emit('appointTaskClick', reqData)
        }
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
        } else if (!plateNumberDetection(this.abbreSelectValue + this.carCardNum.toUpperCase())) {
          Toast({ message: '车牌号码格式不正确', className: 'white', duration: 1500 })
          return false
        } else if (!this.VIN) {
          Toast({ message: '请输入车架号后四位', className: 'white', duration: 1500 })
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
