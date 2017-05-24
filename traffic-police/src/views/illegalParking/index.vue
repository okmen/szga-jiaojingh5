<template>
  <div class="illegalParking" @click.stop="subTypeSelectShow=false,typeSelectShow=false">
    <mymap v-if="showMap" @submit="submitMap"></mymap>
    <Popup  popup-transition="popup-fade" v-model="showImg" >
      <img :src="popupImg" alt="">
    </Popup>
    <div style="height: 20px"></div>
    <div class="ip-inform-box" v-if="!showMap">
      <div class="ip-inform-time">
        <div class="ip-inform-title">时间</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-only" readonly :value="currentDate" style="background: #efeff4">
        </div>
      </div>
      <div class="ip-inform-number">
        <div class="ip-inform-title">车牌号码</div>
        <div class="ip-inform-content">
          <div class="div-select flex">
            <span class="btn-select hidden"  @click.stop="subTypeSelectShow=!subTypeSelectShow">{{currentPlate||'请选择车牌号'}}</span>
            <div class="div-select-ul" style="top: 30px;" v-if="subTypeSelectShow">
              <ul>
                <li class="scroll-y" v-for="item in 8" @click.stop="selectPlate(item)">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ip-inform-kind">
        <div class="ip-inform-title">车牌种类</div>
        <div class="ip-inform-content">
          <div class="div-select flex">
            <span class="btn-select hidden"  @click.stop="typeSelectShow=!typeSelectShow">{{plateType||'请选择车牌种类'}}</span>
            <div class="div-select-ul" style="top: 30px;" v-if="typeSelectShow">
              <ul>
                <li class="scroll-y" v-for="item in plateTypes" @click.stop="selectType(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ip-inform-IDcard">
        <div class="ip-inform-title">身份证号</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-only" readonly :value="IDcard" style="background: #efeff4">
        </div>
      </div>
      <div class="ip-inform-ticket">
        <div class="ip-inform-title">罚单单号</div>
        <div class="ip-inform-content">
          <input id="ticket" type="text" placeholder="请输入罚单单号" class="ip-inform-only"  v-model="ticket">
        </div>
      </div>
      <div class="ip-inform-place">
        <div class="ip-inform-title">停车地点</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-local" :value="mapObj.showAdd" placeholder="点击右侧按钮选择地址" readonly style="background:rgb(239, 239, 244);padding-left: 18px">
          <span class="ip-inform-local-img" @click.stop="showMap=!showMap">
            <img src="../../images/location-1.png"/>
          </span>
        </div>
      </div>
      <div class="ip-inform-reason">
        <div class="ip-inform-title">停车原因</div>
        <div class="ip-inform-content">
          <textarea id="reason" placeholder="请输入停车原因" class="ip-inform-park" v-model="reason"></textarea>
        </div>
      </div>
    </div>
    <div class="ip-photo-box" v-if="!showMap">
      <div class="ip-photo-header">
        <span class="ip-photo-title">图片上传</span>
        <span class="ip-photo-check">点击名称查看图片案例</span>
      </div>
      <div class="ip-photo-content">
        <div class="ip-photo-top">
          <div class="ip-photo-item">
            <label class="ip-photo-img" for="ip-photo-ticket">
              <img src="../../images/ticket.png"/>
              <input type="file" id="ip-photo-ticket" accept="image/*" capture="camera">
            </label>
            <div class="ip-photo-remake" @click="popupTicket(0)">罚单</div>
          </div>
          <div class="ip-photo-item">
            <label class="ip-photo-img" for="ip-photo-bigscence1">
              <img src="../../images/bigscence1.png"/>
              <input type="file" id="ip-photo-bigscence1" accept="image/*" capture="camera">
            </label>
            <div class="ip-photo-remake" @click="popupTicket(1)">大场景1</div>
          </div>
          <div class="ip-photo-item">
            <label class="ip-photo-img" for="ip-photo-headstock">
              <img src="../../images/headstock.png"/>
              <input type="file" id="ip-photo-headstock" accept="image/*" capture="camera">
            </label>
            <div class="ip-photo-remake" @click="popupTicket(2)">大场景(含车头正面)
            </div>
          </div>
        </div>
        <div class="ip-photo-bottom">
          <div class="ip-photo-item">
            <label class="ip-photo-img" for="ip-photo-front5">
              <img src="../../images/front5.png"/>
              <input type="file" id="ip-photo-front5" accept="image/*" capture="camera">
            </label>
            <div class="ip-photo-remake" @click="popupTicket(3)">前5米无车辆全景</div>
          </div>
          <div class="ip-photo-item">
            <label class="ip-photo-img" for="ip-photo-back5">
              <img src="../../images/back5.png"/>
              <input type="file" id="ip-photo-back5" accept="image/*" capture="camera">
            </label>
            <div class="ip-photo-remake" @click="popupTicket(4)">后5米无车辆全景</div>
          </div>
        </div>
      </div>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="submit" @click="submit" v-if="!showMap">
      提 &nbsp交
    </div>
    <div style="height: 40px"></div>
  </div>
