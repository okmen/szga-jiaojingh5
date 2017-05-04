<template>
  <div class="myCard-outer">
    <div class="title" v-if="cur_tab == 'driving'">行驶证电子照片</div>
    <div class="title" v-if="cur_tab == 'license'">驾驶证电子照片</div>
    <licenseCard v-if="cur_tab == 'license'"></licenseCard>
    <drivingCard v-if="cur_tab == 'driving'"></drivingCard>
    <div class="tab">
      <div class="tab-btn" :class="{ 'active': cur_tab == 'license'}" @click="cur_tab = 'license'">驾驶证</div>
      <div class="tab-btn" :class="{ 'active': cur_tab == 'driving'}" @click="cur_tab = 'driving'">行驶证</div>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'myCard',
    data () {
      return {
        cur_tab: 'license'
      }
    },
    components: {
      licenseCard: require('./child/licenseCard.vue'),
      drivingCard: require('./child/drivingCard.vue')
    }
  }
</script>
<style lang="less">
  .myCard-outer {
    background-image: url("../../images/card_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 bottom;
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    .title {
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .tab {
    position: fixed;
    bottom:30px;
    text-align: center;
    width: 620px;
    left: 50%;
    margin-left: -310px;
    .tab-btn {
      display: inline-block;
      height: 90px;
      line-height: 90px;
      text-align: center;
      border: 1px solid #666;
      color: #666;
      width: 260px;
      border-radius: 10px;
      margin: 0 20px;
      &.active {
        border:1px solid #2696dd;
        color: #2696dd;
       }
    }
  }
</style>
