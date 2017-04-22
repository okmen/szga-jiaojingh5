<template>
  <div id="takePhotosInform">
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法时间</div>
      <div class="tp-inform-right" @click="getTime">
        <input maxlength="50" type="text" v-model="informTime" placeholder="点击获取当前时间" readonly>
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法路段</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informRoad" placeholder="请输入违法路段(例如深南大道)" v-on:input="btnGetRoad">
        <ul v-if="showSelectRoad">
          <li v-for="(roadSelect, index) in roadSelectLists" @click="roadLiClick(index)">{{roadSelect.wfdd}}</li>
        </ul>
      </div>
    </div>
    <div class="tp-photo-box">
      <div class="tp-photo-left">上传照片</div>
      <div class="tp-photo-right">
        <div id="imgBoxOne" class="tp-photo-1">
          <img id="imgOne" :src="imgOne">
        </div>
        <div id="imgBoxTwo" class="tp-photo-1">
          <img id="imgTwo" :src="imgTwo">
        </div>
        <div id="imgBoxThree" class="tp-photo-1">
          <img id="imgThree" :src="imgThree">
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
        <input maxlength="50" type="text" v-model="informName" placeholder="请输入您的名字" 
         v-bind:readonly="this.loginJudge">
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">身份证号</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informIdNumber" placeholder="请输入身份证号码" 
         v-bind:readonly="this.loginJudge">
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">联系电话</div>
      <div class="tp-inform-right">
        <input maxlength="50" type="text" v-model="informTel" placeholder="请输入正确的电话号码"
          v-bind:readonly="this.loginJudge">
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
  import { resultGet, resultPost } from '../../service/getData'
  import { uploadImg, takePictures, getRoad } from '../../config/baseUrl'
  import uploadImgFun from '../../service/uploadImg'
  import { Toast } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    name: 'takePicturesInform',
    data () {
      return {
        showSelectRoad: false,    // 是否显示路段列表
        roadSelectLists: [],     // 路段列表
        informTime: '',          // 违法时间
        informRoad: '',          // 违法路段
        informType: '',          // 违法路段数值
        imgOne: '',              // 上传照片
        imgTwo: '',
        imgThree: '',
        informIntroWhy: '',      // 情况说明
        informName: '',          // 举报人
        informIdNumber: '',      // 身份证号
        informTel: '',           // 电话号码
        loginJudge: window.localStorage.isLogin        // 判读是否登录
      }
    },
    mounted: function () {  // 组件加载完成之后立即获取
      this.getToken()
      if (this.loginJudge) {
        this.informName = window.localStorage.userName
        this.informIdNumber = window.localStorage.identityCard
        this.informTel = window.localStorage.mobilePhone
      }
    },
    computed: {
      regTel: function () {
        return /^1[34578]\d{9}$/.test(this.informTel)
      }
    },
    methods: {
      getTime: function () {           // 获取当前时间
        let getInformTime = this.currentTime()
        this.informTime = getInformTime
      },
      getToken: function () {          // 获取token
        resultGet(uploadImg).then(res => {
//          res.code === '0000' && this.uploadImg(res.upToken)
          if (res.code === '0000') {
            this.uploadImgOne(res.upToken)
            this.uploadImgTwo(res.upToken)
            this.uploadImgThree(res.upToken)
          }
        })
      },
      uploadImgOne: function (uptoken) {  // 上传照片
        var that = this
        uploadImgFun({
          selfId: 'imgOne',
          parentId: 'imgBoxOne',
          upToken: uptoken,
          fileUploaded: function (res) {
            console.log(res)
            that.imgOne = res.imgUrl
          },
          error: function (err) {
            console.log(err)
          }
        })
      },
      uploadImgTwo: function (uptoken) {  // 上传照片
        var that = this
        uploadImgFun({
          selfId: 'imgTwo',
          parentId: 'imgBoxTwo',
          upToken: uptoken,
          fileUploaded: function (res) {
            console.log(res)
            that.imgTwo = res.imgUrl
          },
          error: function (err) {
            console.log(err)
          }
        })
      },
      uploadImgThree: function (uptoken) {  // 上传照片
        var that = this
        uploadImgFun({
          selfId: 'imgThree',
          parentId: 'imgBoxThree',
          upToken: uptoken,
          fileUploaded: function (res) {
            console.log(res)
            that.imgThree = res.imgUrl
          },
          error: function (err) {
            console.log(err)
          }
        })
      },
      btnSurePutInform: function () {  // 提交拍照举报按钮
        let informData = {
          illegalTime: this.informTime,             // 违法时间
          illegalSections: this.informType,            // 违法路段
          reportImgOne: this.imgOne,                      // 上传照片
          reportImgTwo: this.imgTwo,
          reportImgThree: this.imgThree,
          illegalActivitieOne: this.informIntroWhy,  // 情况说明
          inputManName: this.informName,           // 举报人
          identityCard: this.informIdNumber,        // 身份证号
          inputManPhone: this.informTel,              // 电话号码
          userSource: 'C',
          openId: window.localStorage.openId
        }
        console.log(informData)
        for (let key in informData) {
          if (!informData[key]) {
            Toast({
              message: '信息填写不完整',
              position: 'bottom',
              className: 'white'
            })
            return false
          }
        }
        resultPost(takePictures, informData).then(json => { // 调取随手拍举报接口
          console.log(json)
          if (json.code === '0000') {
            console.log('举报成功')
            this.postInform({
              takePicturesRecord: json.data.recordNumber,
              takePicturesPassword: json.data.queryPassword
            })
            this.$router.push('/takePicturesSuccess')
          } else {
            Toast({
              message: json.msg,
              position: 'bottom',
              className: 'white'
            })
          }
        })
      },
      btnGetRoad: function () {  // 点击选择交通路段
        this.showSelectRoad = true
        let getRoadData = {
          keyword: this.informRoad
        }
        let that = this
        resultPost(getRoad, getRoadData).then(json => {
          if (json.data) {
            let roadLists = json.data.list
            let roadArry = []
            roadLists.forEach((item, index) => {
              let roadObj = {
                'wfdd': item.wfdd.split('---')[1],
                'type': item.wfdd.split('---')[0]
              }
              roadArry.push(roadObj)
              that.roadSelectLists = roadArry
            })
          } else {
            Toast({
              message: '请输入正确的路段，不用太详细',
              position: 'bottom',
              className: 'white'
            })
          }
        })
      },
      currentTime: function () {  // 获取时间
        let now = new Date()
        let year = now.getFullYear()       // 年
        let month = now.getMonth() + 1     // 月
        let day = now.getDate()            // 日
        let hh = now.getHours()            // 时
        let mm = now.getMinutes()          // 分
        let ss = now.getSeconds()          // 秒
        let clock = year + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day + ' '
        if (hh < 10) {
          clock += ' '
        }
        clock += hh + ':'
        if (mm < 10) {
          clock += '0'
        }
        clock += mm + ':'
        if (ss < 10) {
          clock += '0'
        }
        clock += ss
        return (clock)
      },
      roadLiClick: function (index) { // Li的点击事件
        this.informRoad = this.roadSelectLists[index].wfdd
        this.informType = this.roadSelectLists[index].type
        this.showSelectRoad = false
      },
      ...mapActions({
        postInform: 'postInform'
      })
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
      background:#efeff4;
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
      ul{
        position:relative;
        overflow:hidden;
        overflow-y:auto;
        width:518px;
        height:520px;
        z-index:999;
        li{
          width:100%;
          height:50px;
          background:#FFF;
          border-bottom:1px solid #efeff4;
          font-size:26px;
          line-height:50px;
          text-align:center;
          z-index:999;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
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
        background:#efeff4;
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
.mint-toast{
  .mint-toast-text{
    color:#FFF;
  }
}
</style>

