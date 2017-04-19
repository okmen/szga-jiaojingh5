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
    <div id="container" class="updateUser-upload-inner">
      <div id="idCardImgPositive" class="updateUser-upload-left updateUser-upload-box">
        <img :src="idCardImgPositive" v-if="idCardImgPositive">
        <div class="box" v-else="idCardImgPositive">
          <em></em>
          <span>身份证(正面)</span>
        </div>
      </div>
      <div id="idCardImgNegative" class="updateUser-upload-center updateUser-upload-box">
        <img :src="idCardImgNegative" v-if="idCardImgNegative">
        <div class="box" v-else="idCardImgNegative">
          <em></em>
          <span>身份证(反面)</span>
        </div>
      </div>
      <div id="idCardImgHandHeld" class="updateUser-upload-right updateUser-upload-box">
        <img :src="idCardImgHandHeld" v-if="idCardImgHandHeld">
        <div class="box" v-else="idCardImgHandHeld">
          <em></em>
          <span>手持身份证</span>
        </div>
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
import uploadImgFun from '../../../service/uploadImg'
// import { resultGet } from '../../../service/getData'
// import { uploadImg } from '../../../config/baseUrl'

export default{
  name: 'updateUser',
  data () {
    return {
      tureName: '',
      identityCard: '',
      mailingAddress: '',
      msg: '',
      tipsShow: false,
      idCardImgPositive: '',
      idCardImgNegative: '',
      idCardImgHandHeld: ''
    }
  },
  components: {
    alertTips
  },
  methods: {
    getToken: function () {
      // resultGet(uploadImg).then(res => {
      //   res.code === '0000' && this.uploadImgFn(res.upToken)
      // })
      this.uploadImgFn()
    },
    uploadImgFn: function (uptoken) {
      var that = this
      uploadImgFun({
        selfId: 'idCardImgPositive',
        parentId: 'container',
        upToken: 'OayadC4VrxKhmgOGECo6qkCnkxsbTdMum1GGxwc9:RHWscJTU4TSwlq7sT5BFK3yQxrA=:eyJzY29wZSI6ImNka2otamoiLCJkZWFkbGluZSI6MTQ5MjU0MTM0Mn0=',
        fileUploaded: function (res) {
          that.idCardImgPositive = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
      uploadImgFun({
        selfId: 'idCardImgNegative',
        parentId: 'container',
        upToken: 'OayadC4VrxKhmgOGECo6qkCnkxsbTdMum1GGxwc9:RHWscJTU4TSwlq7sT5BFK3yQxrA=:eyJzY29wZSI6ImNka2otamoiLCJkZWFkbGluZSI6MTQ5MjU0MTM0Mn0=',
        fileUploaded: function (res) {
          that.idCardImgNegative = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
      uploadImgFun({
        selfId: 'idCardImgHandHeld',
        parentId: 'container',
        upToken: 'OayadC4VrxKhmgOGECo6qkCnkxsbTdMum1GGxwc9:RHWscJTU4TSwlq7sT5BFK3yQxrA=:eyJzY29wZSI6ImNka2otamoiLCJkZWFkbGluZSI6MTQ5MjU0MTM0Mn0=',
        fileUploaded: function (res) {
          that.idCardImgHandHeld = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    submitClick: function () {
      let reqData = {
        tureName: this.tureName, // 姓名
        identityCard: this.identityCard, // 身份证号码
        mailingAddress: this.mailingAddress, // 通讯地址
        idCardImgPositive: this.idCardImgPositive, // 身份证正面
        idCardImgNegative: this.idCardImgNegative, // 身份证反面
        IdCardImgHandHeld: this.idCardImgHandHeld // 手持身份证
      }
      for (let key in reqData) {
        if (!reqData[key]) {
          console.log(key)
          this.msg = '信息填写不完整'
          this.tipsShow = true
          return false
        }
      }
      if (!/^\d{17}(\d|x)$/i.test(this.identityCard)) {
        this.msg = '身份证号码格式不正确'
        this.tipsShow = true
        return false
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
    }
  },
  mounted () {
    this.getToken()
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
        .box{
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
        img{
          width: 100%;
          height: 100%;
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