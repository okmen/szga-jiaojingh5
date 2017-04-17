<template>
  <div>
    <div class="autoTips fixed" v-if="options.showTip">
      {{ options.content }}
    </div>
    <div class="countdown"
      v-if="options.showTip && options.autoClose">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timers: []
    }
  },
  props: {
    options: {
      type: Object
    }
  },
  created () {
    if (this.options.autoClose) {
      const t = setTimeout(() => {
        this.options.showTip = false
      }, this.options.showTime || 1500)
      this.timers.push(t)
    }
  }
}
</script>
<style>
.autoTips{
  position:fixed;
  bottom:80px;
  left:0;
  right:0;
  margin:auto;
  width:400px;
  height:80px;
  background:rgba(0,0,0,0.4);
  -webkit-border-radius:8px;
  -moz-border-radius:8px;
  border-radius:8px;
  color:#FFF;
  font-size:26px;
  line-height:80px;
  text-align:center;
}
</style>
