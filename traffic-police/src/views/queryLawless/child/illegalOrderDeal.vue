<template>
  <div id="illegalDealWith">
    <!-- 车辆 -->
      <div class="illegal-car">
        <p class="illegal-car-num">车牌号：<span>粤B 6A452G</span></p>
        <p class="illegal-car-score">共记<span class="illegal-score-red">5564645</span>分</p>
      </div>
    <div class="illegal-box">
      <!-- 违法结果查询结果 列表 -->
      <div class="illegal-list" v-bind:class="{ green: checkAddBorder }">
        <div class="illegal-record">
          <p>违法时间：<span>2017-04-18  18:26:23</span></p>
          <p>执法单位：<span>宝安西乡支队</span></p>
          <p>违法行为：<span>违法停车</span></p>
          <p>违法地点：<span>深圳市宝安区西乡街道宝业路</span></p>
          <p>受理方式：<span>窗口处理</span></p>
          <p>违法状态：<span>该交通违法记录符合首违免罚条件，请至各辖区大队进行处理。</span></p>
        </div>
        <div class="illegal-query">
          <section class="illegal-query-score">
            <p class="illegal-score-num">0</p>
            <p>违法积分数</p>
          </section>
          <section class="illegal-query-score">
            <p class="illegal-score-num">50840</p>
            <p>罚款金额</p>
          </section>
        </div>
        <div class="illegal-select">
          <input type="checkbox" id="illegalSelectRadio" name="illegalSelectRadio" v-model:checked="checkAddBorder">
          <label for="illegalSelectRadio"></label>
        </div>
        <!-- 首违免罚 -->
        <div class="let-off-tip">
          <a>首违免罚介绍</a>
        </div>
      </div>
      <!-- 预约 温馨提示 -->
      <div class="illegal-btn" @click="btnSubmitIllegal">预约</div>
      <div class="illegal-tip">
        <h3>温馨提示</h3>
        <p>1、对于预约过没有来办理的,满3次系统自动锁定用户,不能进行预约。</p>
        <p>2、超过预约时间到违法处理点办理业务的群众,此次预约视为无效,需重新排队。</p>
        <p>3、预约成功的用户凭预约成功短信到窗口进行违章业务办理。</p>
        <p>4、成功预约后，如未能在预约时间段内前往办理的，须至少提前两个工作日，在网站预约申请界面进行撤销预约，否认视为失约。</p>
        <p class="illegal-tip-margin">5、状态为不需要预约的用户直接到银行缴纳罚款即可。</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        illegalSelectShow: false,   // 是否显示申诉下拉列表
        checkAddBorder: false,      // 选中后显示绿色边框
        selectInformTypeMsg: '记录的机动车号牌信息错误的',
        illegalSelectData: [
          {
            'str': '记录的机动车号牌信息错误的'
          },
          {
            'str': '违法行为系统记录重复的'
          },
          {
            'str': '有证据证明救助危难或紧急避险造成'
          },
          {
            'str': '因交通信号指示不一致造成的'
          },
          {
            'str': '交通技术监控设备收集的违法行为记录材料包括车辆类型、违法时间、违法地点不准确的'
          }
        ]
      }
    },
    methods: {
      selectInformType: function (str) {  // li的点击事件
        if (str) {
          this.selectInformTypeMsg = str
        }
        if (this.illegalSelectShow === true) {
          this.illegalSelectShow = false
        } else {
          this.illegalSelectShow = true
        }
      },
      btnSubmitIllegal: function () {
        console.log('111111')
      }
    }
  }
</script>
<style lang="less">
#illegalDealWith{
  width:100%;
  height:100%;
  background:#FFF;
  .illegal-car{
    width:100%;
    height:60px;
    border-bottom:1px solid #bfbfbf;
    line-height:60px;
    p{
      height:60px;
      color:#333;
      font-size:28px;
      font-weight:bold;
      span{
        color:#666;
        font-size:24px;
        font-weight:normal;
      }
      .illegal-score-red{
        color:#ea1d1d;
        font-weight:bold;
      }
    }
    .illegal-car-num{
      float:left;
      padding-left:50px;
    }
    .illegal-car-score{
      float:right;
      padding-right:50px;
    }
  }
  .illegal-box{
    padding:38px 50px 0;
    width:100%;
    .illegal-list{
      position:relative;
      padding:20px 40px;
      margin-bottom:86px;
      width:644px;
      height:560px;
      border-radius:8px;
      box-shadow:0 0 18px rgba(0,0,0,.3);
      .illegal-record{
        width:100%;
        p{
          color:#333;
          font-size:24px;
          font-weight:bold;
          line-height:50px;
          span{
            color:#666;
            font-weight:normal;
          }
        }
      }
      .illegal-query{
        width:100%;
        section{
          float:left;
          margin-left:100px;
          margin-top:20px;
          text-align:center;
          .illegal-score-num{
            color:#666;
            font-size:44px;
            font-weight:bold;
          }
          p{
            color:#333;
            font-size:24px;
            font-weight:bold;
          }
        }
      }
      .illegal-select{
        float:left;
        position:absolute;
        margin:4px 20px 0 0;
        width:40px;
        height:40px;
        top:30px;
        right:40px;
        input[type=checkbox]{
          visibility: hidden;
        }
        label{
          position:absolute;
          width:40px;
          height:40px;
          top:0;
          left:0;
          background:#dfdfdf;
          -webkit-border-radius:20px;
          -moz-border-radius:20px;
          border-radius:20px;
          cursor:pointer;
        }
        label:after{
          opacity:0.2;
          content:'';
          position:absolute;
          width:16px;
          height:8px;
          background:transparent;
          top:10px;
          left:10px;
          border:4px solid #FFF;
          border-top:none;
          border-right:none;
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        label::after{
          opacity:1;
        }
        input[type=checkbox]:checked + label{
          background:#33c532;
        }
      }
      .let-off-tip{
        width:100%;
        height:60px;
        a{
          float:right;
          color:#228bf6;
          font-size:22px;
          line-height:60px;
          text-decoration:underline;
        }
      }
    }
    .green{
      border:3px solid #33c532;
    }
    .illegal-btn{
      margin-top:50px;
      width:100%;
      height:80px;
      background:#2696dd;
      border-radius:8px;
      color:#FFF;
      font-size:30px;
      line-height:80px;
      text-align:center;
    }
    .illegal-tip{
      width:100%;
      h3{
        margin-top:76px;
        margin-bottom:30px;
        width:100%;
        height:30px;
        color:#2696dd;
        font-size:30px;
        font-weight:normal;
      }
      p{
        color:#666;
        font-size:24px;
        line-height:38px;
      }
    }
  }
}
</style>