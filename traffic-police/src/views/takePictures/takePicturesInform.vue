<template>
  <div id="takePhotosInform">
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法时间</div>
      <div class="tp-inform-right">
        <el-date-picker v-model="informTime" type="datetime" format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">违法路段</div>
      <div class="tp-inform-right">
        <input type="text" maxlength="8" v-model="informRoad" placeholder="请输入违法路段(例如深南大道)" v-on:input="btnGetRoad">
        <ul v-if="showSelectRoad">
          <li v-for="(roadSelect, index) in roadSelectLists" @click="roadLiClick(index)">{{roadSelect.wfdd}}</li>
        </ul>
      </div>
    </div>
    <div class="tp-photo-box">
      <div class="tp-photo-left">上传照片</div>
      <div class="tp-photo-right">
        <label class="tp-photo-1" for="file1">
          <input id="file1" type="file" accept="image/*" >
          <img :src="imgOne">
        </label>
        <label class="tp-photo-1" for="file2">
          <input id="file2" type="file" accept="image/*">
          <img :src="imgTwo">
        </label>
        <label class="tp-photo-1" for="file3">
          <input id="file3" type="file" accept="image/*">
          <img :src="imgThree">
        </label>
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
        <input type="text" maxlength="10" v-model="informName" placeholder="请输入您的名字" 
         v-bind:readonly="this.loginJudge">
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">身份证号</div>
      <div class="tp-inform-right">
        <input type="text" maxlength="19" v-model="informIdNumber" placeholder="请输入身份证号码" 
         v-bind:readonly="this.loginJudge">
      </div>
    </div>
    <div class="tp-inform-box">
      <div class="tp-inform-left">联系电话</div>
      <div class="tp-inform-right">
        <input type="text" maxlength="11" v-model="informTel" placeholder="请输入正确的电话号码"
          v-bind:readonly="this.loginJudge">
      </div>
    </div>
    <div class="tp-btn-submit" @click="btnSurePutInform">确认提交</div>
    <div class="tp-look-tips">
      <!--<a>点击查看温馨提示</a>-->
      <!-- <router-link to="takePicturesTips">点击查看温馨提示</router-link> -->
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  import { resultPost } from '../../service/getData'
  import { takePictures, getRoad } from '../../config/baseUrl'
  import UploadFile from '../../service/uploadFile'
  import { Toast, Indicator } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    name: 'takePicturesInform',
    data () {
      return {
        showSelectRoad: false,   // 是否显示路段列表
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
        loginJudge: window.localStorage.isLogin,        // 判读是否登录
        pickerOptions1: {        // element-ui时间组件
          shortcuts: [
            {
              text: '今天',
              onClick (picker) {
                picker.$emit('pick', new Date())
              }
            },
            {
              text: '昨天',
              onClick (picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', date)
              }
            },
            {
              text: '一周前',
              onClick (picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', date)
              }
            }
          ]
        }
      }
    },
    created: function () {
      let getTime = this.currentTime()
      this.informTime = getTime
    },
    mounted: function () {  // 组件加载完成之后立即获取
      this.init()
      if (this.loginJudge) {
        this.informName = window.localStorage.userName
        this.informIdNumber = window.localStorage.identityCard
        this.informTel = window.localStorage.mobilePhone
      }
    },
    methods: {
      init: function () {
        UploadFile.upload({
          id: 'file1',
          callback: (res) => {
            console.log(res)
            this.imgOne = res.imgUrl
          }
        })
        UploadFile.upload({
          id: 'file2',
          callback: (res) => {
            console.log(res)
            this.imgTwo = res.imgUrl
          }
        })
        UploadFile.upload({
          id: 'file3',
          callback: (res) => {
            console.log(res)
            this.imgThree = res.imgUrl
          }
        })
      },
      btnSurePutInform: function () {  // 提交拍照举报按钮
        let imgArr = [this.imgOne, this.imgTwo, this.imgThree].filter(x => x !== '')
        console.log(imgArr, imgArr.length)
        if (!this.informTime) {
          Toast({message: '请点击设置违法时间', position: 'bottom', className: 'white'})
        } else if (!this.informRoad) {
          Toast({message: '请输入违法路段', position: 'bottom', className: 'white'})
        } else if (imgArr.length < 2) {
          Toast({message: '举报图片不得少于两张', position: 'bottom', className: 'white'})
        } else if (!this.informIntroWhy) {
          Toast({message: '请输入情况说明', position: 'bottom', className: 'white'})
        } else if (!this.informName) {
          Toast({message: '请输入举报人姓名', position: 'bottom', className: 'white'})
        } else if (!this.informIdNumber) {
          Toast({message: '请输入您的姓名', position: 'bottom', className: 'white'})
        } else if (!this.informTel) {
          Toast({message: '请输入您的电话号码', position: 'bottom', className: 'white'})
        } else {
          Indicator.open('提交中...') // 图片转换为base64后提交会需要时间
          let formatTime = this.format(this.informTime, 'yyyy-MM-dd HH:mm:ss')
          let informData = {
            illegalTime: formatTime,             // 违法时间
            illegalSections: this.informType,         // 违法路段
            reportImgOne: this.imgOne,                // 上传照片
            reportImgTwo: this.imgTwo,
            reportImgThree: this.imgThree,
            illegalActivitieOne: this.informIntroWhy, // 情况说明
            inputManName: this.informName,            // 举报人
            identityCard: this.informIdNumber,        // 身份证号
            inputManPhone: this.informTel,            // 电话号码
            userSource: 'C',
            openId: window.localStorage.openId
          }
          console.log(informData)
          resultPost(takePictures, informData).then(json => { // 调取随手拍举报接口
            console.log(json)
            // let jsonMsg = json.msg
            // let getJsonMsg = ''
            // if (jsonMsg.indexOf(' ') === -1) {
            //   getJsonMsg = jsonMsg
            // } else {
            //   getJsonMsg = jsonMsg.split(' ')[0]
            // }
            if (json.code === '0000') {
              Indicator.close()
              console.log('举报成功')
              this.postInform({
                takePicturesRecord: json.data.recordNumber,
                takePicturesPassword: json.data.queryPassword
              })
              this.$router.push('/takePicturesSuccess')
            }
          })
        }
      },
      btnGetRoad: function () {  // 点击选择交通路段
        if (this.informRoad === '') { // 判断输入为空时不显示下拉列表
          this.showSelectRoad = false
        } else {
          this.showSelectRoad = true
        }
        let getRoadData = {
          keyword: this.informRoad
        }
        let that = this
        resultPost(getRoad, getRoadData).then(json => {
          if (json.data) {
            let roadLists = json.data.list
            let roadArry = []
            if (roadLists.length >= 2) {
              roadLists.forEach((item, index) => {
                let roadObj = {
                  'wfdd': item.wfdd.split('---')[1],
                  'type': item.wfdd.split('---')[0]
                }
                roadArry.push(roadObj)
                that.roadSelectLists = roadArry
              })
            }
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
      inputTime: function () {
        console.log(111)
      },
      ...mapActions({
        postInform: 'postInform'
      }),
      format: function (time, format) {   // 中国标准时间转换为datetime格式
        var t = new Date(time)
        var tf = function (i) { return (i < 10 ? '0' : '') + i }
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
          switch (a) {
            case 'yyyy':
              return tf(t.getFullYear())
            case 'MM':
              return tf(t.getMonth() + 1)
            case 'mm':
              return tf(t.getMinutes())
            case 'dd':
              return tf(t.getDate())
            case 'HH':
              return tf(t.getHours())
            case 'ss':
              return tf(t.getSeconds())
          }
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
      .el-date-editor{
         border:none;
         .el-input__icon{
           display:none;
         }
         .el-input__inner{
           width:518px;
           height:100%;
           border:none;
         }
      }
      .el-input{
        width:518px;
        height:60px;
        line-height:60px;
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
        position:relative;
        float:left;
        margin-right:8px;
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
        input{
          position:absolute;
          width:100%;
          height:100%;
          visibility:hidden;
          top:0;
          left:0;
          z-index:998;
        }
      }
      .tp-photo-1:last-child{
        margin-right:0;
        float:right;
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

