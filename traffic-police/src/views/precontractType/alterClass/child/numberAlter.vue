<!-- 
*  #变更类#
*  #机动车打刻原车发动机 #号码# 变更备案
 -->
<template>
    <div class="numberAlter">
      <common></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'numberAlter',
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
