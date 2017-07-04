<template>
  <div class="applyInterimCard-outer">
    <div class="applyInterimCard-form">
      <ul>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>姓名</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" placeholder="请输入姓名抓取">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>身份证号码</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" placeholder="请输入身份证号码抓取">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>手机号码</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" placeholder="请输入手机号码抓取">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车辆型号</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" placeholder="请输入车辆型号">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
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
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>发动机号</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入发动机号">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车架号</span>
            </div>
            <div class="form-line-item">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入车架号后四位">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车辆产地</span>
            </div>
            <div class="form-line-item width-40">
              <input type="radio"  name="address" value="1" v-model:checked="product">
              <label>国产车</label>
            </div>
            <div class="form-line-item width-40">
              <input type="radio"  name="address" value="0" v-model:checked="product">
              <label>进口车</label>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>户籍所在地</span>
            </div>
            <div class="form-line-item">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>收件人姓名</span>
            </div>
            <div class="form-line-item">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>收件人号码</span>
            </div>
            <div class="form-line-item">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="tel" maxlength="4" name="" value="" placeholder="">
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>邮寄地址</span>
            </div>
            <div class="form-line-item width-40 city">
              深圳市
            </div>
            <div class="div-select form-line-item width-50">
              <span class="btn-select" @click.stop="areaSelectClick()">{{ areaSelectMassage }}</span>
              <div class="div-select-ul" v-if="areaSelectShow">
                <ul>
                  <li v-for="item in areaSelectData" @click.stop="areaSelectClick(item.str, item.id)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span></span>
            </div>
            <div class="form-line-item">
              <input v-model="vehicleIdentifyNoLast4" class="text-input" type="text" maxlength="4" name="" value="" placeholder="请输入详细地址">
            </div>
          </li>
        </ul>
      <userUpload :idCard1="true" :idCard2="true" :outTable="outTable" @btnSureStar="btnSureStar()" ref="getImgUrl"></userUpload>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'applyInterimCard',
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
        licenseSelectMassage: '大型汽车', // 默认车牌类型
        licenseSelectData: [
          {
            'id': '01',
            'str': '大型汽车'
          },
          {
            'id': '02',
            'str': '小型汽车'
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
            'str': '外籍汽车'
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
        ],             // 车牌类型列表（编号转换）
        areaSelectShow: false,
        areaSelectMassage: '福田区',
        areaSelectData: [
          {
            'id': '01',
            'str': '福田区'
          },
          {
            'id': '02',
            'str': '罗湖区'
          },
          {
            'id': '03',
            'str': '南山区'
          },
          {
            'id': '04',
            'str': '宝安区'
          },
          {
            'id': '05',
            'str': '龙岗区'
          },
          {
            'id': '06',
            'str': '盐田区'
          },
          {
            'id': '07',
            'str': '龙华新区'
          },
          {
            'id': '08',
            'str': '光明新区'
          },
          {
            'id': '09',
            'str': '坪山新区'
          },
          {
            'id': '10',
            'str': '大鹏新区'
          }
        ]
      }
    },
    components: {
      'userUpload': require('../../userUpload.vue')
    },
    methods: {
      areaSelectClick: function (str, id) {               // 区域下拉框选择
        if (str) {
          this.areaSelectMassage = str
          this.cur_area_id = id
        }
        if (this.areaSelectShow === true) {
          this.areaSelectShow = false
        } else {
          this.areaSelectShow = true
        }
      },
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
        this.areaSelectShow = false
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .applyInterimCard-outer {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 40px;
    .applyInterimCard-form {
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
          span {
            vertical-align: middle;
          }
          &.city {
            margin: 0 18px;
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
  }

</style>
