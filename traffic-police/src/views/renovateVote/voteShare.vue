<template>
  <div @click="close" class="m-voteShare">
    <div class="voteShare">
      <img class="voteShare-img"" src="../../images/share.png">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      console.log('233')
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" scoped>
  .m-voteShare {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.7;
    background-color:#000000;
    text-align: center;
    .voteShare-img {
      width:90%;
      /*margin: 0 auto;*/
      margin-top: 30px;
    }
  }
</style>