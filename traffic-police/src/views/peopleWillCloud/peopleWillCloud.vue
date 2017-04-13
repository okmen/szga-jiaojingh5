<template>
  <div class="peopleWillCloud-outer">
    <div class="peopleWillCloud-select pad-side-50">
      <p>请选择需要举报的事项</p>
      <div class="div-select">
        <span id="btnSelect" class="btn-select" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop = "typeSelectClick(index+1)">
              <router-link :to="item.path" class="peopleWillCloud-type">  {{item.str}} </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view class="peopleWillCloud-form pad-side-50"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'peopleWillCloud',
    data () {
      return {
        typeSelectShow: false,
        typeSelectData: [
          {
            'str': '这里设施坏了',
            'path': '/peopleWillCloud/facility'
          },
          {
            'str': '这有安全隐患',
            'path': '/peopleWillCloud/secure'
          },
          {
            'str': '这里经常拥堵',
            'path': '/peopleWillCloud/jam'
          },
          {
            'str': '这里秩序混乱',
            'path': '/peopleWillCloud/order'
          }
        ]
      }
    },
    methods: {
      typeSelectClick: function (index) {
        if (index) {
          index--
          this.typeSelectMassage = this.typeSelectData[index]
        }
        if (this.typeSelectShow === true) {
          this.typeSelectShow = false
        } else {
          this.typeSelectShow = true
        }
      }
    },
    created () {
      document.addEventListener('click', (e) => {
        this.typeSelectShow = false
      })
      switch (window.location.hash) {
        case '#/peopleWillCloud/facility':
          this.typeSelectMassage = this.typeSelectData[0]
          break
        case '#/peopleWillCloud/secure':
          this.typeSelectMassage = this.typeSelectData[1]
          break
        case '#/peopleWillCloud/jam':
          this.typeSelectMassage = this.typeSelectData[2]
          break
        case '#/peopleWillCloud/order':
          this.typeSelectMassage = this.typeSelectData[3]
          break
      }
    }
  }
</script>

<style lang="less">
@import "./../../style/base";

.peopleWillCloud-outer{
  font-size: 26px;
  color: #000;
  position: relative;
  .peopleWillCloud-select{
    background-color: #fff;
    padding-bottom: 24px;
    position: relative;
    p {
      color: #666;
      line-height: 68px;
    }
    .peopleWillCloud-type{
      display: block;
    }
  }
  .peopleWillCloud-form{
    margin-top: 10px;
    background: #fff;
  }
}
</style>