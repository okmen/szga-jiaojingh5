<template>
  <div class="newQueryByCar-outer">
    <div class="newQueryByCar-carArr">
      <ul>
        <li v-for="item in carArr" @click="getLawlessData(item)">
          <span>{{ item.myNumberPlate }}</span>
          <em v-if="item.isMySelf == '0'">本人</em>
          <em v-else>他人</em>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import { resultPost } from '../../../service/getData'
  // import { queryLawlessByCar, queryPay } from '../../../config/baseUrl'
  // import { verifyCode } from '../../../config/verifyCode'
  // import { Toast } from 'mint-ui'
  export default {
    name: 'newQueryByCar',
    data () {
      return {
        carArr: JSON.parse(window.localStorage.cars) || []
      }
    },
    mounted () {
    },
    methods: {
      getLawlessData (item) {
        let reqData = {
          licensePlateNo: item.myNumberPlate,
          licensePlateType: item.plateType,
          vehicleIdentifyNoLast4: item.behindTheFrame4Digits,
          identityCard: item.identityCard,
          mobilephone: item.mobilephone
        }
        console.log(reqData)
      }
    }
  }
</script>
<style lang="less">
  @import "./../../../style/base";
  .newQueryByCar-outer{

  }
</style>
