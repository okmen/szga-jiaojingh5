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
      card: [],
      car: []
    }
  },
  mounted: function () {
    console.log(this.$route.query)
    if (JSON.stringify(this.$route.query) !== '{}') {
      console.log('1111111')
      if (this.$route.query.type === 'card') {
        this.card = JSON.parse(window.sessionStorage.card)
        this.userAgreementCon = this.card[this.$route.query.index].description
        this.getNoticeTitle = this.card[this.$route.query.index].name
      } else {
        this.car = JSON.parse(window.sessionStorage.car)
        this.userAgreementCon = this.car[this.$route.query.index].description
        this.getNoticeTitle = this.car[this.$route.query.index].name
      }
    }
  },
  methods: {
    btnAgreeRequest: function () {
      if (this.checked === true) {
        console.log(this.entryHash)
        switch (this.entryHash) {
          case 'wfsspjbzy':  // 随手拍举报范围说明
            this.$router.push('/takePicturesInform')
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
