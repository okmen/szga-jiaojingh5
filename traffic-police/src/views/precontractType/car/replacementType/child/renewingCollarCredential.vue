<!--  *换领机动车登记证书 -->
<template>
  <div class="renewingCollarCredential">
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
  name: 'renewingCollarCredential',
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
      console.log('renewingCollarCredential', params)
      resultPost(createVehicleInfo, params).then(json => {
        console.log(json)
        if (json.code === '0000') {
          this.certificate = json.data
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