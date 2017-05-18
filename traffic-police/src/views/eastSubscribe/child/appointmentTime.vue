<template>
  <div class="appointmentTime-box">
    <div class="appointmentTime-form">
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>车牌号码</span>
        </div>
        <div class="form-line-item div-select width-35">
          <span class="btn-select min-btn-select bgcolor-fff" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
          <div class="div-select-ul" v-if="abbreviationSelectShow">
            <ul>
              <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">
                {{item.str}}
              </li>
            </ul>
          </div>
        </div>
        <div class="form-line-item width-60 right">
          <input v-model="carNumber" class="text-input bgcolor-fff" type="text" name="" value="" placeholder="请输入车牌号码">
        </div>
      </div>
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>号牌种类</span>
        </div>
        <div class="form-line-item div-select width-100">
          <span class="btn-select bgcolor-fff" @click.stop="licenseSelectClick()" :data-type="licenseSelectType">{{ licenseSelectMassage }}</span>
          <div class="div-select-ul" v-if="licenseSelectShow">
            <ul>
              <li v-for="(item, index) in licenseSelectData" @click.stop="licenseSelectClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>车辆类型</span>
        </div>
        <div class="form-line-item div-select width-100">
          <span class="btn-select bgcolor-fff" @click.stop="carSelectClick()" :data-type="carSelectType">{{ carSelectMassage }}</span>
          <div class="div-select-ul" v-if="carSelectShow">
            <ul>
              <li v-for="(item, index) in carSelectData" @click.stop="carSelectClick(item.str, index)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        <p class="abs-p">温馨提示：九座以下的除黄牌的车都要预约</p>
      </div>
      <div class="form-line padding-left-188">
        <div class="form-line-item item-name width-188">
          <span>车架号后四位</span>
        </div>
        <div class="form-line-item div-select width-100">
          <input v-model="carNumber" class="text-input bgcolor-fff" type="text" name="" value="" placeholder="车架号后四位">
        </div>
      </div>
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>手机号码</span>
        </div>
        <div class="form-line-item div-select width-100">
          <input v-model="carNumber" class="text-input bgcolor-fff" type="tel" name="" value="" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="form-line">
        <div class="form-line-item item-name">
          <span>验证码</span>
        </div>
        <div class="form-line-item div-select width-50">
          <input v-model="carNumber" class="text-input bgcolor-fff" type="tel" name="" value="" placeholder="请输入验证码">
        </div>
        <div class="form-line-item div-select width-46 float-right">
          <button class="blue-btn">点击发送验证码</button>
        </div>
      </div>
    </div>
    <div class="appointmentTime-select">
      <div class="appointmentTime-select-top">
        <p>选择预约时间</p>
        <span>温馨提示：绿色为充裕,黄色为良好,红色为紧张,灰色为不可预约。</span>
      </div>
      <div class="appointmentTime-select-option">
        <div class="option-item" v-for="(item, index) in optionData" @click="item.isElect = !item.isElect" :class="{ active: item.isElect }" >
          <div class="option-item-text">
            <p class="option-item-p option-item-p28">{{ item.address }}</p>
            <p class="option-item-p">{{ item.date }}</p>
            <p class="option-item-p">{{ item.time }}</p>
          </div>
          <div class="option-item-Mask" :style="{width: item.remainingPercentage + '%',backgroundColor: item.bgColor}" ></div>
        </div>
      </div>
      <div class="appointmentTime-select-bottom"></div>
    </div>
  </div>