</template>
<style lang="less" scoped>
  .mint-popup{
    width: 80%;
    max-height: 80%;
    img{
      width: 100%;
      display: block;
    }
  }
  .div-select{
    width: 504px;
    height: 62px;
    border-radius: 8px;
  }
  .btn-select,.scroll-y{
    color:#666666;
    font-weight: normal;
    font-size: 24px;
  }
  .div-select .btn-select{
    background-color: white;
  }
  .illegalParking{
    background: white;
    /*height: 100%;*/
  }
  .ip-inform-box > div {
    height: 96px;
    display: flex;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: space-between;
    align-items: center;
  }
  input,textarea,select{
    border: 1px solid #e2e2e7;
    color: #999;
  }
  .ip-inform-title {
    font-size: 30px;
  }

  .ip-inform-only {
    width: 504px;
    height: 60px;
    border-radius: 8px;
    padding: 0 22px;
  }
  .ip-inform-content {
    width: 504px;
    display: flex;
    justify-content: space-between;
  }

  .ip-inform-province, .ip-inform-plate {
    height: 60px;
    width: 116px;
    padding: 0 22px;
    border-radius: 8px;
  }

  .ip-inform-plate {
    width: 345px;
  }

  .ip-inform-local {
    height: 60px;
    width: 436px;
    border-radius: 8px;
  }

  .ip-inform-park {
    width: 504px;
    height: 186px;
    resize: none;
    border-radius: 8px;
    padding: 18px 22px;
  }

  .ip-inform-box .ip-inform-reason {
    align-items: flex-start;
    height: 186px;
    margin-top: 12px;
  }
