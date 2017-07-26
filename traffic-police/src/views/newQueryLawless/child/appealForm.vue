<!-- 
* 违法申诉 提交表单
 -->
<template>
  <div id="appealForm">
    <!-- 提交申诉表单 -->
    <div class="illegal-form">
      <div class="illegal-address">
        <p>联系地址</p>
        <input type="text" name="address" placeholder="请输入您的联系地址" v-model="claimantAddress">
      </div>
      <div class="illegal-address">
        <p>联系电话</p>
        <input type="text" name="address" placeholder="请输入您的联系电话" v-model="claimantPhone">
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
        <textarea placeholder="请输入..." v-model="appealContent"></textarea>
      </div>
    </div>
    <div class="illegal-btn" @click="btnSubmitIllegal()">提交</div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { illegalAppeal } from '../../../config/baseUrl'
  import { MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        illegalSelectShow: false,   // 是否显示申诉下拉列表
        selectInformTypeMsg: '记录的机动车号牌信息错误的', // 申诉类型
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
        ],
        claimantPhone: '', // 申诉联系电话
        claimantAddress: '', // 申诉联系地址
        appealContent: '' // 申诉内容
      }
    },
    created () {
      this.AppealQueryData = this.showAppealQuery
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
        let checkedItem = ''
        this.AppealQueryData.forEach((item, index) => {
          if (item.checkAddBorder) {
            checkedItem = item
          }
        })
        if (!checkedItem) {
          MessageBox('提示', '至少选中一个违法进行申诉')
          return false
        }
        let reqData = {
          billNo: checkedItem.billNo, // 违法书单编号
          illegalTime: checkedItem.illegalTime, // 违法时间
          illegalAddress: checkedItem.illegalAddr, // 违法地点
          illegalDesc: checkedItem.illegalDesc, // 违法行为
          punishAmount: checkedItem.punishAmt, // 罚款金额
          punishScore: checkedItem.punishScore, // 罚分
          agency: checkedItem.illegalUnit, // 执法单位
          claimant: checkedItem.carOwner, // 申诉人姓名
          claimantAddress: this.claimantAddress, // 申诉联系地址
          claimantPhone: this.claimantPhone, // 申人联系电话
          appealType: '1', // 申诉类型
          appealContent: this.appealContent, // 申诉内容
          licensePlateNo: checkedItem.licensePlateNo,
          identityCard: window.localStorage.getItem('identityCard'),
          sourceOfCertification: 'C',
          userCode: ''
        }
        resultPost(illegalAppeal, reqData).then(json => {
          MessageBox('提示', json.msg)
        })
      }
    }
  }
</script>
<style lang="less">
#appealForm{
  width:100%;
  background:#FFF;
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
</style>
