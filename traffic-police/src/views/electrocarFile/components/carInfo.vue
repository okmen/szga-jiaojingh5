<template>
  <div class="car-info">
    <div class="car-info-img">

    </div>
    <div class="car-info-text">
      <div class="car-info-text-item" v-for="(item, key) in list">
        {{key + ':' + item}}
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .car-info {
    width: 650px;
    padding: 38px 60px 60px 64px;
    margin: 0 auto;
    border: 2px solid #40aadb;
    border-top: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    .car-info-img {
      width: 296px;
      height: 296px;
      margin: 0 auto 40px;
      border: 1px solid #b2b2b2;
      border-radius: 4px;
    }
    .car-info-text-item {
      color: #333;
      font-size: 26px;
      line-height: 54px;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        list: {
          '车辆号牌': '粤B33434',
          '车辆状态': '粤B33434',
          '脚踏装置': '粤B33434',
          '档案编号': '粤B33434',
          '手机号码': '粤B33434',
          '行驶区域': '粤B33434',
          '品牌型号': '粤B33434',
          '车身颜色': '粤B33434',
          '协会名称': '粤B33434'
        }
      }
    }
  }
</script>
