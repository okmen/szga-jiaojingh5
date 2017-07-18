<!-- 
  持境外驾驶证申请换证 
-->

<template>
  <div class="overseasLicence">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'overseasLicence',
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
      console.log('overseasLicence', params)
    }
  }
}
</script>
<style lang="less" scoped>
</style>