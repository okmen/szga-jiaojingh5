<template>
  <div class="starUser-upload">
    <p>请上传以下照片</p>
    <div class="starUser-upload-inner">
      <div class="starUser-upload-left starUser-upload-box" id="uploadIdBoxOne">
        <img :src="idCardImgPositive" id="uploadIdImgOne">
      </div>
      <div class="starUser-upload-center starUser-upload-box" id="uploadIdBoxTwo">
        <img :src="idCardImgNegative" id="uploadIdImgTwo">
      </div>
      <div class="starUser-upload-right starUser-upload-box" id="uploadIdBoxThree">
        <img :src="idCardImgHandHeld" id="uploadIdImgThree">
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
      idCardImgPositive: '',        // 身份证正面
      idCardImgNegative: '',        // 身份证反面
      idCardImgHandHeld: ''         // 手持身份证
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
          this.uploadIdImgThree(res.upToken)
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
          that.idCardImgPositive = res.imgUrl
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
          that.idCardImgNegative = res.imgUrl
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    uploadIdImgThree: function (uptoken) {  // 上传照片
      var that = this
      uploadImgFun({
        selfId: 'uploadIdImgThree',
        parentId: 'uploadIdBoxThree',
        upToken: uptoken,
        fileUploaded: function (res) {
          console.log(res)
          that.idCardImgHandHeld = res.imgUrl
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
.starUser-upload {
  background-color:#FFF;
  padding-bottom:50px;
  position: relative;
  .starUser-upload-inner {
    display: flex;
    justify-content: space-between;
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
      background:#efeff4 url('../../../images/idImgOne.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
    .starUser-upload-center {
      background:#efeff4 url('../../../images/idImgTwo.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
    .starUser-upload-right {
      background:#efeff4 url('../../../images/idImgThree.png') center no-repeat;
      background-size: 90%;
      border:none;
    }
  }
  p {
    padding-bottom: 18px;
    border:none;
  }
}
</style>
