<template>
  <div class="activate-success">
    <div class="success-bg" >
      <img src="../../images/appointSuccess.png" />
    </div>
    <div class="success-title">
      {{'已经领卡成功'}}
    </div>
    <div class="success-hint">您好，您的深圳交警微信电子{{$route.query.type == 1?'驾驶证':'行驶证'}}已经领取</div>
    <button @click="intoCard" class="into-card">进入卡包</button>
  </div>
</template>

<script>
  import {openCard} from './wxParameter'
  export default {
    name: 'activate-success',
    methods: {
      intoCard () {
        openCard(this)
      }
    }
  }
</script>

<style scoped lang="less">
  .activate-success{
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
