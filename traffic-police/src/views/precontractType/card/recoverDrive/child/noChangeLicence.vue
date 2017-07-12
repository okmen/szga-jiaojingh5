<!-- 
*  #恢复驾驶资格#
*  #逾期一年以上 * 未换证 * 类
 -->
<template>
    <div class="noChangeLicence">
      <common :orderPlaceData="appointPlaceData"
              @appointTaskClick="appointTask"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'noChangeLicence',
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
      console.log('未换证类', params)
    }
  }
}
</script>
<style lang="less">

</style>
