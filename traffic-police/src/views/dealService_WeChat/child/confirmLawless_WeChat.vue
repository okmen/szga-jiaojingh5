<template lang="html">
  <div class="confirmLawless-WeChat">
    <confirm-lawless></confirm-lawless>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
export default {
  components: {
    'confirmLawless': require('../../newQueryLawless/child/confirmLawless.vue'),
    'pageBottom': require('../../../components/pageBottom.vue')
  }
}
</script>

<style lang="css">
</style>
