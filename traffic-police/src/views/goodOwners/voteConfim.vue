<template>
    <div class="m-confirm" :class="{ open: value }">
      <div class="box">
        <div class="title">{{ title }}</div>
        <div class="text">{{ text }}</div>
        <div class="footer" :class="{ center: !escShow }">
          <div class="cancel" @click="esc" v-if="escShow">{{ escText }}</div>
          <div class="ok" @click="ok">{{ okText }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '温馨提示'
    },
    text: {
      type: String,
      default: '是否确认提交？'
    },
    okText: {
      type: String,
      default: '确定'
    },
    escText: {
      type: String,
      default: '取消'
    },
    escShow: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ok () {
      this.$emit('input', false)
      this.$emit('ok')
    },
    esc () {
      this.$emit('input', false)
    }
  }
}
</script>