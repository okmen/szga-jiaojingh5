<!-- 
*  #变更类#
*  #机动车打刻原车辆 #识别代号# 变更备案
 -->
<template>
    <div class="markAlter">
      <common></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'markAlter',
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
