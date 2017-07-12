<!-- 
*  #恢复驾驶资格#
*  #逾期一年以上 * 未体检 * 类
 -->
<template>
    <div class="noPhysicalCheck">
      <common :orderPlaceData="appointPlaceData"
            @appointTaskClick="appointTask"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import common from './common.vue'
export default {
  name: 'noPhysicalCheck',
  data () {
    return {
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' },
        { 'str': '坪山车管分所' },
        { 'str': '宝安车管分所' },
        { 'str': '龙华车管分所' },
        { 'str': '罗湖管分所' },
        { 'str': '福田管分所' },
        { 'str': '盐田车管分所' },
        { 'str': '龙岗车管分所' },
        { 'str': '福田区委行政大厅' },
        { 'str': '宝安交警大队（福永中队）' },
        { 'str': '福田交警大队' },
        { 'str': '南山交警大队' },
        { 'str': '宝安交警大队（西乡中队）' },
        { 'str': '坪山交警大队' },
        { 'str': '龙华交警大队' },
        { 'str': '盐田交警大队' },
        { 'str': '光明交警大队' },
        { 'str': '龙岗交警大队' },
        { 'str': '罗湖交警大队' }
      ]
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('未体检类', params)
    }
  }
}
</script>
<style lang="less">

</style>
