<template>
  <div class="activate-fail">
    <div class="success-bg" >
      <img src="../../images/appointFailure.png" />
    </div>
    <div class="success-title">
      领卡失败
    </div>
    <div class="success-hint">{{$route.query.msg}}</div>
    <!--<button @click="openCard" class="into-card">进入卡包</button>-->
  </div>
</template>

<script>
  export default {
    name: 'activate-fail'
  }
</script>

<style scoped lang="less">
  .activate-fail{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  .success-bg{
    height: 300px;
    margin-bottom: 40px;
  img{
    height: 100%;
    width: auto;
  }
  }
  .success-hint{
    color: #999;
    font-size: 24px;
    margin: 40px 0;
  }
  .into-card{
    width: 90%;
    line-height: 80px;
    text-align: center;
    background-color: #55b737;
    height: 80px;
    border-radius: 6px;
    color: white;
  }
  }
</style>
