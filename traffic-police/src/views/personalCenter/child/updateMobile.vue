<template>
<div class="updateMobile-outer pad-side-50">
  <ul class="updateMobile-list">
    <li class="updateMobile-item">
      <div class="updateMobile-name">旧手机号</div>
      <div class="updateMobile-text">
        <input class="text-input" type="tel" placeholder="请输入您的旧手机号" v-model="oldMobile" readonly>
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
    <li class="updateMobile-item">
      <div class="updateMobile-name">新手机号</div>
      <div class="updateMobile-text">
        <input class="text-input" type="tel" placeholder="请输入新的手机号码" v-model="newMobile">
      </div>
    </li>
    <li class="updateMobile-item">
      <div class="updateMobile-name">确认新手机</div>
      <div class="updateMobile-text">
        <input class="text-input" type="tel" placeholder="请再次输入新的手机号码" v-model="verifyNewMobile">
      </div>
    </li>
  </ul>
  <button class="btn btn-blue"  type="button" name="button" @click.stop="submit()">修改手机号</button>
  <form ref="formFace" class="button" style="overflow: hidden" action="https://iauth.wecity.qq.com/new/cgi-bin/auth.php" method="post">
    <!--<div class="self-input form-template-item">
      <span class="form-template-item-left">姓名</span>
      <input type="text" placeholder="请输入姓名"  name="name"  class="form-template-item-right" v-model="userName">
    </div>
    <div class="self-input form-template-item">
      <span class="form-template-item-left">身份证号</span>
      <input type="text" name="ID" placeholder="请输入身份证号码"    class="form-template-item-right" v-model="IDcard">
    </div>-->
    <input type="hidden" name="appid" :value="appid">
    <input type="hidden" name="signature" :value="signature">
    <input type="hidden" name="redirect" :value="redirect">
    <input type="hidden" name="uid" :value="uid">
    <input type="hidden" name="type" v-model="type">
    <input type="hidden" name="ID" v-model="identityCard">
    <input type="hidden" name="name" v-model="userName">
    <input type="hidden" name="pic_key" v-model="picKey">
    <input type="hidden" name="sig" :value="sig">
    <button class="btn btn-custom"  type="button" name="button" @click.stop="sweepInto()">旧手机不在了</button>
  </form>
</div>
</template>

<script>
import crypto from 'crypto'
import { updateMobile, sendSMS, getTokenByIdentityCard } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
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
      signToken: '',
      type: '0'
    }
  },
  methods: {
    /* 发送验证码 */
    sendValidateCode: function () {
      if (!this.oldMobile) {
        Toast({
          message: '手机号不能为空',
          position: 'bottom',
          className: 'white'
        })
        return false
      }
      let reqData = {
        mobilephone: this.oldMobile,
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
        type: '1', // 1-旧手机 2-新手机
        oldMobile: this.oldMobile,
        validateCode: this.validateCode,
        newMobile: this.newMobile,
        identityCard: this.identityCard
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
      if (this.verifyNewMobile !== this.newMobile) {
        Toast({
          message: '两次手机号输入不一致',
          position: 'bottom',
          className: 'white'
        })
        return false
      }
      let phone = Number(this.newMobile)
      if (/^1[34578]\d{9}$/.test(phone)) {
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
    },
    sweepInto () {
      if (this.signToken) {
        this.type = '1'
        this.IDcard = this.identityCard
        this.userName = window.localStorage.getItem('userName')
        this.picKey = this.signToken
      }
      console.log(this.type)
      // 更新签名和校验
      this.signature = this.getAppSign()
      this.sig = this.getHashSig()
      this.$nextTick(() => {
        this.$refs.formFace.submit()
      })
    },
    // 获取认证签名
    getAppSign () {
      let appid = this.appid
      let secretkey = this.secretkey
      let apiname = 'auth'
      let e = 600
      let time = (Date.parse(new Date()) / 1000).toString()
      let orignal = 'a=' + appid + '&m=' + apiname + '&t=' + time + '&e=' + e
      orignal = new Buffer(orignal, 'utf8')
      let wordArray = crypto.createHmac('sha1', secretkey).update(orignal).digest()
      let buf = Buffer.concat([wordArray, orignal])
      let signature = buf.toString('base64')
      // console.log(signature)
      return signature
    },
    // 获取认证签名校验
    getHashSig () {
      let datas = {
        appid: this.appid,
        signature: this.signature,
        redirect: this.redirect,
        uid: window.localStorage.getItem('openId'),
        type: this.type,
        ID: this.IDcard,
        name: this.userName,
        pic_key: this.picKey,
        sig: this.aeskey
      }
      console.log(datas)
      let srcData = ''
      for (let index in datas) {
        if (index !== 'sig') {
          srcData += datas[index] + '-'
        }
      }
      srcData += 'authkey'
      return crypto.createHash('md5').update(srcData).digest('hex')
    }
  },
  created () {
    this.redirect = window.location.href.split('#')[0] + '#/updateNewMobile'
    this.oldMobile = window.localStorage.getItem('mobilePhone')
    this.identityCard = window.localStorage.getItem('identityCard')
    let reqData = {
      identityCard: window.localStorage.getItem('identityCard')
    }
    // 获取token
    resultPost(getTokenByIdentityCard, reqData).then(json => {
      this.signToken = json.data.token
      console.log(json)
    })
    // // 录入token
    // if (this.$route.query.token) {
    //   let reqData = {
    //     identityCard: window.localStorage.getItem('identityCard'),
    //     name: window.localStorage.getItem('userName'),
    //     openId: window.localStorage.getItem('openId'),
    //     phone: window.localStorage.getItem('mobilePhone'),
    //     token: this.$route.query.token,
    //     source: window.localStorage.getItem('sourceOfCertification')
    //   }
    //   resultPost(insertToken, reqData).then(json => {
    //     window.alert(json)
    //   })
    //   // window.alert(window.location.href)
    // }
  },
  beforeDestory () {
    Indicator.close()
  }
}
</script>

<style lang="less">
.updateMobile-outer{
  background: #fff;
  font-size: 28px;
  color: #000;
  .btn-custom {
    margin-top: 30px;
    color: #2696dd;
    background-color: #fff;
    border: 1px solid #2696dd;
  }
  .updateMobile-list{
    overflow: hidden;
    .updateMobile-item{
      margin-top: 34px;
      padding-left: 150px;
      line-height: 56px;
      position: relative;
      .updateMobile-name{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .validateCode{
        width: 50%;
      }
      .btn-yellow{
        width: 223px;
        height: 60px;
        button{
          width: 100%;
          height: 100%;
          border-radius: 0.3125rem;
          background: #f8c53d;
          color: #fff;
          font-size: 26px;
          outline: none;
          &.disabled{
            background: #ccc;
            color: #fff;
          }
        }
      }
    }
  }
}
.white{
  span{
    color: #fff;
  }
}
</style>