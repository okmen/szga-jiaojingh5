<template>
<div class="personalCenter-outer">
  <mainBanner></mainBanner>
  <!-- tab -->
  <div class="nav">
    <div class="nav-tab" :class="{ 'active': cur_tab == 'card'}" @click="cur_tab = 'card'">我的驾驶证</div>
    <div class="nav-tab" :class="{ 'active': cur_tab == 'car'}" @click="cur_tab = 'car'">绑定车辆</div>
    <div class="nav-tab" :class="{ 'active': cur_tab == 'service'}" @click="cur_tab = 'service'">我的业务</div>
  </div>

  <!-- 内容 -->
  <div class="service-box">
    <myCard v-if="cur_tab == 'card'"></myCard>
    <myCar v-if="cur_tab == 'car'"></myCar>
  </div>
  <!-- 网络不给力,出错的组件 -->
  <error v-if="errorShow"></error>

</div>
</template>

<script>
export default{
  name: 'personalCenter',
  data () {
    return {
      cur_tab: 'card',
      errorShow: false
    }
  },
  components: {
    error: require('./child/error.vue'),
    mainBanner: require('./child/mianBanner.vue'),
    myCard: require('./child/myCard.vue'),
    myCar: require('./child/myCar.vue')
  }
}
</script>

<style lang="less">
  .personalCenter-outer {
    .nav{
      position: relative;
      top:362px;
      font-size: 0;
      background-color:#fff;
      border-bottom:1px solid #dbdbdb;
      .nav-tab {
        font-size: 1rem;
        display: inline-block;
        width: 33.3%;
        text-align: center;
        height: 100px;
        line-height: 100px;
        &.active {
           color: #2696dd;
           border-bottom: 6px solid #2696dd;
         }
      }
    }
    .service-box {
      position: relative;
      top:400px;
      padding: 0 50px;
    }
  }
</style>
