<template>
  <div class="register-class">
    <div class="form-template-item">
    <span class="form-template-item-left">业务类型</span>
    <div class="form-template-item-type">{{currentBusinessType}}</div>
  </div>
    <div class="exchange-license-line"></div>
    <router-view :businessTypeId="businessTypeId" :modelOfCar="modelOfCar" :achieveCode="achieveCode"></router-view>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<style lang="less" scoped>
  .register-class > div {
    margin: 0 40px 30px;
  }

  .form-template-item-type {
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    outline: none;
    height: 70px;
    font-size: 30px;
    padding-left: 15px;
    line-height: 70px;
    width: 68%;
  }

  .register-class {
    height: auto;
    background: white;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .register-class .exchange-license-line {
    height: 10px;
    background: #eeeeee;
    margin-left: 0;
    margin-right: 0;
  }
</style>
<script>
  import {resultPost} from 'service/getData'
  //  import { MessageBox } from 'mint-ui'
  import {getBusinessTypeId, getPageInit} from 'config/baseUrl.js'
  export default {
    data () {
      return {
        /* eslint-disable */
        modelOfCar: {
          title: '车辆型号',
          option: [{
            "id": "K31",
            "str": "小型普通客车"
          },
            {
              "id": "K32",
              "str": "小型越野客车"
            },
            {
              "id": "K33",
              "str": "小型轿车"
            },
            {
              "id": "K34",
              "str": "小型专用客车"
            },
            {
              "id": "K41",
              "str": "微型普通客车"
            },
            {
              "id": "K42",
              "str": "微型越野客车"
            },
            {
              "id": "K43",
              "str": "微型轿车"
            },
            {
              "id": "M11",
              "str": "普通正三轮摩托车"
            },
            {
              "id": "M12",
              "str": "轻便正三轮摩托车"
            },
            {
              "id": "M13",
              "str": "正三轮载客摩托车"
            },
            {
              "id": "M14",
              "str": "正三轮载货摩托车"
            },
            {
              "id": "M15",
              "str": "侧三轮摩托车"
            },
            {
              "id": "M21",
              "str": "普通二轮摩托车"
            },
            {
              "id": "M22",
              "str": "轻便二轮摩托车"
            },
            {
              "id": "N11",
              "str": "三轮汽车"
            },
            {
              "id": "K11",
              "str": "大型普通客车"
            },
            {
              "id": "K12",
              "str": "大型双层客车"
            },
            {
              "id": "K13",
              "str": "大型卧铺客车"
            },
            {
              "id": "K14",
              "str": "大型铰接客车"
            },
            {
              "id": "K15",
              "str": "大型越野客车"
            },
            {
              "id": "K16",
              "str": "大型轿车"
            },
            {
              "id": "K17",
              "str": "大型专用客车"
            },
            {
              "id": "K21",
              "str": "中型普通客车"
            },
            {
              "id": "K22",
              "str": "中型双层客车"
            },
            {
              "id": "K23",
              "str": "中型卧铺客车"
            },
            {
              "id": "K24",
              "str": "中型铰接客车"
            },
            {
              "id": "K25",
              "str": "中型越野客车"
            },
            {
              "id": "K26",
              "str": "中型轿车"
            },
            {
              "id": "K27",
              "str": "中型专用客车"
            },
            {
              "id": "B11",
              "str": "重型普通半挂车"
            },
            {
              "id": "B12",
              "str": "重型厢式半挂车"
            },
            {
              "id": "B13",
              "str": "重型罐式半挂车"
            },
            {
              "id": "B14",
              "str": "重型平板半挂车"
            },
            {
              "id": "B15",
              "str": "重型集装箱半挂车"
            },
            {
              "id": "B16",
              "str": "重型自卸半挂车"
            },
            {
              "id": "B17",
              "str": "重型特殊结构半挂车"
            },
            {
              "id": "B18",
              "str": "重型仓栅式半挂车"
            },
            {
              "id": "B19",
              "str": "重型旅居半挂车"
            },
            {
              "id": "B1A",
              "str": "重型专项作业半挂车"
            },
            {
              "id": "B1B",
              "str": "重型低平板半挂车"
            },
            {
              "id": "B21",
              "str": "中型普通半挂车"
            },
            {
              "id": "B22",
              "str": "中型厢式半挂车"
            },
            {
              "id": "B23",
              "str": "中型罐式半挂车"
            },
            {
              "id": "B24",
              "str": "中型平板半挂车"
            },
            {
              "id": "B25",
              "str": "中型集装箱半挂车"
            },
            {
              "id": "B26",
              "str": "中型自卸半挂车"
            },
            {
              "id": "B27",
              "str": "中型特殊结构半挂车"
            },
            {
              "id": "B28",
              "str": "中型仓栅式半挂车"
            },
            {
              "id": "B29",
              "str": "中型旅居半挂车"
            },
            {
              "id": "B2A",
              "str": "中型专项作业半挂车"
            },
            {
              "id": "B2B",
              "str": "中型低平板半挂车"
            },
            {
              "id": "B31",
              "str": "轻型普通半挂车"
            },
            {
              "id": "B32",
              "str": "轻型厢式半挂车"
            },
            {
              "id": "B33",
              "str": "轻型罐式半挂车"
            },
            {
              "id": "B34",
              "str": "轻型平板半挂车"
            },
            {
              "id": "B35",
              "str": "轻型自卸半挂车"
            },
            {
              "id": "B36",
              "str": "轻型仓栅式半挂车"
            },
            {
              "id": "B37",
              "str": "轻型旅居半挂车"
            },
            {
              "id": "B38",
              "str": "轻型专项作业半挂车"
            },
            {
              "id": "B39",
              "str": "轻型低平板半挂车"
            },
            {
              "id": "D11",
              "str": "无轨电车"
            },
            {
              "id": "D12",
              "str": "有轨电车"
            },
            {
              "id": "G11",
              "str": "重型普通全挂车"
            },
            {
              "id": "G12",
              "str": "重型厢式全挂车"
            },
            {
              "id": "G13",
              "str": "重型罐式全挂车"
            },
            {
              "id": "G14",
              "str": "重型平板全挂车"
            },
            {
              "id": "G15",
              "str": "重型集装箱全挂车"
            },
            {
              "id": "G16",
              "str": "重型自卸全挂车"
            },
            {
              "id": "G17",
              "str": "重型仓栅式全挂车"
            },
            {
              "id": "G18",
              "str": "重型旅居全挂车"
            },
            {
              "id": "G19",
              "str": "重型专项作业全挂车"
            },
            {
              "id": "G21",
              "str": "中型普通全挂车"
            },
            {
              "id": "G22",
              "str": "中型厢式全挂车"
            },
            {
              "id": "G23",
              "str": "中型罐式全挂车"
            },
            {
              "id": "G24",
              "str": "中型平板全挂车"
            },
            {
              "id": "G25",
              "str": "中型集装箱全挂车"
            },
            {
              "id": "G26",
              "str": "中型自卸全挂车"
            },
            {
              "id": "G27",
              "str": "中型仓栅式全挂车"
            },
            {
              "id": "G28",
              "str": "中型旅居全挂车"
            },
            {
              "id": "G29",
              "str": "中型专项作业全挂车"
            },
            {
              "id": "G31",
              "str": "轻型普通全挂车"
            },
            {
              "id": "G32",
              "str": "轻型厢式全挂车"
            },
            {
              "id": "G33",
              "str": "轻型罐式全挂车"
            },
            {
              "id": "G34",
              "str": "轻型平板全挂车"
            },
            {
              "id": "G35",
              "str": "轻型自卸全挂车"
            },
            {
              "id": "G36",
              "str": "轻型仓栅式全挂车"
            },
            {
              "id": "G37",
              "str": "轻型旅居全挂车"
            },
            {
              "id": "G38",
              "str": "轻型专项作业全挂车"
            },
            {
              "id": "H11",
              "str": "重型普通货车"
            },
            {
              "id": "H12",
              "str": "重型厢式货车"
            },
            {
              "id": "H13",
              "str": "重型封闭货车"
            },
            {
              "id": "H14",
              "str": "重型罐式货车"
            },
            {
              "id": "H15",
              "str": "重型平板货车"
            },
            {
              "id": "H16",
              "str": "重型集装厢车"
            },
            {
              "id": "H17",
              "str": "重型自卸货车"
            },
            {
              "id": "H18",
              "str": "重型特殊结构货车"
            },
            {
              "id": "H19",
              "str": "重型仓栅式货车"
            },
            {
              "id": "H21",
              "str": "中型普通货车"
            },
            {
              "id": "H22",
              "str": "中型厢式货车"
            },
            {
              "id": "H23",
              "str": "中型封闭货车"
            },
            {
              "id": "H24",
              "str": "中型罐式货车"
            },
            {
              "id": "H25",
              "str": "中型平板货车"
            },
            {
              "id": "H26",
              "str": "中型集装厢车"
            },
            {
              "id": "H27",
              "str": "中型自卸货车"
            },
            {
              "id": "H28",
              "str": "中型特殊结构货车"
            },
            {
              "id": "H29",
              "str": "中型仓栅式货车"
            },
            {
              "id": "H31",
              "str": "轻型普货车"
            },
            {
              "id": "H32",
              "str": "轻型厢式货车"
            },
            {
              "id": "H33",
              "str": "轻型封闭货车"
            },
            {
              "id": "H34",
              "str": "轻型罐式货车"
            },
            {
              "id": "H35",
              "str": "轻型平板货车"
            },
            {
              "id": "H37",
              "str": "轻型自卸货车"
            },
            {
              "id": "H38",
              "str": "轻型特殊结构货车"
            },
            {
              "id": "H39",
              "str": "轻仓栅式货车"
            },
            {
              "id": "H41",
              "str": "微型普通货车"
            },
            {
              "id": "H42",
              "str": "微型厢式货车"
            },
            {
              "id": "H43",
              "str": "微型封闭货车"
            },
            {
              "id": "H44",
              "str": "微型罐式货车"
            },
            {
              "id": "H45",
              "str": "微型自卸货车"
            },
            {
              "id": "H46",
              "str": "微型特殊结构货车"
            },
            {
              "id": "H47",
              "str": "微型仓栅式货车"
            },
            {
              "id": "H51",
              "str": "普通低速货车"
            },
            {
              "id": "H52",
              "str": "厢式低速货车"
            },
            {
              "id": "H53",
              "str": "罐式低速货车"
            },
            {
              "id": "H54",
              "str": "自卸低速货车"
            },
            {
              "id": "H55",
              "str": "仓栅式低速货车"
            },
            {
              "id": "J11",
              "str": "轮式装载机械"
            },
            {
              "id": "J12",
              "str": "轮式挖掘机械"
            },
            {
              "id": "J13",
              "str": "轮式平地机械"
            },
            {
              "id": "Q11",
              "str": "重型半挂牵引车"
            },
            {
              "id": "Q12",
              "str": "重型全挂牵引车"
            },
            {
              "id": "Q21",
              "str": "中型半挂牵引车"
            },
            {
              "id": "Q22",
              "str": "中型全挂牵引车"
            },
            {
              "id": "Q31",
              "str": "轻型半挂牵引车"
            },
            {
              "id": "Q32",
              "str": "轻型全挂牵引车"
            },
            {
              "id": "T11",
              "str": "大型轮式拖拉机"
            },
            {
              "id": "T21",
              "str": "小型轮式拖拉机"
            },
            {
              "id": "T22",
              "str": "手扶拖拉机"
            },
            {
              "id": "T23",
              "str": "手扶变形运输机"
            },
            {
              "id": "X99",
              "str": "其它"
            },
            {
              "id": "Z11",
              "str": "大型专项作业车"
            },
            {
              "id": "Z21",
              "str": "中型专项作业车"
            },
            {
              "id": "Z31",
              "str": "小型专项作业车"
            },
            {
              "id": "Z41",
              "str": "微型专项作业车"
            },
            {
              "id": "Z51",
              "str": "重型专项作业车"
            },
            {
              "id": "Z71",
              "str": "轻型专项作业车"
            }]
        }, // 车辆型号
        /* eslint-enable */
        achieveCode: '',
        currentBusinessType: '',
        businessType: {
          'transferRegistration': '转移登记(市内过户)',
          'intoRegister': '机动车转移登记(转入)',
          'enteringRegister': '机动车注册登记',
          'cancellationRegister': '机动车注销登记',
//          'changeRegister': '机动车变更登记',
          'generalChangeRegister': '机动车变更登记(普通变更)',
          'fakeLicensedEvidence': '机动车变更登记(套牌车换证)',
          'manWifeChange': '机动车变更登记(夫妻变更)'
//          'replaceLicense': '补换领机动车行驶证'
        },
        businessTypeId: '',
        businessTypeStr: '',
        businessTypeToCode: {
          'transferRegistration': 'JD15',
          'intoRegister': 'JD19',
          'enteringRegister': 'JD17',
          'cancellationRegister': 'JD18',
//          'changeRegister': 'JD47',
          'fakeLicensedEvidence': 'JD36',
          'manWifeChange': 'JD35',
//          'replaceLicense': 'JD01',
          'generalChangeRegister': 'JD24'
        }
      }
    },
    created () {
      this.getBusinessTypeId()
    },
    watch: {
      '$route': 'getBusinessTypeId'
    },
    /*  computed: {
     responseData () {
     return this.$store.getters.getResponseData
     }
     },
     watch: {
     responseData (val) {
     console.log(val, '返回的预约信息')
     if (val.code === '0000') {
     let dataInfo = {
     type: 2,
     textObj: {
     businessType: this.businessTypeStr,
     subscribeNo: val.data
     }
     }
     this.$store.commit('saveSuccessInfo', dataInfo)
     this.$router.push('/submitSuccess')
     } else {
     MessageBox('提示', val.data)
     }
     }
     }, */
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      getBusinessTypeId () {
        this.businessTypeId = ''
        this.currentBusinessType = this.businessType[this.$route.name]
        this.achieveCode = this.businessTypeToCode[this.$route.name]
        let requestData = {
          type: '1',
          part: '1',
          code: this.businessTypeToCode[this.$route.name]
        }
        resultPost(getBusinessTypeId, requestData).then(data => {
          this.businessTypeId = data.data
          console.log(data, '业务类型编码获取成功')
          resultPost(getPageInit, {businessTypeId: this.businessTypeId}).then(json => {
            console.log(json, '页面初始化的数据')
            this.$store.commit('saveModelOfCar', json.data.carModelArray) // 车辆型号
            this.$store.commit('saveCarSelectData', json.data.carTypeVOs) // 车辆类型
          })
        })
      }
    }
  }
</script>
