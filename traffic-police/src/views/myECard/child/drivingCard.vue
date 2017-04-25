<template>
  <div class="drivingCard-outer">
    <div class="body">
      <img :src="imageUrl">
      <!--<img :src="codeUrl">-->
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
      resultPost(drivingCard, reqData).then(json => {
        Indicator.close()
        this.imageUrl = 'data:image/png;base64,' + json.data.electronicDrivingLicense
//        this.codeUrl = json.data.electronicDrivingLicenseQRCode
        console.log(json)
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
    }
  }
</style>

