<template>
 <div id="takePhotoTips">
    <div class="tp-title">
      {{getNoticeTitle}}
    </div>
<!--    <div class="tp-tips-intro">
    <p>
      一、举报须如实，捏造事实进行虚假举报的，将承担相应法律责任。
    </p>
    <p>
      二、驾驶员在行车过程中应严格遵守交通法规，不得在驾驶过程中或其他有碍交通安全的情况下拍照进行举报。
    </p>
    <p>
      三、违法行为发生后48小时以内举报有效。
    </p>
    <p>
      四、举报需提供两张以上能记录违法事实的图片或10秒以上连贯视频，通过手机拍摄车辆违法时应打开手机的定位功能，上传图片无法提取到位置信息的举报不予受理。
    </p>
    <p>
      五、举报拍摄的图片或视频要能清晰记录违法车辆号牌及外观，应包含道路及周边环境信息，如实填写详细的违法路段和违法发生时间。
    </p>
    <p>
      六、举报动态的交通违法，提供的图片应当能够反映车辆位移的情况且车辆牌号牌清晰，有视频支撑的尽量通过微博上传视频举报。
    </p>
    <p>
      七、举报违停时所拍图片应包含前、后及侧面照片，通过照片能判断车内无人。
    </p>
    <p>
      八、其他未尽事宜，由深圳市公安局交通警察局具最终解释权。
    </p>
   </div> -->
    <div class="tp-tips-intro" v-html="userAgreementCon"></div>
   <div>
     
   </div>
   <div class="tp-red-packet">
     <div class="tp-inform-box">
       <router-link to="/userAgreement/wfsspjbzy">有奖举报范围及奖励金额</router-link>
       <router-link to="/userAgreement/sspjbgz">奖金领取须知</router-link>
     </div>
   </div>
   <div class="tp-read">
     <div class="tp-read-checkbox">
       <input type="checkbox" id="informReadCheckbox" name="informReadCheckbox" v-model="checked">
       <label for="informReadCheckbox"></label>
     </div>
     <span>
       我已认真阅读以上内容，并愿意承担相关法律责任。
     </span>
   </div>
   <div class="tp-btn-sure">
     <button @click="btnAgreeRequest">确认</button>
   </div>
   <div v-wechat-title="$route.meta.title"></div>
 </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { resultPost } from '../../../service/getData'
import { userAgreement } from '../../../config/baseUrl'
export default {
  data () {
    return {
      checked: '',
      getNoticeTitle: '',
      userAgreementCon: ''

    }
  },
  mounted: function () {
    let userAgreementData = {
      // noticeKey: 'sspjbgz'
      noticeKey: 'sspjbzysx'
    }
    resultPost(userAgreement, userAgreementData).then(json => { // 调取随手拍举报接口
      console.log(json)
      this.getNoticeTitle = json.data.title
      this.userAgreementCon = json.data.content
    })
  },
  methods: {
    btnAgreeRequest: function () {
      if (this.checked === true) {
        this.$router.push('/takePicturesInform')
      } else {
        Toast({
          message: '请勾选已阅读温馨提示',
          position: 'bottom',
          duration: 1500
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
#takePhotoTips{
.tp-title{
  width:100%;
  height:74px;
  background:url("../../../images/takePictureTipBg.png") no-repeat;
  background-size:100% 100%;
  font-size:30px;
  line-height:74px;
  text-align:center;
  color:#FFF;
}
.tp-tips-intro{
  /*padding:0 50px;*/
  width:100%;
/*  height:350px;*/
  p{
    /*text-indent:56px;*/
    font-size:24px;
    line-height:40px;
  }
  p:first-child{
    margin-top:10px;
  }
}
.tp-red-packet{
  padding:0 50px;
  width:100%;
  h3{
    width:100%;
    height:80px;
    font-size:26px;
    line-height:90px;
  }
  .tp-red-intro{
    width:100%;
    height:260px;
    p{
      font-size:24px;
      line-height:36px;
    }
    p:first-child{
      margin-bottom:38px;
    }
  }
  .tp-inform-box{
    width:100%;
    height:180px;
    a{
      display:block;
      font-size:26px;
      color:#24a6f8;
      text-decoration:underline;
    }
    a:first-child{
      margin: 20px 0 20px 0;
    }
  }
}
.tp-read{
  padding:0 50px;
  width:100%;
  height:106px;
  .tp-read-checkbox{
    float:left;
    position:relative;
    margin:4px 20px 0 0;
    width:26px;
    height:26px;
    input[type=checkbox]{
      visibility: hidden;
    }
    label{
      position:absolute;
      width:26px;
      height:26px;
      top:0;
      left:0;
      background:#FFF;
      border:1px dotted #6a6a6a;
      -webkit-border-radius:6px;
      -moz-border-radius:6px;
      border-radius:6px;
      cursor:pointer;
    }
    label:after{
      opacity:0.2;
      content:'';
      position:absolute;
      width:24px;
      height:8px;
      background:transparent;
      top:0;
      left:3px;
      border:4px solid #333;
      border-top:none;
      border-right:none;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    label:hover::after{
      opacity:0.5;
    }
    input[type=checkbox]:checked + label:after{
      opacity:1;
    }
  }
  span{
    display:block;
    float:left;
    font-size:22px;
  }
}
.tp-btn-sure{
  width:100%;
  height:108px !important;
  button{
    margin-left:52px;
    width:646px;
    height:80px;
    background:#09bb07;
    color:#FFF;
    font-size:36px;
    text-align:center;
    line-height:80px;
    outline:none;
    -webkit-border-radius:8px;
    -moz-border-radius:8px;
    border-radius:8px;
  }
}
.tp-bottom{
  text-align: center;
  font-size: 16px;

}
}
</style>
