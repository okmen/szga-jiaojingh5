<template>
<!-- <div>换领机动车登记证书</div> -->
  <div class="renewingCollar">
    <div class="renewingCollar-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车主姓名</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" placeholder="请输入车主姓名" v-model="name"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件名称</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="varietyID()">{{ variety }}</span>
            <div class="div-select-ul" v-if="varietyShow">
              <ul>
                <li v-for="item in varietyData" @click.stop="varietyID(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" placeholder="请输入证件号码" v-model="name"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>手机号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" placeholder="请输入手机号码" v-model="name"/>
          </div>
        </li>
        <li class="form-line">
            <div class="form-line-item item-name">
              <span>验证码</span>
            </div>
            <div class="form-line-item width-60">
              <input class="text-input stylebackground" type="text" v-model="identifying" name="" value="" placeholder="请输入验证码">
            </div>
            <div class="form-line-item right width-35">
              <button class="btn browse-code" v-bind:class="{ 'show' : isShow}" :disabled="forbidden" @click="scanQRCode()">{{chronoScope}}</button>
            </div>
        </li>
        <li class="form-line clear">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select width-25 left">
            <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="form-line-item width-70 right">
            <input v-model="car_number" class="text-input" type="text" name="" value="" placeholder="请输入车牌号码">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车辆类型</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" readonly/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>使用性质</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="employClick()">{{ employ }}</span>
            <div class="div-select-ul" v-if="employShow">
              <ul>
                <li v-for="item in employData" @click.stop="employClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车架号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" placeholder="请输入车架号" v-model="name"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>预约地点</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="subscribeClick()">{{ subscribe }}</span>
            <div class="div-select-ul" v-if="subscribeShow">
              <ul>
                <li v-for="item in subscribeData" @click.stop="subscribeClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-li">
          <span>选择预约日期</span>
        </li>
        <li class="form-li clear">
          <input class="text-input stylebackground width-27 left" type="" name="" value="2017" readonly>
          <span class="left rene">年</span>
          <div class="div-select width-27 left">
            <span class="btn-select">{{ month }}</span>
            <div class="div-select-ul" v-if="varietyShow">
              <ul>
               <input class="text-input stylebackground" type="" name="" value="2017" readonly>
              </ul>
            </div>
          </div>
          <span class="left rene">月</span>
          <div class="div-select width-27 left">
            <span class="btn-select">{{ month }}</span>
            <div class="div-select-ul" v-if="varietyShow">
              <ul>
               <input class="text-input stylebackground" type="" name="" value="2017" readonly>
              </ul>
            </div>
          </div>
          <span class="left rene">日</span>
        </li>
      </ul>
      <ul class="renewingUl clear">
        <li>
          <p class="width-50 left"> 9:10~10:00</p>
          <p class="width-50 left">剩余名额<span>10</span>位</p>
        </li>
      </ul>
      <button class="btn btns" @click.stop="submitClick()">预约</button>
    </div>
  </div>
</template>

