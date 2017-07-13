<!-- 补换机动车号牌 -->
<template>
  <div class="replacementNumber">
    <common @submitClick="subFn"></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'replacementNumber',
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params) {
      console.log('replacementNumber', params)
    }
  }
}
</script>
<style lang="css" scoped>
</style>