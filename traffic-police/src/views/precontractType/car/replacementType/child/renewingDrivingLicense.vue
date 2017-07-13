<!-- 补换机动车行驶证 -->

<template>
  <div class="renewingDrivingLicense">
    <common @submitClick="subFn"></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'renewingDrivingLicense',
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params) {
      console.log('renewingDrivingLicense', params)
    }
  }
}
</script>
<style lang="css" scoped>
</style>