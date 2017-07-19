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
import { resultPost } from '../../../../../service/getData'
import { createDriveInfoZJ16 } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './common.vue'
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
    subFn: function (params) {
      console.log('temporaryLicence', params)
      resultPost(createDriveInfoZJ16, params).then(json => {
        if (json.code === '0000') {
          this.certificate = json.data
          // let dataInfo = {
          //   type: json.data.type
          //   textObj: {
          //     reserveTime: son.data.bidDate,
          //     reserveNo: waterNumber
          //   }
          // }
          // this.$store.commit('saveSuccessInfo', dataInfo)
        } else {
          // let msg = json.data + json.msg
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>