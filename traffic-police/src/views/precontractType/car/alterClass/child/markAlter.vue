<!-- 
*  #变更类#
*  #机动车打刻原车辆 #识别代号# 变更备案
 -->
<template>
    <div class="markAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../../service/getData'
import { markAlter } from '../../../../../config/baseUrl'
import common from './common.vue'
export default {
  name: 'markAlter',
  props: ['businessId', 'bussinessCode'],    // 拿到当前业务的id和code  然后传给 common组件
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('识别代号', params)
      resultPost(markAlter, params).then(json => {
        console.log(json)
      })
    }
  }
}
</script>
<style lang="less">

</style>
