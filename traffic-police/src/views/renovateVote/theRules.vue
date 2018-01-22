<template>
  <div class="theRules">
    <p>投票规则<p>
    <p>1、活动时间：1月24日至30日（投票日期）</p>
    <p>2、投票方法：请市民关注“深圳交警权威发布”微信公众号，在投票链接中进行投票。</p>
    <p>3、每个手机每日可投三次，每次可投1-10票。</p>
  </div>
</template>

<script>
export default {

  name: 'theRules',

  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .theRules {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.9);
    p {
      width: 90%;
      margin: 0 auto;
      font-size: 26px;
      line-height: 48px;
      color: #fff;
    }
    p:first-of-type {
      font-size: 48px;
      padding: 130px 0 60px;
      text-align: center;
    }
  }
</style>
