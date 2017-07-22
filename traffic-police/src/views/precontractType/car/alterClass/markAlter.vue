<!-- 
*  #变更类#
*  #机动车打刻原车辆 #识别代号# 变更备案
 -->
<template>
    <div class="markAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"
              :currentBusinessName="bussinessName"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../service/getData'
import { markAlter } from '../../../../config/baseUrl'
import common from './child/common.vue'
import { Toast } from 'mint-ui'
export default {
  name: 'markAlter',
  data () {
    return {
      businessId: '',      // 业务id
      bussinessCode: '',   // 业务code
      bussinessName: ''    // 业务名称
    }
  },
  components: {
    common
  },
  mounted () {
    var query = this.$route.query
    // console.log(query)
    this.businessId = query.id
    this.bussinessCode = query.code
    this.bussinessName = query.name
  },
  methods: {
    appointTask: function (params, orderPlace) {
      console.log('识别代号', params)
      resultPost(markAlter, params).then(json => {
        console.log(json)
        if (json.code === '0000') {
          let dataInfo = {
            type: 2,
            reserveNo: json.data.waterNumber,    // 流水号
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
