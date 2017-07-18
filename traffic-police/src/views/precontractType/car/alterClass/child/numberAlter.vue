<!-- 
*  #变更类#
*  #机动车打刻原车发动机 #号码# 变更备案
 -->
<template>
    <div class="numberAlter">
      <common :orderPlaceData="appointPlaceData"
              @appointTaskClick="appointTask"
              :currentBusinessId="businessId"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'numberAlter',
  props: ['businessId'],    // 拿到当前业务的id  然后传给 common组件
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
    appointTask: function (params) {
      console.log('号码', params)
    }
  }
}
</script>
<style lang="less">

</style>

