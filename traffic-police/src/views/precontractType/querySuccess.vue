<template>
  <div class="form-template">
    <div>查询成功了</div>
    <div class="form-template-submit" @click="cancelReverse">取消预约</div>
  </div>
</template>
<script>
  import { resultPost } from 'service/getData'
  // import { Toast } from 'mint-ui'
  import {
    cancel
  } from 'config/baseUrl'
  export default {
    data () {
      return {
        businessType: {
          title: '证件名称',
          option: [
            {
              'str': '驾驶证业务',
              'id': 1
            },
            {
              'str': '机动车业务',
              'id': 2
            }
          ]
        },
        businessTypeOne: '', // 业务类型
        reserveNum: '', // 预约编号
        IDCardNum: '' // 证件号码
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      // 获取选择的业务类型
      getBusinessTypeOne (val) {
        this.businessTypeOne = val
      },
      // 取消预约
      cancelReverse () {
        let requestData = {
          bookerNumber: this.reserveNum,
          idNumber: this.IDCardNum
        }
        console.log(requestData)
        resultPost(cancel, requestData).then(data => {
          console.log(data, '预约信息')
        })
      }
    }
  }
</script>
