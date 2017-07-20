<template>
  <!-- 预约类-驾驶证业务导航页 -->
  <div class="cardService-outer">
    <div class="query-link">
      <router-link :to="isLogin ? '/userAgreement/jszbzhz' : 'login'">驾驶证补换证</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cardService',
    data () {
      return {
        isShow: false,
        businesses: [],
        isLogin: window.localStorage.getItem('isLogin')
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
  .cardService-outer {
    position: relative;
    background-color: white;
    font-size: 26px;
    color: #000;
    .query-link {
      border-bottom: 1px solid #dbdbdb;
      line-height: 88px;
      a {
        display: block;
        padding-left: 50px;
      }
      p {
        padding: 0 50px;
        position: relative;
        i {
          width: 26px;
          height: 26px;
          display: inline-block;
          position: absolute;
          right: 40px;
          background-size: cover;
          top: 28px;
          &.arrow-open {
            background-image: url("../../images/arrow-open.png");
          }
          &.arrow-close {
            background-image: url("../../images/arrow-close.png");
          }
        }
      }
      .li-box {
        padding: 0 20px;
        background-color: #e9e9e9;
        display: none;
        a {
          display: block;
          text-align: center;
          text-indent: -50px;
          border-bottom: 1px solid #b5b4b4;
          background-color: #e9e9e9;
          &:last-child {
            border: none;
          }
        }
      }
      &.show {
        p {
          color: #fff;
          background-color: #7ab8df;
        }
        .li-box {
          display: block;
        }
      }
    }
  }

</style>
