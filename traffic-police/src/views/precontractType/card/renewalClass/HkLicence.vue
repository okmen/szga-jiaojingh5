<!-- 
  香港机动车驾驶证面试换证 
-->

<template>
  <div class="HkLicence">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { resultPost } from '../../../../service/getData'
import { createDriveInfoZJ13 } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './child/common.vue'
export default {
  name: 'HkLicence',
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
      console.log('HkLicence', params)
      resultPost(createDriveInfoZJ13, params).then(json => {
        if (json.code === '0000') {
          console.log(json.data.bidDate)
          console.log(json.data.waterNumber)
          let dataInfo = {
            type: 2,
            reserveTime: json.data.appointmentDate,      // 预约日期
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