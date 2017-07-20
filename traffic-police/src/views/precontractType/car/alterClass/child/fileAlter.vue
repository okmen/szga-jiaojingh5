<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
    <div class="fileAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../../service/getData'
import { fileAlter } from '../../../../../config/baseUrl'
import common from './common.vue'
import { Toast } from 'mint-ui'
export default {
  name: 'fileAlter',
  props: ['businessId', 'bussinessCode'],    // 拿到当前业务的id和code  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params, orderPlace) {
      console.log('档案更正', params)
      resultPost(fileAlter, params).then(json => {
        console.log(json)
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            reserveNo: json.data,    // 流水号
            numberPlate: params.platNumber,      // 车牌号码
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: orderPlace,          // 服务点
            reserveTime: params.appointmentDate  // 预约日期
          }
          this.$store.commit('saveSuccessInfo', dataInfo)
          this.$router.push('/submitSuccess')
        } else {
          Toast({ message: json.msg, className: 'white', duration: 1500 })
        }
      })
    }
  }
}
</script>
<style lang="less">

</style>

