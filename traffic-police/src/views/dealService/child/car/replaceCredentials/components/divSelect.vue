<template>
  <div class="replace-select">
    <div class="select-title">{{thisInfo.title}}</div>
    <div class="selected-value" @click="showSelectUl">{{currentVal}}</div>
    <div class="div-select-ul" v-if="showUl">
      <ul>
        <li v-for="item in thisInfo.option" @click="selectedValue(item)">{{item.str}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .replace-select{
    height: 65px;
    display: flex;
    justify-content: space-between;
    background: white url("../../../../../../images/select1.png") 95% center/22px 13px no-repeat;
    border: none;
    position: relative;
    line-height: 65px;
    .select-title{
        width: 33%;
    }
    .selected-value{
      width: 66%;
      padding-left: 20px;
      border: 2px solid #eee;
      border-radius: 8px;
      line-height: 65px;
    }
    .div-select-ul{
      position: absolute;
      top: 65px;
      right: 0;
      background: white;
      width: 66%;
      padding-left: 20px;
      border: 2px solid #eee;
      z-index: 999;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        showUl: false,
        currentVal: ''
      }
    },
    props: ['childInfo'],
    computed: {
      thisInfo () {
        return this.childInfo
      }
    },
    watch: {
      currentVal (val) {
        this.$emit('getSelected', val)
      }
    },
    methods: {
      selectedValue (item) {
        this.currentVal = item.str
        this.showUl = false
      },
      showSelectUl () {
        this.showUl = !this.showUl
      }
    }
  }
</script>
