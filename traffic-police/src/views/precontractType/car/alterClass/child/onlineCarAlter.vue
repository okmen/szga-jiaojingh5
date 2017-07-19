<!-- 
*  #变更类#
*  #网约车使用性质变更
 -->
<template>
    <div class="onlineAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'onlineAlter',
  props: ['businessId'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('网约车', params)
    }
  }
}
</script>
<style lang="less">

</style>

