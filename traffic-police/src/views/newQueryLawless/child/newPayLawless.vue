<template>
  <div class="payLawless-outer">
    <div class="payLawless-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>业务类型</span>
          </div>
          <div class="form-line-item div-select width-100">
            <span class="btn-select min-btn-select" @click.stop="isPedestrianSelectClick()">{{ isPedestrianShowMessage }}</span>
            <div class="div-select-ul" v-if="isPedestrianShow">
              <ul>
                <li v-for="item in isPedestrian" @click.stop="isPedestrianSelectClick(item.str)">
                  {{item.str}}
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>处罚决定书号</span>
          </div>
          <div class="form-line-item width-60">
            <input v-model="billNo" class="text-input" type="text" name="" value="" placeholder="请输入缴款编号">
          </div>
          <div class="form-line-item right width-35">
            <span class="btn-blue browse-code" @click="scanQRCode()"><i class="code-icon"></i>扫一扫</span>
          </div>
        </li>
        <li class="form-line" v-if="plateNumberShow">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
          <div class="form-line-item div-select width-25">
            <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">
                  {{item.str}}
                </li>
              </ul>
            </div>
          </div>
          <div class="form-line-item width-70 right">
            <input v-model="car_number" class="text-input" type="text" name="" value="" style="text-transform:uppercase;" placeholder="请输入车牌号码">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>验证码</span>
          </div>
          <div class="form-line-item width-40">
            <input class="text-input" type="text" name="" value="" maxlength="4" placeholder="请输入验证码" id="inp">
          </div>
          <div class="form-line-item right">
            <div class="payLawless-hbs-code" id="code"></div>
          </div>
        </li>
      </ul>
    </div>
    <button class="btn btn-blue" type="button" name="button" @click.stop="queryPay()">查询</button>
    <div class="hint">
      <h4>温馨提示：</h4>
      <p class="pay-red">无处罚决定书，请前往“违法在线处理”进行查询或缴费</p>
      <p>缴款交易提示成功的，违法记录将以24小时内完成核销，请您在交易成功24小时以后查询违法处理结果，请勿急于重复缴款。如违法记录仍未核销的 款项将在15日内退回。</p>
    </div>
  </div>
</template>
<style lang="less">
  .payLawless-outer {
    background-color: white;
    font-size: 26px;
    color: #000;
    padding: 0 50px;
      .payLawless-form {
         background-color: #fff;
          padding-top:20px;
            .form-line {
              padding: 20px 0 0 180px;
              position: relative;
              line-height: 56px;
              .form-line-item {
                 display: inline-block;
                 height: 60px;
                 line-height:60px;
                   span {
                     vertical-align: middle;
                   }
                  .browse-code {
                     display: inline-block;
                     height: 56px;
                     width: 100%;
                    line-height: 52px;
                    border-radius: 10px;
                     text-align: center;
                     color:#fff;
                     vertical-align:middle;
                      .code-icon {
                        background: url("./../../../images/browse.png");
                        background-size: 32px 32px;
                        display: inline-block;
                        width:32px;
                        height: 32px;
                        vertical-align: -6px;
                        margin-right: 10px;
                      }
                   }
              }
              .item-name {
                 width: 180px;
                 position: absolute;
                 left: 0;
              }
              .payLawless-hbs-code {
                margin-left: 40px;
                text-indent: 28px;
                width: 240px;
                height: 60px;
                text-decoration: underline;
              }
            }
      }
      .width-25 {
         width: 25% !important;
      }
      .width-40 {
         width: 40% !important;
      }
      .width-35 {
         width: 35% !important;
      }
      .width-60 {
         width: 60% !important;
      }
      .width-70 {
         width: 70% !important;
      }
      .pay-red{
        color: #FF0000;
      }
  }

</style>
<style scoped lang="less">
  .width-100{
    .min-btn-select{
      background-position:94% center;
    }
  }