<script>
import { resultPost } from '../../../service/getData'
import { sendSMS } from '../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
export default {
  name: 'renewingCollarCredential',
  data () {
    return {
      name: '',
      isShow: false,                           //  验证码
      forbidden: false,
      chronoScope: '获取验证码',
      identifying: '',                        // 验证码
      variety: '居民户口簿',
      car_number: '',  // 车牌号码
      cur_card_id: '01',
      varietyShow: false,
      varietyData: [
        {
          'id': '01',
          'str': '居民户口簿'
        },
        {
          'id': '02',
          'str': '单位注销证明'
        },
        {
          'id': '03',
          'str': '驻华机构证明'
        },
        {
          'id': '04',
          'str': '个体工商营业执照注册'
        },
        {
          'id': '05',
          'str': '居住暂住证明'
        },
        {
          'id': '06',
          'str': '临时居民身份证'
        },
        {
          'id': '07',
          'str': '军官证'
        },
        {
          'id': '08',
          'str': '军官离退休证'
        },
        {
          'id': '09',
          'str': '外交人员身份证明'
        },
        {
          'id': '10',
          'str': '士兵证'
        },
        {
          'id': '11',
          'str': '境外人员身份证明'
        },
        {
          'id': '12',
          'str': '统一社会信用代码'
        },
        {
          'id': '13',
          'str': '组织机构代码证书'
        }
      ],
      abbreviationSelectShow: false,        // 省字列表显示与否
      abbreviationSelectMassage: '粤',      // 默认省字
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
      carSelectData: {
        '01': '大型汽车',
        '02': '小型汽车',
        '03': '使馆汽车',
        '04': '领馆汽车',
        '05': '境外汽车',
        '06': '外籍汽车',
        '07': '普通摩托车',
        '08': '轻便摩托车',
        '09': '使馆摩托车',
        '10': '领馆摩托车',
        '15': '挂车',
        '16': '教练汽车',
        '17': '教练摩托车',
        '18': '实验汽车',
        '19': '实验摩托车',
        '22': '临时行驶车',
        '23': '警用汽车',
        '24': '警用摩托',
        '20': '临时入境车',
        '51': '临时行驶车',
        '52': '新能源小型车'
      },
      employ: '非运营',
      employShow: false,
      employData: [
        {
          'id': '01',
          'str': '非运营'
        },
        {
          'id': '02',
          'str': '公路客运'
        },
        {
          'id': '03',
          'str': '公交客运'
        },
        {
          'id': '04',
          'str': '旅游客运'
        },
        {
          'id': '05',
          'str': '货运'
        },
        {
          'id': '06',
          'str': '租赁'
        }
      ],
      subscribe: '福田车管分所',
      subscribeShow: false,
      subscribeData: [
        {
          'id': '01',
          'str': '福田车管分所'
        },
        {
          'id': '02',
          'str': '罗湖车管分所'
        },
        {
          'id': '03',
          'str': '龙岗车管分所'
        },
        {
          'id': '04',
          'str': '宝安车管分所'
        },
        {
          'id': '05',
          'str': '盐田车管分所'
        },
        {
          'id': '06',
          'str': '龙华车管分所'
        },
        {
          'id': '07',
          'str': '坪山车管分所'
        }
      ],
      month: '7'
    }
  },
  methods: {
    varietyID: function (str, id) {
      if (str) {
        this.variety = str
        this.cur_card_id = id
      }
      if (this.varietyShow === true) {
        this.varietyShow = false
      } else {
        this.varietyShow = true
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
      }
    },
    // 使用性质
    employClick: function (str) {
      if (str) {
        this.employ = str
      }
      if (this.employShow === true) {
        this.employShow = false
      } else {
        this.employShow = true
      }
    },
    // 预约地点
    subscribeClick: function (str) {
      if (str) {
        this.subscribe = str
      }
      if (this.subscribeShow === true) {
        this.subscribeShow = false
      } else {
        this.subscribeShow = true
      }
    },
    scanQRCode: function () {
      let mobile = this.mobile
      if (!(mobile)) {
        Toast({message: '请输入手机号', position: 'bottom', className: 'white'})
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobile))) {
        Toast({message: '请输入正确的手机号码', position: 'bottom', className: 'white'})
      } else {
        let phonedata = {
          mobilephone: this.mobile,
          businessType: 'szjj'
        }
        resultPost(sendSMS, phonedata).then(json => {
          if (json.code === '0000') {
            this.timePiece()
          } else {
            Toast({message: json.msg, position: 'bottom', className: 'white'})
          }
        })
      }
    },
    // 验证码倒计时
    timePiece: function () {         //  验证码倒计时
      clearInterval(this.Timepiece)
      this.forbidden = true
      this.isShow = true
      var str = 60
      this.Timepiece = setInterval(() => {
        str = --str
        this.chronoScope = str + 's'
        if (this.chronoScope === 0 + 's') {
          clearInterval(this.Timepiece)
          this.chronoScope = '获取验证码'
          this.forbidden = false
          this.isShow = false
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
/*@import "./../../../../style/base";*/
.renewingCollar {
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .renewingCollar-form {
    background-color: #fff;
    padding-top:20px;
    .form-line {
      padding: 20px 0 0 180px;
      position: relative;
      line-height: 56px;
      .form-line-item {
        width: 100%;
        display: inline-block;
        height: 60px;
        line-height:60px;
        .photo-ex {
          color: #2696dd;
        }
        span {
          vertical-align: middle;
        }
        .browse-code {
          margin: 0;
          display: inline-block;
          height: 56px;
          width: 100%;
          line-height: 56px;
          border-radius: 10px;
          text-align: center;
          color:#fff;
          vertical-align:middle;
        }
        &.city {
          margin: 0 18px;
        }
        &.sex {
          text-align: center;
        }
      }
      .item-name {
        width: 180px;
        position: absolute;
        left: 0;
      }
      .div-select {
        font-size: 24px;
      }
    }
    .form-li{
      width: 100%;
      display: inline-block;
      height: 60px;
      line-height:60px;
      span{
        font-size: 16px;
      }
    }
    .form-annotation{
      color: red;
      font-size: 16px;
    }
  }
  .width-27 {
    width: 27% !important;
  }
  .width-40 {
    width: 40% !important;
  }
  .width-35 {
    width: 35% !important;
  }
  .width-50 {
    width: 50% !important;
  }
  .width-60 {
    width: 60% !important;
  }
  .btn {
    width: 280px;
    margin-top:30px;
    display: inline-block;
  }
  .btns{
    margin: 60px 0 30px 0;
    width: 100%;
  }
  .div-select-ul{
    font-size: 16px;
  }
  .rene{
    display: inline-block;
    width: 6%;
    text-align: center;
  }
  .renewingUl{
    margin-top: 30px;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    li{
      line-height: 60px;
      text-align: center;
    }
  }
  .btns{
    background: #0faeff;
  }
}
</style>
