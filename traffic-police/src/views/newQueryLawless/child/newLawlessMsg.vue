<template>
  <div class="newLawlessMsg-outer">
    <div class="newLawlessMsg-top">
      <p>共有<span>{{ lawlessData.data.length }}</span>条违法记录</p>
    </div>
    <div class="newLawlessMsg-list">
      <ul>
        <li v-for="item in lawlessData.data">
          <div class="newLawlessMsg-item-title">
            <p>违法信息</p>
            <span @click.stop="clickJump(item)">{{ claimList[item.isNeedClaim] }}</span>
          </div>
          <div class="newLawlessMsg-item-content">
            <p class="newLawlessMsg-item-content-No">违法编号：<span>{{ item.billNo }}</span></p>
            <p class="newLawlessMsg-item-content-car">{{ item.licensePlateNo }}</p>
            <p class="newLawlessMsg-item-content-time">{{ item.illegalTime }}</p>
            <p class="newLawlessMsg-item-content-add">{{ item.illegalAddr }}</p>
            <p class="newLawlessMsg-item-content-desc">{{ item.illegalDesc }}</p>
            <p class="newLawlessMsg-item-content-amt">{{ item.punishAmt }}</p>
            <p class="newLawlessMsg-item-content-score">{{ item.punishScore }}</p>
            <p class="newLawlessMsg-item-content-unit">{{ item.illegalUnit }}</p>
            <!-- <p class="newLawlessMsg-item-content-fun">{{ item.illegalTime }}</p> -->
            <div class="newLawlessMsg-item-btn">
              <button>违法申诉</button>
              <button>查看违法图片</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { queryPay, claimConfirm } from '../../../config/baseUrl'
  // import { verifyCode } from '../../../config/verifyCode'
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'newLawlessMsg',
    data () {
      return {
        lawlessArr: [],
        claimList: {
          '0': '直接缴款',
          '1': '需要打单',
          '2': '需要前往窗口办理'
        }
      }
    },
    computed: {
      lawlessData: function () {
        return this.$store.state.newLawlessQuery
      }
    },
    created () {
      // this.init() // 初始化页面，查询名下所有车辆的违法
    },
    methods: {
      clickJump (item) {
        if (item.isNeedClaim === '0') { // 直接缴款
          let reqData = {
            billNo: item.billNo,
            licensePlateNo: item.licensePlateNo
          }
          resultPost(queryPay, reqData).then(json => {
            console.log(json)
            if (json.code === '0000') {
              window.location.href = json.msg
            }
          })
        } else if (item.isNeedClaim === '1') { // 需要打单
          MessageBox.confirm('确定打单吗?').then(action => {
            let reqData = {
              illegalNo: item.billNo
            }
            resultPost(claimConfirm, reqData).then(json => {
              console.log(json)
              if (json.code === '0000') {
                MessageBox('提示', '打单成功')
              }
            })
          })
        } else if (item.isNeedClaim === '2') { // 需要前往窗口办理，跳转预约
          if (!JSON.parse(window.localStorage.isLogin)) {
            MessageBox.confirm('您暂未登录,是否前往登录').then(action => {
              this.$router.push('/login')
            })
            return false
          }
          let lawlessDeal = {
            data: item,
            info: this.lawlessData.info
          }
          this.$store.commit('saveNewLawlessDeal', lawlessDeal)
          this.$router.push('/illegalTimeSelect')
        }
      }
    }
  }
</script>
<style lang="less">
  @import "./../../../style/base";
  .newLawlessMsg-outer{
    background-color: #eee;
    .newLawlessMsg-top{
      background-color: #fff;
      margin-bottom: 15px;
      p{
        font-size: 32px;
        color: #333;
        text-align: center;
        line-height: 85px;
        span{
          color: #2696dd;
          font-weight: 600;
        }
      }
    }
    .newLawlessMsg-list{
      padding: 35px 50px 100px;
      background-color: #fff;
      li{
        border: 1px solid #2696dd;
        .newLawlessMsg-item-title{
          padding: 0 30px;
          font-size: 30px;
          display: flex;
          justify-content: space-between;
          line-height: 75px;
          border-bottom: 1px solid #2696dd;
          span{
            color: #2696dd;
            text-decoration: underline;
          }
        }
        .newLawlessMsg-item-content{
          padding: 15px 35px;
          p{
            line-height: 32px;
            padding-left: 55px;
            font-size: 26px;
            color: #333;
            margin-bottom: 15px;
            position: relative;
          }
          .newLawlessMsg-item-content-No{
            font-size: 28px;
            padding-left: 0;
            span{
              color: #ff0000;
            }
          }
          .newLawlessMsg-item-content-car{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 30px;
              height: 23px;
              background-image: url('../../../images/carIco.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-time{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 30px;
              height: 30px;
              background-image: url('../../../images/time_2.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-add{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 25px;
              height: 34px;
              background-image: url('../../../images/local.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-desc{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 30px;
              background-image: url('../../../images/warn.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-amt{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/punish.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-score{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/score_p.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-unit{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/unit.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-content-fun{
            &::after{
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 28px;
              height: 28px;
              background-image: url('../../../images/fun.png');
              background-size: cover;
            }
          }
          .newLawlessMsg-item-btn{
            display: flex;
            justify-content: space-evenly;
            button{
              height: 50px;
              padding: 0 10px;
              background-color: #2696dd;
              color: #fff;
              font-size: 26px;
              border-radius: 4Px;
            }
          }
        }
      }
    }
  }
</style>
