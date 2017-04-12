<template>
  <div class="queryByCar-outer">
    <div class="queryByCar-from pad-side-50">
      <div id="queryByCar-hbs">
        <ul class="queryByCar-hbs-list">
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>汽车种类</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
              <div class="div-select-ul" v-if="licenseSelectShow">
                <ul>
                  <li v-for="item in licenseSelectData" @click.stop="licenseSelectClick(item.str)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="queryByCar-hbs-item clear">
            <div class="queryByCar-hbs-name">
              <span>车牌号码</span>
            </div>
            <div class="div-select width-120 left">
              <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
              <div class="div-select-ul" v-if="abbreviationSelectShow">
                <ul>
                  <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str)">{{item.str}}</li>
                </ul>
              </div>
            </div>
            <div class="queryByCar-hbs-text width-70 right">
              <input class="text-input" type="text" name="" value="" placeholder="请输入车牌号码">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>车架号</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" name="" value="" placeholder="请输入车架号后四位">
            </div>
          </li>
          <li class="queryByCar-hbs-item clear">
            <div class="queryByCar-hbs-name">
              <span>验证码</span>
            </div>
            <div class="queryByCar-hbs-text width-40 left">
              <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
            </div>
            <div class="left queryByCar-hbs-code">获取验证码</div>
          </li>
        </ul>
      </div>
      <button class="btn" type="button" name="button">查询</button>
      <button class="btn-light-green" type="button" name="button">我的车辆违章</button>
      <div class="hint">
        <p>温馨提示：仅可查询车辆在深圳市范围内的交通违法信息</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'queryByCar',
    data () {
      return {
        licenseSelectShow: false,
        licenseSelectMassage: '小型汽车',
        licenseSelectData: [
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
            'str': '普通摩托车'
          },
          {
            'str': '轻便摩托车'
          },
          {
            'str': '使馆摩托车'
          },
          {
            'str': '领馆摩托车'
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
          },
          {
            'str': '新能源大型车'
          },
          {
            'str': '新能源小型车'
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
        ]
      }
    },
    methods: {
      licenseSelectClick: function (str) {
        if (str) {
          this.licenseSelectMassage = str
        }
        if (this.licenseSelectShow === true) {
          this.licenseSelectShow = false
        } else {
          this.licenseSelectShow = true
          this.typeSelectShow = false
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
          this.typeSelectShow = false
        }
      },
      getVerification: function () {}
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
<style lang="less">
  @import "./../../../style/base";
  .queryByCar-outer {
    font-size: 28px;
    color: #000;
    position: relative;
    background-color: white;
    .width-120 {
      width: 120px !important;
    }
    .width-70 {
      width: 70% !important;
    }
    .width-40{
      width: 40% !important;
    }
    .queryByCar-from {
      background-color: #fff;
      #queryByCar-hbs {
        padding-bottom: 20px;
        .queryByCar-hbs-list {
          .queryByCar-hbs-item {
            margin-top: 24px;
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .queryByCar-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .queryByCar-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .queryByCar-hbs-code {
              text-indent: 28px;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .btn-light-green {
    margin-top: 20px;
    border:1px solid #09bb07;
    color: #09bb07;
    background-color: #fbfafc;
    display: block;
    width: 100%;
    height: 2.5rem;
    border-radius: 0.3125rem;
    font-size: 1rem;
    outline: none;
  }
</style>
