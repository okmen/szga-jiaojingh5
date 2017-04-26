<template>
<div class="illegalTimeSelect-outer">
  <ul class="illegalTimeSelect-lists">
    <li class="illegalTimeSelect-item">
      <div class="illegalTimeSelect-name">
        <span>服务点</span>
      </div>
      <div class="div-select">
        <span class="btn-select" @click.stop="processClick()">{{processingPoint.cldbmmc}}</span>
        <div class="div-select-ul" v-if="processingPointShow">
          <ul>
              <li v-for="(item, index) in processingPointData" @click.stop="processClick(index+1)">{{item.cldbmmc}}</li>
            </ul>
        </div>
      </div>
    </li>
    <li class="illegalTimeSelect-item" v-if="processingPoint.cldlxdh">
      <div class="illegalTimeSelect-name">
        <span>电话</span>
      </div>
      <div class="illegalTimeSelect-list-text">
        <input type="text" class="text-input" v-model:value="processingPoint.cldlxdh">
      </div>
    </li>
    <li class="illegalTimeSelect-item" v-if="processingPoint.cldaddress">
      <div class="illegalTimeSelect-name">
        <span>地址</span>
      </div>
      <div class="illegalTimeSelect-list-text">
        <input type="text" class="text-input" v-model:value="processingPoint.cldaddress">
      </div>
    </li>
    <li class="illegalTimeSelect-item pad-0">
      <p>选择预约日期</p>
    </li>
    <li class="illegalTimeSelect-item pad-0 flex">
      <input type="text" class="text-input year" v-model:value="year" readonly>
      年
      <div class="div-select month">
        <span class="btn-select" @click.stop="monthClick()">{{month}}</span>
        <div class="div-select-ul" v-if="monthShow">
          <ul>
              <li v-for="(item, index) in months" @click.stop="monthClick(index+1)">{{item}}</li>
            </ul>
        </div>
      </div>
      月
      <div class="div-select date">
        <span class="btn-select" @click.stop="dateClick()">{{date}}</span>
        <div class="div-select-ul" v-if="dateShow">
          <ul>
              <li v-for="(item, index) in dates" @click.stop="dateClick(index+1)">{{item}}</li>
            </ul>
        </div>
      </div>
      日
    </li>
  </ul>
  <ul class="illegalTimeSelect-detail">
    <li class="illegalTimeSelect-item" v-for="(item, index) in selectData" :class="{disabled: item.yy_zs - item.yy_yysl === 0}">
      <p>{{item.ccsjd}}</p>
      <p v-if="item.yy_zs - item.yy_yysl">剩余名额<span class="yy_yysl">{{item.yy_zs - item.yy_yysl}}</span>位</p>
      <p v-else="item.yy_zs - item.yy_yysl">已满</p>
    </li>
  </ul>
  <div class="illegal-tip">
    <h3>温馨提示：</h3>
    <p>1、对于预约过没有来办理的,满3次系统自动锁定用户,不能进行预约。</p>
    <p>2、超过预约时间到违法处理点办理业务的群众,此次预约视为无效,需重新排队。</p>
    <p>3、预约成功的用户凭预约成功短信到窗口进行违章业务办理。</p>
    <p>4、成功预约后，如未能在预约时间段内前往办理的，须至少提前两个工作日，在网站预约申请界面进行撤销预约，否认视为失约。</p>
  </div>
  <button class="btn btn-blue" type="button" name="button">预约</button>
</div>
</template>
<script>
import { processingPoint, subscribeSorts } from '../../../config/baseUrl'
import { resultGet } from '../../../service/getData'
export default {
  data () {
    return {
      processingPoint: '',
      processingPointData: '',
      processingPointShow: false,
      timeData: '',
      time: '',
      year: '',
      month: '',
      monthShow: false,
      date: '',
      dateShow: false,
      years: '',
      months: '',
      dates: '',
      yydate: '',
      snm: '',
      selectData: ''
    }
  },
  computed: {
    getYydate: function () {
      let yydate = `${this.year}-${this.month}-${this.date}`
      console.log(yydate)
      return yydate
    }
  },
  methods: {
    init: function () {
      resultGet(processingPoint).then(json => {
        if (json.code === '0000') {
          this.processingPointData = json.data
          this.processingPoint = this.processingPointData[0]
          this.getDetailData()
        }
      })
    },
    getDetailData: function () {
      resultGet(`${subscribeSorts}?cldbmid=${this.processingPoint.cldbmid}`).then(json => {
        if (json.code === '0000') {
          this.timeData = json.data.data
          this.snm = json.data.snm
          this.time = this.timeData[0]
          this.selectData = this.time.yydate_sjd.sditem
          console.log(this.selectData)
          this.year = this.time.yydate.substr(0, 4)
          this.month = this.time.yydate.substr(5, 2)
          this.date = this.time.yydate.substr(8, 2)
          let years = new Set()
          let months = new Set()
          let dates = []
          for (let i = 0; i < this.timeData.length; i++) {
            let yydate = this.timeData[i].yydate
            let year = yydate.substr(0, 4)
            let month = yydate.substr(5, 2)
            let date = yydate.substr(8, 2)
            years.add(year)
            months.add(month)
            dates.push(date)
          }
          this.years = new Array(...years)
          this.months = new Array(...months)
          this.dates = dates
        }
      })
    },
    processClick: function (index) {
      if (index && this.processingPoint !== this.processingPointData[--index]) {
        this.processingPoint = this.processingPointData[index]
        this.getDetailData()
      }
      this.processingPointShow = !this.processingPointShow
      this.monthShow = false
      this.dateShow = false
    },
    monthClick: function (index) {
      if (index) {
        index--
      }
      this.processingPointShow = false
      this.dateShow = false
      this.monthShow = !this.monthShow
    },
    dateClick: function (index) {
      if (index) {
        index--
      }
      this.processingPointShow = false
      this.monthShow = false
      this.dateShow = !this.dateShow
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.processingPointShow = false
      this.monthShow = false
      this.dateShow = false
    })
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
@import "../../../style/base";

.illegalTimeSelect-outer{
  padding: 50px;
  background: #fff;
  .pad-0{
    padding: 0 !important;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .illegalTimeSelect-lists{
    font-size: 28px;
    .illegalTimeSelect-item{
      margin-bottom: 24px;
      padding-left: 140px;
      position: relative;
      line-height: 56px;
      .illegalTimeSelect-name{
        position: absolute;
        left: 0;
      }
      .year{
        width: 26%;
        text-indent: 0;
        text-align: center;
      }
      .month,.date{
        width: 22%;
        span{
          text-indent: 0;
          text-align: center;
        }
      }
    }
  }
  .illegalTimeSelect-detail{
    width: 100%;
    height: 420px;
    border: 1px solid #eaeaed;
    border-radius: 8px;
    overflow-y: scroll;
    margin-bottom: 55px;
    .disabled{
      background: #eaeaed;
    }
    .illegalTimeSelect-item{
      display: flex;
      justify-content: space-around;
      line-height: 80px;
      border-bottom: 2px solid #eaeaed;
      .yy_yysl{
        margin: 0 10px 0 34px;
        color: #19d051;
      }
    }
  }
  .illegal-tip{
    h3{
      font-size: 28px;
      color: #2696dd;
      margin-bottom: 30px;
    }
    p{
      font-size: 24px;
      line-height: 34px;
      color: #666;
    }
  }
}
</style>