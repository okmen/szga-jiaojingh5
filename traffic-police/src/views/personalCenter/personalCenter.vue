<template>
<div class="personalCenter-outer">
  <!-- 网络不给力,出错的组件 -->
  <error v-if="errorShow"></error>

</div>
</template>

<script>
export default{
  name: 'personalCenter',
  data () {
    return {
      errorShow: false
    }
  },
  components: {
    error: require('./child/error.vue')
  }
}
</script>

<style lang="less">

</style>