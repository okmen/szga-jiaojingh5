<!-- 
*  #变更类#
*  #机动车打刻原车发动机 #号码# 变更备案
 -->
<template>
    <div class="numberAlter">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
// import { resultPost } from '../../../../../service/getData'
// import { getOrgsByBusinessTypeId } from '../../../../../config/baseUrl'
import common from './common.vue'
// import { Toast } from 'mint-ui'
export default {
  name: 'numberAlter',
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
    appointTask: function (params) {
      console.log('号码', params)
    }
  }
}
</script>
<style lang="less">

</style>

