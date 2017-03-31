<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/starUser">星级用户认证</router-link> |
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>

</style>
