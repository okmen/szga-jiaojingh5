<template>
  <div class="dieselEngineTrucksDemand">
   <mt-cell class="dieCall" title="审核查询" to="dieseDemand" is-link></mt-cell>
   <!-- <mt-cell title="电子通行证" to="dieseDemand" is-link></mt-cell> -->
   <mt-cell title="RFID" to="dieseDemand" is-link></mt-cell>
  </div>
</template>

<script>
export default {
  name: 'dieselEngineTrucksDemand',

  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.dieselEngineTrucksDemand{
  .mint-cell-wrapper{
    border-bottom: 1px solid #ccc;
  }
}
</style>
