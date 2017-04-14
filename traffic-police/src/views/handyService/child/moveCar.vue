<template>
  <div class="moveCar-outer pad-side-50">
    <p class="title">填写以下表单申请挪车：</p>
    <ul class="moveCar-list">
      <li class="moveCar-item clear">
        <div class="moveCar-item-name">
          <span>车牌号码</span>
        </div>
        <div class="div-select left width-146">
          <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{abbreviation}}</span>
          <div class="div-select-ul" v-if="abbreviationSelectShow">
            <ul>
              <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        <div class="moveCar-item-text right width-67">
          <input class="text-input" type="text" name="" v-model:value="numberPlate" placeholder="请输入车牌号码">
        </div>
      </li>
      <li class="moveCar-item">
        <div class="moveCar-item-name">
          <span>汽车种类</span>
        </div>
        <div class="div-select">
          <span class="btn-select" @click.stop="carTypeSelectClick()">{{carType}}</span>
          <div class="div-select-ul" v-if="carTypeSelectShow">
            <ul>
              <li v-for="item in carTypeSelectData" @click.stop="carTypeSelectClick(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="moveCar-item clear">
        <div class="moveCar-item-name">
          <span>挪车地址</span>
        </div>
        <div class="common-list-text left width-90">
          <input class="text-input" type="text" name="" v-model:value="doodgenAddress" placeholder="点击右侧按钮选择地址">
        </div>
        <div class="common-list-location right" @click.stop='getLocation()'></div>
      </li>
      <button class="btn" type="button" name="button" @click.stop="submit()">发送短信</button>
    </ul>
    <div class="moveCar-tip">
      <p class="moveCar-tip-titlte">拨打专线通知挪车：</p>
      <p class="moveCar-tip-content">深圳交警全新推出电话挪车服务，星级用户如遇见正常停车后被其他车辆堵住，可拨打专线电话，交警将联系对方车主移车；或者提交表单发起挪车需求，交警将发起挪车需求，交警将发送提示短信通知对方车主移车。对方拒绝移车且违法停放的，交警将依法处罚。</p>
      <button class="btn btn-blue" type="button" name="button">拨打专线</button>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { moveCar } from '../../../config/baseUrl'
export default{
  name: 'moveCar',
  data () {
    return {
      abbreviationSelectShow: false,
      abbreviation: '粤',
      abbreviationSelectData: [
        {
          'str': '粤'
        },
        {
          'str': '鄂'
        },
        {
          'str': '豫'
        },
        {
          'str': '皖'
        },
        {
          'str': '赣'
        },
        {
          'str': '冀'
        },
        {
          'str': '鲁'
        },
        {
          'str': '浙'
        },
        {
          'str': '苏'
        },
        {
          'str': '湘'
        },
        {
          'str': '闽'
        },
        {
          'str': '蒙'
        },
        {
          'str': '京'
        },
        {
          'str': '辽'
        },
        {
          'str': '渝'
        },
        {
          'str': '沪'
        },
        {
          'str': '陕'
        },
        {
          'str': '川'
        },
        {
          'str': '黑'
        },
        {
          'str': '晋'
        },
        {
          'str': '桂'
        },
        {
          'str': '吉'
        },
        {
          'str': '宁'
        },
        {
          'str': '贵'
        },
        {
          'str': '琼'
        },
        {
          'str': '甘'
        },
        {
          'str': '青'
        },
        {
          'str': '津'
        },
        {
          'str': '云'
        },
        {
          'str': '藏'
        },
        {
          'str': '新'
        }
      ],
      numberPlate: '',
      carTypeSelectShow: false,
      carType: '小型汽车',
      carTypeSelectData: [
        {
          'str': '小型汽车'
        },
        {
          'str': '大型汽车'
        },
        {
          'str': '使馆汽车'
        },
        {
          'str': '领馆汽车'
        },
        {
          'str': '境外汽车'
        },
        {
          'str': '外籍汽车'
        },
        {
          'str': '两、三轮摩托车'
        },
        {
          'str': '轻便摩托车'
        },
        {
          'str': '使馆摩托车'
        },
        {
          'str': '挂车'
        },
        {
          'str': '教练汽车'
        },
        {
          'str': '教练摩托车'
        },
        {
          'str': '实验汽车'
        },
        {
          'str': '实验摩托车'
        },
        {
          'str': '临时行驶车'
        },
        {
          'str': '警用汽车'
        },
        {
          'str': '警用摩托'
        },
        {
          'str': '香港入境车'
        },
        {
          'str': '澳门入境车'
        }
      ],
      doodgenAddress: ''
    }
  },
  methods: {
    abbreviationSelectClick: function (str) {
      if (str) {
        this.abbreviation = str
      }
      this.carTypeSelectShow = false
      this.abbreviationSelectShow = !this.abbreviationSelectShow
    },
    carTypeSelectClick: function (str) {
      if (str) {
        this.carType = str
      }
      this.abbreviationSelectShow = false
      this.carTypeSelectShow = !this.carTypeSelectShow
    },
    getLocation: function () {
      console.log('获取地址')
    },
    submit: function () {
      let reqData = {
        abbreviation: this.abbreviation,
        numberPlate: this.numberPlate,
        carType: this.carType,
        doodgenAddress: this.doodgenAddress
      }
      resultPost(moveCar, JSON.stringify(reqData)).then(json => {
        console.log(json)
      })
    }
  },
  created: function () {
    document.addEventListener('click', (e) => {
      this.abbreviationSelectShow = false
      this.carTypeSelectShow = false
    })
  }
}
</script>
<style lang="less">
.moveCar-outer{
  padding-top: 28px;
  line-height: 58px;
  .width-90{
    width: 90%;
  }
  background-color: #fff;
  .title{
    font-size: 24px;
    line-height: 30px;
  }
  .width-146{
    width: 146px !important;
  }
  .width-67{
    width: 67%;
  }
  .moveCar-list{
    margin-bottom: 90px;
    .moveCar-item{
      padding-left: 130px;
      margin-top: 31px;
      font-size: 28px;
      position: relative;
      .moveCar-item-name{
        position: absolute;
        left: 0;
      }
      .common-list-location{
        width: 32px;
        height: 56px;
        padding: 5px 0;
        box-sizing: border-box;
        background: url('../../../images/location.png') right no-repeat;
        background-size: contain;
      }
    }
  }
  .moveCar-tip{
    font-size: 24px;
    .moveCar-tip-titlte{
      line-height: 66px;
    }
    .moveCar-tip-content{
      line-height: 34px;
      color: #353535;
    }
  }
}
</style>