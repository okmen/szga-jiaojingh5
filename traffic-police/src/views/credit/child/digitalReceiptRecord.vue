<template>
  <div class="digRecord">
    <div class="digRecord-top">共有<span>{{this.digitData.length}}</span>条违法记录</div>
    <div class="digRecord-nav" v-for="(item, index) in digitData">
      <div class="digRecord-nav-one digRecord-p">
        <p>缴款成功</p>
        <p>{{item.writeOffDate}}</p>
        <p>{{item.amt}}元</p>
      </div>
      <div class="digRecord-nav-two digRecord-p">
        <p>缴款编号 / 违法编号:<span>{{item.billNo}}</span></p>
        <!-- <p><span class="icon">缴</span><i>{{key === 'payWay' ? payWayType[key] : item}}</i></p> -->
        <p v-if="item.payWay == 'NETBANK'"><span class="icon">缴</span><i>网银支付</i></p>
        <p v-if="item.payWay == 'WECHAT'"><span class="icon">缴</span><i>微信支付</i></p>
        <p v-if="item.payWay == 'ALIPAY_APP'"><span class="icon">缴</span><i>支付宝钱包</i></p>
        <p><span class="icon">执</span><i>{{item.companyName}}</i></p>
      </div>
      <div class="digRecord-nav-three digRecord-p" @click="clickFn(index)">查看详情</div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { MessageBox } from 'mint-ui'
import { toQueryElectronicReceiptPage } from '../../../config/baseUrl'
export default {
  name: 'digitalReceiptRecord',
  data () {
    return {
      length: '',
      digitData: [
        {
          amt: 150,
          billNo: '4403071704945445',
          chargeItem: '交通违法罚款',
          companyName: '深圳市公安局交通警察局',
          payWay: 'ALIPAY_APP',
          paymentor: '粤B47119',
          projectNo: '103050101101',
          sdb: 'SDB00000012017062714958614',
          writeOffDate: '2017-06-27'
        },
        {
          amt: 250,
          billNo: '4403071704945445',
          chargeItem: '交通违法罚款',
          companyName: '深圳市公安局交通警察局',
          payWay: 'ALIPAY_APP',
          paymentor: '粤B47119',
          projectNo: '103050101101',
          sdb: 'SDB00000012017062714958614',
          writeOffDate: '2017-06-27'
        },
        {
          amt: 1000,
          billNo: '4403071704945445',
          chargeItem: '交通违法罚款',
          companyName: '深圳市公安局交通警察局',
          payWay: 'ALIPAY_APP',
          paymentor: '粤B47119',
          projectNo: '103050101101',
          sdb: 'SDB00000012017062714958614',
          writeOffDate: '2017-06-27'
        }
      ],
      payWayType: {
        'NETBANK': '网银支付',
        'WECHAT': '微信支付',
        'ALIPAY_APP': '支付宝钱包'
      }
    }
  },
  mounted () {
    this.id = this.$route.query.id
    if (this.id === '1') {
      this.numberPlate = this.$route.query.numberPlate
      this.billNo = this.$route.query.billNo
    } else if (this.id === '2') {
      this.numberPlate = this.$route.query.myNumberPlate
      this.billNo = ''
    }
    // 粤BU8E61
    let digitalReceiptData = {
      drivingLicenceNo: '',
      licensePlateNo: this.numberPlate,
      billNo: this.billNo
    }
    resultPost(toQueryElectronicReceiptPage, digitalReceiptData).then(json => {
      if (json.code === '0000') {
        // this.digitData = json.data
        // this.length = this.digitData.length
      } else {
        MessageBox({
          title: '提示',
          message: json.msg
        }).then(action => {
          this.$router.go(-1)
        })
      }
    })
  },
  methods: {
    clickFn: function (index) {
      let num = index
      window.sessionStorage.setItem('answererror', JSON.stringify(this.digitData))   // 缓存数据
      this.$router.push({name: 'digitalReceipt', params: { myNumberPlate: num }})    // 用于判断获取第几条信息
    }
  }
}
</script>

<style lang="less" scoped>
.digRecord{
  background: #fff;
  .digRecord-top{
    width: 100%;
    line-height: 86px;
    text-align: center;
    border-bottom: 10px solid #ccc;
    span{
      padding: 0 10px;
      color: #2696dd;
      font-weight: bold;
    }
  }
  .digRecord-nav{
    margin: 34px 48px;
    border: 1px solid #a7d9f9;
    border-radius: 8px;
    .digRecord-p{
      padding-left: 34px;
    }
    .digRecord-nav-one{
      border-bottom: 1px solid #a7d9f9;
      p:first-of-type{
        font: 400 34px/70px "";
        color: #000000;
      }
      p:nth-of-type(2){
        font: 100 24px/48px "";
        color: #666666;
      }
      p:nth-of-type(3){
        padding-left: 204px;
        font: 700 34px/90px "";
        color: #000000;
      }
    }
    .digRecord-nav-two{
      border-bottom: 1px solid #a7d9f9;
      p:first-of-type{
        font: 100 25px/50px "";
        color: #666666;
        span{
          padding-left: 10px;
          color: #ff0000;
        }
      }
      .icon{
        display: inline-block;
        width: 28px;
        height: 28px;
        border: 1px solid #40a2e1;
        font: 300 24px/28px "";
        color: #40a2e1;
        border-radius: 50%;
      }
      i{
        padding-left: 30px;
        font: 100 25px/50px "";
        color: #333333;
      }
    }
    .digRecord-nav-three{
      font: 100 24px/82px "";
      color: #349ddf;
      background: url(../../../images/dig.png) no-repeat;
      background-position: 90%;
      background-size: 26px 40px;
    }
  }
}
</style>
