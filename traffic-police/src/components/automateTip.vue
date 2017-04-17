<template>
  <div>
    <div class="autoTips fixed" v-if="show">
      {{ options.content }}
    </div>
    <div class="countdown"
      v-if="show && options.autoClose">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timers: [],
      show: false
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    options () {
      this.timers.forEach((timer) => {
        window.clearTimeout(timer)
      })
      this.timers = []
      this.countdown()
    }
  },
  methods: {
    countdown: () => {
      console.log(1111)
      if (this.options.autoClose) {
        console.log(222)
        const t = setTimeout(() => {
          this.close()
        }, this.options.showTime || 3000)
        this.timers.push(t)
      }
    },
    close () {
      this.show = false
      this.options = {}
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
