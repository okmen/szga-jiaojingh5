<template>
  <div class="digRecord">
    <div class="digRecord-top">共有<span>2</span>条违法记录</div>
    <div class="digRecord-nav">
      <div class="digRecord-nav-one digRecord-p">
        <p>缴款成功</p>
        <p>2016-7-20</p>
        <p>500元</p>
      </div>
      <div class="digRecord-nav-two digRecord-p">
        <p>缴款编号 / 违法编号:<span>1234568</span></p>
        <p><span class="icon">缴</span><i>微信支付</i></p>
        <p><span class="icon">执</span><i>深圳市公安局交通警察局</i></p>
      </div>
      <div class="digRecord-nav-three digRecord-p">查看详情</div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'digitalReceiptRecord',

  data () {
    return {
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
