<template>
  <div class="bind-car">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="bind-car-header">
      <div class="self-car" @click="toggleCar(true)" :class="{'click-color':currentClick}">本人车辆
        <div class="triangle" v-if="currentClick"></div>
      </div>
      <div class="line"></div>
      <div class="other-car" @click="toggleCar(false)" :class="{'click-color':!currentClick}">他人车辆
        <div class="triangle" v-if="!currentClick"></div>
      </div>
    </div>
    <div class="car-content" v-if="currentClick">
        <div class="car-only" @click="skipRescue">
          <div class="car-plate">{{selfCarPlate}}</div>
          <div class="right-arrow">
            <img src="../../../images/arrow_right2.png"/>
          </div>
        </div>
    </div>
    <div class="car-content" v-if="!currentClick">
      <div class="car-only">
        <div class="car-plate">粤11111111</div>
        <div class="right-arrow">
          <img src="../../../images/arrow_right2.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .triangle{
    width: 0px;
    height: 0px;
    border: 15px solid transparent;
    border-bottom-color: #0598e4;
    position: absolute;
    bottom: 0;
    left: 46%;
  }
  .bind-car{
    background: white;
    height: 100%;
  }
.bind-car-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 4px solid #0598e4;
  .self-car,.other-car{
    width: 50%;
    text-align: center;
    height: 100%;
    line-height: 100px;
    color: #666666;
    position: relative;
  }
   .click-color{
    color:#127ede;
  }
  .line{
    width: 3px;
    height: 75px;
    background: #dbdbdb;
  }
}
  .car-content{
    padding-top: 42px;
    .car-only{
      background: #f7f7f7;
      height: 90px;
      border-top: 2px solid #dbdbdb;
      border-bottom: 2px solid #dbdbdb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-size: 30px;
    }
    .car-plate{
      padding-left: 43px;
    }
    .right-arrow{
      padding-right: 60px;
      img{
        width: 24px;
        height: 36px;
      }
    }
  }
</style>
<script>
export default {
  data () {
    return {
      currentClick: true,
      selfCarPlate: '',
      otherCarPlate: ''
    }
  },
  methods: {
    toggleCar (item) {
      this.currentClick = item
    },
    getCatPlate () {
      this.selfCarPlate = window.localStorage.getItem('myNumberPlate')
    },
    skipRescue () {
      let phone = window.localStorage.getItem('mobilePhone')
      let contact = window.localStorage.getItem('userName')
      window.location.href = `http://m.comettech.cn/thr/save?phone=${phone}&contact=${contact}&car_no=${this.selfCarPlate}`
    }
  },
  mounted () {
    this.getCatPlate()
  }
}
</script>
