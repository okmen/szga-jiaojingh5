<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">车牌号查询</router-link> |
      <router-link to="/starUser">驾驶证查询</router-link> |
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
