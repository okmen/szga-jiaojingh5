<template>
  <div class="confirmLawlessPrint-outer">
    <!-- 结果块 -->
    <div class="queryResults pad-side-50" v-for="confirm in confirmList">
      <div class="results-box">
        <div class="box-header">
          <div class="header-item left">违章信息</div>
          <div class="header-item right order-print" @click.stop="claimConfirm()">{{ dealTypeList[confirm.dealType] }}</div>
        </div>
        <div class="box-body">
          <div class="body-left-side">
            <div class="left-number">违法编号 :<i>{{ confirm.illegalNo }}</i></div>
            <div class="left-line">
              <span><i class="car"></i></span>
              <p>{{ confirm.licensePlateNo }}</p>
            </div>
            <div class="left-line">
              <span><i class="time"></i></span>
              <p>{{ confirm.illegalTime }}</p>
            </div>
            <div class="left-line"><span>
              <i class="local"></i></span>
              <p>{{ confirm.illegalAddr }}</p>
            </div>
            <div class="left-line">
              <span><i class="warn"></i></span>
              <p>{{ confirm.illegalDesc }}</p></div>
            <div class="left-line">
              <span><i class="punish"></i></span>
              <p>{{ confirm.punishAmt }}元</p>
            </div>
            <div class="left-line">
              <span><i class="score"></i></span>
              <p>{{ confirm.punishScore }}分</p>
            </div>
          </div>
          <a class="body-right-side">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { getClaimConfirm, claimConfirm } from '../../../config/baseUrl'
  import { MessageBox, Toast } from 'mint-ui'
  export default {
    name: '',
    data () {
      return {
        confirmList: [],
        dealTypeList: {
          '0': '无需打单',
          '1': '需要打单',
          '2': '需要窗口办理'
        }       // 返回-是否需要打单（编号转换）
      }
    },
    mounted () {
      let reqData = {
        licensePlateNo: this.$route.params.licensePlateNo,
        licensePlateType: this.$route.params.plateType,
        mobilephone: window.localStorage.getItem('mobilePhone'),
        identityCard: window.localStorage.getItem('identityCard'),
        sourceOfCertification: 'C'
      }
      console.log(reqData)
      resultPost(getClaimConfirm, reqData).then(json => {
        this.confirmList = json.data
        console.log(json)
      })
    },
    methods: {
      claimConfirm: function () {
        MessageBox({
          title: '',
          message: '用户您好，一旦确认或打印了处罚决定书后，15日内不处理将会产生滞纳金，是否确认马上打印决定书？',
          showCancelButton: true,
          confirmButtonText: '是的'
        }).then(action => {
          action === 'confirm' && this.claim()
        })
      },
      claim: function () {
        let reqData = {
          illegalNo: this.illegalNo,
          identityCard: window.localStorage.getItem('identityCard'),
          sourceOfCertification: 'C',
          mobilephone: window.localStorage.getItem('mobilePhone')
        }
        for (let key in reqData) {
          if (!reqData[key]) {
            console.log(key)
            Toast({
              message: '信息填写不完整',
              position: 'bottom',
              className: 'white'
            })
            return false
          }
        }
        resultPost(claimConfirm, reqData).then(json => {
          console.log(json)
//          if (json.code === '0000') {
//            window.location.hash = '/userInfo'
//          } else {
//            MessageBox({
//              title: '',
//              message: json.msg
//            })
//          }
        })
      }
    }
  }
</script>
<style lang="less">
  .queryResults {
    color: #333 !important;
    margin: 100px 0;
    .results-box {
      border: 1px solid #a7d9f9;
      background-color: #fff;
      border-radius: 4px;
      .box-header {
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #a7d9f9;
        &:after { display: block; content: "clear"; height: 0; clear: both; overflow: hidden; visibility: hidden; }
        .header-item {
          font-size: 1rem;
          padding: 0 24px;
          font-weight: bold;
        &.order-print {
           color: #2696dd;
           text-decoration: underline;
         }
        }
      }
      .box-body {
        color: #333;
        padding: 0 24px 10px;
        position: relative;
        .body-left-side {
          width: 80%;
          .left-number {
            font-size: 0.95rem;
            font-weight: bold;
            height: 80px;
            line-height: 80px;
            i {
              color: #f46263;
              margin-left: 30px;
            }
          }
          .left-line {
            padding: 8px 0;
            font-size: 0.9rem;
            &:after { display: block; content: "clear"; height: 0; clear: both; overflow: hidden; visibility: hidden; }
            span {
              display: inline-block;
              width: 50px;
              text-align: center;
              position: absolute;
            }
            p {
              display: inline-block;
              position: relative;
              left: 70px;
              vertical-align: middle;
            }
            i {
              display: inline-block;
              width: 34px;
              height: 34px;
              background-image: url("./../../../images/A.png");
              background-size: 100%;
              vertical-align: middle;
              &.time {
                 background-image: url("./../../../images/time_2.png");
               }
              &.car {
                 background-image: url("./../../../images/car.png");
                 background-repeat: no-repeat;
                 width: 40px;
               }
              &.punish {
                 background-image: url("./../../../images/punish.png");
                 background-repeat: no-repeat;
                 width: 36px;
                 height: 38px;
               }
              &.local {
                 background-image: url("./../../../images/local.png");
                 width: 32px;
                 height: 40px;
               }
              &.warn {
                 background-image: url("./../../../images/warn.png");
                 width: 36px;
                 height: 38px;
               }
              &.score {
                 background-image: url("./../../../images/score_p.png");
                 width: 36px;
                 height: 36px;
               }
              }
          }
        }
        .body-right-side {
          position: absolute;
          top: 50%;
          right: 20px;
          margin-top: -20px;
          display: block;
          width: 20px;
          height: 40px;
          background-image: url("./../../../images/login-right.png");
          background-size: cover;
        }
      }
    }
  }
</style>
