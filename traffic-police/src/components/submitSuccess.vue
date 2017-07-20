<!-- 申办成功 或者 预约成功 的组件

    跳转至该组件时，使用以下方法
    this.$store.commit('saveSuccessInfo', dataInfo)
    this.$router.push('/submitSuccess')

    dataInfo 需要加上 type 字段
    dataInfo.type
      1 : 申办成功 // 办理类
      2 : 预约成功 // 预约类
    接口返回的数据存至 dataInfo

    dataInfo = {
      type: 1,
      businessType: '预约违法处理',
      subscribeNo: '流水号码'
    }

    dataInfo = {
      type: 2,
      reserveNo: '预约编号',
      numberPlate: '车牌号码',
      mobilephone: '手机号码',
      reserveAddress: '服务点',
      reserveTime: '预约时间'
    }
-->

<template>
  <div id="submitSuccess">
    <section class="appoint-img">
      <dl>
        <dd></dd>
        <dt>{{JsonDataInfo.type == 1 ? '申办成功' : '预约成功'}}</dt>
      </dl>
    </section>
    <!-- 申办成功的内容  -->
    <section class="bid-box appoint-box" v-if="JsonDataInfo.type == 1">
      <h3>申办结果</h3>
      <p>{{ tip }}</p>
      <ul class="bid-ul appoint-margin">
        <li class="bid-item" v-for="(value, key) in JsonDataInfo" v-if="keyListObj[key]">
          <span class="bid-item-key">{{ keyListObj[key] }}</span>
          ：<span :class="{red: key === 'subscribeNo' || key === 'waterNumber'}">{{ valListObj[key] ? valListObj[key][value] : value }}</span>
        </li>
      </ul>
    </section>
    <!-- 预约成功的内容 -->
    <section class="appoint-box" v-if="JsonDataInfo.type != 1">
      <h3>预约结果</h3>
      <p>{{ tip }}</p>
      <ul class="submitSuccess-ul">
        <li v-for="(value, key) in JsonDataInfo" class="submitSuccess-item"  v-if="keyListObj[key]">
          <span class="submitSuccess-item-key">{{ keyListObj[key] }}</span>
          ：<span class="submitSuccess-item-value">{{ valListObj[key] ? valListObj[key][value] : value }}</span>
        </li>
      </ul>
    </section>
    <div class="btn-appoint-backword" @click="btnBackword" v-if="JsonDataInfo.type == 1">返回</div>
    <div class="btn-appoint-backword mt-60" @click="btnBackword"  v-if="JsonDataInfo.type != 1">好的</div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    dataInfo: function () {
      return this.$store.state.successInfo
    }
  },
  data () {
    return {
      JsonDataInfo: '',
      urlJsonData: this.urlToJson(window.location.href),
      tip: '您的信息已成功提交，我们将会在3个工作日内通过短信告知您的审核结果，您还可以凭身份证信息在深圳交警微信号中查询审核。',
      keyListObj: {
        businessType: '业务类型',
        subscribeNo: '流水号码',
        waterNumber: '流水号码',
        reserveNo: '预约编号',
        numberPlate: '车牌号码',
        mobilephone: '手机号码',
        reserveAddress: '服务点',
        reserveTime: '预约时间',
        effectiveTime: '有效时间',
        plateType: '车牌类型',
        title: '业务类型'
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
        showIndex: {
          '0': '深户',
          '1': '非深户',
          '2': '外籍'
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
          '0': '外籍户口',
          '2': '港澳台籍',
          '3': '外国籍',
          '4': '其他'
        },
        personType: {
          '1': '机动车所有人',
          '2': '代理人'
        },
        bookerType: {
          '0': '本人'
        },
        gender: {
          '1': '男',
          '2': '女'
        },
        proprietorship: {
          '0': '个人',
          '1': '单位'
        },
        inform: {
          '1': '互联网查询',
          '2': '短信告知',
          '3': '非移动电话告知'
        },
        identificationNO: {
          'A': '居民身份证',
          'B': '组织机构代码书',
          'C': '军官证',
          'D': '士兵证',
          'E': '军官离退休证',
          'F': '境外人员身份证明',
          'G': '外交人员身份证明',
          'H': '居民户口簿',
          'J': '单位注销证明',
          'K': '居住暂住证明',
          'L': '驻华机构证明',
          'M': '临时居民身份证'
        },
        title: {
          applyGatePass: '申请通行证',
          applyCarTemporaryLicence: '申请机动车临牌',
          complementTheMotorVehicleDrivingLicense: '补领机动车行驶证',
          createVehicleInspection: '六年免检预约',
          replaceInspectionMark: '补换检验合格标志',
          inspectionDeclaration: '机动车委托异地定期检验申报',
          inspectionDeclarationQuery: '机动车委托异地定期检验申报查询',
          replaceMotorVehicleLicensePlate: '补领机动车号牌',
          iocomotiveCarReplace: '换领机动车行驶证',
          iocomotiveCarChangeContact: ' 机动车变更联系方式',
          driverLicenseAnnualVerification: '驾驶证年审',
          renewalDriverLicense: '驾驶证延期换证',
          driverLicenseInto: '驾驶证转入',
          driverLicenseVoluntaryDemotion: '驾驶证自愿降级',
          repairDriverLicense: '驾驶证补证',
          replaceDriverLicense: '驾驶证换证',
          driverChangeContact: '驾驶人联系方式变更'
        }
      }
    }
  },
  methods: {
    btnBackword: function () {
      this.$router.push('/')
    },
    urlToJson: function (url) {
      if (!url.split('?')[1]) {
        return false
      }
      let urlJson = {}
      let arr = url.split('?')[1].split('&')
      arr.map(item => {
        urlJson[item.split('=')[0]] = decodeURIComponent(item.split('=')[1])
      })
      return urlJson
    }
  },
  mounted () {
    this.JsonDataInfo = this.urlJsonData ? this.urlJsonData : this.dataInfo
  }
}
</script>
<style lang="less">
#submitSuccess{
  height:100%;
  width:100%;
  background:#FFF url('../images/appointBack.png') bottom no-repeat;
  background-size:100% 32%;
  .appoint-img{
    width:100%;
    height:250px;
    dl{
      margin:0 auto;
      padding-top:74px;
      width:178px;
      height:100%;
      dd{
        width:100%;
        height:178px;
        background:url('../images/appointSuccess.png') no-repeat;
        background-size:100%;
      }
      dt{
        line-height:72px;
        text-align:center;
      }
    }
  }
  .appoint-box{
    margin:100px auto 0;
    padding:0 20px 30px;
    width:550px;
    border:1px solid #a7d9f9;
    border-radius:8px;
    h3{
      margin-bottom:30px;
      width:100%;
      height:70px;
      border-bottom:1px solid #a7d9f9;
      text-align:center;
      line-height:70px;
      font-size:30px;
      font-weight:normal;
    }
    p{
      font-size:24px;
      line-height:40px;
    }
    .appoint-margin{
      margin-top:34px;
    }
    .bid-ul{
      font-size:24px;
      line-height:40px;
      .bid-item{
        white-space: nowrap;
        .bid-item-key{
          width: 100px;
        }
        .red{
          color: #F00;
        }
      }
    }
    .submitSuccess-ul{
      font-size: 22px;
      padding-left: 28px;
      font-weight: bold;
      .submitSuccess-item{
        line-height: 50px;
        white-space: nowrap;
        .submitSuccess-item-key{
          display: inline-block;
          width: 96px;
        }
        .submitSuccess-item-value{
          font-weight: normal;
          color: #666;
        }
      }
    }
  }
  .bid-box{
    border-color: #969696;
    h3{
      border-color: #969696;
    }
  }
  .btn-appoint-backword{
    margin:20px auto 0;
    width:550px;
    height:82px;
    background:#2696dd;
    color:#FFF;
    font-size:30px;
    line-height:80px;
    text-align:center;
    border-radius:8px;
  }
  .mt-60{
    margin-top: 60px;
  }
}
</style>
