<!--  *换领机动车登记证书 -->
<template>
  <div class="renewingCollarCredential">
    <common @submitClick="subFn"></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'renewingCollarCredential',
  data () {
    return {
    }
  },
  components: {
    common
  },
  methods: {
    subFn: function (params) {
      console.log('renewingCollarCredential', params)
    }
  }
}
</script>
<style lang="css" scoped>
</style>