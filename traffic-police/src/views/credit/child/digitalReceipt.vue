<template>
  <div class="digitalReceipt">
    <div class="digital">
      <ul class="digitalUl">
        <li>深圳公安交通管理网上缴款缴费电子回单</li>
        <li>缴款编号 / 罚单编号：********** </li>
      </ul>
      <div class="digit">
        <h2>注:</h2>
        <h3>
          1、本回执不作为报销凭证，通过深圳交警星级用户平台网上支付、支付宝钱包、微信公众号、“深圳交警”APP等线上渠道
        </h3>
        <h3>
          2、本回执不作为报销凭证，通过深圳交警星级用户平台网上支付、支付宝钱包、微信公众号、“深圳交警”APP等线上渠道
        </h3>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'digitalReceipt',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .digitalReceipt{
    background: #fff;
    .digital{
      padding: 26px 48px 10px 48px;
      .digitalUl{
        width: 100%;
        border: 1px solid #a7d9f9;
      }
      li{
        padding-left: 34px;
        font: 100 26px/70px '';
      }
      li:first-of-type{
        color: #a7d9f9;
        font: 700 32px/70px '';
        border-bottom: 1px solid #a7d9f9;
      }
      .digit{
        width: 96%;
        margin: 40px auto;
        h2{
          color: #8a8a8a;
          font: 100 26px/32px '';
        }
        h3{
          font: 100 26px/40px '';
          text-indent: 30px;
          color: #8a8a8a;
        }
      }
    }
  }
</style>