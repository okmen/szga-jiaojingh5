<template>
  <!-- 驾驶证降级组件 -->
  <div class="degradeCard-outer">
    <div class="degradeCard-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件名称</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" value="居民身份证" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="loginUser" class="text-input" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>申请人证件号</span>
          </div>
          <div class="form-line-item">
            <input v-model="IDcard" class="text-input" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>驾驶证号</span>
          </div>
          <div class="form-line-item">
            <input v-model="driverLicense" class="text-input" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>申请人姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="name" class="text-input" readonly>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>户籍所在地</span>
          </div>
          <div class="form-line-item width-40 place">
            <input type="radio"  name="address" value="1" v-model:checked="address">
            <label>深圳</label>
          </div>
          <div class="form-line-item width-40 place">
            <input type="radio"  name="address" value="0" v-model:checked="address">
            <label>外省</label>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>照片回执码</span>
          </div>
          <div class="form-line-item width-60">
            <input v-model="photoReturnNumberString" class="text-input" type="text" placeholder="请输入照片回执码">
          </div>
          <div class="form-line-item right width-35">
            <span class="btn browse-code" @click="scanQRCode()">扫一扫</span>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverName" class="text-input" type="text" placeholder="请输入收件人姓名">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverNumber" class="text-input" readonly>
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
    <userUpload :idCard1="true" :idCard2="true" :license="true" @btnSureStar="btnSureStar()" ref="getImgUrl"></userUpload>
  </div>
</template>
<script>
  import { resultPost } from '../../../../../service/getData'
  import { degradeCard } from '../../../../../config/baseUrl'
  import { Toast, Indicator } from 'mint-ui'
  import wx from 'weixin-js-sdk'
  import { mapActions } from 'vuex'
  export default {
    name: 'degradeCard',
    data () {
      return {
        loginUser: window.localStorage.getItem('identityCard'),
        IDcard: window.localStorage.getItem('identityCard'),
        driverLicense: window.localStorage.getItem('identityCard'),
        name: window.localStorage.getItem('userName'),
        photoReturnNumberString: '',                                  // 照片回执号
        receiverName: window.localStorage.getItem('userName'),
        receiverNumber: window.localStorage.getItem('mobilePhone'),
        address: '',                                                  // 户籍所在地checkbox选择
        mailingAddress: '',
        cur_area_id: '01',                                            // 默认区名id  01为福田
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
    components: {
      'userUpload': require('../../userUpload.vue')
    },
    methods: {
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
      scanQRCode: function () {
        let that = this
        let ua = window.navigator.userAgent // 浏览器版本
        if (/MicroMessenger/i.test(ua)) {
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
              that.photoReturnNumberString = result.split(',')[1]
            }
          })
        } else {
          if ((window.Ali.alipayVersion).slice(0, 3) >= 8.1) {
            window.Ali.scan({
              type: 'qr'
            }, function (result) {
              if (result.errorCode) {
                // 没有扫码的情况
                // errorCode=10，用户取消
                // errorCode=11，操作失败
                switch (result.errorCode) {
                  case 10:
                    window.alert('用户取消')
                    break
                  default:
                    window.alert('操作失败')
                }
              } else {
                // 成功扫码的情况
                if (result.barCode !== undefined) { // 条码
                  // result.barCode 返回结果
                  this.photoReturnNumberString = result.barCode
                } else if (result.qrCode !== undefined) { // 二维码
                  // result.barCode 返回结果
                  this.photoReturnNumberString = result.barCode
                } else if (result.cardNumber !== undefined) { // 银行卡
                  // result.barCode 返回结果
                  this.photoReturnNumberString = result.barCode
                }
              }
            })
          } else {
            window.alert('请在钱包8.1以上版本运行')
          }
        }
      },
      btnSureStar: function () {   // 确认提交按钮
        let idImgOne = this.$refs.getImgUrl.imgIDcard1
        let idImgTwo = this.$refs.getImgUrl.imgIDcard2
        let idImgThree = this.$refs.getImgUrl.imgLicense
        if (!this.photoReturnNumberString) {
          Toast({message: '请输入照片回执号', position: 'bottom', className: 'white'})
        } else if (!this.address) {
          Toast({message: '请选择户籍所在地', position: 'bottom', className: 'white'})
        } else if (!this.receiverName) {
          Toast({message: '请输入收件人姓名', position: 'bottom', className: 'white'})
        } else if (!this.mailingAddress) {
          Toast({message: '请输入详细地址', position: 'bottom', className: 'white'})
        } else if (!idImgOne || !idImgTwo) {
          Toast({message: '请上传身份证照片', position: 'bottom', className: 'white'})
        } else if (!idImgThree) {
          Toast({message: '请上传驾驶证照片', position: 'bottom', className: 'white'})
        } else {
          Indicator.open('提交中...') // 图片转换为base64后提交会需要时间
          let reqData = {
            identificationNO: 'A',
            loginUser: this.loginUser,
            IDcard: this.IDcard,
            driverLicense: this.driverLicense,
            photoReturnNumberString: this.photoReturnNumberString,
            name: this.name,
            placeOfDomicile: this.address,
            receiverName: this.receiverName,
            receiverNumber: this.receiverNumber,
            mailingAddress: '深圳市' + this.areaSelectMassage + this.mailingAddress,
            sourceOfCertification: 'C',
            userSource: 'C',
            IDCardPhoto1: idImgOne.split(',')[1],
            IDCardPhoto2: idImgTwo.split(',')[1],
            driverLicensePhoto: idImgThree.split(',')[1]
          }
          console.log(reqData)
          resultPost(degradeCard, reqData).then(json => {
            console.log(json)
            if (json.code === '0000') {
              Indicator.close()
              this.postAppoin({
                appoinNum: json.msg.split('：')[1],
                appoinType: '驾驶证自愿降级'
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
        this.areaSelectShow = false
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .degradeCard-outer {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 20px 40px;
    .degradeCard-form {
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
          &.place {
            text-align: center;
          }
        }
        .item-name {
          width: 180px;
          position: absolute;
          left: 0;
          font-size: 24px;
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

