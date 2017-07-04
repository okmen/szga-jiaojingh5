<template>
  <div class="exemption">
    <div class="exemption-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车牌名称</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="vehiclePlate()">{{ vehicle }}</span>
            <div class="div-select-ul" v-if="vehicleShow">
              <ul>
                <li v-for="item in vehicleData" @click.stop="vehiclePlate(item.longName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>所有人</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="张鱼饭" readonly/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>申请人类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="applyClick()">{{ applyMassage }}</span>
            <div class="div-select-ul" v-if="applyShow">
              <ul>
                <li v-for="item in applyData" @click.stop="applyClick(item.longName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>行驶证编码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" placeholder="请输入行驶证编码" />
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>手机号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" placeholder="请输入手机号码"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>验证码</span>
          </div>
          <div class="form-line-item width-60">
            <input class="text-input" type="text" name="" value="" placeholder="请输入验证码">
          </div>
          <div class="form-line-item right width-35">
            <span class="btn browse-code" @click="scanQRCode()">获取验证码</span>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>固定号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" placeholder="请输入固定号码(非必填)"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人姓名</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="张鱼饭" readonly />
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人电话</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="15920050177" readonly />
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>邮政编码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" placeholder="请输入邮政编码"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>邮寄地址</span>
          </div>
          <div class="form-line-item width-40 city">
            <span>深圳市</span>
          </div>
          <div class="div-select form-line-item width-50">
            <span class="btn-select" @click.stop="areaSelectClick()">{{ areaSelectMassage }}</span>
            <div class="div-select-ul" v-if="areaSelectShow">
              <ul>
                <li v-for="item in areaSelectData" @click.stop="areaSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span></span>
          </div>
          <div class="form-line-item">
            <input class="text-input" v-model="mailingAddress" type="text" name="" value="" maxlength="4" placeholder="请输入详细地址">
          </div>
        </li>
        <li class="form-li">
          <span>保险生效日期</span>
        </li>
        <li class="form-li">
          <div class="form-line-item text-input" @click="datetimePick('picker')">
            <span>{{mtDateTimeMsg}}</span>
          </div>
        </li>
        <li class="form-li">
          <span>保险终止日期</span>
        </li>
        <li class="form-li">
          <div class="form-line-item text-input" @click="terminationPick('pick')">
            <span>{{DateTimeMsg}}</span>
          </div>
        </li>
        <li class="form-li">
          <span>保险结果告知方式</span>
        </li>
        <li class="form-li">
          <div class="div-select">
            <span class="btn-select" @click.stop="placeSelectClick()">{{ placeSelectMassage }}</span>
            <div class="div-select-ul" v-if="placeSelectShow">
              <ul>
                <li v-for="item in placeSelectData" @click.stop="placeSelectClick(item.longName, item.shortName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>预约人</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" placeholder="请输入预约人姓名"/>
          </div>
        </li>
        <li class="form-li">
          <span>预约人身份证号</span>
        </li>
        <li class="form-li">
          <div class="form-line-item">
            <input class="text-input" v-model="mailingAddress" type="text" name="" value="" maxlength="4" placeholder="请输入预约人身份证号">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>预约方式</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="placeSelectClick()">{{ placeSelectMassage }}</span>
            <div class="div-select-ul" v-if="placeSelectShow">
              <ul>
                <li v-for="item in placeSelectData" @click.stop="placeSelectClick(item.longName, item.shortName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-annotation">注:只能申请本人名下车辆</li>
      </ul>
     <button class="btn btns">确认提交</button>
      <mt-datetime-picker ref="picker" type="date" v-model="informTime" @confirm="handleTime"></mt-datetime-picker>
      <mt-datetime-picker ref="pick" type="date" v-model="informTimes" @confirm="handleTimes"></mt-datetime-picker>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'exemption',
  data () {
    return {
      mtDateTimeMsg: '',                           // 保险生效时间进页面默认时间
      DateTimeMsg: '',                             // 保险终止时间进页面默认时间
      pickerValue: '',
      mailingAddress: '',
      formatTime: '',                              // 使用mt组件后，时间是中国标准时间，格式转换
      informTime: this.currentTime(),              // 保险生效时间当前时间
      informTimes: this.currentTime(),             // 保险终止时间当前时间
      cur_place_id: '',                            // 车牌
      cur_area_id: '01',                           // 默认区名id  01为福田
      placeSelectShow: false,
      placeSelectMassage: '互联网查询',            // 发证机默认第一条名称
      placeSelectData: [
        {
          'shortName': '11',
          'longName': '短信告知'
        },
        {
          'shortName': '12',
          'longName': '非移动电话告知'
        }
      ],                                           // 发证机关列表 数据从接口查出
      vehicleShow: false,
      vehicle: '粤B6A42E',                         // 车牌下拉
      vehicleData: [
        {
          'longName': '粤B6A428'
        },
        {
          'longName': '粤B6A427'
        }
      ],
      applyShow: false,                            // 申请人类型样式
      applyMassage: '机动车所有人',
      applyData: [
        {
          'longName': '代理人'
        }
      ],
      areaSelectShow: false,
      areaSelectMassage: '福田区',
      areaSelectData: [
        {
          'id': '01',
          'str': '福田区'
        },
        {
          'id': '02',
          'str': '罗湖区'
        },
        {
          'id': '03',
          'str': '南山区'
        },
        {
          'id': '04',
          'str': '宝安区'
        },
        {
          'id': '05',
          'str': '龙岗区'
        },
        {
          'id': '06',
          'str': '盐田区'
        },
        {
          'id': '07',
          'str': '龙华新区'
        },
        {
          'id': '08',
          'str': '光明新区'
        },
        {
          'id': '09',
          'str': '坪山新区'
        },
        {
          'id': '10',
          'str': '大鹏新区'
        }
      ]
    }
  },
  mounted: function () {
    let getTime = this.currentTime()
    let getTimes = this.currentTime('take')
    this.mtDateTimeMsg = getTime
    this.DateTimeMsg = getTimes
  },
  methods: {
    // 车牌下拉框
    vehiclePlate: function (str) {
      if (str) {
        this.vehicle = str
      }
      if (this.vehicleShow === true) {
        this.vehicleShow = false
      } else {
        this.vehicleShow = true
      }
    },
    // 申请人类型下拉框
    applyClick: function (str) {
      if (str) {
        this.applyMassage = str
      }
      if (this.applyShow === true) {
        this.applyShow = false
      } else {
        this.applyShow = true
      }
    },
    placeSelectClick: function (str, id) {
      if (str) {
        this.placeSelectMassage = str
        this.cur_place_id = id
      }
      if (this.placeSelectShow === true) {
        this.placeSelectShow = false
      } else {
        this.placeSelectShow = true
      }
    },
    datetimePick: function (picker) {
      this.$refs.picker.open()
    },
    terminationPick: function (picker) {
      this.$refs.pick.open()
    },
    areaSelectClick: function (str, id) {
      if (str) {
        this.areaSelectMassage = str
        this.cur_area_id = id
      }
      if (this.areaSelectShow === true) {
        this.areaSelectShow = false
      } else {
        this.areaSelectShow = true
      }
    },
    handleTime: function (informTime) {
      this.formatTime = this.format(this.informTime.toString(), 'yyyy-MM-dd')
      this.mtDateTimeMsg = this.formatTime
    },
    handleTimes: function (informTimes) {
      this.formatTimes = this.format(this.informTimes.toString(), 'yyyy-MM-dd')
      this.DateTimeMsg = this.formatTimes
    },
    currentTime: function (str) {  // 获取时间
      let now = new Date()
      let year = now.getFullYear()       // 年
      let month = now.getMonth() + 1     // 月
      let day = now.getDate()            // 日
      if (str === 'take') {
        let clock = year + 1 + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day
        return (clock)
      } else {
        let clock = year + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day
        return (clock)
      }
    },
    ...mapActions({
      postAppoin: 'postAppoin'
    }),
    format: function (time, format) {   // 中国标准时间转换为datetime格式
      var t = new Date(time)
      var tf = function (i) { return (i < 10 ? '0' : '') + i }
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear())
          case 'MM':
            return tf(t.getMonth() + 1)
          case 'mm':
            return tf(t.getMinutes())
          case 'dd':
            return tf(t.getDate())
          case 'HH':
            return tf(t.getHours())
          case 'ss':
            return tf(t.getSeconds())
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./../../../../style/base";
.exemption {
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .exemption-form {
    background-color: #fff;
    padding-top:20px;
    .form-line {
      padding: 20px 0 0 180px;
      position: relative;
      line-height: 56px;
      .form-line-item {
        width: 100%;
        display: inline-block;
        height: 60px;
        line-height:60px;
        .photo-ex {
          color: #2696dd;
        }
        span {
          vertical-align: middle;
        }
        .browse-code {
          margin: 0;
          display: inline-block;
          height: 56px;
          width: 100%;
          line-height: 56px;
          border-radius: 10px;
          text-align: center;
          color:#fff;
          vertical-align:middle;
        }
        &.city {
          margin: 0 18px;
        }
      }
      .item-name {
        width: 180px;
        position: absolute;
        left: 0;
      }
      .div-select {
        font-size: 24px;
      }
    }
    .form-li{
      width: 100%;
      display: inline-block;
      height: 60px;
      line-height:60px;
      span{
        font-size: 16px;
      }
    }
    .form-annotation{
      color: red;
      font-size: 16px;
    }
  }
  .width-40 {
    width: 40% !important;
  }
  .width-35 {
    width: 35% !important;
  }
  .width-50 {
    width: 50% !important;
  }
  .width-60 {
    width: 60% !important;
  }
  .btn {
    width: 280px;
    margin-top:30px;
    display: inline-block;
  }
  .btns{
    width: 100%;
  }
}
</style>
