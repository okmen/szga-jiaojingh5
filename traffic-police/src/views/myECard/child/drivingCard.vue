<template>
  <div class="drivingCard-outer">
    <div class="body">
      <img :src="imageUrl">
      <!--<img :src="codeUrl">-->
      <p>行驶证电子二维码</p>
      <div id="qrCode"></div>
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { drivingCard } from '../../../config/baseUrl'
  import { Toast, Indicator } from 'mint-ui'
  export default {
    name: 'drivingCard',
    data () {
      return {
        imageUrl: '',
        codeUrl: ''
      }
    },
    mounted () {
      let reqData = {
        numberPlatenumber: window.localStorage.getItem('myNumberPlate') || '',
        plateType: window.localStorage.getItem('plateType') || '',
        mobileNumber: window.localStorage.getItem('mobilePhone')
      }
      console.log(reqData)
      for (let key in reqData) {
        if (!reqData[key]) {
          Toast({
            message: '未绑定车辆',
            position: 'middle',
            className: 'white'
          })
          return false
        }
      }
      Indicator.open()
      let qrcode = new window.QRCode(document.getElementById('qrCode'), {
        width: 256,
        height: 256
      })
      resultPost(drivingCard, reqData).then(json => {
        Indicator.close()
        if (!json.data.electronicDriverLicense) {
          Toast({
            message: json.msg,
            position: 'bottom',
            duration: 2000
          })
        }
        if (json.code === '0000') {
          this.imageUrl = 'data:image/png;base64,' + json.data.electronicDrivingLicense
          qrcode.makeCode(json.data.electronicDrivingLicenseQRCode)
        } else {
          Toast({
            message: json.msg,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    }
  }
</script>
<style lang="less">
  .drivingCard-outer {
    .title {
      height: 100px;
      line-height: 100px;
      background-color: #fff;
      text-align: center;
    }
    .body {
      img {
        width: 100%;
      }
      p{
        text-align: center;
        font-size: 28px;
        padding-top: 50px;
        padding-bottom: 30px;
      }
      #qrCode{
        width: 40%;
        margin: 0 auto;
      }
    }
  }
</style>

