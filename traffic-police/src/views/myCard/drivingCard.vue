<template>
  <div class="drivingCard-outer">
    <div class="title">我的行驶证</div>
    <div class="body">
      <img :src="imageUrl">
      <!--<img :src="codeUrl">-->
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../service/getData'
  import { drivingCard } from '../../config/baseUrl'
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
        numberPlatenumber: window.localStorage.getItem('myNumberPlate'),
        plateType: window.localStorage.getItem('plateType'),
        mobileNumber: window.localStorage.getItem('mobilePhone')
      }
      console.log(reqData)
      resultPost(drivingCard, reqData).then(json => {
        this.imageUrl = 'data:image/png;base64,' + json.data.electronicDrivingLicense
//        this.codeUrl = json.data.electronicDrivingLicenseQRCode
        console.log(json)
      })
    }
  }
</script>
<style lang="less">
  .drivingCard-outer {
    background-color:#fff;
    .title {
      height: 100px;
      line-height: 100px;
      background-color: #fff;
      text-align: center;
    }
    .body {
      padding: 0 40px;
      img {
        width: 100%;
      }
    }
  }
</style>

