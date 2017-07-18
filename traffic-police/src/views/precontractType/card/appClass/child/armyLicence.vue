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
    }
  }
}
</script>
<style lang="less" scoped>
</style>