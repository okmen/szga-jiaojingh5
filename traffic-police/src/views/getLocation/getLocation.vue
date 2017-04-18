<template>
<div class="getLocation-outer">
  <div class="getLocation-search">
    <input type="text">
    <em></em>
  </div>
  <div id="mymap"></div>
</div>
</template>
<script>
export default{
  name: 'getLocation',
  methods: {
    /* eslint-disable*/
    init: function () {
      // if (!window.Careland) {
      //   let script = document.createElement('script')
      //   script.src = 'http://mapapi.careland.com.cn/mobile/api/?key=5b960a81da658aae9e0405f4&v=1.2'
      //   document.head.appendChild(script)
      // }
      var point = new Careland.Point(437733644, 112697303) // 创建地图中心点
      var map = new Careland.Map('mymap', point, 17) // 创建地图对象
      map.enableCenterIcon() // 启用地图中心点图标
      map.load() // 加载地图
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>
<style lang="less">
@import '../../style/base.less';

.getLocation-outer{
  width: 100%;
  height: 100%;
  .getLocation-search{
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    input{
      width: 80%;
      height: 100%;
    }
    em{
      display: block;
      flex: 1;
      background: red;
    }
  }
  #mymap{
    width: 100%;
    height: 80%;
  }
}
</style>