<template>
  <div class="payLawless-outer">
    <div class="payLawless-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>处罚决定书号</span>
          </div>
          <div class="form-line-item width-60">
            <input v-model="billNo" class="text-input" type="text" name="" value="" placeholder="请输入缴款编号">
          </div>
          <div class="form-line-item right width-35">
            <span class="btn-blue browse-code"><i class="code-icon"></i>扫一扫</span>
          </div>
        </li>
        <li class="form-line">
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
            <input v-model="car_number" class="text-input" type="text" name="" value="" placeholder="请输入车牌号码">
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>验证码</span>
          </div>
          <div class="form-line-item width-40">
            <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
          </div>
        </li>
      </ul>
    </div>
    <button class="btn btn-blue" type="button" name="button" @click.stop="queryPay()">查询</button>
    <div class="hint">
      <h4>温馨提示：</h4>
      <p>缴款交易提示成功的，违法记录将以24小时内完成核销，请您在交易成功24小时以后查询违法处理结果，请勿急于重复缴款。如违法记录仍未核销的 款项将在15日内退回。</p>
    </div>
  </div>
</template>
<style lang="less">
  @import "./../../../style/base";
  .payLawless-outer {
    position: absolute;
    top:0;
    bottom:0;
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
  }

</style>
<script>
  import { resultPost } from '../../../service/getData'
  import { queryPay } from '../../../config/baseUrl'
  export default {
    name: 'earlyLawless',
    data () {
      return {
        car_number: '',
        billNo: '',
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
        ]
      }
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
      queryPay: function () {
        let reqData = {
          billNo: this.billNo,
          licensePlateNo: this.abbreviationSelectMassage + this.car_number,
          mobilephone: '18502668481'
        }
        resultPost(queryPay, JSON.stringify(reqData)).then(json => {
          console.log(json)
        })
      }
    },
    created () {
      document.addEventListener('click', (e) => {
        this.typeSelectShow = false
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
      })
    }
  }
</script>

