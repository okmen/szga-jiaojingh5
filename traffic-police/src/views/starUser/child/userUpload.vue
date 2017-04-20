<template>
  <div class="star-upload-user starUser-upload">
      <p>请上传以下照片</p>
      <div class="starUser-upload-inner">
        <div class="starUser-upload-four starUser-upload-box" id="uploadIdBoxFour">
          <img :src="userIdCardPositive" id="uploadIdImgFour">
        </div>
        <div class="starUser-upload-five starUser-upload-box" id="uploadIdBoxFive">
          <img :src="userIdCardHandHeld" id="uploadIdImgFive">
        </div>
      </div>
      <div class="starUser-upload-inner">
        <div class="starUser-upload-left starUser-upload-box" id="uploadIdBoxOne">
          <img :src="ownerIdCardPositive" id="uploadIdImgOne">
        </div>
        <div class="starUser-upload-right starUser-upload-box" id="uploadIdBoxTwo">
          <img :src="ownerIdCardHandHeld" id="uploadIdImgTwo">
        </div>
      </div>
      <button class="btn" type="button" name="button" @click="btnSureStar">确认提交</button>
    </div>
</template>
<script>
import { resultGet } from '../../../service/getData'
import { uploadImg } from '../../../config/baseUrl'
import uploadImgFun from '../../../service/uploadImg'
export default {
  name: 'common',
  data () {
    return {
      userIdCardPositive: '',
      userIdCardHandHeld: '',
      ownerIdCardPositive: '',
      ownerIdCardHandHeld: ''
    }
  },
  mounted: function () {
    this.getToken()
  },
  methods: {
    getToken: function () {             // 获取token
      resultGet(uploadImg).then(res => {
        if (res.code === '0000') {
          this.uploadIdImgOne(res.upToken)
          this.uploadIdImgTwo(res.upToken)
          this.uploadIdImgFour(res.upToken)
          this.uploadIdImgFive(res.upToken)
        }
      })
    },
    uploadIdImgOne: function (uptoken) {    // 上传照片
      console.log(uptoken)
      var that = this
      uploadImgFun({
        selfId: 'uploadIdImgOne',
        parentId: 'uploadIdBoxOne',
        upToken: uptoken,
        fileUploaded: function (res) {
          console.log(res)
          that.ownerIdCardPositive = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    uploadIdImgTwo: function (uptoken) {    // 上传照片
      var that = this
      uploadImgFun({
        selfId: 'uploadIdImgTwo',
        parentId: 'uploadIdBoxTwo',
        upToken: uptoken,
        fileUploaded: function (res) {
          console.log(res)
          that.ownerIdCardHandHeld = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    uploadIdImgFour: function (uptoken) {  // 上传照片
      var that = this
      uploadImgFun({
        selfId: 'uploadIdImgFour',
        parentId: 'uploadIdBoxFour',
        upToken: uptoken,
        fileUploaded: function (res) {
          console.log(res)
          that.userIdCardPositive = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    uploadIdImgFive: function (uptoken) {  // 上传照片
      var that = this
      uploadImgFun({
        selfId: 'uploadIdImgFive',
        parentId: 'uploadIdBoxFive',
        upToken: uptoken,
        fileUploaded: function (res) {
          console.log(res)
          that.userIdCardHandHeld = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    btnSureStar: function () {
      this.$emit('btnSureStar')
    }
  }
}
</script>
<style lang="less">
.star-upload-user {
  margin-top:25px;
  background-color:#FFF;
  padding-bottom:50px;
  position: relative;
  .starUser-upload-inner {
    padding:0 80px;
    .starUser-upload-box {
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
      img{
        width:100%;
        height:100%;
        border-radius: 15px;
      }
    }
    .starUser-upload-left {
      background:#efeff4 url('../../../images/ownerIdImg1.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
    .starUser-upload-center {
      background:#efeff4 url('../../../images/ownerIdImg2.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
    .starUser-upload-right {
      background:#efeff4 url('../../../images/ownerIdImg3.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
    .starUser-upload-four{
      background:#efeff4 url('../../../images/userIdImg3.png') center no-repeat;
      background-size: 90%;
      border:none;
      margin-bottom:20px;
    }
    .starUser-upload-five{
      background:#efeff4 url('../../../images/userIdImg2.png') center no-repeat;
      background-size: 90%;
      border:none;
      margin-bottom:20px;
      float:left;
    }
  }
  p {
    padding-bottom: 18px;
    border:none;
  }
}
</style>