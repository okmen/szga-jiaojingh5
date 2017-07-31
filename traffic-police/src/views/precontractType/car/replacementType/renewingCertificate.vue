<!-- 申领/补领机动车登记证书 -->
<template>
  <div class="renewingCertificate">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
    ></common>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { resultPost } from '../../../../service/getData'
import { createVehicleInfo } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './child/common.vue'
export default {
  name: 'renewingCertificate',
  props: ['businessId'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
      nametypes: ''
    }
  },
  components: {
    common
  },
  mounted () {
    this.nametypes = this.$route.query.name
  },
  methods: {
    subFn: function (params) {
      console.log('renewingCertificate', params)
      resultPost(createVehicleInfo, params).then(json => {
        console.log(json)
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            businessType: this.nametypes,         // 业务类型
            reserveNo: json.data.waterNumber,    // 流水号
            numberPlate: json.data.platNumber,      // 车牌号码
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: json.data.orgName,          // 服务点
            reserveTime: `${json.data.appointmentDate} ${json.data.appointmentTime}`  // 预约日期
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