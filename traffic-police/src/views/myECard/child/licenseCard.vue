<template>
  <div class="licenseCard-outer">
    <div class="body">
      <img :src="imageUrl">
      <!--<img :src="codeUrl">-->
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { licenseCard } from '../../../config/baseUrl'
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
        driverLicenseNumber: window.localStorage.getItem('identityCard'),
        userName: window.localStorage.getItem('userName'),
        mobileNumber: window.localStorage.getItem('mobilePhone')
      }
      resultPost(licenseCard, reqData).then(json => {
        this.imageUrl = 'data:image/png;base64,' + json.data.electronicDriverLicense
//        this.codeUrl = json.data.electronicDriverLicenseQRCode
        console.log(json)
      })
    }
  }
</script>
<style lang="less">
  @import "./../../../style/base";
  .licenseCard-outer {
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
