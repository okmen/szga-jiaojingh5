<template>
  <div class="renewingCollar">
    <div class="renewingCollar-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车主姓名</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" placeholder="请输入车主姓名" v-model="name"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件名称</span>
          </div>
          <div class="div-select">
            <span class="btn-select bg-colour" @click.stop="varietyID()">{{ variety }}</span>
            <div class="div-select-ul" v-if="varietyShow">
              <ul>
                <li v-for="item in varietyData" @click.stop="varietyID(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" placeholder="请输入证件号码" v-model="identificationNum"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>手机号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" placeholder="请输入手机号码" v-model="mobilephone"/>
          </div>
        </li>
        <li class="form-line">
            <div class="form-line-item item-name">
              <span>验证码</span>
            </div>
            <div class="form-line-item width-60">
              <input class="text-input bg-colour" type="text" v-model="identifying" name="" value="" maxlength="6" placeholder="请输入验证码">
            </div>
            <div class="form-line-item right width-35">
              <button class="btn browse-code" v-bind:class="{ 'show' : isShow}" :disabled="forbidden" @click="scanQRCode()">{{chronoScope}}</button>
            </div>
        </li>
        <li class="form-line clear">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select width-25 left">
            <span class="btn-select min-btn-select bg-colour" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="form-line-item width-70 right">
            <input class="text-input bg-colour" type="text" name="" value="" placeholder="请输入车牌号码" v-model="numberPlate">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车辆类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select bg-colour" @click.stop="vehicleType()">{{ vehicle }}</span>
            <div class="div-select-ul" v-if="vehicleShow">
              <ul>
                <li v-for="item in vehicleData" @click.stop="vehicleType(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>使用性质</span>
          </div>
          <div class="div-select">
            <span class="btn-select bg-colour" @click.stop="employClick()">{{ employ }}</span>
            <div class="div-select-ul" v-if="employShow">
              <ul>
                <li v-for="item in employData" @click.stop="employClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车架号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" maxlength="4" placeholder="请输入车架号" v-model="behindTheFrame4Digits"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>预约地点</span>
          </div>
          <div class="div-select">
            <span class="btn-select bg-colour" @click.stop="subscribeClick()">{{ subscribe }}</span>
            <div class="div-select-ul" v-if="subscribeShow">
              <ul>
                <li v-for="item in subscribeData" @click.stop="subscribeClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-li">
          <span>选择预约日期</span>
        </li>
        <li class="form-li clear">
          <input class="text-input width-27 btn-cen left" type="" name="" value="" v-model="year" readonly/>
          <span class="left rene">年</span>
          <div class="div-select width-27 left">
            <span class="btn-select btn-cen bg-colour" @click.stop="monthClick()">{{month}}</span>
            <div class="div-select-ul" v-if="monthShow">
              <ul>
                <li v-for="item in months" @click.stop="monthClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <span class="left rene">月</span>
          <div class="div-select width-27 left">
            <span class="btn-select btn-cen bg-colour" @click.stop="dateClick()">{{date}}</span>
            <div class="div-select-ul" v-if="datesShow">
              <ul>
                <li v-for="item in dates" @click.stop="dateClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <span class="left rene">日</span>
        </li>
      </ul>
      <ul class="renewingUl clear">
        <li v-for="item in surplusData" class="renewingLi" :class="{'rene-p': item.number == 0}">
          <p>{{item.time}}</p>
          <p v-if="item.number != 0">剩余名额<span class="renspan">{{item.number}}</span>位</p>
          <p v-if="item.number == 0">已满</p>
        </li>
      </ul>
      <button class="btn btns" @click="submitClick">预约</button>
    </div>
  </div>
</template>

