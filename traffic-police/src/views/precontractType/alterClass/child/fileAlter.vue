<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
    <div class="fileAlter">
      <common></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'fileAlter',
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
