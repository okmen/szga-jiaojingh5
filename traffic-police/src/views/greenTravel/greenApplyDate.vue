<template>
  <div class="m-greenApplyDate">
    <div class="calendar">这里是日历</div>
    <ul class="list">
      <li><span class="green"></span>绿色表示申报停驶日期</li>
      <li><span class="gray"></span>灰色表示节假日或已过期日期，不可进行申报驾驶</li>
      <li><span class="yellow"></span>黄色表示申报停驶日期已过期</li>
    </ul>
    <div class="info">
      <p>温馨提示：</p>
      <p>可自主选择当日后2天后的日期为停驶日，天数不限，遇特殊情况需要恢复出行，需要提前2天申报恢复出行。</p>
    </div>
    <el-button type="primary" @click.native="submit">提交</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  components: {
    'el-button': Button
  },
  mounted () {
    if (!this.$store.state.greenApply) {
      console.log('没有接收到数据，回到信息输入页面')
      this.$router.push({ name: 'greenApply' })
    } else {
      console.log('接收VUEX传递过来的数据')
      console.log(this.$store.state.greenApply)
    }
  },
  methods: {
    submit () {
      this.$store.commit('saveSuccessInfo', {
        type: 1,
        businessType: '绿色出行业务',
        subscribeNo: '12345678'
      })
      this.$router.push('/submitSuccess')
    }
  },
  // 离开组件的时候的注销 greenApply 状态
  destroyed () {
    this.$store.unregisterModule('greenApply')
  }
}
</script>
