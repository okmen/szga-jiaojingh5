<template>
  <div id="illegalResult">
    <div class="illegal-box">
      <!-- 违法结果查询结果 -->
      <div v-for="(item, index) in AppealQueryData" class="illegal-list" :class="{ green: item.checkAddBorder }">
        <div class="illegal-record">
          <p>通知书号：<span>{{item.billNo}}</span></p>
          <p>违法时间：<span>{{item.illegalTime}}</span></p>
          <p>执法单位：<span>{{item.illegalUnit}}</span></p>
          <p>违法行为：<span>{{item.illegalDesc}}</span></p>
          <p>违法地点：<span>{{item.illegalAddr}}</span></p>
        </div>
        <div class="illegal-query">
          <section class="illegal-query-score">
            <p class="illegal-score-num">{{item.punishScore}}</p>
            <p>违法记分</p>
          </section>
          <section class="illegal-query-score">
            <p class="illegal-score-num">{{item.punishAmt}}</p>
            <p>罚款金额</p>
          </section>
        </div>
        <div class="illegal-select">
          <input type="checkbox" :id="'illegalSelectRadio'+ index" :name="'illegalSelectRadio'+ index" v-model:checked="item.checkAddBorder" @click="inputClick(index)">
          <label :for="'illegalSelectRadio'+ index"></label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        AppealQueryData: ''
      }
    },
    created () {
      this.AppealQueryData = this.showAppealQuery
    },
    methods: {
      inputClick: function (index) {
        this.AppealQueryData.forEach((item) => {
          item.checkAddBorder = false
        })
        this.AppealQueryData[index].checkAddBorder = true
      }
    },
    computed: {
      ...mapGetters([
        'showAppealQuery'
      ])
    }
  }
</script>
<style lang="less">
#illegalResult{
  width:100%;
  background:#FFF;
  .illegal-box{
    padding:38px 50px 80px;
    width:100%;
    box-sizing: border-box;
    .illegal-list{
      position:relative;
      padding:20px 40px;
      margin-bottom:86px;
      width:100%;
      box-sizing: border-box;
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
        overflow: hidden;
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
    }
    .green{
      border:3px solid #33c532;
    }
  }
}
</style>