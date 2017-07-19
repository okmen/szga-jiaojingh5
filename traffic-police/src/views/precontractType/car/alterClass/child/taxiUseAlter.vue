<!-- 
*  #变更类#
*  #出租客运车辆使用性质变更
 -->
<template>
    <div class="taxiUserAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../../service/getData'
import { taxiAlter } from '../../../../../config/baseUrl'
import common from './common.vue'
export default {
  name: 'taxiUserAlter',
  props: ['businessId', 'bussinessCode'],    // 拿到当前业务的id和code  然后传给 common组件
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
      console.log('出租客运车辆使用性质变更', params)
      resultPost(taxiAlter, params).then(json => {
        console.log(json)
      })
    }
  }
}
</script>
<style lang="less">

</style>
