<!-- <template>
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
          2、深圳市平安银行网点查询：<a href="https://bank.pingan.com.cn/ibp/WAPEBank/thirdParty/outlets/index.html?WT.mc_id=bankwap">https://bank.pingan.com.cn/ibp/WAPEBank/thirdParty/outlets/index.html?WT.mc_id=bankwap</a>
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
</style> -->

<template>
  <div class="digital-receipt"
    :style="boxStyle">
   <!--  <span @click="saveImg" style="display: inline-block;position: absolute;background: rgb(14,199,12);height: 40px;width: 90px;text-align: center;line-height: 40px;z-index: 999;color:white" :style="{left: wHeight-95 + 'px', top:'4px'}">保存单据</span> -->
    <div id="x-table" class="x-tableBox">
      <table class="x-table">
        <thead>
        <tr>
          <th colspan="4"
              style="background: rgb(16,142,205);color: white;font-weight: 600; text-align: left; padding-left: 10px;height: 40px">
            深圳公安交通管理网上缴款缴费电子回单
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>缴款方式</td>
          <td>{{payMethod(storeValue.payWay)}}</td>
          <td>缴款时间</td>
          <td>{{storeValue.writeOffDate}}</td>
        </tr>
        <tr>
          <td>处罚决定书号</td>
          <td>{{storeValue.billNo}}</td>
          <td>车牌号码</td>
          <td>{{storeValue.paymentor}}</td>
        </tr>
        <tr>
          <td>执收单位名称</td>
          <td colspan="3">{{storeValue.companyName}}</td>
        </tr>
        <tr>
          <td>罚款原因</td>
          <td colspan="2" style="word-break: break-all">{{storeValue.illegalDesc}}</td>
          <td>金额</td>
        </tr>
        <tr>
          <td colspan="3" style="color: black">罚款金额</td>
          <td>{{storeValue.amt}}</td>
        </tr>
        <tr>
          <td colspan="3" style="color: black">加收罚款金额</td>
          <td>{{storeValue.delayAmt}}</td>
        </tr>
        <tr>
          <td colspan="4" style="text-align: left;color: #666">
            温馨提示<br/>
            1、本回执不作为报销凭证。若您需打印缴款收据,可持本回执到深圳市平安银行任一网点进行打印。<br>
            2、深圳市平安银行网点查询：<a style="word-break: break-all; color: #666;"
                            href="https://bank.pingan.com.cn/ibp/WAPEBank/thirdParty/outlets/index.html?WT.mc_id=bankwap">https://bank.pingan.com.cn/ibp/WAPEBank/thirdParty/outlets/index.html?WT.mc_id=bankwap</a>
          </td>
        </tr>
        <tr>
          <td colspan="4" style="color: black" class="last-td">
            <span style="float: left">合计:{{storeValue.amt + storeValue.delayAmt}}</span>
            <span style="float: right">合计大写:{{smalltoBIG(storeValue.amt + storeValue.delayAmt)}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<style scoped lang="less">
  .digital-receipt{
    transform: rotate(90deg);
    transform-origin: 0 0;
    box-sizing: border-box;
    overflow: scroll;
    position: absolute;
    padding: 16px;
  }
  .x-tableBox{
    padding: 20px; background: #fff;
  }
  .x-table {
    width: 100%;
    background: #fff;
    line-height: 60px;
    border: 2px solid rgb(16,142,205);
    border-top: none;
    border-collapse: collapse;
    text-align: center;
    td{
      padding: 0 12px;
      border: 2px solid rgb(16,142,205);
      max-width: 400px;
    }
    td:nth-of-type(odd){
      color:rgb(16,142,205);
    }
  }
</style>
<script>
  import domtoimage from 'dom-to-image'
  export default {
    data () {
      return {
        wHeight: '',
        wWidth: '',
        dHeight: '',
        boxStyle: {
          width: window.innerHeight + 'px',
          height: window.innerWidth + 'px',
          left: window.innerWidth + 'px'
        }
      }
    },
    created () {
      this.wHeight = document.body.clientHeight
      this.wWidth = document.body.clientWidth
      this.dHeight = document.body.scrollHeight
    },
    computed: {
      storeValue () {
        return JSON.parse(this.$route.query.answererror)  // 获取数据
      }
    },
    methods: {
      payMethod (value) {
        if (value === 'NETBANK') return '网银支付'
        if (value === 'WECHAT') return '微信支付'
        if (value === 'ALIPAY_APP') return '支付宝钱包'
      },
      saveImg () {
        domtoimage.toBlob(document.getElementById('x-table')).then(blob => {
          let url = window.URL.createObjectURL(blob)
          let link = document.createElement('a')
          link.download = 'my-image-name.jpeg'
          link.href = url
          link.click()
        })
      },
      /* eslint-disable */
      smalltoBIG(n)
      {
        var fraction = ['角', '分'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];
        var head = n < 0? '欠': '';
        n = Math.abs(n);

        var s = '';

        for (var i = 0; i < fraction.length; i++)
        {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);

        for (var i = 0; i < unit[0].length && n > 0; i++)
        {
          var p = '';
          for (var j = 0; j < unit[1].length && n > 0; j++)
          {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }
          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
      }
    }
  }
</script>
