<template>
  <div class="replace-select">
    <div class="select-title" v-if="childInfo.title" :class="{'font-size28':childInfo.font}">{{childInfo.title}}</div>
    <div class="selected-value" :class="{'width-full':!childInfo.title}" @click.stop="showSelectUl">{{currentVal}}</div>
    <div class="div-select-ul" v-show="showUl" :class="{'width-full':!childInfo.title}">
      <ul>
        <li v-for="(item, index) in childInfo.option" @click="selectedValue(item)" v-if="item.str">{{item.str || ''}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .replace-select {
    height: 85px;
    display: flex;
    justify-content: space-between;
    border: none;
    position: relative;
    line-height: 85px;
    align-items: center;
    .select-title {
      width: 31%;
      white-space: nowrap;
    }
    .font-size28 {
      font-size: 28px;
    }
    .selected-value {
      width: 68%;
      padding-left: 20px;
      border: 2px solid #eee;
      border-radius: 8px;
      height: 70px;
      line-height: 70px;
      padding-right: 50px;
      font-size: 30px;
      background: white url("../images/select1.png") 95% center/22px 13px no-repeat;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .div-select-ul {
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
      li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .width-full {
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
        showUl: false,   // 显示下拉框的参数
        currentId: '',   // 返回父组件的值
        currentVal: ''   // 界面显示的值
      }
    },
    props: ['childInfo', 'defaultVal'],  // childInfo: 父组件传进来的值， defaultVal：默认值
    watch: {
      defaultVal (val) {
        this.selectedValue(val)
      },
      childInfo: {
        handler (val) {
          this.selectedValue(val.option[0], 0)
        },
        deep: true
      }
    },
    methods: {
      selectedValue (item, index) {     // 点击下拉框的某一项
        this.currentVal = item.str  // 选中的值
        if (item.id) {                // 如果父组件传进来的参数没有id 则返回父组件的的字符串
          this.currentId = item.id
          this.$emit('getSelected', this.currentId, index, item.str)
        } else {
          this.currentId = item.str
          this.$emit('getSelected', this.currentId, index, item.str)
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
      if (!this.defaultVal && this.childInfo.option[0]) {       // 如果父组件没有传入默认显示值，则传入的对象中的第一项作为默认选项
        this.selectedValue(this.childInfo.option[0])
      }
    },
    destroyed () {
      document.removeEventListener('click', this.disappearSelectUl)
    }
  }
</script>