<script>
import { resultPost } from '../../../../../service/getData'
import { sendSMS, getBusinessCarTypeId } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
export default {
  name: 'renewingCollarCredential',
  props: ['currentBusinessId'],
  data () {
    return {
      name: '',                         // 车主姓名
      isShow: false,                    //  验证码样式
      forbidden: false,
      chronoScope: '获取验证码',
      identifying: '',                  // 验证码
      identificationNum: '',            // 证件号码
      numberPlate: '',                  // 车牌号码
      mobilephone: '',                  // 手机号码
      behindTheFrame4Digits: '',        // 车架号
      variety: '居民户口簿',
      cur_card_id: '01',                // 证件id
      varietyShow: false,               // 证件样式
      varietyData: [
        {
          'id': '01',
          'str': '居民户口簿'
        },
        {
          'id': '02',
          'str': '单位注销证明'
        },
        {
          'id': '03',
          'str': '驻华机构证明'
        },
        {
          'id': '04',
          'str': '个体工商营业执照注册'
        },
        {
          'id': '05',
          'str': '居住暂住证明'
        },
        {
          'id': '06',
          'str': '临时居民身份证'
        },
        {
          'id': '07',
          'str': '军官证'
        },
        {
          'id': '08',
          'str': '军官离退休证'
        },
        {
          'id': '09',
          'str': '外交人员身份证明'
        },
        {
          'id': '10',
          'str': '士兵证'
        },
        {
          'id': '11',
          'str': '境外人员身份证明'
        },
        {
          'id': '12',
          'str': '统一社会信用代码'
        },
        {
          'id': '13',
          'str': '组织机构代码证书'
        }
      ],
      abbreviationSelectShow: false,    // 省字列表显示与否
      abbreviationSelectMassage: '粤',  // 默认省字
      abbreviationSelectData: [
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
      ],
      employ: '非运营',
      employShow: false,                // 使用性质样式
      employID: '01',
      employData: [
        {
          'id': '01',
          'str': '非运营'
        },
        {
          'id': '02',
          'str': '公路客运'
        },
        {
          'id': '03',
          'str': '公交客运'
        },
        {
          'id': '04',
          'str': '旅游客运'
        },
        {
          'id': '05',
          'str': '货运'
        },
        {
          'id': '06',
          'str': '租赁'
        }
      ],
      subscribe: '福田车管分所',
      subscribeId: '01',
      subscribeShow: false,
      subscribeData: [
        {
          'id': '01',
          'str': '福田车管分所'
        },
        {
          'id': '02',
          'str': '罗湖车管分所'
        },
        {
          'id': '03',
          'str': '龙岗车管分所'
        },
        {
          'id': '04',
          'str': '宝安车管分所'
        },
        {
          'id': '05',
          'str': '盐田车管分所'
        },
        {
          'id': '06',
          'str': '龙华车管分所'
        },
        {
          'id': '07',
          'str': '坪山车管分所'
        }
      ],
      vehicleShow: false,
      vehicle: '大型汽车',
      vehicleId: '01',
      vehicleData: [
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
      ],
      monthShow: false,
      datesShow: false,
      month: '7',
      year: '2017',
      date: '11',
      months: [
        {
          'str': '7'
        },
        {
          'str': '8'
        },
        {
          'str': '9'
        },
        {
          'str': '10'
        },
        {
          'str': '11'
        },
        {
          'str': '12'
        }
      ],
      dates: [
        {
          'str': '7'
        },
        {
          'str': '8'
        },
        {
          'str': '9'
        },
        {
          'str': '10'
        },
        {
          'str': '11'
        },
        {
          'str': '12'
        }
      ],
      surplusData: [
        {'time': '9:00 - 10:00', 'number': '0'},
        {'time': '10:00 - 11:00', 'number': '20'},
        {'time': '11:00 - 12:00', 'number': '20'},
        {'time': '14:00 - 15:00', 'number': '20'},
        {'time': '15:00 - 16:00', 'number': '0'},
        {'time': '14:00 - 15:00', 'number': '20'},
        {'time': '15:00 - 16:00', 'number': '0'}
      ]
    }
  },
  methods: {
    // 证件名称
    varietyID: function (str, id) {
      if (str) {
        this.variety = str
        this.cur_card_id = id
      }
      if (this.varietyShow === true) {
        this.varietyShow = false
      } else {
        this.varietyShow = true
      }
    },
    // 车牌号码
    abbreviationSelectClick: function (str) {
      if (str) {
        this.abbreviationSelectMassage = str
      }
      if (this.abbreviationSelectShow === true) {
        this.abbreviationSelectShow = false
      } else {
        this.abbreviationSelectShow = true
      }
    },
    // 使用性质
    employClick: function (str) {
      if (str) {
        this.employ = str
      }
      if (this.employShow === true) {
        this.employShow = false
      } else {
        this.employShow = true
      }
    },
    // 预约地点
    subscribeClick: function (str) {
      if (str) {
        this.subscribe = str
      }
      if (this.subscribeShow === true) {
        this.subscribeShow = false
      } else {
        this.subscribeShow = true
      }
    },
    // 车辆类型
    vehicleType: function (str, id) {
      if (str) {
        this.vehicle = str
        this.vehicleId = id
        this.vehicleTypeIdFn()
      }
      if (this.vehicleShow === true) {
        this.vehicleShow = false
      } else {
        this.vehicleShow = true
      }
    },
    // 月
    monthClick: function (str) {
      if (str) {
        this.month = str
      }
      this.datesShow = false
      if (this.monthShow === true) {
        this.monthShow = false
      } else {
        this.monthShow = true
      }
    },
    // 日
    dateClick: function (str) {
      if (str) {
        this.date = str
      }
      this.monthShow = false
      if (this.datesShow === true) {
        this.datesShow = false
      } else {
        this.datesShow = true
      }
    },
    // 获取验证码
    scanQRCode: function () {
      let mobilephone = this.mobilephone
      if (!(mobilephone)) {
        Toast({message: '请输入手机号', position: 'bottom', className: 'white'})
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobilephone))) {
        Toast({message: '请输入正确的手机号码', position: 'bottom', className: 'white'})
      } else {
        let phonedata = {
          mobilephone: mobilephone,
          businessType: 'szjj'
        }
        resultPost(sendSMS, phonedata).then(json => {
          if (json.code === '0000') {
            this.timePiece()
          } else {
            Toast({message: json.msg, position: 'bottom', className: 'white'})
          }
        })
      }
    },
    // 验证码倒计时
    timePiece: function () {         //  验证码倒计时
      clearInterval(this.Timepiece)
      this.forbidden = true
      this.isShow = true
      var str = 60
      this.Timepiece = setInterval(() => {
        str = --str
        this.chronoScope = str + 's'
        if (this.chronoScope === 0 + 's') {
          clearInterval(this.Timepiece)
          this.chronoScope = '获取验证码'
          this.forbidden = false
          this.isShow = false
        }
      }, 1000)
    },
    submitClick: function () {
      if (!this.name) {
        Toast({message: '请输入车主姓名', position: 'bottom', className: 'white'})
      } else if (!this.identificationNum) {
        Toast({message: '请输入证件号码', position: 'bottom', className: 'white'})
      } else if (!this.mobilephone) {
        Toast({message: '请输入手机号码', position: 'bottom', className: 'white'})
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobilephone))) {
        Toast({message: '请输入正确手机号码', position: 'bottom', className: 'white'})
      } else if (!this.numberPlate) {
        Toast({message: '请输入车牌号码', position: 'bottom', className: 'white'})
      } else if (!this.behindTheFrame4Digits) {
        Toast({message: '请输入车架号', position: 'bottom', className: 'white'})
      } else if (!this.identifying) {
        Toast({message: '请输入验证码', position: 'bottom', className: 'white'})
      } else if (this.identifying.length !== 6) {
        Toast({message: '请输入正确验证码', position: 'bottom', className: 'white'})
      } else {
        this.dataFn()
      }
    },
    dataFn: function () {
      let renewingData = {
        'name': this.name,   // 车主姓名
        'identificationNO': this.cur_card_id,   // 证件号码
        'identificationNum': this.identificationNum, // 证件号码
        'mobilephone': this.mobilephone,             // 手机号码
        'abbreviationSelectMassage': `${this.abbreviationSelectMassage}${this.numberPlate}`,   // 车牌号码
        'cartype': this.vehicleId,             // 车辆类型
        'employ': this.employID,               // 使用性质
        'behindTheFrame4Digits': this.behindTheFrame4Digits,  // 车架号
        'subscribeId': this.subscribeId   // 预约地点

      }
      this.$emit('submitClick', renewingData)
    },
    // 获取车辆Id
    vehicleTypeIdFn: function () {
      let vehicleTypeIdData = {
        code: this.vehicleId
      }
      console.log('111')
      resultPost(getBusinessCarTypeId, vehicleTypeIdData).then(json => {
        console.log(json)
        if (json.code === '0000') {
          this.vehicleTypeId = json.data
        }
      })
    }
  },
  mounted () {
    console.log(this.currentBusinessId)
  },
  // watch: {
  //   currentBusinessId (val) {
  //     console.log(val)
  //     console.log(this.currentBusinessId)
  //   }
  // },
  created () {
    document.addEventListener('click', (e) => {
      this.varietyShow = false
      this.vehicleShow = false
      this.employShow = false
      this.monthShow = false
      this.subscribeShow = false
      this.abbreviationSelectShow = false
      this.datesShow = false
    })
  }
}
</script>
<style lang="less" scoped>
@import "./../../../../../style/replacementType";
</style>
