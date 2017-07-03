<template>
  <div class="freeByCar-outer">
    <div class="freeByCar-from pad-side-50">
      <div id="freeByCar-hbs">
        <ul class="freeByCar-hbs-list">
          <li class="freeByCar-hbs-item">
            <div class="freeByCar-hbs-name">
              <span>车牌号码</span>
            </div>
            <div class="freeByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入车牌号码" >
            </div>
          </li>
          <li class="freeByCar-hbs-item">
            <div class="freeByCar-hbs-name">
              <span>汽车种类</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
              <div class="div-select-ul" v-if="licenseSelectShow">
                <ul>
                  <li v-for="item in licenseSelectData" @click.stop="licenseSelectClick(item.str, item.id)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="freeByCar-hbs-item clear">
            <div class="freeByCar-hbs-name">
              <span>验证码</span>
            </div>
            <div class="freeByCar-hbs-text width-40 left">
              <input class="text-input" type="text" name="" maxlength="4" value="" placeholder="请输入验证码" id="inp">
            </div>
            <div class="left freeByCar-hbs-code" id="code"></div>
          </li>
        </ul>
      </div>
      <button class="btn btn-blue" type="button" name="button">查询</button>
    </div>
  </div>
</template>
<script>
  import { verifyCode } from '../../../../../config/verifyCode'
  export default {
    name: 'freeByCar',
    data () {
      return {
        cur_type_id: '02',                    // 请求-车牌类型（编号转换）
        vehicleIdentifyNoLast4: '',           // 请求-车架号后4位
        verifyCode: false,
        licenseSelectShow: false,             // 车牌列表显示与否// 验证码验证
        licenseSelectMassage: '蓝牌',         // 默认车牌类型
        licenseSelectData: [
          {
            'id': '02',
            'str': '蓝牌'
          },
          {
            'id': '01',
            'str': '黄牌'
          },
          {
            'id': '06',
            'str': '黑牌'
          }
        ]             // 车牌类型列表（编号转换）
      }
    },
    mounted () {
      verifyCode(document.getElementById('inp'), document.getElementById('code'), (result, code) => {
        this.verifyCode = result
      })
    },
    methods: {
      licenseSelectClick: function (str, id) {
        if (str) {
          this.licenseSelectMassage = str
          this.cur_type_id = id
        }
        if (this.licenseSelectShow === true) {
          this.licenseSelectShow = false
        } else {
          this.licenseSelectShow = true
          this.abbreviationSelectShow = false
        }
      },
      abbreviationSelectClick: function (str) {
        if (str) {
          this.abbreviationSelectMassage = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        }
      }
    }
  }
</script>
<style lang="less">
  @import "./../../../../../style/base";
  .freeByCar-outer {
    font-size: 28px;
    color: #000;
    position: relative;
    background-color: white;
    .width-40 {
      width: 40% !important;
    }
    .freeByCar-from {
      background-color: #fff;
      #freeByCar-hbs {
        padding-bottom: 20px;
        .freeByCar-hbs-list {
          .freeByCar-hbs-item {
            margin-top: 24px;
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            height: 62px;
            .freeByCar-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .freeByCar-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .freeByCar-hbs-code {
              margin-left: 40px;
              text-indent: 28px;
              width: 240px;
              height: 56px;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
