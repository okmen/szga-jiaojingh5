<!-- 
*  #变更类#
*  #出租客运车辆使用性质变更
 -->
<template>
    <div class="taxiUserAlter">
      <common></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'taxiUserAlter',
  data () {
    return {
    }
  },
  components: {
    common
  }
}
</script>
<style lang="less">

</style>
