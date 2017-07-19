<!-- 
  香港机动车驾驶证面试换证 
-->

<template>
  <div class="HkLicence">
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
  name: 'HkLicence',
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
      console.log('HkLicence', params)
    }
  }
}
</script>
<style lang="less" scoped>
</style>