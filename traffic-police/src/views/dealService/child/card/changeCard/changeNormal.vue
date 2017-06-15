<template>
  <div class="changeNormal-outer">
    <div class="changeNormal-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>业务类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="serviceSelectClick()">{{ serviceSelectMassage }}</span>
            <div class="div-select-ul" v-if="serviceSelectShow">
              <ul>
                <li v-for="item in serviceSelectData" @click.stop="serviceSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="name" class="text-input" type="text" name="" value="" placeholder="请输入姓名">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>身份证号</span>
          </div>
          <div class="form-line-item">
            <input v-model="IDcard" class="text-input" type="text" name="" value="" placeholder="请输入身份证号">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>手机号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="mobilephone" class="text-input" type="text" name="" value="" placeholder="请输入手机号码">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>照片回执码</span>
          </div>
          <div class="form-line-item width-60">
            <input v-model="photoReturnNumberString" class="text-input" type="text" name="" value="" placeholder="请输入照片回执码">
          </div>
          <div class="form-line-item right width-35">
            <span class="btn browse-code" @click="scanQRCode()">扫一扫</span>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span></span>
          </div>
          <div class="form-line-item">
            <span class="photo-ex" @click.stop="example=true">查看示例</span>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>户籍所在地</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="placeSelectClick()">{{ placeSelectMassage }}</span>
            <div class="div-select-ul" v-if="placeSelectShow">
              <ul>
                <li v-for="item in placeSelectData" @click.stop="placeSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人姓名</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverName" class="text-input" type="text" name="" placeholder="请输入收件人姓名">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>收件人号码</span>
          </div>
          <div class="form-line-item">
            <input v-model="receiverNumber" class="text-input" type="tel" name="" placeholder="请输入收件人号码">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>邮寄地址</span>
          </div>
          <div class="form-line-item width-40 city">
            <span>深圳市</span>
          </div>
          <div class="div-select form-line-item width-50">
            <span class="btn-select" @click.stop="areaSelectClick()">{{ areaSelectMassage }}</span>
            <div class="div-select-ul" v-if="areaSelectShow">
              <ul>
                <li v-for="item in areaSelectData" @click.stop="areaSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span></span>
          </div>
          <div class="form-line-item">
            <input v-model="mailingAddress" class="text-input" type="text" name="" value="" maxlength="4" placeholder="请输入详细地址">
          </div>
        </li>
      </ul>
    </div>
    <userUpload :idCard1="true" :idCard2="true" :outTable="outTable" @btnSureStar="btnSureStar()" ref="getImgUrl"></userUpload>
    <div class="example" v-if="example">
      <div class="example-box" @click.stop="example=true">
        <img src="../../../../../images/example.png">
        <button class="btn btn-blue" type="button" name="button" @click.stop="example=!example">关闭</button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .changeNormal-outer {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 40px;
    .changeNormal-form {
      background-color: #fff;
      padding-top:20px;
      .form-line {
        padding: 20px 0 0 180px;
        position: relative;
        line-height: 56px;
        .form-line-item {
          width: 100%;
          display: inline-block;
          height: 60px;
          line-height:60px;
          .photo-ex {
            color: #2696dd;
            text-decoration: underline;
          }
          span {
            vertical-align: middle;
          }
          &.city {
            margin: 0 18px;
          }
          .browse-code {
            margin: 0;
            display: inline-block;
            height: 56px;
            width: 100%;
            line-height: 56px;
            border-radius: 10px;
            text-align: center;
            color:#fff;
            vertical-align:middle;
            .code-icon {
              background-size: 32px 32px;
              display: inline-block;
              width:32px;
              height: 32px;
              vertical-align: -6px;
              margin-right: 10px;
            }
          }
        }
        .item-name {
          width: 180px;
          position: absolute;
          left: 0;
        }
      }
    }
    .width-40 {
      width: 40% !important;
    }
    .width-35 {
      width: 35% !important;
    }
    .width-50 {
      width: 50% !important;
    }
    .width-60 {
      width: 60% !important;
    }
    .example {
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.5);
      .example-box {
        left: 5%;
        right:5%;
        top:50%;
        height: 500px;
        background-color: #fff;
        position: absolute;
        margin-top: -480px;
        border-radius: 10px;
        text-align: center;
        padding: 60px;
        img {
          width: 440px;
        }
        .btn {
          width: 280px;
          margin-top:30px;
          display: inline-block;
        }
      }
    }
  }

