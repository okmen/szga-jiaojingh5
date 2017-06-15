<template>
  <div class="electrocar-file">
    <div class="switch-header">
      <div class="switch-header-left " :class="{'switch-header-selected':currentView==dirverInfo}" @click="currentView=dirverInfo">司机信息</div>
      <div class="switch-header-right"  :class="{'switch-header-selected':currentView==carInfo}" @click="currentView=carInfo">车辆信息</div>
    </div>
    <component :is="currentView"></component>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<style lang="less" scoped>
  .electrocar-file{
    height: 100%;
    padding-top: 10px;
    background: white url('../../images/appointBack.png') left bottom/contain no-repeat;
    .switch-header{
      margin: 0 auto;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
</style>
<script>
  import carInfo from './components/carInfo.vue'
  import dirverInfo from './components/dirverInfo.vue'
  export default {
    data () {
      return {
        currentView: dirverInfo,
        dirverInfo,
        carInfo
      }
    }
  }
</script>
