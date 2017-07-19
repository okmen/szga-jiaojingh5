<!--  *换领机动车登记证书 -->
<template>
  <div class="renewingCollarCredential">
    <common 
      @submitClick="subFn"
      :currentBusinessId="businessId"
      :currentCode="businessCode"
    ></common>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  name: 'renewingCollarCredential',
  props: ['businessId', 'businessCode'],    // 拿到当前业务的id  然后传给 common组件
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