<template>
  <div id="takePhotosInform">
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法时间</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" >
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法路段</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" placeholder="请输入违法路段" >
      </div>
    </div>
    <div class="tp-photo-box">
      <div class="tp-photo-left">上传照片</div>
      <div class="tp-photo-right">
        <div class="tp-photo-1">
          <img src="">
        </div>
        <div class="tp-photo-1">
          <!--<img src="../../images/tpInformUpload.png">-->
        </div>
        <div class="tp-photo-1">
          <!--<img src="../../images/tpInformUpload.png">-->
        </div>
      </div>
    </div>
    <div class="tp-case-intro">
      <div class="tp-case-left">情况说明</div>
      <div class="tp-case-right">
        <textarea v-model="informIntroWhy" placeholder="请认真填写被举报车辆的违法项目"></textarea>
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">举报人</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informName" placeholder="请输入您的名字" >
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">身份证号</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informIdNumber" placeholder="请输入身份证号码" >
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">联系电话</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informTel" placeholder="请输入正确的电话号码" id="informTel">
      </div>
    </div>
    <div class="tp-btn-submit" @click="btnSurePutInform">确认提交</div>
    <div class="tp-look-tips">
      <!--<a>点击查看温馨提示</a>-->
      <router-link to="takePicturesTips">点击查看温馨提示</router-link>
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../service/getData'
  import { takePictures } from '../../config/baseUrl'
  export default {
    name: 'takePicturesInform',
    data () {
      return {
        informName: '',
        informIdNumber: '',
        informTel: '',
        informIntroWhy: ''
      }
    },
    methods: {
      btnSurePutInform: function () {
        let informData = {
          situationStatement: this.informIntroWhy,
          whistleblower: this.informName,
          identityCard: this.informIdNumber,
          mobilephone: this.informTel
        }
        resultPost(takePictures, JSON.stringify(informData)).then(json => {
          console.log(json)
        })
      }
    }
  }
</script>
<style lang="less">
#takePhotosInform{
  padding:0 50px;
  .tp-inform-box{
    margin-top:38px;
    width:100%;
    height:60px;
    .tp-inform-left{
      float:left;
      width:130px;
      height:100%;
      font-size:26px;
      line-height:60px;
      color:#000;
    }
    .tp-inform-right{
      float:left;
      width:520px;
      height:100%;
      background:#FFF;
      border:1px solid #eaeaed;
      -webkit-border-radius:8px;
      -moz-border-radius:8px;
      border-radius:8px;
      input{
        padding:17px 0 17px 20px;
        width:518px;
        height:100%;
        background:none;
        font-size:26px;
        outline:none;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
      }
      input:focus{
        background:#efeff4;
      }
    }
  }
  .tp-photo-box{
    margin-top:30px;
    width:100%;
    height:164px;
    .tp-photo-left{
      float:left;
      width:130px;
      height:100%;
      font-size:26px;
      color:#000;
    }
    .tp-photo-right{
      float:left;
      width:520px;
      .tp-photo-1{
        float:left;
        margin-right:15px;
        width:163px;
        height:163px;
        background:#FFF url("../../images/tpInformAngle.png") center no-repeat;
        background-size:80%;
        border:1px solid #dddde1;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
        img{
          width:163px;
          height:163px;
          -webkit-border-radius:8px;
          -moz-border-radius:8px;
          border-radius:8px;
        }
      }
      .tp-photo-1:last-child{
        margin-right:0;
      }
    }
  }
  .tp-case-intro{
    margin-top:30px;
    width:100%;
    height:294px;
    .tp-case-left{
      float:left;
      width:130px;
      height:100%;
      font-size:26px;
      color:#000;
    }
    .tp-case-right{
      float:left;
      width:520px;
      height:294px;
      textarea{
        padding:8px 20px 0;
        width:100%;
        height:100%;
        font-size:26px;
        outline:none;
        resize:none;
        border:1px solid #dddde1;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
      }
      textarea:focus{
        background:#efeff4;
      }
    }
  }
  .tp-btn-submit{
    margin-top:50px;
    margin-bottom:26px;
    width:100%;
    height:80px;
    background:#09bb07;
    color:#FFF;
    font-size:32px;
    line-height:80px;
    text-align:center;
    -webkit-border-radius:8px;
    -moz-border-radius:8px;
    border-radius:8px;
  }
  .tp-look-tips{
    width:100%;
    height:26px;
    margin-bottom:30px;
    a{
      font-size:26px;
      color:#24a6f8;
      text-decoration:underline;
    }
  }
}
</style>

