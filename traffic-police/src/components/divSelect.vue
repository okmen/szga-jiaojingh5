<template>
  <div class="replace-select">
    <div class="select-title" v-if="thisInfo.title">{{thisInfo.title}}</div>
    <input type="text" class="selected-value" :class="{'width-full':!thisInfo.title}" v-model="currentVal" readonly @click.stop="showSelectUl" @blur="">
    <div class="div-select-ul" v-show="showUl" :class="{'width-full':!thisInfo.title}">
      <ul>
        <li v-for="item in thisInfo.option" @click="selectedValue(item)">{{item.str}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .replace-select{
    height: 85px;
    display: flex;
    justify-content: space-between;
    border: none;
    position: relative;
    line-height: 85px;
    align-items: center;
    .select-title{
        width: 31%;
    }
    .selected-value{
      width: 68%;
      padding-left: 20px;
      border: 2px solid #eee;
      border-radius: 8px;
      height: 70px;
      line-height: 70px;
      font-size: 30px;
      background: white url("../images/select1.png") 95% center/22px 13px no-repeat;
    }
    .div-select-ul{
      position: absolute;
      top: 78px;
      right: 0;
      background: white;
      width: 68%;
      padding-left: 20px;
      border: 2px solid #eee;
      line-height: 65px;
      z-index: 999;
      max-height: 400px;
      overflow: auto;
    }
    .width-full{
      width: 100%;
      padding-left: 0;
      text-align: center;
      padding-right: 22px;
      left: 0;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        showUl: false,
        currentId: '',
        currentVal: ''
      }
    },
    props: ['childInfo', 'defaultVal'],
    computed: {
      thisInfo () {
        return this.childInfo
      }
    },
    watch: {
      defaultVal (val) {
        this.selectedValue(val)
      }
    },
    methods: {
      selectedValue (item) {
        this.currentVal = item.str
        if (item.id) {
          this.currentId = item.id
          this.$emit('getSelected', this.currentId)
        } else {
          this.currentId = item.str
          this.$emit('getSelected', this.currentId)
        }
        this.showUl = false
      },
      showSelectUl () {
        let selectUl = document.getElementsByClassName('div-select-ul')
        Array.prototype.slice.call(selectUl).map(item => {
          item.style.display = 'none'
        })
        this.showUl = !this.showUl
      },
      disappearSelectUl () {
        this.showUl = false
      }
    },
    mounted () {
      this.currentVal = this.defaultVal
      document.addEventListener('click', this.disappearSelectUl)
      if (!this.defaultVal) {
        this.selectedValue(this.childInfo.option[0])
      }
    },
    destroyed () {
      document.removeEventListener('click', this.disappearSelectUl)
    }
  }
</script>
