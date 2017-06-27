<template>
  <div class="CG-router">
    <div class="CG-btn">
      <dl>
        <dt class="CG-icon-1">随手拍举报</dt>
        <dd>路面交通违法举报</dd>
      </dl>
      <dl>
        <dt class="CG-icon-2">交通文明我做主</dt>
        <dd>设备损坏、安全隐患、拥堵等道路及附属设备的举报</dd>
      </dl>
      <dl>
        <dt class="CG-icon-3">进度查询</dt>
      </dl>
    </div>
    <p>本功能由深圳市公安局交通警察局提供支持</p>
  </div>
</template>
<script>
export default {
  name: 'common',
  data () {
    return {
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
  }
}
</script>
<style lang="less">
  .CG-router{
    width: 100%;
    height: 100%;
    background: url('../../images/CG-1.png') no-repeat top center;
    background-size: 100%;
  }
</style>
