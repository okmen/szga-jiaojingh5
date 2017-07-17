<!-- 
*  #变更类#
*  #出租客运车辆使用性质变更
 -->
<template>
    <div class="taxiUserAlter">
      <common :orderPlaceData="appointPlaceData"
              @appointTaskClick="appointTask"></common>
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
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' }
      ]
    }
  },
  components: {
    common
  },
  mounted () {
  },
  methods: {
    appointTask: function (params) {  // 从 common 组件获取 reqData
      console.log(params)
    }
  }
}
</script>
<style lang="less">

</style>
