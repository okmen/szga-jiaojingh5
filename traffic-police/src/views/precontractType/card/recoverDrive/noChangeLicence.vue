<!-- 
*  #恢复驾驶资格#
*  #逾期一年以上 * 未换证 * 类
 -->
<template>
    <div id="noChangeLicence">
      <div class="alter-select pad-side-50">
        <div class="alter-chose"><span>业务类型</span></div>
        <div class="div-select alter-wd">
          <p>{{bussinessName}}</p>
        </div>
      </div>
      <div class="alter-from">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../../service/getData'
import { createDriveInfoZJ21 } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './child/common.vue'
export default {
  name: 'noChangeLicence',
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
      console.log('未换证类', params)
      resultPost(createDriveInfoZJ21, params).then(json => {
        if (json.code === '0000') {
          console.log(json)
          let dataInfo = {
            type: 2,
            reserveNo: json.data.waterNumber,    // 流水号
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: orderPlace,          // 服务点
            reserveTime: json.data.appointmentDate    // 预约日期
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
#noChangeLicence{
  width: 100%;
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
  }
  .alter-select {
    height: 164px;
    background-color: #fff;
    position: relative;
    padding-left: 230px;
    padding-top:22px;
    .alter-chose{
      width: 180px;
      position: absolute;
      left: 50px;
      color: #666;
      line-height: 100px;
    }
    .alter-wd{
      height: 120px;
      padding:0 15px;
      border: 1px solid #e2e2e7;
      border-radius: 10px;
      line-height: 54px;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>
