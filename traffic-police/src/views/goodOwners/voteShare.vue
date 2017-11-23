<template>
  <div @click="close" class="m-voteShare" v-if="value">
    <div class="pic"><img src="./styles/share.png"></div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    close () {
      console.log('233')
      this.$emit('input', false)
    }
  }
}
</script>
