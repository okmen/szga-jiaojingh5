<template>
    <div class="m-goodPopup" v-if="popupStatus">
      <div class="pic">
        <img @click="$router.push('/goodOwners/votelist')" src="./styles/popup.png">
        <div class="close" @click="popupStatus = false"><img src="./../../images/goodOwners-p3.png"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        popupStatus: true
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .m-goodPopup {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
    .pic {
      width: 590px;
      height: 630px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -295px;
      margin-top: -330px;
      img { 
        width: 100%;
      }
    }
    .close {
      position: absolute;
      bottom: -100px;
      left: 50%;
      margin-left: -31px;
      width: 62px;
      height: 62px;
      img {
        width: 100%;
      }
    }
  }
  </style>