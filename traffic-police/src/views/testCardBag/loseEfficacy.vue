<template>
  <div class="activate-fail">
    <div class="success-bg" >
      <img src="../../images/appointFailure.png" />
    </div>
    <div class="success-hint">
      该卡券已失效，请前往“深圳交警公众号-个人中心”重新领取
    </div>
    <button @click="$router.push('/personalCenter')" class="into-card">前往个人中心</button>
  </div>
</template>

<script>
  export default {
    name: 'lose-efficacy'
  }
</script>

<style scoped lang="less">
  .activate-fail{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    .success-bg{
      height: 250px;
      margin-bottom: 40px;
      img{
        height: 100%;
        width: auto;
      }
    }
    .success-hint{
      color: #333;
      font-size: 28px;
      margin: 40px 20px;
      text-align: center;
    }
    .into-card{
      width: 90%;
      margin-top: 40px;
      font-size: 26px;
      line-height: 80px;
      text-align: center;
      background-color: #55b737;
      height: 80px;
      border-radius: 6px;
      color: white;
    }
  }
</style>