</style>
<script>
  import { resultPost } from '../../../../../service/getData'
  import { cardRepair, cardreplace } from '../../../../../config/baseUrl'
  import { Toast, Indicator } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    name: 'changeNormal',
    data () {
      return {
        IDcard: window.localStorage.getItem('identityCard'),
        name: window.localStorage.getItem('userName'),
        mobilephone: window.localStorage.getItem('mobilePhone'),
        photoReturnNumberString: '',
        receiverName: '',
        receiverNumber: '',
        mailingAddress: '',
        cur_place_id: '1',
        cur_area_id: '01',
        cur_service_id: '1',
        serviceSelectShow: false,
        serviceSelectMassage: '补证',
        serviceSelectData: [
          {
            'id': '1',
            'str': '补证'
          },
          {
            'id': '2',
            'str': '换证'
          }
        ],
        placeSelectShow: false,
        placeSelectMassage: '深圳',
        placeSelectData: [
          {
            'id': '1',
            'str': '深圳'
          },
          {
            'id': '2',
            'str': '港澳台籍'
          },
          {
            'id': '3',
            'str': '外国籍'
          },
          {
            'id': '4',
            'str': '其他'
          }
        ],
        areaSelectShow: false,
        areaSelectMassage: '福田区',
        areaSelectData: [
          {
            'id': '01',
            'str': '福田区'
          },
          {
            'id': '02',
            'str': '罗湖区'
          },
          {
            'id': '03',
            'str': '南山区'
          },
          {
            'id': '04',
            'str': '宝安区'
          },
          {
            'id': '05',
            'str': '龙岗区'
          },
          {
            'id': '06',
            'str': '盐田区'
          },
          {
            'id': '07',
            'str': '龙华新区'
          },
          {
            'id': '08',
            'str': '光明新区'
          },
          {
            'id': '09',
            'str': '坪山新区'
          },
          {
            'id': '10',
            'str': '大鹏新区'
          }
        ],
        example: false,
        outTable: false
      }
    },
    components: {
      'userUpload': require('../../userUpload.vue')
    },
    methods: {
      placeSelectClick: function (str, id) {
        if (str) {
          this.placeSelectMassage = str
          this.cur_place_id = id
          if (this.cur_place_id === '3') {
            this.outTable = true
          } else {
            this.outTable = false
          }
        }
        if (this.placeSelectShow === true) {
          this.placeSelectShow = false
        } else {
          this.placeSelectShow = true
        }
      },
      areaSelectClick: function (str, id) {
        if (str) {
          this.areaSelectMassage = str
          this.cur_area_id = id
        }
        if (this.areaSelectShow === true) {
          this.areaSelectShow = false
        } else {
          this.areaSelectShow = true
        }
      },
      serviceSelectClick: function (str, id) {
        if (str) {
          this.serviceSelectMassage = str
          this.cur_service_id = id
        }
        if (this.serviceSelectShow === true) {
          this.serviceSelectShow = false
        } else {
          this.serviceSelectShow = true
        }
      },
      btnSureStar: function () {   // 确认提交按钮
        let idImgOne = this.$refs.getImgUrl.imgIDcard1
        let idImgTwo = this.$refs.getImgUrl.imgIDcard2
        let idImgThree = this.$refs.getImgUrl.imgOut
        if (!this.name) {
          Toast({message: '请输入姓名', position: 'bottom', className: 'white'})
        } else if (!this.IDcard) {
          Toast({message: '请输入身份证号码', position: 'bottom', className: 'white'})
        } else if (!this.mobilephone) {
          Toast({message: '请输入手机号码', position: 'bottom', className: 'white'})
        } else if (!this.photoReturnNumberString) {
          Toast({message: '请输入照片回执码', position: 'bottom', className: 'white'})
        } else if (!this.receiverName) {
          Toast({message: '请输入收件人姓名', position: 'bottom', className: 'white'})
        } else if (!this.receiverNumber) {
          Toast({message: '请输入收件人号码', position: 'bottom', className: 'white'})
        } else if (!this.mailingAddress) {
          Toast({message: '请输入详细地址', position: 'bottom', className: 'white'})
        } else if (!idImgOne || !idImgTwo) {
          Toast({message: '请上传身份证照片', position: 'bottom', className: 'white'})
        } else if (!idImgThree && this.cur_place_id === '3') {
          Toast({message: '请上传境外人员临住表', position: 'bottom', className: 'white'})
        } else {
          Indicator.open('提交中...') // 图片转换为base64后提交会需要时间
          let reqData = {  //  补证2个非必要字段 reason postcode  换证1个 postcode
            identificationNO: 'A',
            IDcard: this.IDcard,
            name: this.name,
            mobilephone: this.mobilephone,
            photoReturnNumberString: this.photoReturnNumberString,
            IDCardPhoto1: idImgOne.split(',')[1],
            IDCardPhoto2: idImgTwo.split(',')[1],
            foreignersLiveTable: '',
            placeOfDomicile: this.cur_place_id,
            receiverName: this.receiverName,
            receiverNumber: this.receiverNumber,
            mailingAddress: '深圳市' + this.areaSelectMassage + this.mailingAddress,
            livePhoto1: idImgOne.split(',')[1],
            livePhoto2: idImgTwo.split(',')[1],
            loginUser: window.localStorage.getItem('identityCard'),
            sourceOfCertification: 'C',
            userSource: 'C'
          }
          console.log(reqData)
          if (this.cur_service_id === '1') {   // 补证服务
            resultPost(cardRepair, reqData).then(json => {
              console.log(json)
              if (json.code === '0000') {
                Indicator.close()
                this.postAppoin({
                  appoinNum: json.msg.split('：')[1],
                  appoinType: '驾驶证补证'
                })
                this.$router.push('/appointSuccess_WeChat')
              } else {
                Indicator.close()
                Toast({
                  message: json.msg,
                  position: 'bottom',
                  className: 'white'
                })
              }
            })
          } else {  // 换证服务
            resultPost(cardreplace, reqData).then(json => {
              console.log(json)
              if (json.code === '0000') {
                Indicator.close()
                this.postAppoin({
                  appoinNum: json.msg.split('：')[1],
                  appoinType: '驾驶证换证'
                })
                this.$router.push('/appointSuccess_WeChat')
              } else {
                Indicator.close()
                Toast({
                  message: json.msg,
                  position: 'bottom',
                  className: 'white'
                })
              }
            })
          }
        }
      },
      beforeDestory () {
        Toast.close()
      },
      ...mapActions({
        postAppoin: 'postAppoin'
      })
    },
    created () {
      document.addEventListener('click', (e) => {
        this.placeSelectShow = false
        this.areaSelectShow = false
        if (this.example === true) {
          this.example = false
        }
      })
    }
  }
</script>

