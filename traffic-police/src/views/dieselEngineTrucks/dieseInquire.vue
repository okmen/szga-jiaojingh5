<template>
  <div class="form-template dieseInquire-success">
    <div class="dieseInquire-success-content">
      <div class="item" v-for="(value, key) in dataInfo" v-if="keyListObj[key]">
        <span class="bid-item-key">{{ keyListObj[key] }}</span>
        ：<span >{{ valListObj[key] ? valListObj[key][value] : value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dieseInquire',
    // 获取数据
    data () {
      return {
        dataInfo: {},
        keyListObj: {
          licenseNumber: '车牌号码',
          numberPlate: '车牌类型',
          status: '审核状态',
          auditDescription: '审核情况说明',
          rfDescription: 'RFID系统制证描述',
          rfId: 'RFID卡号',
          rfTime: 'RFID系统处理时间',
          rfStatus: 'RFID系统状态'
        },
        valListObj: {
          rfStatus: {
            '0': '未处理',
            '1': '制作成功',
            '2': '制作失败'
          },
          status: {
            '0': '未审核',
            '1': '审核通过',
            '2': '审核退办'
          },
          numberPlate: {
            '02': '蓝牌',
            '01': '黄牌',
            '06': '黑牌',
            '52': '小型新能源车号牌',
            '51': '大型新能源车号牌'
          }
        }
      }
    },
    methods: {
    },
    mounted () {
      let myNumberPlate = JSON.parse(this.$route.query.myNumberPlate)   // 获取数据
      this.dataInfo = myNumberPlate
    }
  }
</script>

<style lang="less">
  .dieseInquire-success{
    .tp-bottom{
      margin-top: 28px;
    }
  }
  .cancel-btn{
    background: #ccc!important;
    color: #fff!important;
  }
  .dieseInquire-success-content{
    border:2px solid #ccc;
    border-radius: 8px;
    .item{
      height:80px;
      font-size: 32px;
      line-height: 80px;
      padding-left: 20px;
    }
  }
  .exempTu{
    margin-top:60px !important;
  }
</style>
