<template>
  <div class="register-class">
    <div-select :childInfo="businessType" @getSelected="getBusinessType" :defaultVal="defaultVal"></div-select>
    <div class="exchange-license-line"></div>
    <router-view :businessTypeId="businessTypeId" :modelOfCar="modelOfCar" :achieveCode="achieveCode"></router-view>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<style lang="less" scoped>
  .register-class > div {
    margin: 0 40px 30px;
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
  import { MessageBox } from 'mint-ui'
  import {
    getBusinessTypeId,
    getCarModelArray
  } from 'config/baseUrl.js'
  export default {
    data () {
      return {
        modelOfCar: {
          title: '车辆型号',
          option: []
        }, // 车辆型号
        defaultVal: '',
        achieveCode: '',
        businessType: {
          title: '业务类型',
          option: [
            {
              'str': '转移登记(市内过户)',
              'id': 'transferRegistration'
            },
            {
              'str': '机动车转移登记(转入)',
              'id': 'intoRegister'
            },
            {
              'str': '机动车注册登记',
              'id': 'enteringRegister'
            },
            {
              'str': '机动车注销登记',
              'id': 'cancellationRegister'
            },
            {
              'str': '机动车变更登记',
              'id': 'changeRegister'
            },
            {
              'str': '机动车变更登记(普通变更)',
              'id': 'generalChangeRegister'
            },
            {
              'str': '机动车变更登记(套牌车换证)',
              'id': 'fakeLicensedEvidence'
            },
            {
              'str': '机动车变更登记(夫妻变更)',
              'id': 'manWifeChange'
            },
            {
              'str': '补换领机动车行驶证',
              'id': 'replaceLicense'
            }
          ]
        },
        businessTypeId: '',
        businessTypeStr: '',
        businessTypeToCode: {
          'transferRegistration': 'JD15',
          'intoRegister': 'JD19',
          'enteringRegister': 'JD17',
          'cancellationRegister': 'JD18',
          'changeRegister': 'JD47',
          'fakeLicensedEvidence': 'JD36',
          'manWifeChange': 'JD35',
          'replaceLicense': 'JD01',
          'generalChangeRegister': 'JD24'
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.businessType.option.map(item => {
          if (item.id === to.name) {
            vm.defaultVal = item
          }
        })
        resultPost(getCarModelArray, {}).then(data => {
          this.modelOfCar.option = data.data
        })
      })
    },
    computed: {
      responseData () {
        return this.$store.getters.getResponseData
      }
    },
    watch: {
      responseData (val) {
        console.log(val, '返回的预约信息')
        if (val.code === '0000') {
          let dataInfo = {
            type: 1,
            textObj: {
              businessType: this.businessTypeStr,
              subscribeNo: '流水号码'
            }
          }
          this.$store.commit('saveSuccessInfo', dataInfo)
          this.$router.push('/submitSuccess')
        } else {
          MessageBox('提示', '')
        }
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      getBusinessTypeId (val) {
        this.achieveCode = this.businessTypeToCode[val]
        let requestData = {
          type: '1',
          part: '1',
          code: this.businessTypeToCode[val]
        }
        resultPost(getBusinessTypeId, requestData).then(data => {
          this.businessTypeId = data.data
          console.log(data, '业务类型编码获取成功')
        })
      },
      getBusinessType (val) {
        this.businessType.option.map(item => {
          if (item.id === val) {
            this.businessTypeStr = item.str
          }
        })
        this.$router.push(val)
        this.businessTypeId = ''
        if (this.defaultVal) {
          this.getBusinessTypeId(val)
        }
      }
    }
  }
</script>
