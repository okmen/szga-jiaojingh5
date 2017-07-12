<!-- 补换检验合格标志 -->
<template>
  <div class="renewingQualification">
    <common @submitClick="subFn"></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'renewingQualification',
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params) {
      console.log('renewingQualification', params)
    }
  }
}
</script>
<style lang="css" scoped>
</style>