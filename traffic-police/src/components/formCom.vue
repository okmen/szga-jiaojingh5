<template>
      <div class="formCom-from pad-side-50">
        <div id="formCom-hbs">
          <ul class="formCom-hbs-list">
            <li class="formCom-hbs-item" v-if="rendererSwitch.carType">
              <div class="formCom-hbs-name">
                <span>车辆类型</span>
              </div>
              <div class="div-select">
                <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
                <div class="div-select-ul" v-if="licenseSelectShow">
                  <ul>
                    <li v-for=" item in selectData.carType " @click.stop = "licenseSelectClick(item.str)">{{item.str}}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="carVariety">
              <div class="formCom-hbs-name">
                <span>汽车种类</span>
              </div>
              <div class="div-select">
                <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
                <div class="div-select-ul" v-if="licenseSelectShow">
                  <ul>
                    <li v-for=" item in selectData.carVariety " @click.stop = "licenseSelectClick(item.str)">{{item.str}}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="billType">
              <div class="formCom-hbs-name">
                <span>业务类型</span>
              </div>
              <div class="div-select">
                <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
                <div class="div-select-ul" v-if="licenseSelectShow">
                  <ul>
                    <li v-for=" item in selectData.billType " @click.stop = "licenseSelectClick(item.str)">{{item.str}}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item clear" v-if="carNumber">
              <div class="formCom-hbs-name">
                <span>车牌号码</span>
              </div>
              <div class="div-select width-120 left">
                <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
                <div class="div-select-ul" v-if="abbreviationSelectShow">
                  <ul>
                    <li v-for="item in selectData.carNumber " @click.stop = "abbreviationSelectClick(item.str)">{{item.str}}</li>
                  </ul>
                </div>
              </div>
              <div class="formCom-hbs-text width-70 right">
                <input class="text-input" type="text" name="" value="B">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="carName">
              <div class="formCom-hbs-name">
                <span>车主姓名</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="车主姓名">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="discoverName">
              <div class="formCom-hbs-name">
                <span>发现人姓名</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="发现人姓名">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="carId">
              <div class="formCom-hbs-name">
                <span>车主身份证</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="车主是外籍人士,请在证件号前加F">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="userId">
              <div class="formCom-hbs-name">
                <span>使用人身份证</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="如果您是外籍人士,请在证件号前加F">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="ifDriving">
              <div class="formCom-hbs-name">
                <span>是否有驾驶证</span>
              </div>
              <div class="formCom-hbs-radio">
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="ifDriving1" checked="checked" name="drivingLicence" value="有">
                  <label name="ifDriving1" class="checked" for="ifDriving1">有</label>
                </div>
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="ifDriving0" name="drivingLicence" value="无">
                  <label name="ifDriving0" class="checked" for="ifDriving0">无</label>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="urgencyLevel">
              <div class="formCom-hbs-name">
                <span>紧急程度</span>
              </div>
              <div class="formCom-hbs-radio">
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="urgencyLevel1" checked="checked" name="drivingLicence" value="紧急">
                  <label name="urgencyLevel1" class="checked" for="urgencyLevel1">紧急</label>
                </div>
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="urgencyLevel2" name="drivingLicence" value="普通">
                  <label name="urgencyLevel2" class="checked" for="urgencyLevel2">普通</label>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="drivingSend">
              <div class="formCom-hbs-name">
                <span>驾驶证核发地</span>
              </div>
              <div class="formCom-hbs-radio">
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="formComRadio1" checked="checked" name="drivingLicence" value="深圳本地">
                  <label name="formComRadio1" class="checked" for="formComRadio1">深圳本地</label>
                </div>
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="formComRadio2" name="drivingLicence" value="本省外市">
                  <label name="formComRadio2" class="checked" for="formComRadio2">本省外市</label>
                </div>
                <div class="formCom-hbs-radio-box">
                  <input type="radio" id="formComRadio3" name="drivingLicence" value="外省">
                  <label name="formComRadio3" class="checked" for="formComRadio3">外省</label>
                </div>
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="billNumber">
              <div class="formCom-hbs-name">
                <span>缴款编号</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入缴款编号">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="drivingId">
              <div class="formCom-hbs-name">
                <span>驾驶证号</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入驾驶证号">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="phone">
              <div class="formCom-hbs-name">
                <span>手机号码</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入您的手机号码">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="discoverPhone">
              <div class="formCom-hbs-name">
                <span>发现人手机</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="tel" name="" value="" placeholder="发现人手机">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="VIN">
              <div class="formCom-hbs-name">
                <span>车架号码</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入车架号">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="oldPassword">
              <div class="formCom-hbs-name">
                <span>旧密码</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="请输入旧密码">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="newPassword">
              <div class="formCom-hbs-name">
                <span>新密码</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="请输入新密码">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="affirmPassword">
              <div class="formCom-hbs-name">
                <span>确认密码</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="请输入确认密码">
              </div>
            </li>
            <li class="formCom-hbs-item clear" v-if="gainCode">
              <div class="formCom-hbs-name">
                <span>验证码</span>
              </div>
              <div class="formCom-hbs-text width-40 left">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
              </div>
              <div class="left formCom-hbs-code" @click="getVerification()">获取验证码</div>
            </li>
            <li class="formCom-hbs-item clear" v-if="picCode">
              <div class="formCom-hbs-name">
                <span>验证码</span>
              </div>
              <div class="formCom-hbs-text width-40 left">
                <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
              </div>
              <div class="left formCom-hbs-code" @click="getVerification()">刷新</div>
            </li>
            <li class="formCom-hbs-item" v-if="contactSite">
              <div class="formCom-hbs-name">
                <span>联系地址</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="您的联系地址(非必填)">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="detailSite">
              <div class="formCom-hbs-name">
                <span>详细地址</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="请输入详细地址">
              </div>
            </li>
            <li class="formCom-hbs-item" v-if="moveCarSite">
              <div class="formCom-hbs-name">
                <span>挪车地址</span>
              </div>
              <div class="formCom-hbs-text">
                <input class="text-input" type="text" name="" value="" placeholder="">
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'formCom',
  data () {
    return {
      clickSwitch: {
        carTypeShow: false,
        carNumberShow: false,
        faultChildTypeShow: false,
        faultTypeShow: false,
        hiddenDangerTypeShow: false,
        hiddenDangerChildTypeShow: false,
        directionShow: false,
        jamTypeShow: false,
        jamRankShow: false,
        serveLevelShow: false,
        disorderBehaviorShow: false,
        carVarietyShow: false,
        billTypeShow: false
      },
      rendererSwitch: {
        carType: true, // 车辆类型
        carNumber: true, // 车牌号码
        carName: true, // 车主姓名
        carId: true, // 车主身份证
        userId: true, // 使用人身份证
        drivingSend: true, // 驾驶证核发地
        phone: true, // 手机号码
        gainCode: true, // 获取短信验证码
        contactSite: true, // 联系地址
        ifDriving: true, // 是否有驾驶证
        drivingId: true, // 驾驶证号
        carVariety: true, // 汽车种类
        moveCarSite: true, // 挪车地址
        billType: true, // 缴费业务类型
        billNumber: true, // 缴款编号
        picCode: true, // 图片验证码
        VIN: true, // 车架号码
        oldPassword: true, // 旧密码
        newPassword: true, // 新密码
        affirmPassword: true, // 确认密码
        detailSite: true,  // 详细地址
        discoverName: true, // 发现人姓名
        discoverPhone: true, // 发现人手机
        urgencyLevel: true, // 紧急程度
        sceneDescribe: true, // 现场描述
        startTime: true, // 开始时间
        endTime: true, // 结束时间
        direction: true, // 方向
        jamType: true, // 拥堵类型
        jamRank: true, // 拥堵等级
        serveLevel: true, // 道路服务水平
        jamCause: true,  // 拥堵成因
        suggest: true, // 改善建议
        illegalTime: true, // 违法时间
        illegalSite: true, // 违法路段
        punishId: true,  // 处罚决定书号
        fileId: true,  // 档案编号
        name: true  // 姓名
      },
      selectData: { // 下拉框数据
        carType: [  // 车牌类型
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
        carNumber: [  // 车牌号
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
        faultType: [  // 设备报障类型
          {
            'str': '交通信号灯'
          }
        ],
        faultChildType: [ // 设备报障子类型
          {
            'str': '手控坏'
          },
          {
            'str': '异常闪烁'
          },
          {
            'str': '一直亮绿灯'
          },
          {
            'str': '一直亮红灯'
          },
          {
            'str': '一直闪黄灯'
          },
          {
            'str': '黄灯不亮'
          },
          {
            'str': '红灯不亮'
          },
          {
            'str': '绿灯不亮'
          },
          {
            'str': '红黄绿一起闪'
          },
          {
            'str': '红绿一起亮'
          },
          {
            'str': '全亮红灯'
          },
          {
            'str': '全亮绿灯'
          },
          {
            'str': '异常黄闪'
          },
          {
            'str': '灭灯'
          },
          {
            'str': '停电'
          },
          {
            'str': '烧灯芯'
          },
          {
            'str': '机动车倒计时故障'
          },
          {
            'str': '行人倒计时故障'
          },
          {
            'str': '信号灯设备脱落'
          },
          {
            'str': '行人灯坏'
          },
          {
            'str': '灯杆倾斜'
          },
          {
            'str': '行人过街按钮故障'
          },
          {
            'str': '信号灯被撞'
          },
          {
            'str': 'Smooth中央系统异常'
          },
          {
            'str': '脱机'
          },
          {
            'str': '下载绿冲突检测错误'
          },
          {
            'str': '下载获取控制数据丢失'
          },
          {
            'str': '通讯故障'
          },
          {
            'str': '控制异常'
          },
          {
            'str': '车检器故障'
          },
          {
            'str': '绿冲突'
          },
          {
            'str': '其他现象'
          }
        ],
        hiddenDangerType: [ // 安全隐患类型
          {
            'str': '设施'
          },
          {
            'str': '路灯照明'
          },
          {
            'str': '绿化遮挡交通标志,或遮挡行车视线'
          },
          {
            'str': '占道施工存在安全隐患'
          },
          {
            'str': '容易发生水浸'
          },
          {
            'str': '居民、人群较为密集,交通秩序混乱'
          }
        ],
        hiddenDangerChildType: [  // 安全隐患子类型
          [
            {
              'str': '没有安装隔离护栏，或隔离护栏设置不完善、不合理'
            },
            {
              'str': '没有交通标志标线，或交通标志标线设置不完善、不合理'
            },
            {
              'str': '没有减速设施'
            },
            {
              'str': '路口渠化不合理'
            },
            {
              'str': '没有行人通过设施'
            },
            {
              'str': '临崖、临水、急弯、陡坡、视距不良的路段没有完全防护设施，或安全防护设施不完善'
            },
            {
              'str': '告诉公路路肩宽度不符合国家标准且未按规定设置港湾式紧急停车带'
            },
            {
              'str': '高速公路中央隔离栏、两侧防护网设置不完善'
            }
          ],
          [
            {
              'str': '没有照明设施、不合理'
            },
            {
              'str': '照明设施不能正常工作，或照明功率太低'
            }
          ],
          [
            {
              'str': '绿化遮挡交通标志，或遮挡行车视线'
            }
          ],
          [
            {
              'str': '占道施工存在安全隐患'
            }
          ],
          [
            {
              'str': '容易发生水浸'
            }
          ],
          [
            {
              'str': '居民、人群较为密集，交通秩序混乱'
            }
          ]
        ],
        direction: [  // 方向
          {
            'str': '东'
          },
          {
            'str': '南'
          },
          {
            'str': '西'
          },
          {
            'str': '北'
          }
        ],
        jamType: [  // 拥堵类型
          {
            'str': '偶发性拥堵'
          },
          {
            'str': '常态性拥堵'
          }
        ],
        jamRank: [  // 拥堵等级
          {
            'str': '缓行'
          },
          {
            'str': '较拥堵'
          },
          {
            'str': '拥堵'
          }
        ],
        serveLevel: [ // 道路服务水平
          {
            'str': '排队起终点'
          },
          {
            'str': '较以往通行延误时间'
          },
          {
            'str': '经过几个信号周期通过'
          }
        ],
        disorderBehavior: [ // 违法行为
          {
            'str': '机动车违法停放'
          },
          {
            'str': '机动车占用应急车道'
          },
          {
            'str': '大货车、泥头车超载'
          },
          {
            'str': '机动车不按规定安装、悬挂号牌'
          },
          {
            'str': '机动车遮挡号牌'
          },
          {
            'str': '机动车污损号牌'
          },
          {
            'str': '机动车压导流线驾驶'
          },
          {
            'str': '机动车路口压线变道'
          },
          {
            'str': '机动车冲红灯'
          },
          {
            'str': '大中型货车驶入禁行区域'
          },
          {
            'str': '小型汽车驶入禁行区域'
          },
          {
            'str': '机动车占用公交车专用道'
          },
          {
            'str': '醉酒驾驶'
          },
          {
            'str': '酒后驾驶'
          },
          {
            'str': '机动车违反禁止标线行驶'
          },
          {
            'str': '电动车、摩托车驶入禁行区域'
          },
          {
            'str': '开超标电动力车'
          },
          {
            'str': '电动车载客'
          },
          {
            'str': '残疾人专用车载客、'
          },
          {
            'str': '酒后驾驶'
          },
          {
            'str': '机动车违反禁止标线行驶'
          }
        ],
        carVariety: [ // 汽车种类
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
        billType: [ // 缴费业务类型
          {
            'str': '机动车业务'
          },
          {
            'str': '驾驶证业务'
          },
          {
            'str': '“9”开头缴费流水业务'
          }
        ]
      }
    }
  },
  methods: {
    typeSelectClick: function (str) {
      if (str) {
        this.typeSelectMassage = str
      }
      if (this.typeSelectShow === true) {
        this.typeSelectShow = false
      } else {
        this.typeSelectShow = true
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
      }
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
