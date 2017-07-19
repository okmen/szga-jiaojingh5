<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
    <div class="fileAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'fileAlter',
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
      console.log('档案更正', params)
    }
  }
}
</script>
<style lang="less">

</style>

