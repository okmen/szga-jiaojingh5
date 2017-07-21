<!--
  描述：绿色出行-申报选择日期
  时间：2017-07-20
  作者：猪不乐意
  联系：914230482
-->
<template>
  <div class="m-greenApplyDate">
    <div class="calendar">
      <vue-calendar :date="time" :carNum="carNum" v-on:arrTime="handleArrTime" v-on:skipDate="handleSkipDate" :selectedDate="selectedDate" v-if="loadDateArr.length > 0"></vue-calendar>
    </div>
    <ul class="list">
      <li><span class="green"></span>绿色表示申报停驶日期</li>
      <li><span class="gray"></span>灰色表示节假日或已过期日期，不可进行申报驾驶</li>
      <li><span class="yellow"></span>黄色表示申报停驶日期已过期</li>
    </ul>
    <div class="info">
      <p>温馨提示：</p>
      <p>可自主选择当日后2天后的日期为停驶日，天数不限，遇特殊情况需要恢复出行，需要提前2天申报恢复出行。</p>
    </div>
    <el-button type="primary" @click.native="handleConfirm">提交</el-button>
    <div class="m-confirm" :class="{ open: confirmState }">
      <div class="box">
        <div class="title">温馨提示</div>
        <div class="text">您是否确认提交？</div>
        <div class="footer">
          <div class="ok" @click="submit">是的</div>
          <div class="cancel" @click="confirmState = false">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import calendar from 'components/calendar.vue'
import { resultGet, resultPost } from 'src/service/getData'
import moment from 'moment'
import { Toast } from 'mint-ui'
import { getGreenApply, postGreenApply } from 'src/config/baseUrl.js'
export default {
  components: {
    'el-button': Button,
    'vue-calendar': calendar
  },
  data () {
    return {
      cardBagData: '',
      time: new Date().getTime(),
      carNum: '粤A12345',
      selectedDate: [],
      loadDateArr: [],
      selectArrTime: [],
      confirmState: false
    }
  },
  created () {
    if (!this.$store.state.greenApply) {
      console.log('没有接收到数据，回到信息输入页面')
      this.$router.push({ name: 'greenApply' })
    } else {
      console.log('接收VUEX传递过来的数据')
      console.log(this.$store.state.greenApply)
      this.carNum = this.$store.state.greenApply.car
      this.getDate(moment(new Date()).format('YYYYMM'))
    }
  },
  methods: {
    // 选择申报日期
    handleArrTime (data) {
      this.selectArrTime = data.map((item) => {
        return moment(item).format('YYYYMMDD')
      })
    },
    // 切换月份
    handleSkipDate (date) {
      let nowMonth = moment(date).format('YYYYMM')
      // 如果当前月份没有数据，则拉取数据
      if (!this.loadDateArr.includes(nowMonth)) {
        this.getDate(nowMonth)
      }
    },
    // 获取数据
    getDate (month) {
      let greenApply = this.$store.state.greenApply
      let requestData = {
        hphm: greenApply.car,
        hpzl: greenApply.type,
        sfzmhm: greenApply.IdCard,
        month: month
      }
      resultGet(`${getGreenApply}?hphm=${requestData.hphm}&hpzl=${requestData.hpzl}&sfzmhm=${requestData.sfzmhm}&month=${requestData.month}`).then(data => {
        let Arr = []
        data.date.ret.forEach((item, index, array) => {
          if (item.state !== '0') {
            Arr.push(moment(item.cdate).format('YYYY-M-D'))
          }
        })
        this.selectedDate.push(...Arr)
        this.loadDateArr.push(month)
      })
    },
    // 提交
    handleConfirm () {
      if (this.selectArrTime.length === 0) {
        Toast({
          message: '没有选择日期',
          position: 'bottom'
        })
        return false
      }
      this.confirmState = true
    },
    // 提交
    submit () {
      let greenApply = this.$store.state.greenApply
      let requestData = {
        sname: greenApply.name,
        sfzmhm: greenApply.IdCard,
        mobile: greenApply.tel,
        hphm: greenApply.car,
        hpzl: greenApply.type,
        sfbr: greenApply.isMySelf,
        lrly: 'WX',
        cdate: this.selectArrTime.join(),
        type: '1'
      }
      resultPost(postGreenApply, requestData).then(data => {
        console.log(data)
        if (data.code === '0000') {
          this.$store.commit('saveSuccessInfo', {
            type: 1,
            businessType: '绿色出行业务',
            subscribeNo: '-'
          })
          this.$router.push('/submitSuccess')
        } else {
          Toast({
            message: data.msg,
            position: 'bottom'
          })
        }
      })
    }
  },
  // 离开组件的时候的注销 greenApply 状态
  destroyed () {
    this.$store.unregisterModule('greenApply')
  }
}
</script>

<style lang="less">
@import 'style/greenTravel.less';
</style>