</template>
<script>
// import { resultPost } from '../../../service/getData'
// import { getElectronicPolicy } from '../../../config/baseUrl'
export default {
  name: 'appointmentTime',
  data () {
    return {
      carSelectShow: false,
      carSelectMassage: '大型汽车(黄牌)',
      carSelectType: '01',
      carSelectData: [
        {
          'id': '01',
          'str': '大型汽车(黄牌)'
        },
        {
          'id': '02',
          'str': '小型汽车(蓝牌)'
        },
        {
          'id': '03',
          'str': '使馆汽车'
        },
        {
          'id': '04',
          'str': '领馆汽车'
        },
        {
          'id': '05',
          'str': '境外汽车'
        },
        {
          'id': '06',
          'str': '外籍汽车(黑牌)'
        },
        {
          'id': '07',
          'str': '普通摩托车'
        },
        {
          'id': '08',
          'str': '轻便摩托车'
        },
        {
          'id': '09',
          'str': '使馆摩托车'
        },
        {
          'id': '10',
          'str': '领馆摩托车'
        },
        {
          'id': '15',
          'str': '挂车'
        },
        {
          'id': '16',
          'str': '教练汽车'
        },
        {
          'id': '17',
          'str': '教练摩托车'
        },
        {
          'id': '18',
          'str': '实验汽车'
        },
        {
          'id': '19',
          'str': '实验摩托车'
        },
        {
          'id': '22',
          'str': '临时行驶车'
        },
        {
          'id': '23',
          'str': '警用汽车'
        },
        {
          'id': '24',
          'str': '警用摩托'
        },
        {
          'id': '20',
          'str': '临时入境车'
        }
      ],
      licenseSelectShow: false,
      licenseSelectMassage: '蓝牌',
      licenseSelectType: '02',
      licenseSelectData: [
        {
          'str': '蓝牌',
          'type': '02'
        },
        {
          'str': '黄牌',
          'type': '01'
        },
        {
          'str': '黑牌',
          'type': '06'
        },
        {
          'str': '个性牌',
          'type': '02'
        },
        {
          'str': '小型新能源车号牌',
          'type': '02'
        },
        {
          'str': '大型新能源车号牌',
          'type': '02'
        }
      ],
      abbreviationSelectShow: false,
      abbreviationSelectMassage: '粤',
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
      carNumber: '',
      optionData: [
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '90',
          time: '01',
          bgColor: '#84dd83',
          isElect: false
        },
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '40',
          time: '02',
          bgColor: '#ffde7f',
          isElect: false
        },
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '50',
          time: '01',
          bgColor: '#ffde7f',
          isElect: false
        },
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '0',
          time: '02',
          bgColor: '#84dd83',
          isElect: false
        },
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '80',
          time: '01',
          bgColor: '#84dd83',
          isElect: false
        },
        {
          address: '梅沙片区',
          date: '2017.05.28',
          remainingPercentage: '10',
          time: '02',
          bgColor: '#f87170',
          isElect: false
        }
      ]
    }
  },
  methods: {
    licenseSelectClick: function (str, index) {
      if (str) {
        this.licenseSelectMassage = str
        this.licenseSelectType = this.licenseSelectData[index].type
      }
      if (this.licenseSelectShow === true) {
        this.licenseSelectShow = false
      } else {
        this.licenseSelectShow = true
        this.abbreviationSelectShow = false
        this.carSelectShow = false
      }
    },
    carSelectClick: function (str, index) {
      if (str) {
        this.carSelectMassage = str
        this.carSelectType = this.carSelectData[index].wfxw
      }
      if (this.carSelectShow === true) {
        this.carSelectShow = false
      } else {
        this.carSelectShow = true
        this.abbreviationSelectShow = false
      }
    },
    abbreviationSelectClick: function (str) {
      if (str) {
        this.abbreviationSelectMassage = str
      }
      if (this.abbreviationSelectShow === true) {
        this.abbreviationSelectShow = false
      } else {
        this.abbreviationSelectShow = true
        this.licenseSelectShow = false
        this.carSelectShow = false
      }
    }
  }
}
</script>
<style lang="less">
  @import "./../../../style/base";
.appointmentTime-box {
  position: relative;
  min-height: 1150px;
  background: url('../../../images/eastSubscribe-bottom.png') no-repeat center bottom #dfefff;
  background-size: contain;
  padding: 0 50px 480px;
  .appointmentTime-form {
    .form-line {
      padding: 35px 0 0 130px;
      position: relative;
      line-height: 60px;
      vertical-align:middle;
      .form-line-item {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        vertical-align:middle;
        span {
          vertical-align: super;
        }
        .text-input{
          vertical-align: middle;
        }
        .bgcolor-fff{
          background-color: #fff;
        }
        .blue-btn{
          width: 100%;
          line-height: 60px;
          background-color: #2696dd;
          color: #fff;
          font-size: 26px;
          border-radius: 8px;
        }
      }
      .abs-p{
        position: absolute;
        top: 0;
        text-align: center;
        font-size: 22px;
        color: #999;
        line-height: 35px;
      }
    }
  }
  .appointmentTime-select{
    .appointmentTime-select-top{
      p{
        font-size: 28px;
        color: #000;
        line-height: 60px;
      }
      span{
        font-size: 22px;
        color: #999;
      }
    }
    .appointmentTime-select-option{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .option-item{
        width: 45%;
        height: 160px;
        position: relative;
        text-align: center;
        margin-top: 20px;
        border: 1px solid #999;
        background-color: #fff;
        border-radius: 8px;
        .option-item-text{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          .option-item-p{
            color: #666;
            font-size: 24px;
            line-height: 48px;
          }
          .option-item-p28{
            font-size: 28px;
          }
        }
        .option-item-Mask{
          position: absolute;
          z-index: 0;
          height: 100%;
          top: 0;
          right: 0;
          background-color: #84dd83;
        }
        &.active{
          border: 6px solid #2696dd;
        }
      }
    }
  }
.width-35 {
   width: 35% !important;
}
.width-60 {
   width: 60% !important;
}
.width-100 {
   width: 100% !important;
}
.width-50 {
   width: 50% !important;
}
.width-46 {
   width: 46% !important;
}
.width-188 {
  width: 188px !important;
}
.float-right{
  float: right !important;
}
.padding-left-188 {
  padding-left: 188px !important;
}
}
</style>
