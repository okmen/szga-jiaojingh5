<template>
  <div id="starUser-car-user">
    <ul class="starUser-hbs-list">
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>车辆类型</span>
        </div>
        <div class="div-select">
          <span class="btn-select" @click.stop="licenseSelectClick()" data-type="licenseSelectType">{{ licenseSelectMassage }}</span>
          <div class="div-select-ul" v-if="licenseSelectShow">
            <ul>
              <li v-for="(item, index) in licenseSelectData" @click.stop = "licenseSelectClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="starUser-hbs-item clear">
        <div class="starUser-hbs-name">
          <span>车牌号码</span>
        </div>
        <div class="div-select width-120 left">
          <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
          <div class="div-select-ul" v-if="abbreviationSelectShow">
            <ul>
              <li v-for="item in abbreviationSelectData" @click.stop = "abbreviationSelectClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        <div class="starUser-hbs-text width-70 right">
          <input class="text-input" type="text" maxlength="10" v-model="carNumber">
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>车主姓名</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" maxlength="10" v-model="carOwnerName" placeholder="车主姓名">
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>车主身份证</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="text" maxlength="19" v-model="carIdCardNumber" placeholder="车主是外籍人士,请在证件号前加F">
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>使用人身份证</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="text" maxlength="19" v-model="userIdCardNumber" placeholder="如果您是外籍人士,请在证件号前加F">
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>驾驶证核发地</span>
        </div>
        <div class="starUser-hbs-radio">
          <div class="starUser-hbs-radio-box">
            <input type="radio" id="starUserRadio1" name="drivingLicence" value="1" v-model:checked="driverCardPlace">
            <label name="starUserRadio1" class="checked" for="starUserRadio1">深圳本地</label>
          </div>
          <div class="starUser-hbs-radio-box">
            <input type="radio" id="starUserRadio2" name="drivingLicence" value="2" v-model:checked="driverCardPlace">
            <label name="starUserRadio2" class="checked" for="starUserRadio2">本省外市</label>
          </div>
          <div class="starUser-hbs-radio-box">
            <input type="radio" id="starUserRadio3" name="drivingLicence" value="3" v-model:checked="driverCardPlace">
            <label name="starUserRadio3" class="checked" for="starUserRadio3">外省</label>
          </div>
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>手机号码</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="tel" maxlength="11" v-model="userTelphone" placeholder="请输入您的手机号码">
        </div>
      </li>
      <li class="starUser-hbs-item clear">
        <div class="starUser-hbs-name">
          <span>验证码</span>
        </div>
        <div class="starUser-hbs-text width-40 left">
          <input class="text-input" type="tel" maxlength="6" v-model="validCode" placeholder="请输入验证码">
        </div>
        <div class="left starUser-hbs-code">
          <button type="button" name="button" @click.stop="getVerification()"
            :class="{disabled: isdisabled}" :disabled="this.isdisabled">{{getValidCodeMsg}}
          </button>
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>联系地址</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="text" maxlength="18" v-model="userAddress" placeholder="请输入您的联系地址(非必填)">
        </div>
      </li>
    </ul>
    <userUpload @btnSureStar="btnSureStar()" ref="getImgUrl"></userUpload>
  </div>
