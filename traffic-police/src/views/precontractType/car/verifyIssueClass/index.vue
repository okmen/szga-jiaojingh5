<template>
    <div class="form-template">
      <div class="form-template-item">
        <span class="form-template-item-left">业务类型</span>
        <div class="form-template-item-right">{{currentBusinessType}}</div>
      </div>
      <div class="exchange-license-line"></div>
      <router-view :businessTypeId="businessTypeId"></router-view>
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
  import {getBusinessTypeId} from 'config/baseUrl.js'
  export default {
    data () {
      return {
        defaultVal: '',
        achieveCode: '',
        currentBusinessType: '',
        businessType: {
          'verifyIssueCard': '核发临牌',
          'verifyIssueSchoolCard': '核发校车标牌'
        },
        businessTypeId: '',
        businessTypeToCode: {
          'verifyIssueCard': 'JD34',
          'verifyIssueSchoolCard': 'JD27'
        }
      }
    },
    created () {
      this.getBusinessTypeId()
    },
    watch: {
      '$route': 'getBusinessTypeId'
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      // 获取业务类型ID
      getBusinessTypeId (val) {
        this.currentBusinessType = this.businessType[this.$router.currentRoute.name]
        this.achieveCode = this.businessTypeToCode[this.$router.currentRoute.name]
        let requestData = {
          type: '1',
          part: '0',
          // code: 'JD34'
          code: this.businessTypeToCode[this.$router.currentRoute.name]
        }
        resultPost(getBusinessTypeId, requestData).then(data => {
          console.log(this.achieveCode)
          this.businessTypeId = data.data
          console.log(data, '业务类型编码获取成功')
        })
      }
    }
  }
</script>
