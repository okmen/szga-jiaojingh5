<template>
<div class="addVehicle-outer">
  <div class="addVehicle-bindType pad-side-50">
    <p>请选择操作类型</p>
    <div class="div-select">
      <span class="btn-select" @click.stop="bindTypeClick()">{{bindType.str}}</span>
      <div class="div-select-ul" v-if="bindTypeShow">
        <ul>
          <li v-for="(item, index) in bindTypeData" @click.stop="bindTypeClick(index+1)">{{item.str}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="addVehicle-form pad-side-50">
    <div id="addVehicle-hbs">
      <ul class="addVehicle-hbs-list">
        <li class="addVehicle-hbs-item">
          <div class="addVehicle-hbs-name">
            <span>车辆类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="vehicleTypeClick()">{{vehicleType.str}}</span>
            <div class="div-select-ul" v-if="vehicleTypeShow">
              <ul>
                <li v-for="(item, index) in vehicleTypeData" @click.stop="vehicleTypeClick(index+1)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="addVehicle-hbs-item clear">
          <div class="addVehicle-hbs-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select width-120 left">
            <span class="btn-select min-btn-select" @click.stop="plateTypeClick()">{{plateType.str}}</span>
            <div class="div-select-ul" v-if="plateTypeShow">
              <ul>
                <li v-for="(item, index) in plateTypeData" @click.stop="plateTypeClick(index+1)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="addVehicle-hbs-text width-70 right">
            <input class="text-input" type="text" v-model:value="licensePlateNumber" placeholder="请输入车牌号码">
          </div>
        </li>
        <li class="addVehicle-hbs-item">
          <div class="addVehicle-hbs-name">
            <span>车架号码</span>
          </div>
          <div class="addVehicle-hbs-text">
            <input class="text-input" type="text" placeholder="请输入车架号后4位" v-model:value="frameNumber">
          </div>
        </li>
        <li class="addVehicle-hbs-item">
          <div class="addVehicle-hbs-name">
            <span>车主姓名</span>
          </div>
          <div class="addVehicle-hbs-text">
            <input  class="text-input"type="text" placeholder="请输入车主姓名" v-model:value="ownerName">
          </div>
        </li>
        <li class="addVehicle-hbs-item">
          <div class="addVehicle-hbs-name">
            <span>身份证号</span>
          </div>
          <div class="addVehicle-hbs-text">
            <input class="text-input" type="text" placeholder="外籍人士请在证件号前加F" v-model:value="identityCard">
          </div>
        </li>
      </ul>
      <button class="btn" type="button" name="button" @click.stop="submitClick()">提交</button>
    </div>
  </div>
</div>
</template>
<script>
import { addVehicle } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
export default{
  name: 'addVehicle',
  data () {
    return {
      /* 类型选择 */
      bindTypeData: [
        {
          'code': 1,
          'str': '绑定个人车辆信息'
        },
        {
          'code': 0,
          'str': '绑定他人车辆'
        }
      ],
      bindType: {
        'code': 1,
        'str': '绑定个人车辆信息'
      },
      bindTypeShow: false,
      /* 车辆类型 */
      vehicleTypeData: [
        {
          'str': '蓝牌'
        },
        {
          'str': '黄牌'
        },
        {
          'str': '黑牌'
        },
        {
          'str': '个性牌'
        },
        {
          'str': '小型新能源车号牌'
        },
        {
          'str': '大型新能源车号牌'
        }
      ],
      vehicleType: {
        'str': '蓝牌'
      },
      vehicleTypeShow: false,
      /* 车牌号码 */
      plateTypeData: [
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
      plateType: {
        'str': '粤'
      },
      plateTypeShow: false,
      licensePlateNumber: '',
      frameNumber: '',
      ownerName: '',
      identityCard: '',
      mobilephone: ''
    }
  },
  methods: {
    /* 类型选择 */
    bindTypeClick: function (index) {
      if (index) {
        index--
        this.bindType = this.bindTypeData[index]
      }
      this.vehicleTypeShow = false
      this.plateTypeShow = false
      this.bindTypeShow = !this.bindTypeShow
    },
    /* 车辆类型 */
    vehicleTypeClick: function (index) {
      if (index) {
        index--
        this.vehicleType = this.vehicleTypeData[index]
      }
      this.bindTypeShow = false
      this.plateTypeShow = false
      this.vehicleTypeShow = !this.vehicleTypeShow
    },
    /* 车牌号码 */
    plateTypeClick: function (index) {
      if (index) {
        index--
        this.plateType = this.plateTypeData[index]
      }
      this.vehicleTypeShow = false
      this.bindTypeShow = false
      this.plateTypeShow = !this.plateTypeShow
    },
    /* 提交 */
    submitClick: function () {
      let reqData = {
        bindType: this.bindType.code,
        vehicleType: this.vehicleType.str,
        plateType: this.plateType.str,
        licensePlateNumber: this.licensePlateNumber,
        frameNumber: this.frameNumber,
        ownerName: this.ownerName,
        identityCard: this.identityCard,
        // mobilephone: this.mobilephone // 暂无
        mobilephone: '13000000000' // 暂无
      }
      resultPost(addVehicle, reqData).then(json => {
        console.log(json)
      })
    }
  }
}
</script>
<style lang="less">
.addVehicle-outer{
  font-size: 26px;
  color: #000;
  .width-120 {
    width: 120px !important;
  }
  .width-70 {
    width: 70% !important;
  }
  .addVehicle-bindType{
    background: #fff;
    padding-bottom: 24px;
    position: relative;
    p{
      color: #666;
      line-height: 68px;
    }
  }
  .addVehicle-form{
    background: #fff;
    margin-top: 12px;
    #addVehicle-hbs{
      .addVehicle-hbs-list{
        overflow: hidden;
        .addVehicle-hbs-item{
          margin-top: 24px;
          padding-left: 130px;
          position: relative;
          line-height: 56px;
          .addVehicle-hbs-name{
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }
}
</style>