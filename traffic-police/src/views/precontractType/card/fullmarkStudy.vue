<!-- 
* 满分学习
 -->
<template>
  <div id="fullmarkStudy">
    <div class="alter-select pad-side-50">
      <div class="alter-chose"><span>业务类型</span></div>
      <div class="div-select alter-wd">
        <input class="text-input bg-white" v-model="bussinessName" readonly>
      </div>
    </div>
    <div class="alter-from">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { createDriveInfoZJ10 } from '../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './recoverDrive/child/common.vue'
export default {
  name: 'fullmarkStudy',
  data () {
    return {
      businessId: '',      // 业务id
      bussinessCode: '',   // 业务code
      bussinessName: ''    // 业务名称
    }
  },
  components: {
    common
  },
  mounted () {
    var query = this.$route.query
    // console.log(query)
    this.businessId = query.id
    this.bussinessCode = query.code
    this.bussinessName = query.name
  },
  methods: {
    appointTask: function (params, orderPlace) {
      console.log('满分学习', params)
      resultPost(createDriveInfoZJ10, params).then(json => {
        if (json.code === '0000') {
          console.log(json)
          let dataInfo = {
            type: 2,
            reserveNo: json.data.waterNumber,    // 流水号
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: orderPlace,          // 服务点
            reserveTime: json.data.appointmentDate       // 预约日期
          }
          this.$store.commit('saveSuccessInfo', dataInfo)
          this.$router.push('/submitSuccess')
        } else {
          Toast({message: json.msg, className: 'white'})
        }
      })
    }
  }
}
</script>
<style lang="less">
#fullmarkStudy {
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
  }
  .alter-select {
    height: 100px;
    background-color: #fff;
    position: relative;
    padding-left: 230px;
    .alter-chose{
      width: 180px;
      position: absolute;
      left: 50px;
      color: #666;
      line-height: 100px;
      span{
        font-size: 28px;
      }
    }
    .alter-wd{
      padding-top: 22px;
      font-size: 26px;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

