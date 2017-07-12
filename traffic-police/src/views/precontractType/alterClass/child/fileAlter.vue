<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
    <div class="fileAlter">
      <common :orderPlaceData="appointPlaceData"
              @appointTaskClick="appointTask"></common>
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
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' }
      ]
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('档案更正', params)
    }
  }
}
</script>
<style lang="less">

</style>

