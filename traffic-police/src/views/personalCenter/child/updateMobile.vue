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
        <button type="button" name="button" :disabled="isdisabled" @click.stop="sendValidateCode()">{{btnValidateCode}}</button>
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
import { updateMobile } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
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
    sendValidateCode: function () {
      // let time = 30
    },
    submit: function () {
      console.log('提交数据并返回我的资料页面')
      let reqData = {
        oldMobile: this.oldMobile,
        validateCode: this.validateCode,
        newMobile: this.newMobile
      }
      resultPost(updateMobile, reqData).then(json => {
        console.log(json)
      })
    }
  }
}
</script>

<style lang="less">
.updateMobile-outer{
  background: #fff;
  .updateMobile-list{
    overflow: hidden;
    .updateMobile-item{
      margin-top: 34px;
      padding-left: 130px;
      line-height: 56px;
      font-size: 28px;
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
          border-radius: 6px;
          background: #f8c53d;
          color: #fff;
          outline: none;
          &.disabled{
          }
        }
      }
    }
  }
}
</style>