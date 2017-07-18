<!-- 
*  #变更类#
*  #出租客运车辆使用性质变更
 -->
<template>
    <div class="taxiUserAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'taxiUserAlter',
  props: ['businessId'],    // 拿到当前业务的id  然后传给 common组件
  data () {
    return {
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
