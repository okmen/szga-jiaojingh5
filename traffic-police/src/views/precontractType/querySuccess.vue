<template>
  <div class="form-template query-success">
    <div class="query-success-content">
      <div class="item" v-for="(value, key) in dataInfo" v-if="keyListObj[key]">
        <span class="bid-item-key">{{ keyListObj[key] }}</span>
        ：<span >{{ value }}</span>
      </div>
    </div>
    <div class="form-template-submit" @click="cancelReverse">取消预约</div>
  </div>
</template>
<style lang="less">
  .query-success{
    height: 100%!important;
  }
  .query-success-content{
    border:2px solid #ccc;
    border-radius: 8px;
    .item{
      height:80px;
      font-size: 32px;
      line-height: 80px;
      padding-left: 20px;
    }
  }
</style>

<script>
  import { resultPost } from 'service/getData'
  import { MessageBox } from 'mint-ui'
  import {
    cancel
  } from 'config/baseUrl'
  export default {
    // 获取数据
    computed: {
      dataInfo: function () {
        return this.$store.state.successInfo
      }
    },
    data () {
      return {
        keyListObj: {
          businessTypeName: '业务类型',
          name: '车主姓名',
          idNumber: '证件号码',
          mobile: '手机号码',
          organizationName: '预约地点',
          appointmentDate: '预约日期',
          appointmentTime: '预约时间',
          platNumber: '号牌号码',
          carTypeName: '车辆类型'
        }
      }
    },
    methods: {
      // 取消预约
      /*eslint-disable*/
      cancelReverse () {
        console.log(this.dataInfo)
        var r=confirm("确定取消预约？")
        if (r==true){
          let requestData = {
            mobile: this.dataInfo.mobile,
            businessType: this.dataInfo.businessType,
            bookerNumber: this.dataInfo.bookerNumber,
            organizationName: this.dataInfo.organizationName,
            appointmentDate: this.dataInfo.appointmentDate,
            appointmentTime: this.dataInfo.appointmentTime,
            openId: window.localStorage.getItem('openId'),
            businessTypeName: this.dataInfo.businessTypeName
          }
          resultPost(cancel, requestData).then(data => {
            console.log(data, '预约信息')
            MessageBox('提示', data.msg)
            this.$router.push('/')
          })
        } else {
            return
        }
      }
    }
  }
</script>
