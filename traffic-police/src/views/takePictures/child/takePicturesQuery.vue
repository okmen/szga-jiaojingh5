<template>
  <div class="takePicturesQuery-outer">
    <div class="takePicturesQuery-from pad-side-50" v-if="!$route.query.reportSerialNumber">
      <div id="takePicturesQuery-hbs">
        <ul class="takePicturesQuery-hbs-list">
          <li class="takePicturesQuery-hbs-item">
            <div class="takePicturesQuery-hbs-name">
              <span>举报查询</span>
            </div>
            <div class="takePicturesQuery-hbs-text">
              <input v-model="reportSerialNumber" class="text-input" type="text" name="" value="" placeholder="请输入您的记录号">
            </div>
          </li>
          <li class="takePicturesQuery-hbs-item">
            <div class="takePicturesQuery-hbs-name">
              <span>查询密码</span>
            </div>
            <div class="takePicturesQuery-hbs-text">
              <input v-model="password" class="text-input" type="password" name="" value="" placeholder="请输入您的查询密码">
            </div>
          </li>
        </ul>
      </div>
      <button class="btn btn-blue takp-button" type="button" name="button" @click.stop="takePicturesQuery()">查询</button>
    </div>
    <div class="takePicturesQueryResult" v-if="$route.query.reportSerialNumber">
      <div class="result-item">
        <div class="item item-left">违法时间:</div>
        <div class="item item-right">{{ item.illegalTime }}</div>
      </div>
      <div class="result-item">
        <div class="item item-left">违法路段:</div>
        <div class="item item-right">{{ item.illegalSections }}</div>
      </div>
      <div class="result-item">
        <div class="item item-left">情况说明:</div>
        <div class="item item-right">{{ item.situationStatement }}</div>
      </div>
      <div class="result-item">
        <div class="item item-left">受理状态:</div>
        <div class="item item-right">{{ item.status }}</div>
      </div>
      <div class="result-item">
        <span class="result-img" @click="img1_show = true">违法图片1</span>
      </div>
      <div class="result-item">
        <span class="result-img" @click="img2_show = true">违法图片2</span>
      </div>
      <div class="result-item">
        <span class="result-img" @click="img3_show = true" v-if="item.illegalImg3">违法图片3</span>
      </div>
      <mt-popup v-model="img1_show" popup-transition="popup-fade">
        <img :src="item.illegalImg1">
      </mt-popup>
      <mt-popup v-model="img2_show" popup-transition="popup-fade">
        <img :src="item.illegalImg2">
      </mt-popup>
      <mt-popup v-model="img3_show" popup-transition="popup-fade">
        <img :src="item.illegalImg3">
      </mt-popup>
    </div>
    <page-bottom v-if="isWeChat"></page-bottom>
  </div>
</template>
<script>
  import { resultPost } from '../../../service/getData'
  import { takePicturesQuery } from '../../../config/baseUrl'
  import { Toast } from 'mint-ui'
  export default {
    name: 'takePicturesQuery',
    data () {
      return {
        reportSerialNumber: '',            // 请求-记录号
        password: '',            // 请求-查询密码
        item: '',
        img1_show: false,
        img2_show: false,
        img3_show: false
      }
    },
    computed: {
      isWeChat: function () {
        return /_WeChat/g.test(this.$route.name)
      }
    },
    components: {
      'pageBottom': require('../../../components/pageBottom.vue')
    },
    methods: {
      takePicturesQuery: function () {
        let reqData = {
          reportSerialNumber: this.reportSerialNumber,
          password: this.password
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
        resultPost(takePicturesQuery, reqData).then(json => {
          if (!json.data) {
            Toast({
              message: json.msg,
              position: 'middle',
              className: 'white',
              duration: 3000
            })
          } else {
            this.img1_show = false
            this.img2_show = false
            this.img3_show = false
            this.$router.push({query: { 'reportSerialNumber': this.reportSerialNumber }})
            this.item = json.data
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .takePicturesQuery-outer {
    position: relative;
    background-color: white;
    .takePicturesQuery-from {
      background-color: #fff;
      #takePicturesQuery-hbs {
        padding-bottom: 20px;
        .takePicturesQuery-hbs-list {
          overflow: hidden;
          .takePicturesQuery-hbs-item {
            margin-top: 24px;
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .takePicturesQuery-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .takePicturesQuery-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .takePicturesQuery-hbs-code {
              margin-left: 40px;
              text-indent: 28px;
              width: 240px;
              height: 56px;
              text-decoration: underline;
            }
          }
        }
      }
    }
    .takePicturesQueryResult {
      padding: 20px 0;
      background-color: #fff;
      .result-item {
        padding: 20px 0;
        .item {
          display: inline-block;
        }
        .item-left {
          position: absolute;
          left: 30px;
          width: 25%;
          color:#888;
        }
        .item-right {
          position: relative;
          left: 27%;
          width:70%;
        }
        .result-img {
          color:#2696dd;
          text-decoration: underline;
          padding-left: 30px;
        }
      }
      .mint-popup{
        width: 80%;
        max-height: 80%;
        img{
          width: 100%;
          display: block;
        }
      }
    }
    .takp-button {
      margin-bottom: 20px;
    }
  }
</style>
