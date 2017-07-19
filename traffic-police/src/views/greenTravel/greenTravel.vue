<template>
  <div class="m-apply">
    <h1 class="title">申请加入“我爱深圳，停用少用，绿色出行”自愿停驶行动协议</h1>
    <div class="m-format">
      <p>这里是一个段落</p>
      <h2>这了是一个标题</h2>
      <p>第一条 绿色出行停驶申报是由绿联办通过深圳交警官方网站“网上深圳交警”（网址：http://www.stc.gov.cn/）“爱我深圳 停用少用 绿色出行”版块向绿色出行车主提供的停驶申报服务，具体服务内容主要包括：绿色出行停驶申报、出行短信提示、兑现奖励措施等，具体详情以绿联办当时提供的服务内容为准。</p>
      <p>第二条 为了保障车主的权益，车主在自愿注册使用绿色出行申报系统前，必须仔细阅读并充分理解知悉本协议所有条款。一经注册或使用本系统进行停驶申报即视为对本协议的充分理解和接受。</p>
      <p>“爱我深圳、停用少用、绿色出行”行动联席会议办公室（以下简称绿联办）依据本协议的规定为参加深圳市绿色出行行动的车主提供服务。请车主认真阅读并选择接受或不接受本协议。除非接受本协议所有条款，否则无权参加于本协议下开展的绿色出行申报停驶活动。</p>
    </div>
    <div class="footer">
      <p><el-button type="primary" @click.native="toComplaint">如需申诉，请点击这里</el-button></p>
      <p class="info" @click="reading = !reading"><el-checkbox :value="reading"></el-checkbox>我已认真阅读以上内容，并愿意承担相关法律责任</p>
      <p><el-button type="success" :disabled="!reading" @click.native="toStarLever">我接受</el-button></p>
    </div>
  </div>
</template>

<script>
import { Checkbox, Button } from 'element-ui'
export default {
  components: {
    'el-checkbox': Checkbox,
    'el-button': Button
  },
  data () {
    return {
      isLogin: false,
      reading: false
    }
  },
  methods: {
    // 申诉
    toComplaint () {
      // 未登录状态跳转
      if (!this.isLogin) {
        this.$router.push({
          name: 'starLevel'
        })
      // 已登录跳转
      } else {
        this.$router.push({
          name: 'greenComplaint'
        })
      }
    },
    // 接受建议
    toStarLever () {
      // 未登录状态跳转
      if (this.reading && !this.isLogin) {
        this.$router.push({
          name: 'starLevel'
        })
      }
      // 已登录跳转
      if (this.reading && this.isLogin) {
        this.$router.push({
          name: 'greenApply'
        })
      }
    }
  },
  created () {
    this.isLogin = window.localStorage.getItem('isLogin')
  }
}
</script>

<style lang="less">
@import 'style/greenTravel.less';
</style>
