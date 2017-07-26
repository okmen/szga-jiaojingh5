<template>
  <div class="digit">
    <div class="digit-form">
     <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>缴款编号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" v-model="billNo" placeholder="请输入缴款编号" />
          </div>
        </li>
        <li class="form-line clear">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select width-25 left">
            <span class="btn-select min-btn-select bg-colour" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="div-select width-25 left abbreviationLeft">
            <span class="btn-select min-btn-select bg-colour" @click.stop="moldClick()">{{ mold }}</span>
            <div class="div-select-ul" v-if="moldShow">
              <ul>
                <li v-for="item in moldData" @click.stop="moldClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="form-line-item width-45 right">
            <input class="text-input bg-colour" type="text" value="" placeholder="请输入车牌号码" v-model="numberPlate">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车架号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input stylebackground" type="text" value="" v-model="behindTheFrame4Digits" placeholder="请输入车架号后四位" />
          </div>
        </li>
        <li class="form-line clear">
          <div class="form-line-item item-name">
            <span>验证码</span>
          </div>
          <div class="form-line-item width-40 left">
            <input class="text-input" type="text" maxlength="4" value="" v-model="verification" placeholder="请输入验证码" id="inp">
          </div>
          <div class="left freeByCar-hbs-code" id="code"></div>
        </li>
      </ul>
      <button class="btn btn-blue" type="button" name="button" @click.stop="demandClick()">查询</button>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { verifyCode } from '../../../config/verifyCode'
export default {
  name: 'digitalreceipTinquire',
  data () {
    return {
      billNo: '',        // 缴款编号
      behindTheFrame4Digits: '',  // 车架号
      numberPlate: '',      // 车牌号码
      verification: '',     // 验证码
      verifyCode: false,
      abbreviationSelectShow: false,
      abbreviationSelectMassage: '粤',
      abbreviationSelectData: [
        {
          'str': '粤'
        },
        {
          'str': '湘'
        }
      ],
      mold: 'B',
      moldShow: false,
      moldData: [
        {
          'str': 'A'
        },
        {
          'str': 'B'
        }
      ]
    }
  },
  mounted () {
    verifyCode(document.getElementById('inp'), document.getElementById('code'), (result, code) => {
      this.verifyCode = result
    })
  },
  methods: {
    abbreviationSelectClick: function (str, id) {
      if (str) {
        this.abbreviationSelectMassage = str
      }
      if (this.abbreviationSelectShow === true) {
        this.abbreviationSelectShow = false
      } else {
        this.abbreviationSelectShow = true
      }
    },
    moldClick: function (str, id) {
      if (str) {
        this.mold = str
      }
      if (this.moldShow === true) {
        this.moldShow = false
      } else {
        this.moldShow = true
      }
    },
    demandClick: function () {
      if (!this.billNo) {
        Toast({message: '请输入缴款编号', position: 'bottom', className: 'white'})
      } else if (!this.numberPlate) {
        Toast({message: '请输入车牌号码', position: 'bottom', className: 'white'})
      } else if (!this.behindTheFrame4Digits) {
        Toast({message: '请输入车架号后四位', position: 'bottom', className: 'white'})
      } else if (!this.verification) {
        Toast({message: '请输入验证码', position: 'bottom', className: 'white'})
      } else if (this.verifyCode === false) {
        Toast({message: '请输入正确的验证码', position: 'bottom', className: 'white'})
      } else {
        this.referFn()
      }
    },
    referFn: function () {
      let plate = `${this.abbreviationSelectMassage}${this.mold}${this.numberPlate}`
      this.$router.push({path: 'digitalReceiptRecord', query: { billNo: this.billNo, numberPlate: plate, id: '1' }})
    }
  }
}
</script>

<style lang="less" scoped>
.digit {
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .digit-form {
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
        font-size: 26px;
      }
    }
    .form-annotation{
      color: red;
      font-size: 26px;
    }
  }
  .width-40 {
    width: 40% !important;
  }
  .width-45 {
    width: 45% !important;
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
  .abbreviationLeft{
    margin-left: 3%;
  }
  .freeByCar-hbs-code {
    margin-left: 40px;
    text-indent: 28px;
    width: 240px;
    height: 56px;
    text-decoration: underline;
  }
}
</style>