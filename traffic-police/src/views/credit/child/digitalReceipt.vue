<template>
  <div id="digitalReceipt">
    <div class="digital">
      <ul class="digitalUl">
        <li>深圳公安交通管理网上缴款缴费电子回单</li>
        <li>
          <span>缴款编码:</span>
          <span class="dig-red">{{digitData.billNo}}</span>
        </li>
        <li>
          <span>车牌号码:</span>
          <span>{{digitData.paymentor}}</span>
        </li>
        <li>
          <span>时间:</span>
          <span>{{digitData.writeOffDate}}</span>
        </li>
        <li>
          <span>执收单位名称:</span>
          <span>{{digitData.companyName}}</span>
        </li>
        <li>
          <span>执收项目编码:</span>
          <span>{{digitData.projectNo}}</span>
        </li>
        <li v-if="digitData.payWay == 'NETBANK'">
          <span>缴款方式:</span>
          <span>网银支付</span>
        </li>
        <li v-if="digitData.payWay == 'WECHAT'">
          <span>缴款方式:</span>
          <span>微信支付</span>
        </li>
        <li v-if="digitData.payWay == 'ALIPAY_APP'">
          <span>缴款方式:</span>
          <span>支付宝钱包</span>
        </li>
        <li>
          <span>收费金额:</span>
          <span>{{digitData.amt}}</span>
        </li>
        <li>
          <span>合计:</span>
          <span>{{digitData.amt}}</span>
        </li>
      </ul>
      <div class="digit">
        <h2>注:</h2>
        <h3>
          1、本回执不作为报销凭证，通过深圳交警星级用户平台网上支付、支付宝钱包、微信公众号、“深圳交警”APP等线上渠道办理的支付业务，可凭该回执到深圳市平安银行任一网点领取财政票据。好易自助终端刷卡缴费可在自助终端机具直接打印财政票据，易办事刷卡缴费请前往深圳市建设银行领取票据。
        </h3>
        <h3>
          2、通过深圳交警星级用户平台缴费，因违法行为核销耗时，请在二十四小时后再查询确认违法记录核销情况，如核销失败已缴费资金会在十五个工作日内退回。已成功核销违法记录用户可持本回执前往平安银行任一网点打印财政票据。
        </h3>
      </div>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
export default {
  name: 'digitalReceipt',
  data () {
    return {
      digitData: []
    }
  },
  mounted () {
    let answererror = this.$route.query.answererror   // 获取数据
    this.digitData = answererror
  }
}
</script>

<style lang="less" scoped>
  #digitalReceipt{
    background: #fff;
    .digital{
      padding: 26px 48px 10px 48px;
      .digitalUl{
        width: 100%;
        border: 1px solid #a7d9f9;
        li{
          color: #000000;
          padding-left: 34px;
          font: 100 26px/70px '';
          line-height: 70px;
        }
        .dig-red{
          color: red;
        }
      }
      li:first-of-type{
        color: #2595dd;
        padding-left: 0;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        line-height: 70px;
        border-bottom: 1px solid #a7d9f9;
      }
      .digit{
        width: 96%;
        margin: 40px auto;
        h2{
          color: #8a8a8a;
          font-size: 26px;
          line-height: 32px;
        }
        h3{
          font-size: 26px;
          line-height: 40px;
          text-indent: 30px;
          color: #8a8a8a;
        }
      }
    }
  }
</style>