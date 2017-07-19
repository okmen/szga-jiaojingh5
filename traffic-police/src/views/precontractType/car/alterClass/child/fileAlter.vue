<!-- 
*  #变更类#
*  #档案更正
 -->
<template>
    <div class="fileAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../../service/getData'
import { fileAlter } from '../../../../../config/baseUrl'
import common from './common.vue'
export default {
  name: 'fileAlter',
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
      console.log('档案更正', params)
      resultPost(fileAlter, params).then(json => {
        console.log(json)
      })
    }
  }
}
</script>
<style lang="less">

</style>

