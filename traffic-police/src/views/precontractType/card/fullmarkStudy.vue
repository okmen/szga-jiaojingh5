<!-- 
* 满分学习
 -->
<template>
  <div id="fullmarkStudy">
    <div class="alter-select pad-side-50">
      <div class="alter-chose"><span>业务类型</span></div>
      <div class="div-select alter-wd">
        <input class="text-input bg-white" value="满分学习考试" readonly>
      </div>
    </div>
    <div class="alter-from pad-side-50">
      <common @appointTaskClick="appointTask"
              :currentBusinessId="businessId"
              :currentBusinessCode="bussinessCode"></common>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { getBusinessTypeId, createDriveInfoZJ10 } from '../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
import common from './recoverDrive/child/common.vue'
export default {
  name: 'fullmarkStudy',
  data () {
    return {
      businessId: '',           // 当前业务 id
      bussinessCode: 'ZJ10'     // 当前业务 code
    }
  },
  components: {
    common
  },
  created () {
    // 获取业务id
    let reqData = {
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
      console.log('满分学习', params)
      resultPost(createDriveInfoZJ10, params).then(json => {
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
    }
    .alter-wd{
      padding-top: 22px;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

