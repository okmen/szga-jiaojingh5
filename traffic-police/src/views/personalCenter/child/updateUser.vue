<template>
<div class="updateUser-outer pad-side-50">
  <div class="updateUser-form">
    <ul class="updateUser-list">
      <li class="updateUser-item">
        <div class="updateUser-name">
          <span>姓名</span>
        </div>
        <div class="updateUser-text">
          <input class="text-input" type="text" placeholder="请输入您的姓名" v-model:value="tureName">
        </div>
      </li>
      <li class="updateUser-item">
        <div class="updateUser-name">
          <span>身份证号</span>
        </div>
        <div class="updateUser-text">
          <input class="text-input" type="text" placeholder="请输入您的身份证号" v-model:value="identityCard">
        </div>
      </li>
      <li class="updateUser-item">
        <div class="updateUser-name">
          <span>通讯地址</span>
        </div>
        <div class="updateUser-text">
          <input class="text-input" type="text" placeholder="请输入通讯地址" v-model:value="mailingAddress">
        </div>
      </li>
    </ul>
  </div>
  <div class="updateUser-upload">
    <p>请按提示上传以下证件照片</p>
    <div class="updateUser-upload-inner">
      <div class="updateUser-upload-left updateUser-upload-box">
        <em></em>
        <span>身份证(正面)</span>
      </div>
      <div class="updateUser-upload-center updateUser-upload-box">
        <em></em>
        <span>身份证(反面)</span>
      </div>
      <div class="updateUser-upload-right updateUser-upload-box">
        <em></em>
        <span>手持身份证</span>
      </div>
    </div>
  </div>
  <button class="btn" type="button" name="button" @click.stop="submitClick()">提交</button>
  <alert-tips :tipsText="msg" @closeTips="closeTips()" v-if="tipsShow"></alert-tips>
</div>
</template>
<script>
import { updateUser } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
import alertTips from '../../../components/alertTips'
export default{
  name: 'updateUser',
  data () {
    return {
      tureName: '',
      identityCard: '',
      mailingAddress: '',
      msg: '',
      tipsShow: false
    }
  },
  components: {
    alertTips
  },
  methods: {
    submitClick: function () {
      let reqData = {
        tureName: this.tureName, // 姓名
        identityCard: this.identityCard, // 身份证号码
        mailingAddress: this.mailingAddress, // 通讯地址
        // idCardImgPositive: this.idCardImgPositive, // 身份证正面 暂无
        // idCardImgNegative: this.idCardImgNegative, // 身份证反面 暂无
        // IdCardImgHandHeld: this.IdCardImgHandHeld // 手持身份证 暂无
        idCardImgPositive: 'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg', // 身份证正面 暂无
        idCardImgNegative: 'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg', // 身份证反面 暂无
        idCardImgHandHeld: 'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg' // 手持身份证 暂无
      }
      for (let key in reqData) {
        if (!reqData[key]) {
          this.msg = '信息填写不完整'
          this.tipsShow = true
          return false
        }
      }
      resultPost(updateUser, reqData).then(json => {
        console.log(json)
        if (json.code === '0000') {
          window.location.hash = '/userInfo'
        } else {
          this.msg = json.msg
          this.tipsShow = true
        }
      })
    },
    closeTips: function () {
      this.tipsShow = false
      this.msg = ''
    },
    sendRequest: function (data) {

    }
  }
}
</script>
<style lang="less">
.updateUser-outer{
  font-size: 26px;
  color: #000;
  background: #fff;
  .updateUser-form{
    overflow: hidden;
    padding-bottom: 50px;
    .updateUser-item{
      margin-top: 34px;
      padding-left: 130px;
      position: relative;
      line-height: 56px;
      .updateUser-name{
        position: absolute;
        left: 0;
      }
    }
  }
  .updateUser-upload{
    p{
      font-size: 28px;
      margin-bottom: 34px;
    }
    .updateUser-upload-inner{
      display: flex;
      justify-content: space-between;
      .updateUser-upload-box {
        width: 190px;
        height: 190px;
        background-color: #efeff4;
        border: 2px solid #dddde1;
        border-radius: 15px;
        color: #666;
        font-size: 22px;
        text-align: center;
        em {
          display: inline-block;
          width: 162px;
          height: 111px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        span {
          display: block;
        }
      }
      .updateUser-upload-left {
        em {
          background-image: url('../../../images/ID-front.png');
          background-size: cover;
        }
      }
      .updateUser-upload-center {
        em {
          background-image: url('../../../images/ID-rear.png');
          background-size: cover;
        }
      }
      .updateUser-upload-right {
        em {
          background-image: url('../../../images/ID-hand.png');
          background-size: cover;
        }
      }
    }
  }
}
</style>