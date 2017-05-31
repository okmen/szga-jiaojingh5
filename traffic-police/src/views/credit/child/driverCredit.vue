<template>
  <div class="driverCredit">
    <Popup v-model="popupMsg" popup-transition="popup-fade">{{codeMsg}}</Popup>
    <div class="ip-inform-item" v-for="(item, index) in list">
      <div class="ip-inform-title">{{item.name}}</div>
      <div class="ip-inform-content">
        <input type="text" class="ip-inform-only" readonly :value="item.value" style="background: #efeff4">
      </div>
    </div>
    <div class="submit" @click="submit">
      提 &nbsp交
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { Popup } from 'mint-ui'
  import { addSafeAccidentCredit, submitApplicationForDriverInformation, addNoneCarCertification } from '../../../config/baseUrl'
  export default {
    data () {
      return {
        userName: '',
        IDcard: '',
        phoneNumber: '',
        codeMsg: '',
        popupMsg: false
      }
    },
    components: {
      Popup
    },
    beforeRouteEnter (to, from, next) {
      next(vm => vm.$store.commit('getUserInfo', to))
    },
    computed: {
      list () {
        let userInfo = this.$store.state.userInfo
        return [
          {name: '申请类型', value: userInfo.applicationType},
          {name: '姓名', value: userInfo.userName},
          {name: '身份证号', value: userInfo.IDcard},
          {name: '联系电话', value: userInfo.phoneNumber}
        ]
      }
    },
    watch: {
      popupMsg (val) {
        if (val === false) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      submit () {
        let userInfo = this.$store.state.userInfo
        let applyType, url
        if (userInfo.applicationType === '驾驶人安全事故信用表') {
          applyType = '4'
          url = addSafeAccidentCredit
        } else if (userInfo.applicationType === '驾驶人信用单') {
          applyType = '1'
          url = submitApplicationForDriverInformation
        } else if (userInfo.applicationType === '无车证明') {
          applyType = '3'
          url = addNoneCarCertification
        }
        let obj = {
          applyName: userInfo.userName,
          identityCard: userInfo.IDcard,
          applyPhone: userInfo.phoneNumber,
          applyType: applyType
        }
        resultPost(url, obj).then(
            json => {
              console.log(json)
              if (json.code === '0000') {
                let appoinSuccess = this.$store.state.appoinSuccess
                appoinSuccess.appoinType = userInfo.applicationType
                appoinSuccess.appoinNum = json.msg.replace(/[^0-9]/ig, '')
                this.$router.push('/appointSuccess')
              } else if (json.code === '0001') {
                this.codeMsg = json.msg
                this.popupMsg = true
              }
            }
        )
      }
    }
  }
</script>
<style lang="less" scoped>
  .submit{
    margin: 68px 50px 0px;
    height: 80px;
    width: 650px;
    background: rgb(38,150,221);
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 30px;
    border-radius: 10px;
  }
  .driverCredit{
    background: white;
    height: 100%;
    padding-top: 30px;
  }
  input {
    color:gray;
  }
  .ip-inform-title {
    font-size: 30px;
    width: 120px;
  }
  .ip-inform-content {
    width: 504px;
    display: flex;
    justify-content: space-between;
  }
  .ip-inform-item{
    height: 96px;
    display: flex;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: space-between;
    align-items: center;
  }
  .ip-inform-only {
    width: 504px;
    height: 60px;
    border-radius: 8px;
    padding: 0 22px;
  }
</style>
