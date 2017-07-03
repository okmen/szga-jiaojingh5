<template>
  <div class="applyEveryMonth-outer">
    <div class="queryByCar-from">
      <div id="queryByCar-hbs">
        <ul class="queryByCar-hbs-list">
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>姓名</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="抓取">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>身份证号码</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="抓取">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>手机号码</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="抓取">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>车辆型号</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>车辆类型</span>
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
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>发动机号</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入发动机号">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>车架号</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入车架号">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>车辆产地</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>户籍所在地</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>收件人姓名</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>收件人号码</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="tel" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="queryByCar-hbs-item">
            <div class="queryByCar-hbs-name">
              <span>邮寄地址</span>
            </div>
            <div class="queryByCar-hbs-text">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入详细地址">
            </div>
          </li>
        </ul>
      </div>
      <button class="btn" type="button" name="button" @click.stop="queryLawlessByCar()">提交</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'queryByCar',
    data () {
      return {
        licensePlateNo: '',                   // 请求-车牌号
        cur_license_id: '01',                    // 请求-车牌类型（编号转换）
        cur_plate_id: '02',
        car_number: '',                       // 请求-除去省字的车牌号
        vehicleIdentifyNoLast4: '',           // 请求-车架号后4位
        mobilephone: '',                      // 请求-手机号码
        illegalData: [],                      // 返回-全部数据存入数组
        myIllegalData: [],                    // 返回-查询我的违章
        licenseSelectShow: false,             // 车牌列表显示与否
        licenseSelectMassage: '大型汽车(黄牌)', // 默认车牌类型
        licenseSelectData: [
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
        ],             // 车牌类型列表（编号转换）
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
        ],         // 省字列表
        plateSelectShow: false,             // 车牌列表显示与否// 验证码验证
        plateSelectMassage: '蓝牌',         // 默认车牌类型
        plateSelectData: [
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
          this.typeSelectShow = false
          this.abbreviationSelectShow = false
        }
      },
      plateSelectClick: function (str, id) {
        if (str) {
          this.plateSelectMassage = str
          this.cur_plate_id = id
        }
        if (this.plateSelectShow === true) {
          this.plateSelectShow = false
        } else {
          this.plateSelectShow = true
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
<style lang="less" scoped>
  .applyEveryMonth-outer {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 20px 40px;
    .width-25 {
      width: 25% !important;
    }
    .width-70 {
      width: 70% !important;
    }
    .width-40 {
      width: 40% !important;
    }
    .queryByCar-from {
      background-color: #fff;
      #queryByCar-hbs {
        padding-bottom: 20px;
        .queryByCar-hbs-list {
          .queryByCar-hbs-item {
            height: 80px;
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
    .btn {
      margin: 0;
    }
    .hint {
      h4{
        color:#e64340;
      }
      p {
        color:#666;
      }
    }
  }
</style>
