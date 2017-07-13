<!-- 申办成功 或者 预约成功 的组件

    跳转至该组件时，使用以下方法
    this.$store.commit('saveSuccessInfo', dataInfo)
    this.$router.push('/submitSuccess')

    dataInfo 需要加上 type 字段
    dataInfo.type
      1 : 申办成功 // 办理类
      2 : 预约成功 // 预约类
    接口返回的数据存至 dataInfo.textObj

    dataInfo = {
      type: 1,
      textObj: {
        businessType: '预约违法处理',
        subscribeNo: '流水号码'
      }
    }

    dataInfo = {
      type: 2,
      textObj: {
        reserveNo: '预约编号',
        numberPlate: '车牌号码',
        mobilephone: '手机号码',
        reserveAddress: '服务点',
        reserveTime: '预约时间'
      }
    }

    // TODO keyListObj 缺少预约成功的信息 待接口统一字段
-->

<template>
  <div id="submitSuccess">
    <section class="appoint-img">
      <dl>
        <dd></dd>
        <dt>{{dataInfo.type == 1 ? '申办成功' : '预约成功'}}</dt>
      </dl>
    </section>
    <!-- 申办成功的内容  -->
    <section class="bid-box appoint-box" v-if="dataInfo.type == 1">
      <h3>预约结果</h3>
      <p>{{ tip }}</p>
      <ul class="bid-ul appoint-margin">
        <li class="bid-item" v-for="(value, key) in dataInfo.textObj">
          <span class="bid-item-key">{{ keyListObj[key] }}</span>
          ：<span :class="{red: key === 'subscribeNo'}">{{ value }}</span>
        </li>
      </ul>
    </section>
    <!-- 预约成功的内容 -->
    <section class="appoint-box" v-if="dataInfo.type != 1">
      <h3>预约结果</h3>
      <ul class="submitSuccess-ul">
        <li v-for="(value, key) in dataInfo.textObj" class="submitSuccess-item">
          <span class="submitSuccess-item-key">{{ keyListObj[key] }}</span>
          ：<span class="submitSuccess-item-value">{{ value }}</span>
        </li>
      </ul>
    </section>
    <div class="btn-appoint-backword" @click="btnBackword" v-if="dataInfo.type == 1">返回</div>
    <div class="btn-appoint-backword mt-60" @click="btnBackword"  v-if="dataInfo.type != 1">好的</div>
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
      tip: '您的信息已成功提交，我们将会在3个工作日内通过短信告知您的审核结果，您还可以凭身份证信息在深圳交警微信号中查询审核。',
      keyListObj: {
        businessType: '业务类型',
        subscribeNo: '流水号码',
        reserveNo: '预约编号',
        numberPlate: '车牌号码',
        mobilephone: '手机号码',
        reserveAddress: '服务点',
        reserveTime: '预约时间'
      }
    }
  },
  methods: {
    btnBackword: function () {
      this.$router.push('/')
    }
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
