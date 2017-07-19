<!-- 
* 其它业务
 -->
 <template>
    <div id="otherBusiness">
      <div class="alter-select pad-side-50">
        <div class="alter-chose"><span>业务类型</span></div>
        <div class="alter-wd bg-white">
          <p>此界面提供：信息更变、延期换证、期满换证、规定年龄换证、
          损坏换证、遗失换证、注销业务、降驾换证、转入换证的预约</p>
        </div>
      </div>
      <div class="alter-from pad-side-50">
        <common @appointTaskClick="appointTask"
                :currentBusinessId="businessId"
                :currentBusinessCode="bussinessCode"></common>
      </div>
    </div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { getBusinessTypeId, createDriveInfoZJ20 } from '../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './recoverDrive/child/common.vue'
export default {
  name: 'otherBusiness',
  data () {
    return {
      businessId: '',           // 当前业务 id
      bussinessCode: 'ZJ20'     // 当前业务 code
    }
  },
  components: {
    common
  },
  created () {
    let reqData = {     // 获取业务id
      type: '0',
      part: '',
      code: this.bussinessCode
    }
    resultPost(getBusinessTypeId, reqData).then(json => {
      if (json.code === '0000') {
        this.businessId = json.data
      } else {
        Toast({message: json.msg, className: 'white'})
      }
    })
  },
  methods: {
    appointTask: function (params) {
      console.log('其它业务', params)
      resultPost(createDriveInfoZJ20, params).then(json => {
        if (json.code === '0000') {
          console.log(json)
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
