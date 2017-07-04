<template>
  <div class="exchange-license">
    <div class="owners-name">
      <span class="item-title">车主姓名</span>
      <input type="text" disabled class="item-info">
    </div>
    <div class="certificate-number">
      <span class="item-title">证件号码</span>
      <input type="text" disabled class="item-info">
    </div>
    <div-select :childInfo="plateNumber" @getSelected="getPlateNumber"></div-select>
    <div-select :childInfo="plateType" @getSelected="getPlateType"></div-select>
    <div class="domicile-place">
      <span class="item-title">户籍所在地</span>
      <div-radio :optname="optname"></div-radio>
    </div>
    <div class="recipient-name">
      <span class="item-title">收件人姓名</span>
      <input type="text" placeholder="请输入收件人姓名" class="item-info">
    </div>
    <div class="recipient-phone">
      <span class="item-title">收件人手机</span>
      <input type="text" placeholder="请输入收件人手机号码" class="item-info">
    </div>
    <div class="recipient-address">
      <span class="item-title">收件人地址</span>
      <div class="recipient-address-select item-info">
        <div-select :childInfo="recipientInfo"></div-select>
        <input type="text" placeholder="请输入详细地址">
      </div>
    </div>
    <div class="upload-photo">
      <div class="">请按示例图上传以下证件照片</div>、
      <div class="upload-all-img">
        <div class="upload-item-img">
          <div class="upload-item-img-one"></div>
          <div class="upload-item-text-one"></div>
        </div>
        <div class="upload-item-img">
          <div class="upload-item-img-one"></div>
          <div class="upload-item-text-one"></div>
        </div>
        <div class="upload-item-img">
          <div class="upload-item-img-one"></div>
          <div class="upload-item-text-one"></div>
        </div>
      </div>
    </div>
    <div class="confirm-information" @click="confirmInfo">
      确认信息
    </div>
  </div>
</template>
<style lang="less" scoped>
  .recipient-address-select input{
    width: 100%;
    margin-top: 10px;
  }
  .exchange-license>div{
    margin: 0 0 30px;
    display: flex;
    justify-content: space-between;
  }
  .exchange-license {
    .item-title{
      width: 33%;
      line-height: 65px;
    }
    .item-info{
      width: 66%;
    }
    input{
      border: 2px solid #eee;
      border-radius: 6px;
      height: 65px;
      padding-left: 10px;
      line-height: 65px;
      font-size: 26px;
    }
    .exchange-license-line{
      height: 10px;
      background: #eeeeee;
      margin-left: 0;
      margin-right: 0;
    }
    .confirm-information{
      background: #09bb07;
      height: 80px;
      border-radius: 8px;
      justify-content: center;
      line-height: 80px;
      font-size: 30px;
      color: white;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        plateNumber: {
          title: '车牌号码',
          option: [
            {'str': '粤B12345'},
            {'str': '粤B12345'}
          ]
        },
        plateType: {
          title: '车牌种类',
          option: [
            {
              'str': '蓝牌',
              'id': '02'
            },
            {
              'str': '黄牌',
              'id': '01'
            },
            {
              'str': '黑牌',
              'id': '06'
            },
            {
              'str': '个性牌',
              'id': '02'
            },
            {
              'str': '小型新能源车号牌',
              'id': '02'
            },
            {
              'str': '大型新能源车号牌',
              'id': '02'
            }
          ]
        },
        optname: [
          {'str': '深户', choose: true},
          {'str': '外籍户口', choose: false}
        ],
        recipientInfo: {
          title: '深圳市',
          option: [
            {
              'id': '01',
              'str': '福田区'
            },
            {
              'id': '02',
              'str': '罗湖区'
            },
            {
              'id': '03',
              'str': '南山区'
            },
            {
              'id': '04',
              'str': '宝安区'
            },
            {
              'id': '05',
              'str': '龙岗区'
            },
            {
              'id': '06',
              'str': '盐田区'
            },
            {
              'id': '07',
              'str': '龙华新区'
            },
            {
              'id': '08',
              'str': '光明新区'
            },
            {
              'id': '09',
              'str': '坪山新区'
            },
            {
              'id': '10',
              'str': '大鹏新区'
            }
          ]
        }
      }
    },
    components: {
      divSelect: require('./components/divSelect.vue'),
      divRadio: require('./components/divRadio.vue')
    },
    methods: {
      getPlateNumber (val) {

      },
      getBusinessType (val) {

      },
      getPlateType (val) {

      },
      confirmInfo () {

      }
    }
  }
</script>
