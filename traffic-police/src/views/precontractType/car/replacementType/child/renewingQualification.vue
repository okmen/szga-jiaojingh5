<!-- 补换检验合格标志 -->
<template>
  <div class="renewingQualification">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import { resultPost } from '../../../../../service/getData'
import { createVehicleInfo } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './common.vue'
export default {
  name: 'renewingQualification',
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
      console.log('renewingQualification', params)
      resultPost(createVehicleInfo, params).then(json => {
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            reserveNo: json.data,    // 流水号
            numberPlate: params.platNumber,      // 车牌号码
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: subscribe,          // 服务点
            reserveTime: params.appointmentDate  // 预约日期
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
<style lang="css" scoped>
</style>