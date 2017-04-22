<template>
  <div id="illegalResult">
    <div class="illegal-box">
      <!-- 违法结果查询结果 -->
      <div class="illegal-list" v-bind:class="{ green: checkAddBorder }">
        <div class="illegal-record">
          <p>通知书号：<span>62258xxxxxxx</span></p>
          <p>违法时间：<span>2017-04-18  18:26:23</span></p>
          <p>执法单位：<span>宝安西乡支队</span></p>
          <p>违法行为：<span>违法停车</span></p>
          <p>违法地点：<span>深圳市宝安区西乡街道宝业路</span></p>
        </div>
        <div class="illegal-query">
          <section class="illegal-query-score">
            <p class="illegal-score-num">2</p>
            <p>违法记分</p>
          </section>
          <section class="illegal-query-score">
            <p class="illegal-score-num">500</p>
            <p>罚款金额</p>
          </section>
        </div>
        <div class="illegal-select">
          <input type="checkbox" id="illegalSelectRadio" name="illegalSelectRadio" v-model:checked="checkAddBorder">
          <label for="illegalSelectRadio"></label>
        </div>
      </div>
      <!-- 提交申诉表单 -->
      <div class="illegal-form">
        <div class="illegal-address">
          <p>联系地址</p>
          <input type="text" name="address" placeholder="请输入您的联系地址">
        </div>
        <div class="illegal-type">
          <p>申诉类型</p>
          <p class="btn-select" @click.stop="selectInformType()">{{selectInformTypeMsg}}</p>
          <div class="div-select-ul" v-if="illegalSelectShow">
            <ul>
              <li v-for="item in illegalSelectData" @click.stop="selectInformType(item.str)">{{item.str}}</li>
            </ul>
          </div>
        </div>
        <div class="illegal-content">
          <p class="illegal-con-color">申诉内容</p>
          <textarea placeholder="请输入..."></textarea>
        </div>
      </div>
      <div class="illegal-btn" @click="btnSubmitIllegal">提交</div>
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
#illegalResult{
  width:100%;
  height:100%;
  background:#FFF;
  .illegal-box{
    padding:38px 50px 0;
    width:100%;
    .illegal-list{
      position:relative;
      padding:20px 40px;
      margin-bottom:86px;
      width:644px;
      height:400px;
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
          margin-left:120px;
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
    }
    .green{
      border:3px solid #33c532;
    }
    .illegal-form{
      width:100%;
      p{
        margin-bottom:18px;
        color:#232323;
        font-size:28px;
      }
      input{
        margin-bottom:28px;
        padding-left:24px;
        width:100%;
        height:58px;
        background:#efeff4;
        border:1px solid #e2e2e7;
        border-radius:10px;
        color:#666;
        font-size:24px;
        outline:none;
      }
      .illegal-type{
        position:relative;
        .btn-select{
          padding:0 50px 0 24px;
          margin-bottom:0;
          width:100%;
          height:58px;
          background:#efeff4;
          border:1px solid #e2e2e7;
          border-radius:10px;
          color:#666;
          line-height:58px;
          font-size:24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        ul{
          position:absolute;
          padding:10px;
          width:100%;
          height:260px;
          top:104px;
          left:0;
          background:#FFF;
          border:1px solid #e2e2e7;
          li{
            width:100%;
            height:50px;
            color:#666;
            font-size:24px;
            line-height:40px;
            z-index:999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .illegal-content{
        margin-top:28px;
        width:100%;
        .illegal-con-color{
          color:#33c532;
        }
        textarea{
          padding-top:10px;
          padding-left:24px;
          width:100%;
          height:190px;
          background:#efeff4;
          border:1px solid #e2e2e7;
          border-radius:10px;
          color:#666;
          font-size:24px;
          resize:none;
          outline:none;
        }
      }
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
  }
}
</style>