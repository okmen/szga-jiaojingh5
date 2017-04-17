<template>
  <div class="tips-cover">
    <section class="tips-text-box tips">
      <p class="tips-text">{{ tipsText }}</p>
      <div class="tips-confirm" @click="closeTips">确认</div>
    </section>
  </div>
</template>
<script>
export default {
  props: ['tipsText'],
  data () {
    return {
      positionY: 0,
      timer: null
    }
  },
  methods: {
    closeTips: function () {
      this.$emit('closeTips')
    }
  }
}
</script>
<style lang="less">
.tips-cover{
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  z-index: 200;
  .tips-text-box{
    margin:400px auto;
    width:400px;
    height:260px;
    background:#FFF;
    border:1px solid #cbcbcb;
    -webkit-border-radius:8px;
    -moz-border-radius:8px;
    border-radius:8px;
    .tips-text{
      width:100%;
      height:160px;
      color:#333;
      font-size:26px;
      line-height:30px;
      text-align:center;
    }
    .tips-confirm{
      margin:0 auto;
      width:100px;
      height:60px;
      background:#09ba07;
      -webkit-border-radius:8px;
      -moz-border-radius:8px;
      border-radius:8px;
      color:#FFF;
      font-size:26px;
      line-height: 60px;
      text-align:center;
    }
  }
}
</style>
