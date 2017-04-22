<template>
<div class="getLocation-outer">
  <div class="getLocation-search">
    <input id="keywordId" class="text-input" type="text" placeholder="输入地点名称搜索" v-model:value="keywords">
    <div class="search-btn" @click.stop="search()"></div>
  </div>
  <div id="mymap"></div>
  <div class="getLocation-result">
    <p>查询结果</p>
    <div class="submit-btn" @click.stop="submit()" v-if="roads">提交</div>
    <div class="submit-btn" v-else="roads">查询中</div>
  </div>
  <div class="getLocation-options">
    <ul  v-if="roads">
      <li v-for="(item, index) in roads" :class="{active: index===selectIndex}" @click.stop="selectOption(index)">{{item.text}}</li>
    </ul>
    <p v-else="roads">附近没有道路，请移动地图中心点到道路附近</p>
  </div>
</div>
</template>
<script>
import { getLocation } from '../../config/baseUrl'
import wx from 'weixin-js-sdk'
import {MessageBox} from 'mint-ui'

export default{
  name: 'getLocation',
  data () {
    return {
      keywords: '',
      dragendX: '',
      dragendY: '',
      roads: '',
      selectLocation: '',
      selectIndex: 0,
      marker: '',
      pointLayer: '',
      map: '',
      head: '',
      ac: ''
    }
  },
  methods: {
    /* eslint-disable */
    init: function () {
      let that = this,
          x = this.dragendX || 410942332, // 经度
          y = this.dragendY || 81392068, // 纬度
          point = new Careland.Point(x, y), // 创建地图中心点
          map = new Careland.Map('mymap', point, 18) // 创建地图对象

      this.head = document.head

      this.map = map
      map.enableCenterIcon() // 启用地图中心点图标
      map.enableAutoResize() // 启用自动适应容器尺寸变化
      map.load() // 加载地图
      this.getLocationInfo(map)

      // 创建一个自动完成的实例
      let ac = new Careland.Autocomplete({
            input : "keywordId",
            location : map})
      ac.setLocation(map)
      ac.setInputForm('keywordId')
      this.ac = ac
      ac.addEventListener("onConfirm", (e) =>{
        let x = e.item.poi.point.x
        let y = e.item.poi.point.y
        map.centerAndZoom(e.item.poi.point, 17)
        this.getLocationInfo(map)
        ac.hide()
      });

      map.addEventListener('mapchange', () => { // 为拖拽地图后添加事件
        this.getLocationInfo(map)
      })
    },
    getLocationInfo: function (map) {
      let mapTag = document.getElementById('map')
      if (mapTag) {
        this.head.removeChild(mapTag)
      }
      let center = map.getCenter()
      this.dragendX = center.x
      this.dragendY = center.y
      let getLocationInfo = `${getLocation}?d=15&r=100&p=${this.dragendX}+${this.dragendY}&callback=getMapInfoCallback`,
          script = document.createElement('script')
      script.src = getLocationInfo
      script.id = 'map'
      this.head.appendChild(script)
    },
    /* eslint-enable */
    selectOption: function (index) {
      this.selectIndex = index
      this.selectLocation = this.roads[index]
      this.changeFlagPosition()
    },
    addFlag: function () {
      /* eslint-disable no-new */
      let location = this.selectLocation.location
      let x = location.x
      let y = location.y
      let point = new window.Careland.Point(x, y)
      let pointLayer = new window.Careland.Layer('point', 'layer') // 创建点图层
      this.map.addLayer(pointLayer)

      pointLayer.clear()

      // 创建样式，包括标注点位置的偏移以及文本的偏移
      let style = new window.Careland.PointStyle({offsetX: -6, offsetY: -30, textOffsetX: -5, textOffsetY: -30, src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBlJREFUeNrsl29oG2Ucx393S5MsS9wl1bZpnWYmS8rs6K2tjGmrQcG9EQbulUzQV74o21hBKX3VijJU9kJw6wtBYTBWfSOiQxG1ZhNXFLKlq/tD02uSnfnXmjZZtiRNcnf+nrv8uZaO7TIrvugDX+65y939Pr/f832eJ0dJkgRr2/unzi3zPM+g0t9PnLbCv9zUMXXr3UBRFDM4OAgjIyPM8Emvg6JgFC+zbY+1snq9Dm5FowE89+F7znz4ti/wMDC6+91g0BuvvHrgMON+ygGilIFCMQ13C2n2ejDIcpHo8Xc+eh5BpKGTw782BELf74biipD3OD0gQR4B8iCIRAXosG+Hvd1Pwv59nV6TyXhl6ET/2IZUYGkpcymamDvU1mJGgAJqBQGIiiCJEpjNW6GnpxOCwejo0ImBg6VSeejU6JRv7XuOvLufwYMXhzOMx8ADA9zOFM7P3Awcam3pkwFI9gqAgOfEUIqp2h9vA/MjDBuPJX459t5zYQT5Gh/PoLpRjic6WtjEwjKE51K7NVUgEkz/PDvPwUsDT1cASPCSHFRRHaJJrwenaycYDTpHIZc/vtXQBMx2E+zc0QqGpi0w+sHZ2a8+v8bBZxoApn68FXN1Nc+KsOIWMbiIpRdFsRZYVEHIM0iZRfBoMwPmbQawoGiaAi4ch9yd4nfEVppMiE0olYRAcD6kjL+kZK8OXO1X5rAMQGFQmqprbj4O+Vx5UvMskAkEiSOZy6VXZb96COTYsmhZCgjJnoiPLsI3Z274GgKgaChG/lrATMsV40mVzNV9qbqI1USrqvDndX4Wf842BFAuC9But2Cge2evVICqVIGqVYBCegKC9ycbWogUALHbZjXWAqunn7oKxIDVjGseoEmfxuETLQ0D2Kwmb7PVdI/s6wZcVX45eB3I4+pgG1oJXz7sfLO9zcJcnApBPJGFUllZ/ex2G+gNBpUX6iasq25Cm9UCB153eX84O+fTBIDlf+O3S2H/5CTnzy6t+Mk1i83QazTpvG6P3d3V5QBrM1O1az37Ndrt3gE/+aa9ZBfVthck8hcCFxLnsHtH5eLzqI+DzpTraif/1i5P+yvP9u8BPa521TWAouvZE+3r2wWl0+JBfG5MEwAG/wQPqTWXCUgsymU51Ewqnv+W5/8e6x/osu9lnasyr3pim8kILw7sYbGirKbNaJ3gq3ZrVDh4OTWxyN+dSadyR2/e4F/r63HBM70uoCxGiPCLkEwuQyichMvTIcBVtVcrwIO0bHqx8EdgMjEc425PXJvmX/jiy4tkvEEUpLhQlmK5TMkfupomHgprGgINTUDxC5FcEvU79j9VValYGbas5mnYQCPBFip6+L9kG902ATYBNgH+vwDj4+P/CQC13uc57l69qlP/Rn6e/yPAAOu0M3zUUdHGAAAAAElFTkSuQmCC', fontColor: '#FFF'}) // 创建图片标注点
      let marker = new window.Careland.Marker('image')
      marker.setStyle(style) // 设置图片标注点样式
      marker.setPoint(point) // 设置标注点位置
      pointLayer.add(marker) // 将标注点添加到图层上
      this.pointLayer = pointLayer
      this.marker = marker
    },
    changeFlagPosition: function () {
      /* eslint-disable no-new */
      let location = this.selectLocation.location
      let x = location.x
      let y = location.y
      let point = new window.Careland.Point(x, y)
      this.marker.setPoint(point)
    },
    removeFlag: function () {
      this.map.removeLayer(this.pointLayer)
      this.pointLayer = ''
      this.marker = ''
    },
    transN2Ten: function (a) {
      /* eslint-disable */
      var jzsy = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27, S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35, a: 36, b: 37,
        c: 38, d: 39, e: 40, f: 41, g: 42, h: 43, i: 44, j: 45, k: 46, l: 47, m: 48, n: 49, o: 50, p: 51, q: 52, r: 53, s: 54, t: 55, u: 56, v: 57, w: 58, x: 59, y: 60, z: 61, "!": 62, "@": 63, "|": 64, $: 65, "%": 66, "^": 67, "~": 68, _: 69
      }
      for (var c = 0, d = 0, f = a.length; d < f; d++) {
        c += Number(jzsy[a.substr(d, 1)]) * Math.pow(70, f - (d + 1))
      }
      return c
      /* eslint-enable */
    },
    search: function () {
      if (this.keywords) {
        let url = `http://api.careland.com.cn/api/v1/search/keyword?keyword=${this.keywords}&city=440300&xytype=2&count=10&detail_level=DETAIL_REGULAR&ak=3ec66fcdaf712f8647bd6c0d&callback=searchCallback`
        let search = document.getElementById('search')
        if (search) {
          search.remove()
        }
        let script = document.createElement('script')
        script.id = 'search'
        script.src = url
        document.head.appendChild(script)
      }
    },
    submit: function () {
      let mapSubmitScript = document.getElementById('mapSubmit')
      if (mapSubmitScript) {
        mapSubmitScript.remove()
      }
      let script = document.createElement('script')
      script.id = 'mapSubmit'
      script.src = `http://api.careland.com.cn/api/v1/rgeo?pn=3&range=10&p=${this.selectLocation.location.x},${this.selectLocation.location.y}&ak=3ec66fcdaf712f8647bd6c0d&callback=mapSubmit`
      document.head.appendChild(script)
    }
  },
  mounted: function () {
    this.init()
    window.addEventListener('setItemEvent', (e) => {
      let resData = e.mapData
      let roads = resData.roads
      let roadsArr = []
      for (let i = 0; i < roads.length; i++) {
        if (roads[i].n === '') { continue }
        let resultObj = {}
        resultObj.text = roads[i].n
        let x = this.transN2Ten(roads[i].p.substr(0, 5))
        let y = this.transN2Ten(roads[i].p.substr(5, 5))

        var point = new window.Careland.Point(x, y)
        resultObj.location = point
        resultObj.unitid = '-1'
        roadsArr.push(resultObj)
      }
      this.roads = roadsArr.length === 0 ? '' : roadsArr
      if (this.roads) {
        this.selectIndex = 0
        this.selectLocation = this.roads[0]
        if (this.marker) {
          this.changeFlagPosition()
        } else {
          this.addFlag()
        }
      } else {
        this.removeFlag()
      }
    })
    window.addEventListener('searchCallback', (e) => {
      if (e.searchData.errorCode === 0) {
        let resData = e.searchData
        let cp = new window.Careland.GbPoint(resData.pois[0].xy.y, resData.pois[0].xy.x)
        this.map.setCenter(cp)
        this.ac.hide()
      }
    })
    window.addEventListener('mapSubmit', (e) => {
      if (e.submitData.errorCode === '0') {
        let resData = e.submitData
        let poi = resData.results[0].pois[0]
        if (resData.results[0].pois) {
          let obj = {
            lng: this.selectLocation.location.x,
            lat: this.selectLocation.location.y,
            addressCode: '-1',
            addressRegion: poi.pcd.district,
            addressStreet: this.selectLocation.text,
            addressSite: poi.name,
            showAdd: resData.results[0].pois[0].pcd.district + this.selectLocation.text,
            detailAddress: poi.address || poi.pcd.province + poi.pcd.city + poi.pcd.district + poi.name,
            poi: poi
          }
          this.$emit('submit', obj)
        }
      }
    })
    // 浏览器定位
    var geolocation = new window.Careland.Geolocation({enableHighAccuracy: true, map: this.map})
    geolocation.getCurrentPosition(function (f) {
      console.log(f)
      if (f.getStatus()) {
      } else {
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
            console.log(res)
            var latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
            MessageBox({
              title: 'wgs84坐标',
              message: `longitude:${longitude}, latitude:${latitude}`
            })
            // var speed = res.speed // 速度，以米/每秒计
            // var accuracy = res.accuracy // 位置精度
          }
        })
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
    p{
      color: #000;
      font-weight: blod;
      text-align: center;
    }
  }
}
</style>