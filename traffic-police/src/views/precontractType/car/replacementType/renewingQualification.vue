<!-- 补换检验合格标志 -->
<template>
  <div class="renewingQualification">
    <commons 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></commons>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { resultPost } from '../../../../service/getData'
import { createVehicleInfo } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import commons from './child/commons.vue'
export default {
  name: 'renewingQualification',
  props: ['businessId', 'businessCode'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    commons
  },
  mounted () {
    this.nametypes = this.$route.query.name
  },
  methods: {
    subFn: function (params) {
      console.log('renewingQualification', params)
      resultPost(createVehicleInfo, params).then(json => {
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            reserveNo: json.data.waterNumber,    // 流水号
            businessType: this.nametypes,         // 业务类型
            numberPlate: json.data.platNumber,    // 车牌号码
            vehicleType: json.data.carTypeName,   // 车辆类型
            reserveAddress: json.data.orgName,     // 服务点
            appointmentAddress: json.data.orgAddr,  // 预约地址
            reserveTime: `${json.data.appointmentDate} ${json.data.appointmentTime}`,  // 预约日期
            mobilephone: params.bookerMobile,   // 手机号码
            appointmentPerson: json.data.name   // 预约人
          }
          this.$store.commit('saveSuccessInfo', dataInfo)
          this.$root.$router.isWeChat ? window.location.href = json.msg : this.$router.push('/submitSuccess')
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