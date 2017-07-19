<template>
    <div class="form-template">
      <div-select :childInfo="businessType" @getSelected="getBusinessType" :defaultVal="defaultVal"></div-select>
      <div class="exchange-license-line"></div>
      <router-view></router-view>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
</template>
<style scoped>
  .form-template .exchange-license-line{
    height: 10px;
    background: #eeeeee;
    margin-left: 0;
    margin-right: 0;
  }
</style>
<script>
  import {resultPost} from 'service/getData'
  import {getBusinessTypeId, getCarModelArray} from 'config/baseUrl.js'
  export default {
    data () {
      return {
        defaultVal: '',
        businessType: {
          title: '业务类型',
          option: [
            {
              'str': '核发临牌',
              'id': 'verifyIssueCard'
            },
            {
              'str': '核发校车标牌',
              'id': 'verifyIssueSchoolCard'
            }
          ]
        },
        businessTypeId: '',
        businessTypeToCode: {
          'verifyIssueCard': 'JD34',
          'verifyIssueSchoolCard': 'JD27'
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
        // 获取车辆型号数组
        resultPost(getCarModelArray, {}).then(data => {
          this.modelOfCar.option = data.data
        })
      })
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      // 获取业务类型ID
      getBusinessTypeId (val) {
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
      // 业务类型选择
      getBusinessType (val) {
        this.$router.push(val)
        this.businessTypeId = ''
        if (this.defaultVal) {
          this.getBusinessTypeId(val)
        }
      }
    }
  }
</script>