</template>
<script>
  import userUpload from './userUpload'
  import { resultPost } from '../../../service/getData'
  import { carUser, sendSMS } from '../../../config/baseUrl'
  import { Toast, Indicator } from 'mint-ui'
  import { isPhone } from 'service/regExp.js'
  import { mapActions } from 'vuex'
  export default{
    name: 'carUser',
    components: {
      userUpload
    },
    data () {
      return {
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        licenseSelectShow: false,
        licenseSelectMassage: '蓝牌',
        licenseSelectType: '02',
        licenseSelectData: [
          {
            'str': '蓝牌',
            'type': '02'
          },
          {
            'str': '黄牌',
            'type': '01'
          },
          {
            'str': '黑牌',
            'type': '06'
          },
          {
            'str': '个性牌',
            'type': '02'
          },
          {
            'str': '小型新能源车号牌',
            'type': '52'
          },
          {
            'str': '大型新能源车号牌',
            'type': '51'
          }
        ],
        abbreviationSelectShow: false,
        abbreviationSelectMassage: '粤',
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
        carNumber: 'B',        // 车牌号
        carOwnerName: '',      // 车主姓名
        carIdCardNumber: '',   // 车主身份证号
        userIdCardNumber: '',  // 使用人身份证号
        driverCardPlace: '',   // 驾驶证核发地
        userTelphone: '',      // 使用人手机号
        validCode: '',         // 验证码
        userAddress: ''        // 联系地址
      }
    },
    methods: {
      licenseSelectClick: function (str, index) {
        if (str) {
          this.licenseSelectMassage = str
          this.licenseSelectType = this.licenseSelectData[index].type
        }
        if (this.licenseSelectShow === true) {
          this.licenseSelectShow = false
        } else {
          this.licenseSelectShow = true
          this.typeSelectShow = false
          this.abbreviationSelectShow = false
        }
      },
      abbreviationSelectClick: function (str) {
        if (str) {
          this.abbreviationSelectMassage = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        } else {
          this.abbreviationSelectShow = true
          this.licenseSelectShow = false
          this.typeSelectShow = false
        }
      },
      btnSureStar: function () {  // 提交按钮
        let platNo = this.abbreviationSelectMassage + this.carNumber
        let ownerIdImgOne = this.$refs.getImgUrl.ownerIdCardPositive
        let ownerIdImgTwo = this.$refs.getImgUrl.ownerIdCardHandHeld
        let userIdImgThree = this.$refs.getImgUrl.userIdCardPositive
        let userIdImgFour = this.$refs.getImgUrl.userIdCardHandHeld
        if (this.$plateerification(platNo.toLocaleUpperCase())) {
          Toast({
            message: this.$plateerification(platNo.toLocaleUpperCase()),
            position: 'bottom',
            className: 'white'
          })
          return
        } else if (!this.carOwnerName) {
          Toast({message: '请输入车主姓名', position: 'bottom', className: 'white'})
        } else if (!this.carIdCardNumber) {
          Toast({message: '请输入车主身份证号码', position: 'bottom', className: 'white'})
        } else if (!this.userIdCardNumber) {
          Toast({message: '请输入您的身份证号码', position: 'bottom', className: 'white'})
        } else if (/[（* | ）* ]/g.test(this.userIdCardNumber) || /[（* | ）* ]/g.test(this.carIdCardNumber)) {
          Toast({message: '请使用英文状态下的括号', position: 'bottom', className: 'white'})
        } else if (!this.driverCardPlace) {
          Toast({message: '请选择驾驶证核发地', position: 'bottom', className: 'white'})
        } else if (!this.userTelphone) {
          Toast({message: '请输入您的手机号码', position: 'bottom', className: 'white'})
        } else if (!this.validCode) {
          Toast({message: '请输入验证码', position: 'bottom', className: 'white'})
        } else if (!ownerIdImgOne || !ownerIdImgTwo || !userIdImgThree || !userIdImgFour) {
          Toast({message: '请上传身份证照片', position: 'bottom', className: 'white'})
        } else {
          Indicator.open('提交中...') // 图片转换为base64后提交会需要时间
          let usrData = {
            licensePlateType: this.licenseSelectType,             // 车牌类型
            provinceAbbreviation: this.abbreviationSelectMassage, // 省简称
            licensePlateNumber: this.carNumber.toLocaleUpperCase(),                   // 车牌号
            ownerName: this.carOwnerName,                         // 车主姓名
            ownerIdCard: this.carIdCardNumber,                    // 车主身份证号码
            userIdCard: this.userIdCardNumber,                    // 使用人身份证号码
            linkAddress: this.userAddress,                        // 联系地址
            mobilephone: this.userTelphone,                       // 电话号码
            validateCode: this.validCode,                         // 验证码
            driverLicenseIssuedAddress: this.driverCardPlace,     // 驾驶证核发地
            idCardImgPositive: userIdImgThree.split(',')[1],                    // 使用人身份证照片
            idCardImgHandHeld: userIdImgFour.split(',')[1],
            ownerIdCardImgPositive: ownerIdImgOne.split(',')[1],                // 车主身份证照片
            ownerIdCardImgHandHeld: ownerIdImgTwo.split(',')[1],
            openId: window.localStorage.openId,
            businessType: this.$root.$router.businessType || '1'
          }
          resultPost(carUser, usrData).then(json => {
            let jsonMsg = json.msg
            let getJsonMsg = ''
            if (jsonMsg.indexOf(' ') === -1) {
              getJsonMsg = jsonMsg
            } else {
              getJsonMsg = jsonMsg.split(' ')[0]
            }
            if (json.code === '0000') {
              Indicator.close()
              this.postAppoin({
                appoinNum: json.msg.split(':')[1],
                appoinType: '星级用户认证'
              })
              // this.$router.push('/appointSuccess_WeChat')
              window.location.href = json.data
            } else {
              Indicator.close()
              Toast({
                message: getJsonMsg,
                position: 'bottom',
                className: 'white'
              })
            }
          })
        }
      },
      getVerification: function () {  // 获取验证码
        let sendPhoneNumber = {
          mobilephone: this.userTelphone,
          businessType: 'szjj'
        }
        let time = 30
        if (isPhone(this.userTelphone)) {
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
      },
      ...mapActions({
        postAppoin: 'postAppoin'
      })
    },
    created () {
      document.addEventListener('click', (e) => {
        this.typeSelectShow = false
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
      })
    }
  }
</script>
<style lang="less" scoped>
#starUser-car-user {
  padding-bottom: 20px;
  .starUser-hbs-list {
    overflow: hidden;
    .starUser-hbs-item {
      margin-top: 24px;
      padding-left: 180px;
      position: relative;
      line-height: 56px;
      .starUser-hbs-name {
        width: 180px;
        position: absolute;
        left: 0;
      }
      .starUser-hbs-text {
        width: 100%;
        display: inline-block;
      }
      .starUser-hbs-radio {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .starUser-hbs-code {
        text-indent: 28px;
        text-decoration: underline;
        button{
          background:none;
          border:none;
          text-decoration: underline;
          outline:none;
          &.disabled{
            background: #ccc;
            color: #fff;
          }
        }
      }
    }
  }
}
.mint-indicator{
  position:relative;
  .mint-indicator-wrapper{
    z-index:9999999;
  }
}
</style>
