<template>
  <div id="app">
    <div class="nav">
      <div class="nav-tab"
                   :class="{ 'active': cur_tab == 'car'}"
                   @click="cur_tab = 'car'">车牌号查询</div><div class="nav-tab"
                   :class="{ 'active': cur_tab == 'book'}"
                   @click="cur_tab = 'book'">驾驶证查询</div>
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>
<script>
export default {
  name: 'queryTab',
  data () {
    return {
      cur_tab: 'car'
    }
  }
}
</script>
<style lang="less">
  @import "./../../../style/base";
  .active {
    color: #2696dd;
    border-bottom: 6px solid #2696dd;
  }
  .nav-tab {
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
</style>
