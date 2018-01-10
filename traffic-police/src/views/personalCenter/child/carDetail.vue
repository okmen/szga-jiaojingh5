<template>
<div class="car-detail">
  <mt-cell title="车牌号码" :value="queryInfo.numberPlateNumber"></mt-cell>
  <mt-cell title="车牌种类" :value="plateTypeOne(queryInfo.plateType)"></mt-cell>
  <mt-cell title="审验日期" :value="queryInfo.annualReviewDate"></mt-cell>
  <mt-cell title="车架号" :value="queryInfo.behindTheFrame4Digits"></mt-cell>
  <mt-cell title="车辆状态" value="正常"></mt-cell>
</div>
</template>

<script>
  export default {
    name: 'car-detail',
    computed: {
      queryInfo () {
        return this.$route.query
      },
      licenseSelectData () {
        return this.$store.state.licenseSelectData
      }
    },
    methods: {
      plateTypeOne (value) {
        for (let i = 0, len = this.licenseSelectData.length; i < len; i++) {
          if (this.licenseSelectData[i].type === value) {
            return this.licenseSelectData[i].str
          }
        }
      }
    }
  }
</script>

<style scoped>
.car-detail{
  padding-top: 20px;
}
</style>
