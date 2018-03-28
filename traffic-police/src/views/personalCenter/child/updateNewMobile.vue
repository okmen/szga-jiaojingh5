<template>
<div class="updateMobile-outer pad-side-50">
  <ul class="updateMobile-list">
    <li class="updateMobile-item">
      <div class="updateMobile-name">新手机号</div>
      <div class="updateMobile-text">
        <input class="text-input" type="tel" placeholder="请输入新的手机号码" v-model="newMobile">
      </div>
    </li>
    <li class="updateMobile-item clear">
      <div class="updateMobile-name">验证码</div>
      <div class="updateMobile-text left validateCode">
        <input class="text-input" type="text" placeholder="请输入验证码" v-model="validateCode">
      </div>
      <div class="btn-yellow right">
        <button type="button" name="button" :disabled="isdisabled" @click.stop="sendValidateCode()" :class="{disabled: isdisabled}">{{btnValidateCode}}</button>
      </div>
    </li>
  </ul>
  <button class="btn btn-blue"  type="button" name="button" @click.stop="submit()">修改手机号</button>
</div>
</template>

<script>
import { updateMobile, sendSMS, insertToken } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
import { isPhone } from 'service/regExp.js'
import { Toast, Indicator } from 'mint-ui'
export default{
  name: 'updateMobile',
  data () {
    return {
      oldMobile: '',                                        // 旧手机
      validateCode: '',                                     // 验证码
      newMobile: '',                                        // 新手机
      verifyNewMobile: '',                                  // 重复新手机
      btnValidateCode: '发送验证码',
      isdisabled: false,
      identityCard: '',
      userName: '',
      IDcard: '',
      picKey: '',
      uid: window.localStorage.getItem('openId'),
      appid: '4435',
      secretkey: '9828577231bdc6d01754e292023cdbb8',
      aeskey: '26cb3f325891d42bec10efdeec9a4f95',
      redirect: '',
      signature: null,
      sig: null,
      infoSignature: null,
      infoSig: null,
      type: ''
    }
  },
  methods: {
    /* 发送验证码 */
    sendValidateCode: function () {
      let reqData = {
        mobilephone: this.newMobile,
        businessType: 'szjj'
      }
      let time = 30
      this.btnValidateCode = `已发送（${time}）`
      this.isdisabled = true
      resultPost(sendSMS, reqData).then(json => {
        console.log(json)
      })
      function countDown (that) {
        setTimeout(() => {
          if (time === 0) {
            that.isdisabled = false
            that.btnValidateCode = '发送验证码'
          } else {
            time--
            that.btnValidateCode = `已发送（${time}）`
            countDown(that)
          }
        }, 1000)
      }
      countDown(this)
    },
    /* 提交数据 */
    submit: function () {
      let reqData = {
        type: '2', // 1-旧手机 2-新手机
        oldMobile: window.localStorage.getItem('mobilePhone'),
        validateCode: this.validateCode,
        newMobile: this.newMobile,
        identityCard: window.localStorage.getItem('identityCard')
      }
      for (let key in reqData) {
        if (!reqData[key]) {
          Toast({
            message: '信息填写不完整',
            position: 'bottom',
            className: 'white'
          })
          return false
        }
      }
      let phone = Number(this.newMobile)
      if (isPhone(phone)) {
        Indicator.open('正在提交...')
        resultPost(updateMobile, reqData).then(json => {
          Indicator.close()
          console.log(reqData)
          console.log(json)
          if (json.code === '0000') {
            Toast({
              message: '修改成功',
              position: 'bottom',
              className: 'white'
            })
            window.localStorage.removeItem('behindTheFrame4Digits')
            window.localStorage.removeItem('cars')
            window.localStorage.removeItem('identityCard')
            window.localStorage.removeItem('isLogin')
            window.localStorage.removeItem('mobilePhone')
            window.localStorage.removeItem('myNumberPlate')
            window.localStorage.removeItem('plateType')
            window.localStorage.removeItem('userName')
            window.location.hash = '/login'
            console.log('提交数据并返回我的资料页面')
          } else {
            Toast({
              message: json.msg,
              position: 'bottom',
              duration: 2000
            })
          }
        })
      } else {
        Toast({
          message: '新号码格式有误',
          position: 'bottom',
          className: 'white'
        })
      }
    }
  },
  mounted () {
    // 录入token
    if (this.$route.query.token) {
      let reqData = {
        identityCard: window.localStorage.getItem('identityCard'),
        name: this.appid, // appid
        openId: window.localStorage.getItem('openId'),
        token: this.$route.query.token,
        source: window.localStorage.getItem('sourceOfCertification')
      }
      resultPost(insertToken, reqData).then(json => {})
    }
  },
  beforeDestory () {
    Indicator.close()
  }
}
</script>
