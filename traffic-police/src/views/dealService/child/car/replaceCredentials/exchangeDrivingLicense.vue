<template>
  <div class="exchange-license">
    <div class="owners-name">
      <span class="item-title">车主姓名</span>
      <input type="text" disabled class="item-info" v-model="ownersName">
    </div>
    <div class="certificate-number">
      <span class="item-title">证件号码</span>
      <input type="text" disabled class="item-info" v-model="certificateNumber">
    </div>
    <div-select :childInfo="plateNumber" @getSelected="getPlateNumber" :defaultVal="defaultPlateNumber"></div-select>
    <div-select :childInfo="plateType" @getSelected="getPlateType" defaultVal="蓝牌"></div-select>
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
        <div-select :childInfo="recipientInfo" defaultVal="福田区"></div-select>
        <input type="text" placeholder="请输入详细地址">
      </div>
    </div>
    <div class="upload-photo">
      <div class="">请按示例图上传以下证件照片</div>
      <div class="upload-all-img">
        <div class="upload-item-img">
          <label class="upload-item-img-one" for="file1">
            <input id="file1" type="file" accept="image/*" >
            <img :src="imgOne1" />
          </label>
          <div class="upload-item-text-one">身份证(正面)</div>
        </div>
        <div class="upload-item-img">
          <label class="upload-item-img-one" for="file2">
            <input id="file2" type="file" accept="image/*" >
            <img :src="imgOne2" /></label>
          <div class="upload-item-text-one">身份证(反面)</div>
        </div>
        <div class="upload-item-img">
          <label class="upload-item-img-one" for="file3">
            <input id="file3" type="file" accept="image/*" >
            <img :src="imgOne3" />
          </label>
          <div class="upload-item-text-one">机动车登记证书</div>
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
    height: auto;
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
      font-size: 30px;
      outline: none;
    }
    .exchange-license-line{
      height: 10px;
      background: #eeeeee;
      margin-left: 0;
      margin-right: 0;
    }
    .upload-all-img{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .upload-item-img{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .upload-photo{
      margin-top: 30px;
      display: block;
      .upload-item-text-one{
        margin-top: 10px;
        margin-bottom: 30px;
        color: #7e7e7e;
        text-align: center;
      }
      .upload-item-img-one{
        width: 194px;
        height: 194px;
        border: 2px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        input{
          display: none;
        }
        img{
          max-height: 90%;
          max-width: 90%;
        }
      }
    }
    .confirm-information{
      background: #09bb07;
      height: 80px;
      border-radius: 8px;
      justify-content: center;
      line-height: 80px;
      font-size: 30px;
      color: white;
      margin-bottom: 0;
    }
  }
</style>
<script>
  import uploadFile from '../../../../../service/uploadFile.js'
  export default {
    data () {
      return {
        defaultPlateNumber: '',
        imgOne1: require('../../../../../images/IDcard-front.png'),
        imgOne2: require('../../../../../images/IDcard-back.png'),
        imgOne3: require('../../../../../images/register-credential.png'),
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
        },
        recipientPhone: '',    // 收件人手机号码
        recipientName: ''     // 收件人姓名
      }
    },
    components: {
      divSelect: require('./components/divSelect.vue'),
      divRadio: require('./components/divRadio.vue')
    },
    computed: {
      ownersName () {
        return window.localStorage.getItem('userName')
      },
      certificateNumber () {
        return window.localStorage.getItem('identityCard')
      },
      plateNumber () {
        var plateInfo = {
          title: '车牌号码',
          option: []
        }
        JSON.parse(window.localStorage.getItem('cars')).map(item => {
          plateInfo.option.push({'str': item.myNumberPlate})
        })
        this.defaultPlateNumber = plateInfo.option[0].str
        return plateInfo
      }
    },
    methods: {
      uploadImg () {
        uploadFile.upload({
          id: 'file1',
          callback: (res) => {
            console.log(res)
            this.imgOne1 = res.imgUrl
          }
        })
        uploadFile.upload({
          id: 'file2',
          callback: (res) => {
            console.log(res)
            this.imgOne2 = res.imgUrl
          }
        })
        uploadFile.upload({
          id: 'file3',
          callback: (res) => {
            console.log(res)
            this.imgOne3 = res.imgUrl
          }
        })
      },
      getPlateNumber (val) {

      },
      getBusinessType (val) {

      },
      getPlateType (val) {

      },
      confirmInfo () {

      }
    },
    mounted () {
      this.uploadImg()
    }
  }
</script>
