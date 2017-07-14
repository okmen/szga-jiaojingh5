<template>
  <div class="digitalReceipt">
    <div class="digital">
      <ul class="digitalUl">
        <li>深圳公安交通管理网上缴款缴费电子回单</li>
        <li>缴款编号 / 罚单编号：********** </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'digitalReceipt',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .digitalReceipt{
    background: #fff;
    .digital{
      padding: 26px 48px 10px 48px;
      .digitalUl{
        width: 100%;
        border: 1px solid #a7d9f9;
      }
      li{
        padding-left: 34px;
        font: 100 26px/70px '';
      }
      li:first-of-type{
        color: #a7d9f9;
        font: 700 32px/70px '';
        /*text-align: center;*/
        border-bottom: 1px solid #a7d9f9;
      }
    }
  }
</style>