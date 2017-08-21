<template>
  <div id="digitalReceipt">
    <div class="digital">
      <ul class="digitalUl">
        <li>深圳公安交通管理网上缴款缴费电子回执</li>
        <li>
          <span>缴款编码:</span>
          <span class="dig-red">{{digitData.billNo}}</span>
        </li>
        <li>
          <span>车牌号码:</span>
          <span>{{digitData.paymentor}}</span>
        </li>
        <li>
          <span>缴款时间:</span>
          <span>{{digitData.writeOffDate}}</span>
        </li>
        <li>
          <span>执收单位名称:</span>
          <span>{{digitData.companyName}}</span>
        </li>
    <!--     <li>
          <span>执收项目编码:</span>
          <span>{{digitData.projectNo}}</span>
        </li> -->
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
          <span>罚款金额:</span>
          <span>{{digitData.amt}} 元</span>
        </li>
        <li>
          <span>合计:</span>
          <span>{{digitData.amt}} 元</span>
        </li>
      </ul>
      <div class="digit">
        <h2>温馨提示:</h2>
        <p>
           1、本回执不作为报销凭证。若您需打印缴款收据,可持本回执到深圳市平安银行任一网点进行打印。
        </p>
        <p>
          2、深圳市平安银行网点查询：<a href="http://bank.pingan.com/geren/fuwuwangdian/map.shtml">http://bank.pingan.com/geren/fuwuwangdian/map.shtml</a>
        </p>
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
    let answererror = JSON.parse(this.$route.query.answererror)  // 获取数据
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
          font-size: 30px;
          line-height: 56px;
        }
        .dig-red{
          color: red;
        }
      }
      li:first-of-type{
        margin-top: 10px;
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
          color: #444;
          font-size: 28px;
          line-height: 32px;
        }
        p{
          font-size: 28px;
          line-height: 46px;
          color: #444;
          word-wrap:break-word;
          white-space: normal;
          word-break: break-all;
          a{
            color: #a7d9f9;
            word-wrap:break-word;
            white-space: normal;
          }
        }
      }
    }
  }
</style>