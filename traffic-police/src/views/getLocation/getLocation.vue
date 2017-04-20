<template>
<div class="getLocation-outer">
  <div class="getLocation-search">
    <input id="keywordId" class="text-input" type="text" placeholder="输入地点名称搜索">
    <div class="search-btn"></div>
  </div>
  <div id="mymap"></div>
  <div class="getLocation-result">
    <p>查询结果</p>
    <div class="submit-btn">提交</div>
  </div>
  <div class="getLocation-options" v-if="resultData">
    <ul>
      <li v-for="(item, index) in pois" :class="{active: index===selectIndex}" @click.stop="selectOption(index)">{{item.name}}</li>
    </ul>
  </div>
</div>
</template>
<script>
import { getLocation } from '../../config/baseUrl'
const ak = '5b960a81da658aae9e0405f4'

export default{
  name: 'getLocation',
  data () {
    return {
      dragendX: '',
      dragendY: '',
      resultData: '',
      pois: '',
      selectLocation: '',
      selectIndex: 0
    }
  },
  methods: {
    /* eslint-disable */
    init: function () {
      var that = this,
          x = this.dragendX || 410942519,
          y = this.dragendY || 81392104
      var point = new Careland.Point(x, y) // 创建地图中心点
      var map = new Careland.Map('mymap', point, 17) // 创建地图对象
      map.enableCenterIcon() // 启用地图中心点图标
      map.enableAutoResize() // 启用自动适应容器尺寸变化
      map.load() // 加载地图
      let callback = this.cb

      // 创建一个自动完成的实例
      var ac = new Careland.Autocomplete({
            input : "keywordId",
            location : map})
      ac.setLocation(map)
      ac.setInputForm('keywordId')
      ac.addEventListener("onConfirm",function(e){
        ac.hide()
      });

      var layer = new Careland.Layer('polygon', 'layer') // 创建多边形面图层
      map.addLayer(layer) // 将图层添加到地图上

      var rect  = new Careland.Circle() // 创建圆形
      var style = new Careland.PolyStyle({fillColor:'#bddbc6',opacity:70,outlineSize:2,outlineColor:'#7978F5'}) // 设置圆形样式
      rect.setRect({center:point, radius:100}) // 半径为20米的绘制圆形
      rect.setStyle(style) // 设置圆形的样式

      var rect1  = new Careland.Circle()
      var style1 = new Careland.PolyStyle({fillColor:'#00f',outlineSize:0})
      rect1.setRect({center:point, radius:5})
      rect1.setStyle(style1)

      layer.add(rect) // 将圆形加到图层上
      layer.add(rect1)
      let head = document.head
      map.addEventListener('dragend', function () { // 为拖拽地图后添加事件
        if (head.lastChild.id === 'map') {
        }
        let center = map.getCenter()
        that.dragendX = center.x
        that.dragendY = center.y
        let getLocationInfo = `${getLocation}?pn=3&range=10&p=${center.x},${center.y}&ak=${ak}&callback=getMapInfoCallback`,
            script = document.createElement('script')
        script.src = getLocationInfo
        script.id = 'map'
        head.appendChild(script)
      })
    },
    /* eslint-enable */
    selectOption: function (index) {
      this.selectIndex = index
      this.selectLocation = this.pois[index]
    }
  },
  mounted: function () {
    let that = this
    this.init()
    window.addEventListener('setItemEvent', function (e) {
      let resData = e.mapData
      if (resData.errorCode === '0') {
        that.selectIndex = 0
        that.resultData = resData.results[0]
        that.pois = that.resultData.pois
        console.log(that.pois)
      }
    })
  }
}
</script>
<style lang="less">
@import '../../style/base.less';

.getLocation-outer{
  width: 100%;
  height: 100%;
  font-size: 28px;
  .getLocation-search{
    display: flex;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    input{
      width: 87.5%;
      height: 100%;
      text-indent: 0.5625rem;
      border-radius: 0;
      box-sizing: border-box;
    }
    .search-btn{
      display: block;
      flex: 1;
      background: #fff url('../../images/search.png') center no-repeat;
      background-size: 30px;
    }
  }
  #mymap{
    width: 100%;
    height: 80%;
  }
  .getLocation-result{
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 5px;
    background: #dfefd8;
    p{
      flex: 1;
      text-align: center;
      color: #337ab7;
    }
    .submit-btn{
      width: 125px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      border-radius: 5px;
      border: 1px solid #3db6da;
      color: #fff;
      background: #5cc0de;
    }
  }
  .getLocation-options{
    padding: 23px;
    background: #fff;
    ul{
      border-radius: 8px;
      border: 1px solid #dedede;
      overflow: hidden;
      li{
        background: #fff;
        text-indent: 60px;
        line-height: 60px;
        color: #000;
        border-bottom: 1px solid #dedede;
        &.active{
          background: #b4e5ff;
          color: #fff;
          &:before{
            content: '';
            display: inline-block;
            width: 15px;
            height: 8px;
            border-left: 4px solid #fff;
            border-bottom: 4px solid #fff;
            vertical-align: middle;
            transform: rotate(-45deg) translateY(-6px);
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
  }
}
</style>