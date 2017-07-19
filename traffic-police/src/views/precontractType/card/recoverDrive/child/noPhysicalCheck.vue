<!-- 
*  #恢复驾驶资格#
*  #逾期一年以上 * 未体检 * 类
 -->
<template>
    <div class="noPhysicalCheck">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../../service/getData'
import { createDriveInfoZJ22 } from '../../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './common.vue'
export default {
  name: 'noPhysicalCheck',
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
      console.log('未体检类', params)
      resultPost(createDriveInfoZJ22, params).then(json => {
        if (json.code === '0000') {
          console.log(json)
        } else {
          Toast({message: json.msg, className: 'white'})
        }
      })
    }
  }
}
</script>
<style lang="less">

</style>
