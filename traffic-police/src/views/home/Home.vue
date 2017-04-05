<template>
    <div class="nav">
      <router-link to="/home">首sda页</router-link> |
      <router-link to="/starUser">星级用户认证嘻嘻嘻</router-link> |
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  min-height: 100%;
}
.nav{
  margin: 20px;
}
.pad-side-50{
  padding: 0 50px;
}
</style>
