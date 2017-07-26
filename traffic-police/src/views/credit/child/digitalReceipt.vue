<template>
  <div class="digitalReceipt">
    <div class="digital">
      <ul class="digitalUl">
        <li>深圳公安交通管理网上缴款缴费电子回单</li>
        <li v-for="(item, key) in digitData">
          <span>{{digit[key]}}</span>
          <span>{{key === 'payWay' ? payWayType[key] : item}}</span>
        </li>
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
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { resultPost } from '../../../service/getData'
import { MessageBox } from 'mint-ui'
import { toQueryElectronicReceiptPage } from '../../../config/baseUrl'
export default {
  name: 'digitalReceipt',
  data () {
    return {
      digitData: [],
      payWayType: {
        'NETBANK': '网银支付',
        'WECHAT': '微信支付',
        'ALIPAY_APP': '支付宝钱包'
      },
      digit: {
        'billNo': '缴款编号 / 罚单编号:',
        'writeOffDate': '时间:',
        'companyName': '执收单位名称:',
        'projectNo': '执收项目编码:',
        'payWay': '缴款方式:',
        'paymentor': '缴款人:',
        'amt': '收费金额:',
        'sdb': '银行流水号'
      }
    }
  },
  mounted () {
    let digitalReceiptData = {
      // drivingLicenceNo: window.localStorage.getItem('identityCard'),
      drivingLicenceNo: '',
      // licensePlateNo: window.localStorage.getItem('myNumberPlate')
      licensePlateNo: '粤BU8E61',
      billNo: ''
    }
    resultPost(toQueryElectronicReceiptPage, digitalReceiptData).then(json => {
      if (json.code === '0000') {
        this.digitData = json.data[0]
      } else {
        MessageBox({
          title: '提示',
          message: json.msg
        }).then(action => {
          this.$router.push('/credit')
        })
      }
    })
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
        li{
          color: #323232;
          padding-left: 34px;
          font: 100 26px/70px '';
        }
      }
      li:first-of-type{
        color: #2595dd;
        padding-left: 0;
        text-align: center;
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