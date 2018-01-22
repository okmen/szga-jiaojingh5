<template>
  <div class="theRules">
    <p>投票规则<p>
    <p>1、投票渠道：微信渠道</p>
    <p>2、投票时段：一周（7个日历日）</p>
    <p>3、网友从20个备选项中选取10个投票</p>
    <p>4、允许分享、转发。</p>
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
    background-color:#000000;
    opacity: 0.8;
    p {
      width: 90%;
      margin: 0 auto;
      font-size: 26px;
      line-height: 48px;
      color: #fff;
    }
    p:first-of-type {
      font-size: 48px;
      padding: 70px 0;
      text-align: center;
    }
  }
</style>
