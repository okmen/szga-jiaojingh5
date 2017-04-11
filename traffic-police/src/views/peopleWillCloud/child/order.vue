<template>
  <div class="order-outer">
    <div class="order-form">
      <ul class="order-form-list padding-right-43">
        <li class="order-form-item clear">
          <div class="order-list-name">
            <span>地点</span>
          </div>
          <div class="order-list-text left width-90">
            <input class="text-input" type="text" name="" value="" placeholder="点击右侧按钮选择地址">
          </div>
          <div class="order-list-location right" @click.stop='getLocation()'></div>
        </li>
        <li class="order-form-item">
          <div class="order-list-name">
            <span>开始时间</span>
          </div>
          <div class="order-list-text">
            <input class="text-input" type="text" name="" value="00:00">
          </div>
        </li>
        <li class="order-form-item">
          <div class="order-list-name">
            <span>结束时间</span>
          </div>
          <div class="order-list-text">
            <input class="text-input" type="text" name="" value="00:00">
          </div>
        </li>
        <li class="order-form-item">
          <div class="order-list-name">
            <span>拥堵类型</span>
          </div>
          <div class="div-select">
            <span id="btnJamRangeSelect" class="btn-select" @click.stop="btnOrderTypeSelect()">{{orderTypeSelect}}</span>
            <div class="div-select-ul top-56" v-if="orderSelectShow">
              <ul>
                <li v-for="item in orderType" @click.stop="btnOrderTypeSelect(item)">{{item}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="order-form-item">
          <div class="order-list-name">
            <span>现场描述</span>
          </div>
          <div class="order-list-text">
            <textarea class="text-input textarea" name="localeDescript" id="localeDescript" placeholder="请填写改善建议"></textarea>
          </div>
        </li>
      </ul>
      <button class="btn" type="button" name="button">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  data () {
    return {
      orderTypeSelect: '机动车违法停放',
      orderType: [
        '机动车违法停放',
        '机动车占用应急车道',
        '大货车、泥头车超载',
        '机动车不按规定安装、悬挂号牌',
        '机动车遮挡号牌',
        '机动车污损号牌',
        '机动车压导流线驾驶',
        '机动车路口压线变道',
        '机动车冲红灯',
        '大中型货车驶入禁行区域',
        '小型汽车驶入禁行区域',
        '机动车占用公交车专用道',
        '醉酒驾驶',
        '酒后驾驶',
        '机动车违反禁止标线行驶',
        '电动车、摩托车驶入禁行区域',
        '开超标电动力车',
        '电动车载客',
        '残疾人专用车载客、载物',
        '斑马线不礼让行人'
      ],
      orderSelectShow: false
    }
  },
  methods: {
    getLocation: function () {
      console.log('获取地理位置')
    },
    btnOrderTypeSelect: function (str) {
      if (str) {
        this.orderTypeSelect = str
      }
      if (this.orderSelectShow === true) {
        this.orderSelectShow = false
      } else {
        this.orderSelectShow = true
      }
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.orderSelectShow = false
    })
  }
}
</script>

<style lang='less'>
  .order-outer{
    .width-90{
      width: 90%;
    }
    .padding-right-43{
      padding-right: 43px;
    }
    .order-form-list{
      overflow: hidden;
      padding-bottom: 270px;
      .order-form-item{
        margin-top: 24px;
        padding-left: 162px;
        position: relative;
        line-height: 56px;
        .order-list-name{
          position: absolute;
          left: 0;
        }
        .order-list-location{
          width: 32px;
          height: 56px;
          padding: 5px 0;
          box-sizing: border-box;
          background: url('../../../images/location.png') right no-repeat;
          background-size: contain;
        }
        .textarea{
          height: 183px;
          resize: none;
        }
      }
    }
  }
</style>