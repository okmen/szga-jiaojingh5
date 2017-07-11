<!-- 
*  #变更类#
*  #网约车使用性质变更
 -->
<template>
    <div class="onlineAlter">
      <common :orderPlaceData="appointPlaceData"></common>
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
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' },
        { 'str': '罗湖车管分所' }
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

