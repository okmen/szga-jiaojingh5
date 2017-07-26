<template>
  <div id="digByCar-outer">
    <div class="digByCar-carArr">
      <ul>
        <li v-for="item in carArr" @click="getLawlessData(item)">
          <span>{{ item.myNumberPlate }}</span>
          <em class="blue" v-if="item.isMySelf == '0'">本人</em>
          <em class="yellow" v-else>他人</em>
        </li>
      </ul>
    </div>
    <div class="digByCar-btn">
      <!-- <a href="#">其他电子回单</a> -->
      <router-link to="digitalreceipTinquire">其他电子回单</router-link>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'digByCar',
    data () {
      return {
        carArr: JSON.parse(window.localStorage.cars) || []
      }
    },
    mounted () {
    },
    methods: {
      getLawlessData (item) {
        let num = item.myNumberPlate
        console.log(num)
        this.$router.push({path: 'digitalReceiptRecord', query: { myNumberPlate: num, id: '2' }})
      }
    }
  }
</script>
<style lang="less" scoped>
  #digByCar-outer{
    padding: 30px 30px 0 ;
    .digByCar-carArr{
      li{
        border: 2px solid #2696dd;
        border-radius: 6Px;
        height: 104px;
        position: relative;
        padding-left: 130px;
        box-sizing: border-box;
        margin-bottom: 20px;
        &::after{
          content: '';
          position: absolute;
          top: 50%;
          left: 40px;
          transform: translateY(-50%);
          width: 43px;
          height: 34px;
          background-image: url('../../../images/car1.png');
          background-size: cover;
        }
        &::before{
          content: '';
          position: absolute;
          top: 50%;
          right: 40px;
          transform: translateY(-50%);
          width: 21px;
          height: 38px;
          background-image: url('../../../images/arrow_blue.png');
          background-size: cover;
        }
        span{
          font-size: 40px;
          font-weight: 600;
          color: #2696dd;
          line-height: 100px;
        }
        em{
          font-style: normal;
          display: inline-block;
          width: 60px;
          height: 30px;
          font-size: 20px;
          line-height: 30px;
          color: #fff;
          text-align: center;
          border-radius: 10Px;
        }
        em.blue{
          background-color: #2696dd;
        }
        em.yellow{
          background-color: #ffbe00;
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
