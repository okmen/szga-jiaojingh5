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
      Indicator.open()
      let reqData = {
        driverLicenseNumber: window.localStorage.getItem('identityCard'),
        userName: window.localStorage.getItem('userName'),
        mobileNumber: window.localStorage.getItem('mobilePhone')
      }
      resultPost(licenseCard, reqData).then(json => {
        Indicator.close()
        if (json.code === '0000') {
          this.imageUrl = 'data:image/png;base64,' + json.data.electronicDriverLicense
        } else {
          Toast({
            message: json.msg,
            position: 'bottom',
            duration: 2000
          })
        }
        // if (!json.data.electronicDriverLicense) {
        //   Toast({
        //     message: json.msg,
        //     position: 'middle',
        //     className: 'white'
        //   })
        // } else {
        //   this.imageUrl = 'data:image/png;base64,' + json.data.electronicDriverLicense
        // }
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
