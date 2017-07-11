<!-- 
*  #变更类#
*  #机动车打刻原车辆 #识别代号# 变更备案
 -->
<template>
    <div class="markAlter">
      <common :orderPlaceData="appointPlaceData"></common>
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
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' }
      ]
    }
  },
  components: {
    common
  }
}
</script>
<style lang="less">

</style>
