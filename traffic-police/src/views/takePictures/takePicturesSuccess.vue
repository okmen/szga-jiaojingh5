<template>
  <div>
    <div class="tp-success">
      <img src="../../images/tpInformSuccess.png">
      <span>
        随手拍举报成功
      </span>
    </div>
    <div class="tp-success-title">
      <p>
        您举报的交通违法信息已经记录：
      </p>
      <div class="tp-success-line"></div>
    </div>
    <div class="tp-success-record">
      <p>记录号码：<span>W20170116623129</span></p>
      <p>查询密码：<span>114152</span></p>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="less">
.tp-success{
  padding-left:25px;
  width:100%;
  height:128px;
  img{
    margin-top:40px;
    width:60px;
    height:60px;
  }
  span{
    display:block;
    margin-top:-56px;
    margin-left:90px;
    font-size:30px;
    color:#09bb07;
  }
}
.tp-success-title{
  width:100%;
  p{
    padding-left:25px;
    font-size:24px;
    color:#999;
  }
  .tp-success-line{
    padding:0 50px;
    margin:0 auto;
    width:650px;
    height:60px;
    border-bottom:1px solid #EEE;
  }
}
.tp-success-record{
  padding-left:25px;
  width:100%;
  height:64px;
  p{
    font-size:24px;
    color:#999;
  }
  p:first-child{
    margin-top:44px;
    margin-bottom:24px;
  }
  span{
    font-size:24px;
    color:#333;
  }
}
</style>
