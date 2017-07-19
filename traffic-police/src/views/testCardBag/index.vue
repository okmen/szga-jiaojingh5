<template>
  <div class="test-card-bag">
    <button class="form-template-submit" style="width: 100%" @click="getData">
      测试卡包
    </button>
    <div>
      {{cardBagData}}
    </div>
    <vue-calendar :date="time" :carNum="carNum" v-on:arrTime="testArrTime"></vue-calendar>
  </div>
</template>
<script>
  import {resultPost} from '../../service/getData'
  import wx from 'weixin-js-sdk'
  export default {
    data () {
      return {
        cardBagData: '',
        time: new Date().getTime(),
        carNum: '粤A12345'
      }
    },
    components: {
      'vueCalendar': require('./../../components/calendar.vue')
    },
    methods: {
      testArrTime (data) {
        console.log(data)
      },
      getData () {
        var that = this
        let requestData = {
          cardId: 'pPyqQjq_2LnZeey0y5XK-ArtZDSo'
        }
        resultPost('http://192.168.1.108/h5/cardConfig.html', requestData).then(data => {
          console.log(data)
          this.cardBagData = data
          let cardExt = {
            timestamp: data.data.timestamp,
            signature: data.data.signature
          }
          wx.addCard({
            cardList: [{
              cardId: data.data.cardId,
              cardExt: JSON.stringify(cardExt)
            }], // 需要添加的卡券列表
            success: function (res) {
//              var cardList = res.cardList // 添加的卡券列表信息
              that.cardBagData = JSON.stringify(res)
            }
          })
        })
      }
    }
  }
</script>