.ip-inform-local-img{
  width: 70px;
  height: 41px;
  display: inline-block;
  margin-top: 10px;
  text-align: right;
}
  .ip-inform-local-img img{
    height:100%;
  }
  .ip-photo-title {
    margin-left: 50px;
  }

  .ip-photo-check {
    font-size: 26px;
    color: #9e9e9e;
    margin-left: 32px;
  }

  .ip-photo-box {
    margin-top: 64px;
  }

  .ip-photo-img {
    height: 192px;
    width: 192px;
    border: 2px solid #dddde1;
    border-radius: 10px;
  }

  .ip-photo-content {
    margin-left: 50px;
    margin-right: 50px;
  }

  .ip-photo-top, .ip-photo-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .ip-photo-bottom {
    justify-content: flex-start;
  }
  .ip-photo-item {
    margin-top: 30px;
  }
  .ip-photo-bottom .ip-photo-item {
    margin-right: 34px;
    margin-top: 48px;
  }
  .ip-photo-remake {
    font-size: 23px;
    color: #666666;
    text-align: center;
    text-decoration: underline;
    margin-top: 18px;
  }
  .submit{
    margin: 68px 50px 0px;
    height: 80px;
    width: 650px;
    background: #09bb07;
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 30px;
    border-radius: 10px;
  }
  .ip-photo-img{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .ip-photo-img img{
    height: 82%;
  }
  .ip-photo-bottom .ip-photo-img img{
    height: 100%;
  }
  .ip-photo-img input{
    display: none;
  }
</style>
<script>
  import { illegalParkingAvoidFine } from '../../config/baseUrl'
  import { resultPost } from '../../service/getData'
  import UploadFile from '../../service/uploadFile'
  import { Toast, Popup } from 'mint-ui'
  import mymap from '../map/map.vue'
  export default {
    data () {
      return {
        currentDate: '',
        myNumberPlate: '',
        plateTypes: '',
        plateType: '',
        IDcard: '',
        currentPlate: '',
        subTypeSelectShow: false,
        typeSelectShow: false,
        ticket: '',
        showMap: '',
        mapObj: '',
        sceneImg: '',
        imgTime: '',
        showImg: false,
        popupImgs: [require('../../images/ticket.png'), require('../../images/bigscence1.png'), require('../../images/front5.png'), require('../../images/back5.png'), require('../../images/headstock.png')],
        popupImg: '',
        reason: ''
      }
    },
    components: {
      mymap,
      Popup
    },
    mounted () {
      this.getUserInfo()
      this.getNowFormatDate()
    },
    methods: {
      init: function () {
        UploadFile.upload({
          id: 'file',
          callback: (res) => {
            console.log(res)
            this.sceneImg = res.imgUrl
            this.imgTime = res.dateTime
          }
        })
      },
      submitMap: function (obj) {
        this.showMap = false
        this.mapObj = obj
        console.log(this.mapObj)
      },
      selectType (item) {
        this.plateType = item
        this.typeSelectShow = !this.typeSelectShow
      },
      selectPlate (item) {
        this.currentPlate = item
        this.subTypeSelectShow = !this.subTypeSelectShow
      },
      getUserInfo () {
        this.myNumberPlate = window.localStorage.getItem('myNumberPlate')
//        var number = window.localStorage.getItem('plateTypes')
        this.plateTypes = this.$store.state.licenseSelectData
        this.IDcard = window.localStorage.getItem('identityCard')
      },
      submit () {
        if (!this.currentPlate) {
          Toast({
            message: '请选择车牌号码',
            duration: 2000
          })
          return
        }
        if (!this.plateType) {
          Toast({
            message: '请选择车牌种类',
            duration: 2000
          })
          return
        }
        if (!this.ticket) {
          Toast({
            message: '请输入罚单单号',
            duration: 2000
          })
          document.getElementById('ticket').focus()
          return
        }
        if (!this.mapObj.showAdd) {
          Toast({
            message: '请选择停车地点',
            duration: 2000
          })
          return
        }
        if (!this.reason) {
          Toast({
            message: '请输入停车原因',
            duration: 2000
          })
          document.getElementById('reason').focus()
          return
        }
        let reqData = {
          createTime: this.currentDate,
          licensePlateNo: this.currentPlate,
          licensePlateType: this.plateType,
          identityCard: this.IDcard,
          ticketNo: this.ticket,
          parkingAddr: this.mapObj.showAdd,
          parkingReason: this.reason,
          imgUpload: {}
        }
        console.log(reqData)
        resultPost(illegalParkingAvoidFine, reqData).then(data => {
          console.log(data)
        })
      },
      getNowFormatDate () {
        /* eslint-disable */
        var date = new Date ()
        /* eslint-enable */
        var seperator1 = '-'
        var seperator2 = ':'
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        this.currentDate = `${date.getFullYear()}${seperator1}${month}${seperator1}${strDate} ${date.getHours()}${seperator2}${date.getMinutes()}${seperator2}${date.getSeconds()}`
      },
      popupTicket (item) {
        this.showImg = !this.showImg
        this.popupImg = this.popupImgs[item]
      }
    }
  }
</script>
