<template>
  <div class="register-class">
    <div-select :childInfo="businessType" @getSelected="getBusinessType" :defaultVal="defaultVal"></div-select>
    <div class="exchange-license-line"></div>
    <router-view :initData="initData"></router-view>
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
  import {getBusinessTypeId, getOrgsByBusinessTypeId} from 'config/baseUrl.js'
  export default {
    data () {
      return {
        defaultVal: '',
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
              'str': '机动车变更登记(普通变更)',
              'id': 'changeRegister'
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
        initData: {},
        businessTypeToCode: {
          'transferRegistration': 'JD15',
          'intoRegister': 'JD19',
          'enteringRegister': 'JD17',
          'cancellationRegister': 'JD18',
          'changeRegister': 'JD24',
          'fakeLicensedEvidence': 'JD36',
          'manWifeChange': 'JD35',
          'replaceLicense': 'JD01'
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
      })
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      getBusinessTypeId (val) {
        let requestData = {
          type: '1',
          part: '1',
          code: this.businessTypeToCode[val]
        }
        resultPost(getBusinessTypeId, requestData).then(data => {
          this.initData.businessTypeId = data.data
          resultPost(getOrgsByBusinessTypeId, {businessTypeId: data.data}).then(json => {
            json.data.map(item => {
              this.initData.appointmentLocation.option.push({'str': item.name, 'id': item.id})
            })
          })
        })
      },
      getBusinessType (val) {
        this.$router.push(val)
//        this.getBusinessTypeId(val)
      }
    }
  }
</script>
