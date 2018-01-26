<template>
  <div class="m-voteShare">
    <div class="voteShare">
      <img class="voteShare-img" src="../../images/renovate/fx.png">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" scoped>
.m-voteShare {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 80px;
  background: #191919;
  text-align: center;
  .voteShare-img {
    width:100%;
  }
}
</style>