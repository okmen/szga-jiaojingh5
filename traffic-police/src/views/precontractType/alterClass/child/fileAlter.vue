<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
  <div class="order-alter-class">
    <ul class="alter-hbs-list">
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>车主姓名</span>
        </div>
        <div class="alter-hbs-text">
          <input class="text-input" maxlength="10" placeholder="请输入车主姓名">
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>证件名称</span>
        </div>
        <div class="div-select">
          <span class="btn-select" @click.stop="cardSelectClick()">{{ cardMassage }}</span>
          <div class="div-select-ul" v-if="cardSelectShow">
            <ul>
              <li v-for="(item, index) in cardSelectData" @click.stop="cardSelectClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>证件号码</span>
        </div>
        <div class="alter-hbs-text">
          <input class="text-input" type="text" maxlength="19" placeholder="请输入证件号码">
        </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>手机号码</span>
        </div>
        <div class="alter-hbs-text">
          <input class="text-input" v-model="userTelphone" type="tel" maxlength="11" placeholder="请输入您的手机号码">
        </div>
      </li>
      <li class="alter-hbs-item clear">
        <div class="alter-hbs-name">
          <span>验证码</span>
        </div>
        <div class="alter-hbs-text width-60 left">
          <input class="text-input" type="tel" maxlength="6" v-model="validCode" placeholder="请输入验证码">
        </div>
        <div class="left alter-hbs-code">
          <button class="verifyButton" type="button" name="button" @click.stop="getVerification()"
            :class="{disabled: isdisabled}" :disabled="this.isdisabled">{{getValidCodeMsg}}
          </button>
        </div>
      </li>
      <li class="alter-hbs-item clear">
        <div class="alter-hbs-name">
          <span>号牌号码</span>
        </div>
        <div class="div-select width-120 left">
          <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
          <div class="div-select-ul" v-if="abbreviationSelectShow">
            <ul>
              <li v-for="item in abbreviationSelectData" @click.stop = "abbreviationSelectClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        <div class="alter-hbs-text width-70 right">
          <input class="text-input" placeholder="请输入车牌号码" type="text" maxlength="10">
        </div>
      </li>
      <li class="alter-hbs-item clear">
          <div class="alter-hbs-name">
            <span>车辆类型</span>
          </div>
          <div class="alter-hbs-text">
            <input class="text-input" type="text" value="" readonly/>
          </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>使用性质</span>
        </div>
        <div class="div-select">
          <span class="btn-select" @click.stop="useNatureClick()">{{ useNatureMassage }}</span>
          <div class="div-select-ul" v-if="useNatureShow">
            <ul>
              <li v-for="(item, index) in useNatureData" @click.stop="useNatureClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-hbs-item clear">
          <div class="alter-hbs-name">
            <span>车身架号</span>
          </div>
          <div class="alter-hbs-text">
            <input class="text-input" type="text" value="" placeholder="请输入车架号后四位" />
          </div>
      </li>
      <li class="alter-hbs-item">
        <div class="alter-hbs-name">
          <span>预约地点</span>
        </div>
        <div class="div-select">
          <span class="btn-select" @click.stop="orderPlaceClick()">{{ orderPlaceMassage }}</span>
          <div class="div-select-ul" v-if="orderPlaceShow">
            <ul>
              <li v-for="(item, index) in orderPlaceData" @click.stop="orderPlaceClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="alter-item pad-0">
        <p>选择预约日期</p>
      </li>
      <li class="alter-item pad-0 flex">
        <input type="text" class="text-input year" v-model:value="getYear" readonly>
        <!-- <div class="div-select year"> -->
          <!-- <span class="btn-select">{{getYear}}</span> -->
          <!-- <div class="div-select-ul" v-if="yearShow">
            <ul>
                <li v-for="item in years" @click.stop="yearClick(item)">{{item}}</li>
              </ul>
          </div> -->
        <!-- </div> -->
        年
        <input type="text" class="text-input month" v-model:value="getMonth" readonly>
        <!-- <div class="div-select month"> -->
          <!-- <span class="btn-select">{{getMonth}}</span> -->
          <!-- <div class="div-select-ul" v-if="monthShow">
            <ul>
                <li v-for="item in months" @click.stop="monthClick(item)">{{item}}</li>
              </ul>
          </div> -->
        <!-- </div> -->
        月
        <input type="text" class="text-input date" v-model:value="getDate" readonly>
        <!-- <div class="div-select date"> -->
          <!-- <span class="btn-select" @click.stop="dateClick()">{{getDate}}</span> -->
          <!-- <div class="div-select-ul" v-if="dateShow">
            <ul>
                <li v-for="item in dates" @click.stop="dateClick(item)">{{item}}</li>
              </ul>
          </div> -->
        <!-- </div> -->
        日
      </li>
    </ul>
    <ul class="alter-detail">
      <li class="alter-item">
        <p>2017-88-98</p>
        <p>已满</p>
        <p>剩余名额<span class="yy_yysl">555</span>位</p>
      </li>
    </ul>
    <div class="alter-button-box">
      <button class="btn alterButton">预约</button>
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../../../service/getData'
  import { sendSMS } from '../../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        cardMassage: '居民户口簿',          // 证件名称 选中值
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
        userTelphone: '',                   // 手机号
        validCode: '',
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        abbreviationSelectMassage: '粤',    // 车牌号 选中值
        abbreviationSelectShow: false,      // 是否显示 车牌号 ul列表
        abbreviationSelectData: [           // 车牌号  li
          { 'str': '粤' },
          { 'str': '鄂' },
          { 'str': '豫' },
          { 'str': '皖' },
          { 'str': '赣' },
          { 'str': '冀' },
          { 'str': '鲁' },
          { 'str': '浙' },
          { 'str': '苏' },
          { 'str': '湘' },
          { 'str': '闽' },
          { 'str': '蒙' },
          { 'str': '京' },
          { 'str': '辽' },
          { 'str': '渝' },
          { 'str': '沪' },
          { 'str': '陕' },
          { 'str': '川' },
          { 'str': '黑' },
          { 'str': '晋' },
          { 'str': '桂' },
          { 'str': '吉' },
          { 'str': '宁' },
          { 'str': '贵' },
          { 'str': '琼' },
          { 'str': '甘' },
          { 'str': '青' },
          { 'str': '津' },
          { 'str': '云' },
          { 'str': '藏' },
          { 'str': '新' }
        ],
        useNatureMassage: '非运营',         // 使用性质 选中值
        useNatureShow: false,               // 是否显示 使用性质 ul列表
        useNatureData: [                    // 使用性质 li
          { 'str': '非运营' },
          { 'str': '公路客运' },
          { 'str': '公交客运' },
          { 'str': '旅游客运' },
          { 'str': '货运' },
          { 'str': '租赁' }
        ],
        orderPlaceMassage: '深圳市车管所',  // 预约地点 选中值
        orderPlaceShow: false,              // 是否显示 预约地点 ul列表
        orderPlaceData: [
          { 'str': '深圳市车管所' }
        ],
        getYear: '',
        getMonth: '',
        getDate: ''
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
        }
      },

      // 号牌 选择
      abbreviationSelectClick: function (str, index) {
        if (str) {
          this.abbreviationSelectMassage = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        } else {
          this.abbreviationSelectShow = true
          this.cardSelectShow = false
          this.useNatureShow = false
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
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.orderPlaceShow = false
        }
      },

      // 预约地点 选择
      orderPlaceClick: function (str, index) {
        if (str) {
          this.orderPlaceMassage = str
        }
        if (this.orderPlaceShow === true) {
          this.orderPlaceShow = false
        } else {
          this.orderPlaceShow = true
          this.cardSelectShow = false
          this.abbreviationSelectShow = false
          this.useNatureShow = false
        }
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
          Toast({
            message: '请输入正确的手机号码',
            position: 'bottom',
            className: 'white',
            duration: 1500
          })
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
      }
    },
    created () {
      document.addEventListener('click', (e) => {
        this.cardSelectShow = false
        this.abbreviationSelectShow = false
        this.useNatureShow = false
        this.orderPlaceShow = false
      })
    }
  }
</script>
<style lang="less">
  @import '../../../../style/orderAlter';
</style>
