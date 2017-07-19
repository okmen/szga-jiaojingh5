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
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>预约地点</span>
          </div>
          <div class="div-select">
            <span class="btn-select bg-colour" @click.stop="subscribeClick()">{{ subscribe }}</span>
            <div class="div-select-ul" v-if="subscribeShow">
              <ul>
                <li v-for="item in businessData" @click.stop="subscribeClick(item.name, item.id)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-li">
          <span>选择预约日期</span>
        </li>
        <li class="form-li clear">
          <!-- <input class="text-input width-27 btn-cen left" type="" name="" value="" v-model="year" readonly/> -->
          <div class="div-select width-27 left">
            <span class="btn-select btn-cen bg-colour" @click.stop="yearClick()">{{year}}</span>
            <div class="div-select-ul" v-if="yearShow">
              <ul>
                <li v-for="item in years" @click.stop="yearClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
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
        <li v-for="(item, index) in surplusData" class="renewingLi" :class="{'rene-p': item.number == 0,'rene-c': index === clickIndex}" @click="renewingClick(index)">
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
import { simpleSendMessage, getIdTypeId, getOrgsByBusinessTypeId, getAppointmentDate, getAppTimes } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
export default {
  name: 'renewingCollarCredential',
  props: ['currentBusinessId', 'currentCode'],
  data () {
    return {
      name: '',                         // 车主姓名
      isShow: false,                    //  验证码样式
      forbidden: false,
      chronoScope: '获取验证码',
      identifying: '',                  // 验证码
      identificationNum: '',            // 证件号码
      mobilephone: '',                  // 手机号码
      variety: '居民户口簿',
      cur_card_id: 'H',                // 证件id
      varietyShow: false,               // 证件样式
      varietyData: [
        {
          'id': 'H',
          'str': '居民户口簿'
        },
        {
          'id': 'J',
          'str': '单位注销证明'
        },
        {
          'id': 'L',
          'str': '驻华机构证明'
        },
        {
          'id': 'P',
          'str': '个体工商营业执照注册'
        },
        {
          'id': 'K',
          'str': '居住暂住证明'
        },
        {
          'id': 'A',
          'str': '居民身份证'
        },
        {
          'id': 'M',
          'str': '临时居民身份证'
        },
        {
          'id': 'C',
          'str': '军官证'
        },
        {
          'id': 'E',
          'str': '军官离退休证'
        },
        {
          'id': 'G',
          'str': '外交人员身份证明'
        },
        {
          'id': 'D',
          'str': '士兵证'
        },
        {
          'id': 'F',
          'str': '境外人员身份证明'
        },
        {
          'id': 'N',
          'str': '统一社会信用代码'
        },
        {
          'id': 'B',
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
      subscribe: '',
      subscribeId: '',
      subscribeShow: false,
      businessData: [],
      modelShow: false,
      modelId: '',
      model: '',
      modelData: [],
      monthShow: false,
      datesShow: false,
      yearShow: false,
      month: '',
      year: '',
      date: '',
      years: [
      ],
      months: [
      ],
      dates: [
      ],
      surplusData: [
      ],
      clickIndex: '',
      tmentTime: ''   // 预约时间
    }
  },
  methods: {
    // 证件名称
    varietyID: function (str, id) {
      if (str) {
        this.variety = str
        this.cur_card_id = id
        this.certificateId()
      }
      if (this.varietyShow === true) {
        this.varietyShow = false
      } else {
        this.varietyShow = true
      }
    },
    // 预约地点
    subscribeClick: function (str, id) {
      if (str) {
        this.subscribe = str
        this.subscribeId = id
        this.getmentDate()
      }
      if (this.subscribeShow === true) {
        this.subscribeShow = false
      } else {
        this.subscribeShow = true
      }
    },
    // 年
    yearClick: function (str) {
      if (str) {
        this.year = str
        this.getTimes()
      }
      this.monthShow = false
      this.datesShow = false
      if (this.yearShow === true) {
        this.yearShow = false
      } else {
        this.yearShow = true
      }
    },
    // 月
    monthClick: function (str) {
      if (str) {
        this.month = str
        this.getTimes()
      }
      this.yearShow = false
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
        this.getTimes()
      }
      this.monthShow = false
      this.yearShow = false
      if (this.datesShow === true) {
        this.datesShow = false
      } else {
        this.datesShow = true
      }
    },
    // 选择预约时段
    renewingClick: function (index) {
      if (this.surplusData[index].number === 0) {
        return
      }
      this.clickIndex = index
      this.tmentTime = this.surplusData[index].time
      console.log(this.tmentTime)
    },
    // 获取验证码
    scanQRCode: function () {
      let mobilephone = this.mobilephone
      if (!(mobilephone)) {
        Toast({message: '请输入手机号', position: 'bottom', className: 'white'})
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobilephone))) {
        Toast({message: '请输入正确的手机号码', position: 'bottom', className: 'white'})
      } else {
        let name = this.name === window.localStorage.getItem('userName') ? 0 : 1  // 0’非代办（或本人）‘1’普通代办‘2’专业代办（企业代办）
        let phonedata = {
          mobile: mobilephone,               // 手机号码
          idType: this.certificate,          // 证件id
          lx: '2',                           // 业务类型
          bookerType: name,                    // 预约方式
          bookerName: this.name,             // 预约人名字
          bookerIdNumber: window.localStorage.getItem('identityCard'),
          idNumber: this.identificationNum,
          codes: this.currentCode
        }
        resultPost(simpleSendMessage, phonedata).then(json => {
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
      } else if (!this.identifying) {
        Toast({message: '请输入验证码', position: 'bottom', className: 'white'})
      } else if (this.identifying.length !== 6) {
        Toast({message: '请输入正确验证码', position: 'bottom', className: 'white'})
      } else {
        this.dataFn()
      }
    },
    dataFn: function () {
      let name = this.name === window.localStorage.getItem('userName') ? 0 : 1  // 0’非代办（或本人）‘1’普通代办‘2’专业代办（企业代办）
      let renewingData = {
        'orgId': this.subscribeId,                         // 预约地点id
        'businessTypeId': this.currentBusinessId,          // 业务id
        'name': this.name,   // 车主姓名
        'idTypeId': this.certificate,                      // 证件种类ID
        'idNumber': this.identificationNum,              // 证件号码
        'mobile': window.localStorage.getItem('mobilePhone'),                 // 手机号码
        'msgNumber': this.identifying,                     // 验证码
        'appointmentDate': `${this.year}-${this.month}-${this.date}`,        // 预约日期
        'appointmentTime': this.tmentTime,                 // 预约时间
        'bookerName': window.localStorage.getItem('userName'),                           // 预约人名字
        'bookerIdNumber': window.localStorage.getItem('identityCard'),          // 预约人身份证号
        'bookerType': name,                                // 预约方式 ‘0’本人
        'bookerMobile': this.mobilephone                   // 预约手机号码
      }
      this.$emit('submitClick', renewingData)
    },
    // 获取证件ID
    certificateId: function () {
      let certificateIdData = {
        businessTypeId: this.currentBusinessId,
        code: this.cur_card_id
      }
      console.log(certificateIdData)
      resultPost(getIdTypeId, certificateIdData).then(json => {
        if (json.code === '0000') {
          this.certificate = json.data
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    },
    // 获取预约地点
    businessId: function () {
      let businessData = {
        businessTypeId: this.currentBusinessId
      }
      resultPost(getOrgsByBusinessTypeId, businessData).then(json => {
        if (json.code === '0000') {
          this.businessData = json.data
          this.subscribe = this.businessData[0].name
          this.subscribeId = this.businessData[0].id
          this.getmentDate()  // 获取预约日期
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    },
    // 获取预约日期
    getmentDate: function () {
      let getmentData = {
        orgId: this.subscribeId,
        businessTypeId: this.currentBusinessId
      }
      resultPost(getAppointmentDate, getmentData).then(json => {
        console.log(json)
        if (json.code === '0000') {
          this.mentDate = json.data
          let yearDate = []
          let monthDate = []
          let dayDate = []
          this.mentDate.map((item, index) => {
            let yearMonthDay = item.split('-')
            if (index === 0) {
              yearDate.push({'str': yearMonthDay[0]})
              monthDate.push({'str': yearMonthDay[1]})
              dayDate.push({'str': yearMonthDay[2]})
            } else {
              if (yearDate[yearDate.length - 1].str !== yearMonthDay[0]) {
                yearDate.push({'str': yearMonthDay[0]})
              }
              if (monthDate[monthDate.length - 1].str !== yearMonthDay[1]) {
                monthDate.push({'str': yearMonthDay[1]})
              }
              if (dayDate[dayDate.length - 1].str !== yearMonthDay[2]) {
                dayDate.push({'str': yearMonthDay[2]})
              }
            }
          })
          this.years = yearDate
          this.months = monthDate
          this.dates = dayDate
          this.year = yearDate[0].str
          this.month = monthDate[0].str
          this.date = dayDate[0].str
          this.getTimes()     // 预约日期获取预约时间
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    },
    // 预约日期获取时间
    getTimes: function () {
      let time = `${this.year}-${this.month}-${this.date}`
      let getTimesData = {
        businessTypeId: this.currentBusinessId,  // 业务类型
        orgId: this.subscribeId,                // 预约地点
        date: time,                               // 预约日期
        carTypeId: this.vehicleTypeId,         // 汽车类型ID
        optlittleCar: ''                       // 汽车产地
      }
      console.log('时间', getTimesData)
      resultPost(getAppTimes, getTimesData).then(json => {
        console.log(json)
        if (json.code === '0000') {
          let timeData = []
          json.data.map(item => {
            timeData.push({'time': item.apptime, 'number': item.maxnumber - item.yetnumber})
          })
          this.surplusData = timeData
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.varietyShow = false
      this.vehicleShow = false
      this.employShow = false
      this.monthShow = false
      this.subscribeShow = false
      this.abbreviationSelectShow = false
      this.datesShow = false
      this.yearShow = false
      this.modelShow = false
    })
  },
  mounted () {
  },
  watch: {
    currentBusinessId (val) {
      this.businessId()   // 获取地点
      this.certificateId()  // 获取证件类型id
      console.log(val)
    },
    currentCode (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
@import "./../../../../../style/replacementType";
</style>
