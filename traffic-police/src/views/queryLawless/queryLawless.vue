<template>
  <div class="queryLawless-outer">
    <ul>
      <p>交通违法查询</p>
    </ul>
    <ul>
      <p>违法在线确认</p>
    </ul>
    <ul v-bind:class="{ 'show' : isShow}">
      <p @click.stop="clickShow()">违法在线处理</p>
      <div class="li-box">
        <router-link to="home">违法缴款</router-link>
        <router-link to="earlyLawless">交通违法预约处理</router-link>
        <router-link to="home">交通违法申诉</router-link>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'queryLawless',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    clickShow: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="less">
@import "./../../style/base";
.queryLawless-outer {
  position: relative;
  background-color: white;
  font-size: 26px;
  color: #000;
  position: relative;
  ul {
    border-bottom: 1px solid #dbdbdb;
    line-height: 88px;
    .li-box {
      padding-left: 50px;
      background-color: #e9e9e9;
      display: none;
    }
    p {
      padding: 0 50px;
      position: relative;
    }
    a {
      display: block;
      text-align: center;
      text-indent: -50px;
      border-bottom: 1px solid #b5b4b4;
      background-color: #e9e9e9;
    }
    a:last-child {
      border: none;
    }
  }
  ul.show {
    p {
      color: #fff;
      background-color: #7ab8df;
    }
    .li-box {
      display: block;
    }
  }
}
</style>
