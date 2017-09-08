<template>
  <div class="face-swiping ">
    <!-- 认证必须使用 表单 发起认证 -->
    <form ref="formFace" action="https://iauth-sandbox.wecity.qq.com/new/cgi-bin/auth.php" method="post" class="form-template">
      <div class="self-input form-template-item">
        <span class="form-template-item-left">姓名</span>
        <input type="text" placeholder="请输入姓名"  name="name"  class="form-template-item-right" v-model="userName">
      </div>
      <div class="self-input form-template-item">
        <span class="form-template-item-left">身份证号</span>
        <input type="text" name="ID" placeholder="请输入身份证号码"    class="form-template-item-right" v-model="IDcard">
      </div>
      <div class="self-input form-template-item">
        <span class="form-template-item-left">手机号码</span>
        <input type="text" placeholder="请输入手机号码"  class="form-template-item-right" v-model="mobilePhone">
      </div>
      <div class="form-template-item">
        <span class="form-template-item-left">验证码</span>
        <div class="form-template-item-right send-code">
          <input type="text" placeholder="请输入验证码" class="send-code-input" v-model="verificationCode" maxlength="6">
          <span class="send-code-btn" @click="getVerificationCode" v-if="showTime">获取验证码</span>
          <span class="send-code-btn" style="background: gray" v-if="!showTime">{{countDown}} s</span>
        </div>
      </div>
      <input type="hidden" name="appid" :value="appid">
      <input type="hidden" name="signature" :value="signature">
      <input type="hidden" name="redirect" :value="redirect">
      <input type="hidden" name="uid" :value="uid">
      <input type="hidden" name="type" value="0">
      <!--<input type="hidden" name="ID" value="362429199112305319">-->
      <!--<input type="hidden" name="name" value="朱乐义">-->
      <input type="hidden" name="sig" :value="sig">
      <div  class="btn" @click="sweepInto">进入扫脸</div>
    </form>
  </div>
</template>

<script>
  import { resultPost } from '../../service/getData'
  import {Toast, MessageBox} from 'mint-ui'
  import {isPhone} from 'service/regExp.js'
  import {faceautonym, sendSMS, verificatioCode, weChatBrushFaceAuthentication} from 'config/baseUrl.js'
  import crypto from 'crypto'
  export default {
    name: 'hello',
    data () {
      return {
        uid: window.localStorage.getItem('openId'),
        countDown: 60,
        verificationCode: '',
        mobilePhone: '',
        userName: '',
        IDcard: '',
        showTime: true,
        appid: '4435',
        secretkey: '9828577231bdc6d01754e292023cdbb8',
        aeskey: '26cb3f325891d42bec10efdeec9a4f95',
        redirect: '',
        signature: null,
        sig: null,
        infoSignature: null,
        infoSig: null
      }
    },
    methods: {
      // 获取验证码
      getVerificationCode () {
        if (!this.userName) {
          Toast({
            message: '请输入姓名',
            duration: 2000
          })
          return false
        }
        if (!this.IDcard) {
          Toast({
            message: '身份证号码不能为空',
            duration: 2000
          })
          return false
        }
        if (!isPhone(this.mobilePhone)) {
          Toast({
            message: '手机号码格式不正确',
            duration: 2000
          })
          return false
        }
        resultPost(sendSMS, {mobilephone: this.mobilePhone, businessType: 'szjj'}).then(data => {
          console.log(data, '验证码')
          if (data.code === '0000') {
            MessageBox('提示', '验证码已发送')
            this.showTime = false
            this.timer = setInterval(() => {
              if (this.countDown === 0) {
                clearInterval(this.timer)
                this.showTime = true
                this.countDown = 60
                return
              }
              this.countDown--
            }, 1000)
          } else {
            MessageBox('提示', data.msg)
          }
        })
      },
      sweepInto () {
        if (!this.userName) {
          Toast({
            message: '请输入姓名',
            duration: 2000
          })
          return false
        }
        if (!this.IDcard) {
          Toast({
            message: '身份证号码不能为空',
            duration: 2000
          })
          return false
        }
        if (!isPhone(this.mobilePhone)) {
          Toast({
            message: '手机号码格式不正确',
            duration: 2000
          })
          return false
        }
        if (!this.verificationCode) {
          Toast({
            message: '验证码不能为空',
            duration: 2000
          })
          return false
        }
        resultPost(verificatioCode, {mobilephone: this.mobilePhone, validateCode: this.verificationCode}).then(data => {
          if (data.code === '0000') {
            window.localStorage.setItem('mobilePhone', this.mobilePhone) // 手机号码
            this.$refs.formFace.submit()
          } else {
            MessageBox('提示', data.data)
          }
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
//        console.log(signature)
        return signature
      },
      // 获取认证签名校验
      getHashSig () {
        let datas = {
          appid: this.appid,
          signature: this.signature,
          redirect: this.redirect,
          uid: window.localStorage.getItem('openId'),
          type: 0,
          ID: this.IDcard,
          name: this.userName,
          sig: this.aeskey
        }
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
      this.redirect = window.location.href
      this.signature = this.getAppSign()
      this.sig = this.getHashSig()
      // 如果有返回的token，就尝试拉去实名认证信息
      if (this.$route.query.token && this.$route.query.uid) {
        window.alert('刷脸认证成功')
        resultPost(faceautonym, {
          token: this.$route.query.token,
          appid: this.appid
        }).then(data => {
          if (data.code === '0000') {
            window.localStorage.setItem('isLogin', false) // 是否登录
           /* window.localStorage.setItem('identityCard', data.data.ID) // 身份证
            window.localStorage.setItem('userName', data.data.name) // 用户名字 */
//            this.$router.push('/')
            let requestData = {
              name: data.data.name,
              identityCard: data.data.ID,
              mobilephone: window.localStorage.getItem('mobilePhone'),
              userSource: 'C',
              certificationType: 4,
              photo6: data.data.videopic1,
              openId: window.localStorage.getItem('openId')
            }
            resultPost(weChatBrushFaceAuthentication, requestData).then(json => {
              if (json.code === '0000') {
                MessageBox.alert('恭喜你已经成为星级用户,请前往登录').then(action => {
                  this.$router.push('/login')
                })
              } else {
                MessageBox('提示', json.msg)
              }
            })
          } else {
            MessageBox('提示', data.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .send-code {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
  .send-code-input {
    width: 250px;
  }
  .send-code-btn {
    background: #09bb07;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: white;
    width: 180px;
    border-radius: 8px;
  }
  }
  .btn{
    width: 90%;
    margin: 45px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
