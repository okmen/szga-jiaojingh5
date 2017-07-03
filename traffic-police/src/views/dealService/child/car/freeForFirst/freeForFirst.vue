<template>
  <div class="freeForFirst-outer">
    <!--Tab切换栏-->
    <div class="nav">
      <div class="nav-tab" :class="{ 'active': cur_tab == 'car'}" @click="cur_tab = 'car'">通过车辆查询</div>
      <div class="nav-tab" :class="{ 'active': cur_tab == 'card'}" @click="cur_tab = 'card'">通过序列号查询</div>
    </div>
    <freeByCar v-if="cur_tab == 'car'"></freeByCar>
    <freeByCode v-else></freeByCode>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'serviceTab',
    data () {
      return {
        cur_tab: 'car'
      }
    },
    components: {
      'freeByCar': require('./freeByCar.vue'),
      'freeByCode': require('./freeByCode.vue')
    }
  }
</script>
<style lang="less" >
  @import "./../../../../../style/base";
  .freeForFirst-outer {
    position: absolute;
    left: 0;
    right:0;
    top:0;
    background-color: #fff;
    .nav{
      font-size: 0;
      background-color:#fff;
      border-bottom:1px solid #dbdbdb;
      .nav-tab {
        font-size: 1rem;
        display: inline-block;
        width: 50%;
        text-align: center;
        height: 100px;
        line-height: 100px;
        &.active {
          color: #2696dd;
          border-bottom: 6px solid #2696dd;
        }
      }
    }
  }


</style>
