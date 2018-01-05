<template>
  <div>
    <div>添加卡包成功</div>
    <button @click="openCard">打开卡包</button>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  export default {
    name: 'activate-success',
    methods: {
      openCard () {
        wx.openCard({
          cardList: [{
            cardId: 'pILMDwI0YyTv1ikElE4IOHDxU00I',
            code: ''
          }]
        })
      }
    }
  }
</script>

<style scoped>

</style>
