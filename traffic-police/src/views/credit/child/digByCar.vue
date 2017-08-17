<template>
  <div id="digByCar-outer">
    <div class="digByCar-carArr">
      <div v-for="item in cars">
        <div class="digByCar-self" v-if="item.isMySelf == '0'" @click="getLawlessData(item)">{{ item.myNumberPlate }} <span>本人</span></div>
        <div class="digByCar-others" v-else  @click="getLawlessData(item)">{{ item.myNumberPlate }} <span>他人</span></div>
      </div>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'digByCar',
  data () {
    return {
      cars: []
    }
  },
  mounted () {
    this.cars = JSON.parse(window.localStorage.getItem('cars'))
    this.isLogin = window.localStorage.getItem('isLogin')
    // 判断是否登录！没有登录直接跳转其他电子回单页面
    if (!this.isLogin) {
      this.$router.push('/login')
    } else if (this.cars.length === 0) {
      MessageBox({
        title: '提示',
        message: '未查到绑定车辆！请绑定车辆'
      }).then(action => {
        this.$router.push('/personalCenter')
      })
    }
  },
  methods: {
    getLawlessData: function (item) {
      console.log(item)
      this.$router.push({path: 'digitalReceiptRecord', query: {answererror: item}})
    }
  }
}
</script>
<style lang="less" scoped>
  #digByCar-outer{
    padding: 30px 30px 0 ;
    .digByCar-carArr{
      .digByCar-self{
        border: 2px solid #2696dd;
        border-radius: 6Px;
        height: 104px;
        color: #2696dd;
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
        span{
          font-size: 40px;
          color: #2696dd;
          line-height: 100px;
        }
      }
      .digByCar-others{
        border: 2px solid green;
        border-radius: 6Px;
        height: 104px;
        color: green;
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
        span{
          font-size: 40px;
          color: green;
          line-height: 100px;
        }
      }
    }
    .digByCar-btn{
      padding: 20px 30px 20px;
      a{
        display: block;
        height: 80px;
        line-height: 80px;
        background-color: #2696dd;
        color: #fff;
        font-size: 32px;
        text-align: center;
        border-radius: 10Px;
        margin-bottom: 20px;
      }
    }
  }
</style>


