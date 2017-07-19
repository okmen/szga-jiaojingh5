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
// import { resultpost } from '../../../../../service/getData'
// import { createVehicleInfo } from '../../../../../config/baseUrl.js'
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
    subFn: function (params) {
      console.log('renewingQualification', params)
      // resultPost (createVehicleInfo, params).then(json => {
      //   console.log(json)
      // })
    }
  }
}
</script>
<style lang="less" scoped>
</style>