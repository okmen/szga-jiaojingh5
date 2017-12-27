<!--
* 违法申诉  查询入口
 -->
<template>
  <div>
    <!-- <div class="nav">
      <div class="nav-tab" :class="{ 'active': cur_tab == 'appeal'}" @click="cur_tab = 'appeal'">交通违法申诉</div>
      <div class="nav-tab" :class="{ 'active': cur_tab == 'query'}" @click="illegalAppealEvent">申诉查询</div>
    </div> -->
    <div class="appealQuery-outer" v-if="cur_tab == 'appeal'">
      <div class="appealForm">
        <div class="form-item">
          <div class="item-left">姓名</div>
          <div class="item-right">
            <input class="text-input" v-model="name" readonly>
          </div>
        </div>
        <div class="form-item">
          <div class="item-left">联系方式</div>
          <div class="item-right">
            <input class="text-input" maxlength="11" v-model="mobilePhone" readonly>
          </div>
        </div>
        <div class="form-item">
          <div class="item-left">身份证号</div>
          <div class="item-right">
            <input class="text-input" v-model="identityCard" readonly>
          </div>
        </div>
        <div class="form-item">
          <div class="item-left">名下车辆</div>
          <div class="item-right div-select">
            <span class="btn-select min-btn-select" @click.stop="bindCarSelect()">{{ carJson.myNumberPlate }}</span>
            <div class="div-select-ul" v-if="bindCarListShow">
              <ul>
                <li v-for="item in bindCarList" @click="itemFn(item)">{{ item.myNumberPlate }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form-item">
          <div class="item-left">车牌类型</div>
          <div class="item-right">
            <input class="text-input" v-model="plateTypeList[carJson.plateType]" readonly>
          </div>
        </div>
        <div class="form-item">
          <div class="item-left">车架号</div>
          <div class="item-right">
            <input class="text-input" maxlength="4" v-model="carJson.behindTheFrame4Digits" readonly>
          </div>
        </div>
      </div>
      <button class="btn btn-blue" type="button" name="button" @click="btnClick()">查询</button>
      <div class="hint">
        <h4>温馨提示：</h4>
        <p>对交通安全违法行为记录有异议的（如已作出处罚决定，应该申请行政复议和提起行政诉讼），请详细填写申诉内容，我们会安排专人与您联系办理</p>
      </div>
      <page-bottom v-if="isWeChat"></page-bottom>
    </div>
    <div class="query-outer" v-else>
      <ul>
        <li v-for="(item, index) of illegalAppealData" :key='index' @click="illegalAppealEvent('success', index)">
            <p><span class="content txt-ellipsis">{{item.sSNR}}</span><span class="state">{{item.cLZT}}</span></p>
            <p class="address txt-ellipsis">{{item.lXDZ}}</p>
            <p class="time">提交成功：{{item.sSSJ}}</p>
        </li>
      </ul>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
  import { resultPost } from '../../../service/getData'
  import { queryLawlessByCar, IllegalAppealFeedback } from '../../../config/baseUrl'
  import { MessageBox, Toast } from 'mint-ui'
  import { mapActions } from 'vuex'
  export default {
    name: 'appealQuery',
    computed: {
      isWeChat: function () {
        return /_WeChat/g.test(this.$route.name)
      }
    },
    components: {
      'pageBottom': require('../../../components/pageBottom.vue')
    },
    data () {
      return {
        name: window.localStorage.getItem('userName'),
        mobilePhone: window.localStorage.getItem('mobilePhone'),
        identityCard: window.localStorage.getItem('identityCard'),
        cur_bindCar: window.localStorage.getItem('myNumberPlate') === 'undefined' ? '无' : window.localStorage.getItem('myNumberPlate'),
        bindCarList: [],
        carJson: {},
        bindCarListShow: false,
        plateType: window.localStorage.getItem('plateType') === 'undefined' ? '99' : window.localStorage.getItem('plateType'),
        plateTypeList: {
          '02': '蓝牌',
          '01': '黄牌',
          '06': '黑牌',
          '99': '无'
        },
        vehicleIdentifyNoLast4: window.localStorage.getItem('behindTheFrame4Digits') === 'undefined' ? '无' : window.localStorage.getItem('behindTheFrame4Digits'),
        cur_tab: 'appeal',      // 当前选项卡
        illegalAppealData: {}
      }
    },
    methods: {
      itemFn (item) {
        this.carJson = item
        this.bindCarListShow = false
      },
      bindCarSelect: function () {
        if (this.bindCarListShow === true) {
          this.bindCarListShow = false
        } else {
          this.bindCarListShow = true
        }
      },
      btnClick: function () {
        let reqData = {
          licensePlateNo: this.carJson.myNumberPlate,
          licensePlateType: this.carJson.plateType,
          vehicleIdentifyNoLast4: this.carJson.behindTheFrame4Digits,
          identityCard: this.carJson.identityCard,
          mobilephone: this.carJson.mobilephone
        }
        if (window.localStorage.getItem('myNumberPlate') === 'undefined') {
          MessageBox('提示', '当前用户没有车辆信息')
          return false
        }
        resultPost(queryLawlessByCar, reqData).then(json => {
          if (json.code === '0000') {
            let lawlessData = {
              info: {
                behindTheFrame4Digits: reqData.vehicleIdentifyNoLast4,
                plateType: reqData.licensePlateType,
                myNumberPlate: reqData.myNumberPlate,
                mobilephone: reqData.mobilephone,
                identityCard: reqData.identityCard
              },
              data: json.data
            }
            this.$store.commit('saveNewLawlessQuery', lawlessData)
            this.$router.push(/_WeChat/g.test(this.$route.name) ? 'newLawlessMsg_WeChat' : 'newLawlessMsg')
          } else {
            Toast({
              message: json.msg,
              position: 'middle',
              duration: 2000
            })
          }
        })
      },
      // 违法申诉列表  index-违法申诉列表索引  status-判断选项卡和列表的请求
      illegalAppealEvent: function (status, index) {
        this.cur_tab = 'query'
        let reqData = {
          identityCard: this.identityCard,
          sourceOfCertification: 'A'
        }
        resultPost(IllegalAppealFeedback, reqData).then(json => {
          if (json.code === '0000') {
            this.illegalAppealData = json.data
            let lawlessData = {
              index: index,
              data: json.data
            }
            if (status === 'success') {
              this.$store.commit('saveNewLawlessQuery', lawlessData)
              this.$router.push('appealQueryContent')
            }
          } else {
            Toast({
              message: '暂无申诉查询',
              position: 'middle',
              duration: 2000
            })
          }
        })
      },
      ...mapActions({
        postAppealQuery: 'postAppealQuery'
      })
    },
    created () {
      let cars = JSON.parse(window.localStorage.cars)
      if (cars.length === 0) {
        MessageBox('提示', '当前用户没有车辆信息')
        return false
      }
      this.bindCarList = cars
      this.carJson = cars[0]
    }
  }
</script>

<style lang="less" scoped>
.nav{
  font-size: 0;
  background-color:#fff;
  border-bottom:1px solid #dbdbdb;
  .nav-tab {
    font-size: 1rem;
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 100px;
    line-height: 100px;
    &.active {
       color: #2696dd;
       border-bottom: 6px solid #2696dd;
     }
  }
}
.query-outer {
  li {
    margin-top: 10px;
    padding: 28px 30px 0 38px;
    height: 195px;
    background-color: #fff;
    &:first-child {
      margin-top: 0;
    }
  }
  p {
    position: relative;
  }
  .content {
    display: block;
    width: 70%;
    font-size: 34px;
    color: #000;
  }
  .state {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    color: #e92b2a;
  }
  .address {
    font-size: 28px;
    color: #666;
    line-height: 70px;
  }
  .time {
    font-size: 20px;
    color: #999;
  }
  .txt-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

<style lang="less">
.appealQuery-outer {
  background-color: #FFF;
  padding:25px 50px 50px;
  .tp-bottom{
    margin-top: 28px;
  }
  .appealForm {
    .form-item {
      height: 58px;
      line-height:58px;
      margin-bottom: 28px;
      .item-left {
        float:left;
        display: inline-block;
        width: 24%;
        font-size: 28px;
        line-height: 58px;
      }
      .item-right {
        display: inline-block;
        width: 76%;
        &.div-select {
           .min-btn-select {
              background-position: 94% center !important;
              font-size:26px;
           }
         }
        input {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
