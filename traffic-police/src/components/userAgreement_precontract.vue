<template>
 <div id="takePhotoTipsCom">
    <div class="tp-title">
      {{getNoticeTitle}}
    </div>
   <div class="tp-tips-intro" v-html="userAgreementCon"></div>
   <div class="tp-read">
     <div class="tp-read-checkbox">
       <input type="checkbox" id="informReadCheckbox" name="informReadCheckbox" v-model="checked">
       <label for="informReadCheckbox"></label>
     </div>
     <span class="read-and-agree">
       我已认真阅读以上内容，并愿意承担相关法律责任。
     </span>
   </div>
   <div class="tp-btn-sure" v-if="isShow">
     <button @click="btnAgreeRequest">确认</button>
   </div>
   <div class="tp-btn-sure" v-else>
     <button @click="btnReturn">返回</button>
   </div>
   <div v-wechat-title="$route.meta.title"></div>
 </div>
</template>
<script>
// import { resultPost } from '../service/getData'
// import { userAgreement } from '../config/baseUrl'
import { Toast } from 'mint-ui'
export default {
  name: 'userAgreement',
  data () {
    return {
      userAgreementCon: '',
      getNoticeTitle: '',
      checked: '',
      entryHash: '',
      isShow: true,
      menuJson: {},
      routerQuery: ''
    }
  },
  mounted: function () {
    console.log(this.$route.query)
    if (JSON.stringify(this.$route.query) !== '{}') {
      this.routerQuery = this.$route.query
      if (this.$route.query.type === 'card') {
        this.menuJson = JSON.parse(window.sessionStorage.card)[this.routerQuery.index]
      } else {
        this.menuJson = JSON.parse(window.sessionStorage.car)[this.routerQuery.index]
      }
      this.userAgreementCon = this.menuJson.description
      this.getNoticeTitle = this.menuJson.name
    }
  },
  methods: {
    btnAgreeRequest: function () {
      if (this.checked === true) {
        switch (this.menuJson.code) {
          case 'JD06':  // 换领机动车登记证书
            this.$router.push({name: 'renewingCollarCredential', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD02':  // 补领机动车号牌
            this.$router.push({name: 'replacementNumber', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD01':  // 补换机动车行驶证
            this.$router.push({name: 'renewingDrivingLicense', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD30':  // 换领机动车登记证书
            this.$router.push({name: 'renewingQualification', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD13':  // 换领机动车登记证书
            this.$router.push({name: 'renewingCertificate', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ11':  // 换领机动车登记证书
            this.$router.push({name: 'armyLicence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ16':  // 换领机动车登记证书
            console.log('222222222222')
            // this.$router.push('/appClass/temporaryLicence')
            this.$router.push({name: 'temporaryLicence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ17':  // 换领机动车登记证书
            this.$router.push({name: 'overseasLicence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ13':  // 换领机动车登记证书
            this.$router.push({name: 'HkLicence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD15':  // 换领机动车登记证书
            this.$router.push({name: 'transferRegistration', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD19':  // 换领机动车登记证书
            this.$router.push({name: 'intoRegister', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD17':  // 换领机动车登记证书
            this.$router.push({name: 'enteringRegister', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD18':  // 换领机动车登记证书
            this.$router.push({name: 'cancellationRegister', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD36':  // 换领机动车登记证书
            this.$router.push({name: 'fakeLicensedEvidence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD35':  // 换领机动车登记证书
            this.$router.push({name: 'manWifeChange', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          // case 'JD01':  // 换领机动车登记证书
          //   this.$router.push({name: '/registerClass/replaceLicense', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
          //   break
          case 'JD24':  // 换领机动车登记证书
            this.$router.push({name: 'generalChangeRegister', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD28':  // 机动车打刻原车发动机号变更备案
            this.$router.push({name: 'numberAlter', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD29':  // 机动车打刻原车辆识别代号变更备案
            this.$router.push({name: 'markAlter', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'JD33':  // 档案更正
            this.$router.push({name: 'fileAlter', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ22':  // 逾期一年以上未体检类
            this.$router.push({name: 'noPhysicalCheck', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ21':  // 逾期一年以上未体检类
            this.$router.push({name: 'noChangeLicence', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ10':  // 满分学习
            this.$router.push({name: 'fullmarkStudy', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
          case 'ZJ20':  // 其他业务
            this.$router.push({name: 'otherBusiness', query: { code: this.menuJson.code, id: this.menuJson.id, name: this.menuJson.name }})
            break
        }
      } else {
        Toast({
          message: '请勾选已阅读温馨提示',
          position: 'bottom',
          duration: 1500
        })
      }
    },
    btnReturn: function () {
      if (this.checked === true) {
        this.$router.go(-1)
      } else {
        Toast({
          message: '请勾选已阅读温馨提示',
          position: 'bottom',
          duration: 1500
        })
      }
    }
  }
}
</script>
<style lang="less">
  @import '../style/userAgreement';
</style>