</style>
<script>
  import { resultPost } from '../../../service/getData'
  import { queryPay } from '../../../config/baseUrl'
  import { verifyCode } from '../../../config/verifyCode'
  import wx from 'weixin-js-sdk'
  import { Toast } from 'mint-ui'
  export default {
    name: 'payLawless',
    data () {
      return {
        billNo: '',                        // 请求-缴款编号
        car_number: '',                    // 请求-除去省字的车牌号
        abbreviationSelectShow: false,     // 省字列表显示与否
        isPedestrianShow: false,
        verifyCode: false,                    // 验证码验证
        abbreviationSelectMassage: '粤',   // 默认省字
        isPedestrianShowMessage: '机动车', // 机动车
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
        ],      // 省字列表
        plateNumberShow: true,
        isPedestrian: [
          {str: '机动车', id: '1'},
          {str: '行人/非机动车驾驶人', id: '0'}
        ]
      }
    },
    mounted () {
      verifyCode(document.getElementById('inp'), document.getElementById('code'), (result, code) => {
        this.verifyCode = result
      })
    },
    methods: {
      abbreviationSelectClick: function (str) {
        if (str) {
          this.abbreviationSelectMassage = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        } else {
          this.abbreviationSelectShow = true
          this.licenseSelectShow = false
          this.typeSelectShow = false
        }
      },
      isPedestrianSelectClick (str) {
        if (str) {
          this.isPedestrianShowMessage = str
        }
        if (this.isPedestrianShow === true) {
          this.isPedestrianShow = false
        } else {
          this.isPedestrianShow = true
        }
        if (this.isPedestrianShowMessage === '行人/非机动车驾驶人') {
          this.plateNumberShow = false
        } else {
          this.plateNumberShow = true
        }
      },
      queryPay: function () {
        let platNo = this.abbreviationSelectMassage + this.car_number
        if (this.isPedestrianShowMessage === '行人/非机动车驾驶人') {
          platNo = '无'
        }
        let reqData = {
          billNo: this.billNo,
          licensePlateNo: platNo.toLocaleUpperCase(),
          openId: !window.localStorage.getItem('openId') ? '' : window.localStorage.getItem('openId')
        }
        console.log(reqData)
        for (let key in reqData) {
          if (!reqData[key]) {
            Toast({
              message: '信息填写不完整',
              position: 'bottom',
              className: 'white'
            })
            return false
          }
        }
        if (this.$plateerification(platNo.toLocaleUpperCase()) && platNo !== '无') {
          Toast({
            message: this.$plateerification(platNo),
            position: 'bottom',
            className: 'white'
          })
          return
        }
        if (!this.verifyCode) {
          Toast({
            message: '验证码输入错误',
            position: 'bottom',
            className: 'white'
          })
          return false
        }
        resultPost(queryPay, reqData).then(json => {
          console.log(json)
          if (json.code === '0000') {
            window.location.href = json.msg
          }
        })
      },
      scanQRCode: function () {
        let that = this
        let ua = window.navigator.userAgent // 浏览器版本
        if (/MicroMessenger/i.test(ua)) {
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
              that.billNo = result.split(',')[1]
            }
          })
        } else {
          if ((window.Ali.alipayVersion).slice(0, 3) >= 8.1) {
            window.Ali.scan({
              type: 'qr'
            }, function (result) {
              if (result.errorCode) {
                // 没有扫码的情况
                // errorCode=10，用户取消
                // errorCode=11，操作失败
                switch (result.errorCode) {
                  case 10:
                    window.alert('用户取消')
                    break
                  default:
                    window.alert('操作失败')
                }
              } else {
                  // 成功扫码的情况
                if (result.barCode !== undefined) { // 条码
                  // result.barCode 返回结果
                  this.billNo = result.barCode
                } else if (result.qrCode !== undefined) { // 二维码
                  // result.barCode 返回结果
                  this.billNo = result.barCode
                } else if (result.cardNumber !== undefined) { // 银行卡
                  // result.barCode 返回结果
                  this.billNo = result.barCode
                }
              }
            })
          } else {
            window.alert('请在钱包8.1以上版本运行')
          }
        }
      }
    },
    created () {
      document.addEventListener('click', (e) => {
        this.typeSelectShow = false
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
        this.isPedestrianShow = false
      })
    }
  }
</script>
