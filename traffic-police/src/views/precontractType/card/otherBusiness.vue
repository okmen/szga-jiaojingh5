<!-- 
* 其它业务
 -->
 <template>
    <div id="otherBusiness">
      <div class="alter-select pad-side-50">
        <div class="alter-chose"><span>业务类型</span></div>
        <div class="alter-wd bg-white">
          <p>{{bussinessName}}</p>
        </div>
      </div>
      <div class="alter-from">
        <common @appointTaskClick="appointTask"
                :currentBusinessId="businessId"
                :currentBusinessCode="bussinessCode"></common>
      </div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { createDriveInfoZJ20 } from '../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './recoverDrive/child/common.vue'
export default {
  name: 'otherBusiness',
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
      console.log('其它业务', params)
      resultPost(createDriveInfoZJ20, params).then(json => {
        if (json.code === '0000') {
          console.log(json)
          let dataInfo = {
            type: 2,
            reserveNo: json.data.waterNumber,    // 流水号
            mobilephone: params.bookerMobile,    // 手机号码
            reserveAddress: orderPlace,          // 服务点
            reserveTime: json.data.bidDate       // 预约日期
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
#otherBusiness {
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
  }
  .alter-select {
    height: 260px;;
    background-color: #fff;
    position: relative;
    padding-left: 230px;
    padding-top: 20px;
    .alter-chose{
      width: 180px;
      position: absolute;
      left: 50px;
      color: #666;
      line-height: 100px;
    }
    .alter-wd{
      padding:0 15px;
      line-height: 54px;
      border: 1px solid #e2e2e7;
      border-radius: 10px;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>
