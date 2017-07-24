<!--
  日期选择器组件
  @date: 2017-07-19
  @author: zhanshancheng
  父组件传递传递的数据:date 对象、carNum 车牌号

  返回选中日期的数组arrTime

-->
<template>
  <div>
    <div class="dp" v-show="show">
      <div class="dp-carNum">
        <span>{{ carNum }}</span>
        <em>（当前已申报天数: {{ arrTime.length }}天）</em>
      </div>
      <div class="dp-header">
        <!--<a class="dp-h-1" @click="pickYear(-1)">«</a>-->
        <a class="dp-h-2" @click="pickMonth(-1)">
          <上个月</a>
            <span class="dp-ym">{{y}}年 {{m}}月</span>
            <a class="dp-h-3" @click="pickMonth(1)">下个月></a>
            <!--<a class="dp-h-4" @click="pickYear(1)">»</a>-->
      </div>
      <table class="dp-table">
        <thead>
          <tr>
            <th v-for="day in days"><span>{{day}}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cell in data">
            <td v-for="item in cell" :class="{'dp-last': m!== item.month, 'dp-overdue': item.isCanChoose < 0, 'dp-select': arrTime.indexOf(item.data) >= 0, 'dp-yellow': item.isSelectedDate >=0 }">
              <div @click="pickConform(item)" class="box-out">
                <div class="box-int">
                  <span>{{ item.day }}</span>
                  <span v-if="arrTime.indexOf(item.data) >= 0">绿色出行</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'vueCalendar',
  props: ['date', 'carNum', 'selectedDate'],
  data () {
    let days = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    let d = ''
    let sel = ''
    let len = ('' + this.date).length
    if (!this.date || (len !== 13 && len !== 10)) {
      d = new Date()
    } else {
      d = len === 13 ? new Date(parseInt(this.date)) : new Date(this.date * 1000)
    }
    if (Object.prototype.toString.call(d) === '[object Date]') {
      if (isNaN(d.getTime())) {
        d = new Date()
      } else {
        sel = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      }
    } else {
      d = new Date()
    }
    if (!this.date) {
      sel = ''
    }
    let curTime = new Date()
    let cur = `${curTime.getFullYear()}-${curTime.getMonth() + 1}-${curTime.getDate()}` // 当前日期
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    let data = this.getCalendar(d.getFullYear(), d.getMonth() + 1)
    let arrTime = []
    return {
      days,
      cur,
      sel,
      y,
      m,
      data,
      arrTime,
      show: true
    }
  },
  watch: {
    selectedDate: {
      handler (curDate, oldDate) {
        console.log('curDate', curDate)
        console.log('oldDate', oldDate)
        this.data = this.getCalendar(this.y, this.m)
      },
      deep: true
    }
  },
  methods: {
    pickMonth (flag) {
      if (flag === -1) {
        this.data = (this.m === 1) ? this.getCalendar(parseInt(this.y--), this.m = 12) : this.getCalendar(parseInt(this.y), parseInt(this.m += flag))
      } else {
        this.data = (this.m === 12) ? this.getCalendar(parseInt(this.y++), this.m = 1) : this.getCalendar(parseInt(this.y), parseInt(this.m += flag))
      }
      this.$emit('skipDate', `${this.y}-${this.m}`)
    },
    pickYear (flag) {
      this.data = this.getCalendar(parseInt(this.y += flag), parseInt(this.m))
    },
    pickConform (item) {
      if (JSON.stringify(item) === '{}') { // 点击上个月的日期不做动作
        return false
      }
      if (item.isCanChoose < 0) { // 点击本月过期的日期提示
        Toast({
          message: '该时间段不能选择',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (item.isSelectedDate >= 0) {
        Toast({
          message: '该时间段不能选择',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      let arrInd = this.arrTime.indexOf(item.data)
      if (arrInd >= 0) { // 点击正确时间 显示并排序
        this.arrTime.splice(arrInd, 1)
      } else {
        this.arrTime.push(item.data)
      }
      this.arrTime.sort((a, b) => {
        return Date.parse(a) - Date.parse(b)
      })
      this.$emit('arrTime', this.arrTime)
    },
    getCalendar (y, m) {
      console.log(y, m)
      y = parseInt(y)
      m = parseInt(m)
      let time = new Date(y, m - 1, 1)
      let lastDate
      let nextDate
      let lastMonth = m - 1 // 上个月
      let nextMonth = m + 1 // 下个月
      if (m === 1) {
        lastDate = `${y - 1}-12-`
        nextDate = `${y}-2-`
        lastMonth = 12
      } else if (m === 12) {
        lastDate = `${y}-11-`
        nextDate = `${y + 1}-1-`
        nextMonth = 1
      } else {
        lastDate = `${y}-${m - 1}-`
        nextDate = `${y}-${m + 1}-`
      }
      console.log('lastDate', lastDate)
      console.log('nextDate', nextDate)
      console.log('lastMonth', lastMonth)
      console.log('nextMonth', nextMonth)
      let maxNumber = 35
      let r1 = []
      let r2 = []
      let r3 = []
      let lastFix = time.getDay() - 1 // 月份1号星期几
      lastFix = lastFix < 0 ? lastFix + 7 : lastFix
      let lastMaxDate = new Date(y, m - 1, 0).getDate() // 上个月份最大天数
      let maxDate = new Date(y, m, 0).getDate() // 当前月份的最大天数
      let i
      let t
      let nextFix = maxNumber - maxDate - lastFix

      for (i = 0; i < lastFix; i++) { // 上个月份
        t = lastMaxDate - lastFix + i + 1
        r1[i] = {}
      }
      for (i = 0; i < maxDate; i++) { // 当前月份的
        t = i + 1
        r2[i] = {
          month: m,
          day: t,
          data: `${y}-${m}-${t}`,
          isCanChoose: Date.parse(`${y}/${m}/${t}`) - (Date.now() + 172800000),
          isSelectedDate: this.selectedDate.indexOf(`${y}-${m}-${t}`),
          pitchOn: false
        }
      }
      for (i = 0; i < nextFix; i++) { // 下个月份的
        t = i + 1
        r3[i] = {}
      }
      let result = r1.concat(r2, r3)
      let ar = []
      for (i = 0; i < 5; i++) {
        ar.push(result.splice(0, 7))
      }
      return ar
    }
  }
}
</script>
<style lang="less">
.dp {
  margin-top: 5px;
  padding-bottom: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.17);
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #fff;
  z-index: 10;
  font-size: 16px;
  color: #666;
}

.dp-table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.dp-table th {
  padding: .5rem 0;
  border: 0;
}

.dp-table td {
  padding: 4px 0;
  line-height: 18px;
  border: 0;
}

.dp-table th span {
  display: block;
  font-weight: normal;
}

.dp-table td .box-out{
  width: 70px;
  height: 70px;
  border: 1px solid transparent;
  margin: 0 auto;
  transition: background 0.3s ease;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

.dp-table td .box-out .box-int{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.dp-table td .box-out span{
  display: block;
  width: 50px;
  line-height: 22px;
}

.dp-table td .box-out:hover {
  cursor: pointer;
}

.dp-table .dp-last .box-out {
  color: #ccc;
}

.dp-table .dp-today .box-out {
  border-color: #2db7f5;
  font-weight: bold;
  color: #2db7f5;
}

.dp-table .dp-overdue .box-out {
  background: #d7d7d7;
  color: #333;
  border: 1px solid transparent;
}

.dp-table .dp-select .box-out {
  background: #00be00;
  color: #fff !important;
  border: 1px solid transparent;
}

.dp-table .dp-yellow .box-out {
  background: #f1dd33;
  color: #fff !important;
  border: 1px solid transparent;
}
.dp-table .dp-select .box-out span{
  color: #fff !important;
}

.dp-header {
  position: relative;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 1px solid #e9e9e9;
}

.dp-header .dp-ym {
  font-weight: bold;
}

.dp-header a {
  color: #999;
  height: 2rem;
  line-height: 2rem;
  font-size: 16px;
  display: inline-block;
  padding: 0 5px;
  position: absolute;
}

.dp-header a:hover {
  color: #2db7f5;
  cursor: pointer;
}

.dp-header .dp-h-1 {
  left: 7px;
}

.dp-header .dp-h-2 {
  left: 29px;
}

.dp-header .dp-h-3 {
  right: 29px;
}

.dp-header .dp-h-4 {
  right: 7px;
}

.dp-footer {
  height: 34px;
  border-top: 1px solid #e9e9e9;
  text-align: center;
  position: relative;
}

.dp-footer a {
  display: inline-block;
  line-height: 34px;
  height: 34px;
  cursor: pointer;
}

.dp-footer span {
  position: absolute;
  right: 16px;
  top: 7px;
}

.dp .btn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  white-space: nowrap;
  line-height: 1.5;
  padding: 1px 6px;
  font-size: 12px;
  border-radius: 6px;
  background-color: #2db7f5;
  outline: 0;
  opacity: 1;
  color: #fff;
}
.dp-carNum{
  border-bottom: 1px solid #D9D9D9;
  line-height: 75px;
  font-size: 32px;
  padding: 0 10px;
}
.dp-carNum span{
  color: #00be00;
  text-indent: 24px;
}
.dp-carNum em{
  color: #999;
  font-style: normal;
}
</style>
