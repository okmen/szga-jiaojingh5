<template>
  <div class="countDown">
    <div class="countDown-nav" id="oBox">
      <img src="../images/itme/0.png" alt="">
      <img src="../images/itme/0.png" alt="">天
      <img src="../images/itme/0.png" alt="">
      <img src="../images/itme/0.png" alt="">时
      <img src="../images/itme/0.png" alt="">
      <img src="../images/itme/0.png" alt="">分
      <img src="../images/itme/0.png" alt="">
      <img src="../images/itme/0.png" alt="">秒
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  /* eslint-disable */
  name: 'countDown',
  props: ['date'],
  data () {
    return {
      dates: '',
      interval: ''
    }
  },
  mounted () {
    clearInterval(this.interval)
    // this.dates = new Date('2017/11/22 17:16:00')
    this.dates = new Date(this.date)
    this.interval = setInterval(this.time, 1000)
  },
  methods: {
    toTwo: function (n) {
      if(n > 9) {
        return '' + n
      } else
      {
        return '0' + n
      }
    },
    time: function () {
      let aImg = oBox.getElementsByTagName('img')
      let mydate = new Date()
      let str = ''
      let t = this.dates.getTime() - mydate.getTime()
      if (t >= 0) {
        str = this.toTwo(Math.floor(t/1000/60/60/24)) + this.toTwo(Math.floor(t/1000/60/60%24)) + this.toTwo(Math.floor(t/1000/60%60)) + this.toTwo(Math.floor(t/1000%60))
        for(var i=0; i < aImg.length;i++) {
          aImg[i].src= require('../images/itme/'+str[i]+'.png')
        }
      } else if (t <= 0) {
        MessageBox({
          title: '温馨提示',
          message: '活动时间已结束'
        }).then(action => {
          clearInterval(this.interval)
          this.$router.push('/')
        })
      }
    }
  },
  destroyed () {
    clearInterval(this.interval)
  }
}
</script>

<style lang="less" scoped>
  .countDown {
    .countDown-nav {
      margin: 20px auto;
      text-align: center;
      line-height: 74px;
      img {
        display: inline-block;
        width: 48px;
        height: 60px;
        text-align: center;
      }
      img:nth-of-type(2n) {
        padding-right: 8px;
      }
      img:nth-of-type(3) {
        padding-left: 26px;
      }
      img:nth-of-type(5) {
        padding-left: 26px;
      }
      img:nth-of-type(7) {
        padding-left: 26px;
      }
    }
  }
</style>
