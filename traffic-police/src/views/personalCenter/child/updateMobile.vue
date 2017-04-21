<template>
<div class="updateMobile-outer pad-side-50">
  <ul class="updateMobile-list">
    <li class="updateMobile-item">
      <div class="updateMobile-name">旧手机号</div>
      <div class="updateMobile-text">
        <input class="text-input" type="text" placeholder="请输入您的旧手机号" v-model:value="oldMobile" readonly>
      </div>
    </li>
    <li class="updateMobile-item clear">
      <div class="updateMobile-name">验证码</div>
      <div class="updateMobile-text left validateCode">
        <input class="text-input" type="text" placeholder="请输入验证码" v-model:value="validateCode">
      </div>
      <div class="btn-yellow right">
        <button type="button" name="button" :disabled="isdisabled" @click.stop="sendValidateCode()" :class="{disabled: isdisabled}">{{btnValidateCode}}</button>
      </div>
    </li>
    <li class="updateMobile-item">
      <div class="updateMobile-name">新手机号</div>
      <div class="updateMobile-text">
        <input class="text-input" type="text" placeholder="请输入新的手机号码" v-model:value="newMobile">
      </div>
    </li>
  </ul>
  <button class="btn btn-blue"  type="button" name="button" @click.stop="submit()">修改手机号</button>
</div>
</template>

<script>
import { updateMobile, sendSMS } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
import { MessageBox, Toast } from 'mint-ui'
export default{
  name: 'updateMobile',
  data () {
    return {
      oldMobile: '',
      validateCode: '',
      newMobile: '',
      btnValidateCode: '发送验证码',
      isdisabled: false
    }
  },
  methods: {
    /* 发送验证码 */
    sendValidateCode: function () {
      let reqData = {
        mobilephone: this.oldMobile
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
      let phone = Number(this.newMobile)
      if (/^1[34578]\d{9}$/.test(phone)) {
        resultPost(updateMobile, reqData).then(json => {
          console.log(reqData)
          console.log(json)
          if (json.code === '0000') {
            Toast({
              message: '修改成功',
              position: 'bottom',
              className: 'white'
            })
            window.location.hash = '/userInfo'
            console.log('提交数据并返回我的资料页面')
          } else {
            MessageBox({
              title: '',
              message: json.msg
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
  created () {
    this.oldMobile = window.localStorage.getItem('mobilePhone')
    this.identityCard = window.localStorage.getItem('identityCard')
  }
}
</script>

<style lang="less">
.updateMobile-outer{
  background: #fff;
  font-size: 28px;
  color: #000;
  .updateMobile-list{
    overflow: hidden;
    .updateMobile-item{
      margin-top: 34px;
      padding-left: 130px;
      line-height: 56px;
      position: relative;
      .updateMobile-name{
        position: absolute;
        left: 0;
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