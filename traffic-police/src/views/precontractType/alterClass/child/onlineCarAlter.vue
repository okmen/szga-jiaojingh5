<!-- 
*  #变更类#
*  #网约车使用性质变更
 -->
<template>
    <div class="onlineAlter">
      <common></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'onlineAlter',
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
