<!-- 
  持境外驾驶证申请换证 
-->

<template>
  <div class="overseasLicence">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import { resultPost } from '../../../../../service/getData'
import { createDriveInfoZJ17 } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './common.vue'
export default {
  name: 'overseasLicence',
  props: ['businessId', 'businessCode'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params, subscribe) {
      console.log('overseasLicence', params)
      resultPost(createDriveInfoZJ17, params).then(json => {
        if (json.code === '0000') {
          console.log(json.data.bidDate)
          console.log(json.data.waterNumber)
          let dataInfo = {
            type: 2,
            reserveTime: json.data.bidDate,      // 预约日期
            reserveNo: json.data.waterNumber,    // 流水号
            reserveAddress: subscribe,          // 服务点
            mobilephone: params.bookerMobile    // 手机号码
          }
          this.$store.commit('saveSuccessInfo', dataInfo)
          this.$router.push('/submitSuccess')
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>