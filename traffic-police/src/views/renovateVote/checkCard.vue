<template>
  <div class="m-card" :class="{ active: active }">
    <div class="title">{{ opt.label }}</div>
    <div class="count">已投 {{ opt.count }} 票</div>
    <div class="loading"><div class="progress" :style="{ width: `${progress}%`, 'background': opt.color }"></div></div>
    <div class="ck"><img src="../../images/renovate/gou.png"></div>
  </div>
</template>

<script>
export default {
  props: ['opt', 'value', 'all'],
  computed: {
    active () {
      if (this.value.indexOf(this.opt.value) >= 0) {
        return true
      } else {
        return false
      }
    },
    progress () {
      return this.opt.count / this.all * 100 + 30
    }
  }
}
</script>

<style lang="css">
.m-card{
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px 25px;
  position: relative;
}
.m-card .title {
  font-size: 28px;
  color: #333;
  padding-right: 50px;
  margin-bottom: 5px;
}
.m-card .count {
  font-size: 20px;
  color: #999;
  margin-bottom: 20px;
}
.m-card .loading {
  width: 100%;
  height: 25px;
}
.m-card .loading .progress {
  background: #666;
  height: 100%;
  min-width: 30%;
  border-radius: 25px;
}
.m-card .ck {
  position: absolute;
  top: 20px;
  right: 25px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 100%;
  transition: .3s ease all;
  text-align: center;
  line-height: 20px;
  vertical-align: middle;
}
.m-card .ck img{
  width: 80%;
  height: auto;
  margin-top: 3px;
  vertical-align: middle;
}
.m-card.active .ck {
  background: green;
  border-color: green;
}
</style>