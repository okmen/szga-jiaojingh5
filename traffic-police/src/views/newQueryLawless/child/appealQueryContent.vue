<template>
  <div class="content">
    <div class="explain row">
      <p class="title" @click="isShow=!isShow">您的申诉<i :class="{ active: isShow }"></i></p>
      <transition name="fade">
      <div v-show="isShow">
        <p><span class="name txt">流水线&nbsp;:</span><span class="txt">&nbsp;{{appealQueryData.iD}}</span></p>
        <p><span class="name txt">违法时间&nbsp;:</span><span class="txt">&nbsp;{{appealQueryData.wFSJ}}</span></p>
        <p><span class="name txt">执法单位&nbsp;:</span><span class="txt">&nbsp;{{appealQueryData.zFDE}}</span></p>
        <p><span class="name txt">违法地点&nbsp;:</span><span class="txt">&nbsp;{{appealQueryData.wFDD}}</span></p>
        <p><span class="name txt">申诉内容&nbsp;:</span><span class="txt">&nbsp;{{appealQueryData.sSNR}}</span></p>
      </div>
      </transition>
    </div>
    <div class="reply row">
      <p class="title">交警回复</p>
      <span class="txt">{{appealQueryData.cLYJMS}}</span>
    </div>
    <div class="evaluate row">
      <p class="title">服务评价</p>
      <div class="block star-box">
        <el-rate v-model="starValue" class="star-item"></el-rate>
      </div>
      <mt-button class="confirm-btn" size="large" :disabled="!starValue" @click="showConfirmFun">确认信息</mt-button>
    </div>
    <div class="mask-wrap" v-show="showConfirm">
      <div class="inner">
        <p class="title">温馨提示</p>
        <p class="msg">您是否确定提交？</p>
        <p><span class="cancel" @click="showConfirm=!showConfirm">取消</span><span class="confirm" @click="confirmFun()">确定</span></p>
      </div>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { Rate } from 'element-ui'
import { Button, Indicator, Toast } from 'mint-ui'
import { IllegalEvaluateResult } from '../../../config/baseUrl'
export default {
  name: 'appealQueryContent',
  data () {
    return {
      isShow: true,
      showConfirm: false,
      starValue: null,
      noMessage: '请耐心等待交警回复!',
      appealQueryData: {}
    }
  },
  components: {
    elRate: Rate,
    mtButton: Button
  },
  computed: {
    lawlessData: function () {
      return this.$store.state.newLawlessQuery
    }
  },
  methods: {
    showConfirmFun: function () {
      if (this.appealQueryData.cLYJMS === this.noMessage) {
        Toast({
          message: '请耐心等待交警回复',
          position: 'middle',
          duration: 2000
        })
        this.starValue = null
        return
      }
      this.showConfirm = !this.showConfirm
    },
    confirmFun: function () {
      Indicator.open()
      let reqData = {
        businessType: '3',    // 3-违法申述
        serialNumber: this.appealQueryData.iD,
        stars: this.starValue,
        sourceOfCertification: 'C'    // C-微信；Z-支付宝；A-移动APP
      }
      resultPost(IllegalEvaluateResult, reqData).then(json => {
        if (json.code === '0000') {
          Indicator.close()
          this.$router.push('/')
        } else {
          Toast({
            message: json.msg,
            position: 'middle',
            duration: 2000
          })
          setTimeout(() => {
            this.$router.go(-1)
          }, 2000)
        }
      })
    }
  },
  mounted () {
    if (!this.lawlessData.data) {
      this.$router.go(-1)
      return
    }
    let dataIndex = this.lawlessData.index
    this.appealQueryData = {...this.lawlessData.data[dataIndex]}
    if (!this.appealQueryData.cLYJMS) {
      this.appealQueryData.cLYJMS = this.noMessage
    }
  }
}
</script>
<style lang="less" scoped>
textarea {
  margin: 0 auto;
  padding: 24px 0 0 24px;
  width: 100%;
  height: 374px;
  font-size: 24px;
  resize: none;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
}
.content {
  position: relative;
}
.row {
  margin-top: 10px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #fff;
}
.title {
  font-size: 30px;
  color: #000;
  line-height: 74px;
}
.txt {
  font-size: 24px;
  color: #666;
  line-height: 44px;
}
.name {
  color: #000;
}
.explain {
  &>div {
    border-top: 1px solid #f4f4f4;
    padding-bottom: 30px;
  }
  .title {
    position: relative;
  }
  i {
    position: absolute;
    right: 0;
    top: 45%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #000;
    border-bottom: 0;
  }
  .active {
    border-top: 0;
    border-bottom: 10px solid #000;
  }
}
.reply {
  padding-bottom: 26px;
  .title {
    border-bottom: 1px solid #f4f4f4;
  }
  .txt {
    margin-top: 16px;
    display: block;
  }
}
.evaluate {
  overflow: hidden;
  padding-bottom: 72px;
  .title {
    text-align: center;
  }
}
.confirm-btn {
  margin-top: 110px;
  height: 90px;
  background: #09bb07;
  color: #FFF;
  font-size: 32px;
  border-radius: 10px;
}
.star-box {
  margin: 36px 0 60px;
  text-align: center;
}
.star-item {
  transform: scale(1.5);
}
.mask-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(51,51,51,0.8);
  position: fixed;
  top: 0;
  left: 0;
  .inner {
    width: 550px;
    height: 340px;
    margin: 50% auto 0;
    background-color: #fff;
    border-radius: 10px;
    p {
      text-align: center;
    }
    span {
      display: inline-block;
      width: 180px;
      height: 70px;
      line-height: 70px;
      font-size: 28px;
      color: #fff;
      border-radius: 10px;
    }
    .title {
      padding-top: 20px;
      font-size: 32px;
      color: #000;
    }
    .msg {
      margin: 20px 0 60px;
      font-size: 30px;
      color: #666;
    }
    .cancel {
      background-color: #999;
    }
    .confirm {
      margin-left: 40px;
      background-color: #09bb07;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
