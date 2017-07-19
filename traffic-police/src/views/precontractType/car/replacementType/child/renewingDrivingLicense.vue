<!-- 补换机动车行驶证 -->

<template>
  <div class="renewingDrivingLicense">
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
  name: 'renewingDrivingLicense',
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
      console.log('renewingDrivingLicense', params)
    }
  }
}
</script>
<style lang="css" scoped>
</style>