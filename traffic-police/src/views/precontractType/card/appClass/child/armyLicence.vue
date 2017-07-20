<!-- 
  持军队、武警警察部队机动车驾驶证驾驶 
-->
<template>
  <div class="armyLicence">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import { resultPost } from '../../../../../service/getData'
import { createDriveInfoZJ11 } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './common.vue'
export default {
  name: 'armyLicence',
  props: ['businessId', 'businessCode'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params) {
      console.log('armyLicence', params)
      resultPost(createDriveInfoZJ11, params).then(json => {
        if (json.code === '0000') {
          this.certificate = json.data
          let dataInfo = {
            type: 2,
            reserveTime: json.data.bidDate,
            reserveNo: json.data.waterNumber
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