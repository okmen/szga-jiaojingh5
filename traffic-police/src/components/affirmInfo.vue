<template>
<div id="affirmInfo-body">
  <div class="affirmInfo-text">
    <ul class="affirmInfo-text-content">
      <li class="affirmInfo-text-item" v-for="(value, key) in dataList.textObj">
        <span class="affirmInfo-text-item-key">{{ keyListObj[key] }}</span>
        <span class="affirmInfo-text-item-val">{{ valListObj[key] ?  valListObj[key][value] : value }}</span>
      </li>
    </ul>
  </div>
  <div class="affirmInfo-img">
    <p v-if="dataList.imgObj">请按示例图上传以下证件照片</p>
    <div class="affirmInfo-img-content">
      <dl class="affirmInfo-img-item" v-for="(value, key) in dataList.imgObj" v-if="value">
        <dt class="affirmInfo-img-item-val"><img :src="value" alt=""></dt>
        <dd class="affirmInfo-img-item-key">{{ keyListObj[key] }}</dd>
      </dl>
    </div>
  </div>
  <div class="affirmInfo-btn">
    <button id="affirmInfo-btn" @click="affirmInfoBtn">提 交</button>
  </div>
</div>
</template>
<script>
import { resultPost } from '../service/getData'
// import { userAgreement } from '../config/baseUrl'
// import { Toast } from 'mint-ui'
export default {
  name: 'affirmInfo',
  data () {
    return {
      keyListObj: {
        plateType: '车牌类型',
        cartype: '车辆类型',
        abbreviation: '车牌简称',
        numberPlate: '车牌号码',
        behindTheFrame4Digits: '车架号',
        name: '车主姓名', // 机动车所有人
        userName: '用户姓名',
        mobilephone: '手机号码',
        applyDate: '申请日期',
        remarks: '备注',
        identityCard: '身份证号码',
        proposerIdentityCard: '申请人身份证号码',
        carOwnerIdentityCard: '车主身份证号码',
        bookerIdentityCard: '预约人身份证号码',
        cartModels: '车辆型号',
        engineNumber: '发动机号',
        carOrigin: '车辆产地',
        placeOfDomicile: '户籍所在地',
        receiverName: '收件人姓名',
        receiverNumber: '收件人号码',
        receiverAddress: '收件人地址',
        address: '住所地址',
        personType: '申请人类型',
        driveLicenseNumber: '行驶证编号',
        identificationNO: '证件种类',
        identificationNum: '证件号码',
        telno: '固定号码',
        postCode: '邮政编码',
        effectiveDate: '保险生效日期',
        terminationDate: '保险终止日期',
        inform: '受理结果告知方式',
        bookerName: '预约人',
        bookerType: '预约方式',
        bookNumber: '预约流水号',
        proprietorship: '车辆所有权',
        associatedAgency: '委托机构',
        PHOTO26: '购置发票图片',
        PHOTO27: '交强险单据',
        PHOTO9: '身份证(正面)',
        PHOTO10: '身份证(反面)',
        PHOTO28: '机动车合格证',
        PHOTO31: '境外人员临住表',
        PHOTO29: '进口货物证明书',
        JZZA: '居住证正面',
        JZZB: '居住证反面',
        DJZSFYJ: '机动车登记证书',
        JDCXSZ: '机动车行驶证照片',
        XSZZP: '车辆45度照片'
      },
      valListObj: {
        cartype: {
          '01': '大型汽车',
          '02': '小型汽车',
          '03': '使馆汽车',
          '04': '领馆汽车',
          '05': '境外汽车',
          '06': '外籍汽车',
          '07': '普通摩托车',
          '08': '轻便摩托车',
          '09': '使馆摩托车',
          '10': '领馆摩托车',
          '15': '挂车',
          '16': '教练汽车',
          '17': '教练摩托车',
          '18': '实验汽车',
          '19': '实验摩托车',
          '22': '临时行驶车',
          '23': '警用汽车',
          '24': '警用摩托',
          '20': '临时入境车',
          '51': '临时行驶车',
          '52': '新能源小型车',
          'K31': '小型普通客车',
          'K32': '小型越野客车',
          'K33': '小型轿车',
          'K34': '小型专用客车',
          'K41': '微型普通客车',
          'K42': '微型越野客车',
          'K43': '微型轿车',
          'K38': '小型专用校车'
        },
        plateType: {
          '02': '蓝牌',
          '06': '黑牌',
          '01': '黄牌'
        },
        carOrigin: {
          'A': '国产车',
          'B': '进口车'
        },
        placeOfDomicile: {
          '1': '深户',
          '0': '外籍户口'
        },
        personType: {
          '1': '机动车所有人',
          '2': '代理人'
        },
        bookerType: {
          '0': '本人'
        },
        proprietorship: {
          '0': '个人',
          '1': '单位'
        }
      }
    }
  },
  computed: {
    dataList: function () {
      return this.$store.state.motorVehicleHandling
    }
  },
  methods: {
    affirmInfoBtn: function () {
      let reqData = Object.assign({}, this.dataList.textObj, this.dataList.imgObj, this.dataList.invisibleObj)
      console.log(reqData)
      resultPost(this.dataList.url, reqData).then(json => {
        console.log(json)
      })
    }
  }
}
</script>
<style lang="less">
  #affirmInfo-body{
    position: relative;
    font-size: 30px;
    color: #333;
    background-color: #fff;
    .affirmInfo-text{
      position: relative;
      padding: 30px;
      .affirmInfo-text-content{
        border: 1px solid #ccc;
        border-radius: 6Px;
        line-height: 92px;
        .affirmInfo-text-item{
          padding-left: 250px;
          position: relative;
          border-bottom: 1px solid #ccc;
          .affirmInfo-text-item-key{
            position: absolute;
            left: 0;
            display: inline-block;
            width: 250px;
            color: #666;
            text-indent: 15px;
            height: 100%;
          }
          .affirmInfo-text-item-val{
            display: inline-block;
          }
        }
        .affirmInfo-text-item:last-child{
          border-bottom: none;
        }
      }
    }
    .affirmInfo-img{
      position: relative;
      padding: 50px;
      padding-top: 0;
      p{
        line-height: 75px;
      }
      .affirmInfo-img-content{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .affirmInfo-img-item{
          width: 305px;
          .affirmInfo-img-item-val{
            width: 100%;
            height: 305px;
            position: relative;
            img{
              display: block;
              max-width: 100%;
              max-height: 100%;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%)
            }
          }
          .affirmInfo-img-item-key{
            text-align: center;
            line-height: 75px;
            color: #666;
            font-size: 28px;
          }
        }
      }
    }
    .affirmInfo-btn{
      padding: 0 50px 60px;
      width: 100%;
      box-sizing: border-box;
      button{
        width: 100%;
        color: #fff;
        background-color: #09bb07;
        line-height: 80px;
        font-size: 32px;
        outline: none;
        border-radius: 4Px;
      }
    }
  }
</style>
