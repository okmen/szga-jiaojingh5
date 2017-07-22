<!-- 
  临时机动车驾驶证许可证申领 
-->
<template>
  <div class="temporaryLicence">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import { resultPost } from '../../../../service/getData'
import { createDriveInfoZJ16 } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './child/common.vue'
export default {
  name: 'temporaryLicence',
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
      resultPost(createDriveInfoZJ16, params).then(json => {
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            reserveTime: params.date,      // 预约日期
            reserveNo: json.data,    // 流水号
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