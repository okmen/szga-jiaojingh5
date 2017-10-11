
<template>
  <div id="submit">
    <section class="appoint-img">
      <dl>
        <dd></dd>
        <dt>提交成功</dt>
      </dl>
    </section>
    <section class="bid-box appoint-box">
      <h3>申办结果</h3>
      <p>您的信息已提交成功。请留意办证进度，审核通过5个工作日后可前往联系地址{{JsonDataInfo.areaSelectMassage}}交警大队领取安装电子行驶证（RFID).</p>
      <p>业务类型：柴油轻型自卸货车</p>
      <p v-if="this.JsonDataInfo.type === '1'">申请类型：个人车辆(含挂靠)</p>
      <p v-if="this.JsonDataInfo.type === '2'">申请类型：单位车辆</p>
      <p>车牌号码：{{JsonDataInfo.licenseNumber}}</p>
      <p>流水号：{{JsonData}}</p>
    </section>
    <div class="btn-appoint-backword" @click="btnBackword">返回</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      JsonData: '',
      JsonDataInfo: ''
    }
  },
  mounted () {
    this.JsonData = JSON.parse(this.$route.query.myNumber)
    this.JsonDataInfo = JSON.parse(this.$route.query.typeName)
    console.log(this.JsonDataInfo)
  },
  methods: {
    btnBackword: function () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less">
#submit{
  height:100%;
  width:100%;
  background:#FFF url('../../images/appointBack.png') bottom no-repeat;
  background-size:100% 32%;
  .tp-bottom{
    margin-top: 28px;
  }
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
        background:url('../../images/appointSuccess.png') no-repeat;
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
      width: 100%;
      font-size: 22px;
      padding-left: 28px;
      font-weight: bold;
      .submitSuccess-item{
        line-height: 50px;
        .submitSuccess-item-key{
          display: inline-block;
          width: 114px;
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
    margin-bottom: 60px;
  }
}
</style>

