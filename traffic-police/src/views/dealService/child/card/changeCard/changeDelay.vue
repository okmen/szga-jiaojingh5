<template>
  <div class="changeDelay-outer">
    <div class="changeDelay-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件名称</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="居民身份证" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="IDcard" class="text-input" type="text" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="name" class="text-input" type="text" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>驾驶证号</span>
          </div>
          <div class="form-line-item">
            <input v-model="driverLicense" class="text-input" type="text" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>档案编号</span>
          </div>
          <div class="form-line-item">
            <input v-model="fileNumber" class="text-input" type="text" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>延期日期</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" name="" v-model="mtDateTimeMsg"  @click="datetimePick('picker')">
          </div>
        </li>

        <li class="form-line">
          <div class="form-line-item item-name">
            <span>延期原因</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="reasonSelectClick()">{{ reasonSelectMassage }}</span>
            <div class="div-select-ul" v-if="reasonSelectShow">
              <ul>
                <li v-for="item in reasonSelectData" @click.stop="reasonSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverName" class="text-input" type="text" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverNumber" class="text-input" type="tel" readonly>
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
            <input v-model="mailingAddress" class="text-input" type="text" placeholder="请输入详细地址">
          </div>
        </li>
      </ul>
    </div>
    <userUpload :idCard1="true" :idCard2="true" :license="true" :delay="true" @btnSureStar="btnSureStar()" ref="getImgUrl"></userUpload>
    <div v-wechat-title="$route.meta.title"></div>
    <mt-datetime-picker ref="picker" type="date" v-model="informTime" @confirm="handleTime"></mt-datetime-picker>
  </div>
</template>
<script>
  import { resultPost } from '../../../../../service/getData'
  import { changeDelay, getFileNumber } from '../../../../../config/baseUrl'
  import { Toast, Indicator } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        mtDateTimeMsg: '',                                              // 一进来默认当前时间
        formatTime: '',                                                  // 使用mt组件后，时间是中国标准时间，格式转换
        informTime: this.currentTime(),                                 // 时间
        IDcard: window.localStorage.getItem('identityCard'),
        name: window.localStorage.getItem('userName'),
        driverLicense: window.localStorage.getItem('identityCard'),
        fileNumber: '',
        receiverName: window.localStorage.getItem('userName'),
        receiverNumber: window.localStorage.getItem('mobilePhone'),
        cur_reason_id: '01',
        cur_area_id: '01',
        reasonSelectShow: false,
        reasonSelectMassage: '服兵役',
        reasonSelectData: [
          {
            'id': '01',
            'str': '服兵役'
          },
          {
            'id': '02',
            'str': '出国（境）'
          },
          {
            'id': '03',
            'str': '其他'
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
        ],
        mailingAddress: ''
      }
    },
    components: {
      'userUpload': require('../../userUpload.vue')
    },
    mounted: function () {
//      this.init()
      let getTime = this.currentTime()
      this.mtDateTimeMsg = getTime
      let reqData = {
        identityCard: window.localStorage.getItem('identityCard'),
        sourceOfCertification: 'C'
      }
      resultPost(getFileNumber, reqData).then(json => {
        console.log(json)
        if (json.code === '0000') {
          this.fileNumber = json.data.fileNumber
        }
      })
    },
    methods: {
      reasonSelectClick: function (str, id) {
        if (str) {
          this.reasonSelectMassage = str
          this.cur_reason_id = id
        }
        if (this.reasonSelectShow === true) {
          this.reasonSelectShow = false
        } else {
          this.reasonSelectShow = true
        }
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
      datetimePick: function (picker) {
        this.$refs.picker.open()
      },
      handleTime: function (informTime) {
        this.formatTime = this.format(this.informTime.toString(), 'yyyy-MM-dd')
        this.mtDateTimeMsg = this.formatTime
        console.log(this.mtDateTimeMsg)
      },
      currentTime: function () {  // 获取时间
        let now = new Date()
        let year = now.getFullYear()       // 年
        let month = now.getMonth() + 1     // 月
        let day = now.getDate()            // 日
        let clock = year + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day + ' '
        return (clock)
      },
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
      },
      btnSureStar: function () {   // 确认提交按钮
        let idImgOne = this.$refs.getImgUrl.imgIDcard1
        let idImgTwo = this.$refs.getImgUrl.imgIDcard2
        let idImgThree = this.$refs.getImgUrl.imgLicense
        let idImgFour = this.$refs.getImgUrl.imgDelay
        if (!this.mailingAddress) {
          Toast({message: '请输入详细地址', position: 'bottom', className: 'white'})
        } else if (!idImgOne || !idImgTwo) {
          Toast({message: '请上传身份证照片', position: 'bottom', className: 'white'})
        } else if (!idImgThree) {
          Toast({message: '请上传驾驶证照片', position: 'bottom', className: 'white'})
        } else if (!idImgFour) {
          Toast({message: '请上传延期说明图片', position: 'bottom', className: 'white'})
        } else {
          Indicator.open('提交中...') // 图片转换为base64后提交会需要时间
          let reqData = {
            name: this.name,
            identificationNO: 'A',
            IDcard: this.IDcard,
            driverLicense: this.driverLicense,
            fileNumber: this.fileNumber,
            delayDate: this.mtDateTimeMsg,
            delayReason: this.reasonSelectMassage,
            sourceOfCertification: 'C',
            loginUser: window.localStorage.getItem('identityCard'),
            IDCardPhoto1: idImgOne.split(',')[1],
            IDCardPhoto2: idImgTwo.split(',')[1],
            driverLicensePhoto: idImgThree.split(',')[1],
            delayphoto: idImgFour.split(',')[1],
            receiverName: this.receiverName,
            receiverNumber: this.receiverNumber,
            mailingAddress: '深圳市' + this.areaSelectMassage + this.mailingAddress
          }
          console.log(reqData)
          resultPost(changeDelay, reqData).then(json => {
            console.log(json)
            if (json.code === '0000') {
              Indicator.close()
              this.postAppoin({
                appoinNum: json.msg.split('：')[1],
                appoinType: '驾驶证延期换证'
              })
              this.$router.push('/appointSuccess_WeChat')
            } else {
              Indicator.close()
              Toast({
                message: json.msg,
                position: 'bottom',
                className: 'white'
              })
            }
          })
        }
      },
      beforeDestory () {
        Toast.close()
      },
      ...mapActions({
        postAppoin: 'postAppoin'
      })
    },
    created () {
      document.addEventListener('click', (e) => {
        this.reasonSelectShow = false
        this.areaSelectShow = false
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .changeDelay-outer {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 40px;
    .changeDelay-form {
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
          span {
            vertical-align: middle;
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
  }

</style>

