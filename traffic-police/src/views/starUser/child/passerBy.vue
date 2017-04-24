<template>
  <div id="starUser-passer-by">
    <ul class="starUser-hbs-list">
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>身份证号</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="text" maxlength="19"  v-model="idCardNumber" placeholder="如果您是外籍人士,请在证件号前加F">
        </div>
      </li>
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>手机号码</span>
        </div>
        <div class="starUser-hbs-text">
          <input class="text-input" type="tel" maxlength="11" v-model="telphoneNumber" placeholder="请输入您的手机号码">
        </div>
      </li>
      <li class="starUser-hbs-item margin-passer">
        <div class="starUser-hbs-name">
          <span>验证码</span>
        </div>
        <div class="starUser-hbs-text width-40 left">
          <input class="text-input" type="tel" maxlength="6" v-model="validCode" placeholder="请输入验证码">
        </div>
        <div class="left starUser-hbs-code">
          <button type="button" name="button" @click.stop="getVerification()"
            :class="{disabled: isdisabled}">{{getValidCodeMsg}}</button>
          </div>
      </li>
    </ul>
    <common @btnSureStar="btnSureStar()" ref="getImgUrl"></common>
  </div>
</template>
<script>
  import common from './common'
  import { resultPost } from '../../../service/getData'
  import { passerBy, sendSMS } from '../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default{
    name: 'passerBy',
    components: {
      common
    },
    data () {
      return {
        getValidCodeMsg: '获取验证码',
        isdisabled: false,
        idCardNumber: '',
        telphoneNumber: '',
        validCode: ''
      }
    },
    methods: {
      getVerification: function () {
        let sendPhoneNumber = {
          mobilephone: this.telphoneNumber
        }
        let time = 30
        if (/^1[34578]\d{9}$/.test(this.telphoneNumber)) {
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
      btnSureStar: function () {
        let idImgOne = this.$refs.getImgUrl.idCardImgPositive
        let idImgTwo = this.$refs.getImgUrl.idCardImgNegative
        let idImgThree = this.$refs.getImgUrl.idCardImgHandHeld
        let passerData = {
          identityCard: this.idCardNumber,
          mobilephone: this.telphoneNumber,
          validateCode: this.validCode,
          idCardImgPositive: idImgOne,
          idCardImgNegative: idImgTwo,
          idCardImgHandHeld: idImgThree
        }
        resultPost(passerBy, passerData).then(json => {
          let jsonMsg = json.msg
          let getJsonMsg = ''
          if (jsonMsg.indexOf('：') === -1) {
            getJsonMsg = jsonMsg
          } else {
            getJsonMsg = jsonMsg.split('：')[1]
          }
          if (json.code === '0000') {
            // Toast({
            //   message: json.msg,
            //   position: 'bottom',
            //   className: 'white'
            // })
            this.postAppoin({
              appoinNum: json.msg,
              appoinType: '星级用户认证'
            })
            this.$router.push('/appointSuccess')
          } else {
            Toast({
              message: getJsonMsg,
              position: 'bottom',
              className: 'white'
            })
          }
        })
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
<style lang="less">
#starUser-passer-by {
  padding-bottom: 200px;
  .starUser-hbs-list {
    overflow: hidden;
    .starUser-hbs-item {
      margin-top: 40px;
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
    .margin-passer{
      padding-bottom:100px;
    }
  }
}

</style>

