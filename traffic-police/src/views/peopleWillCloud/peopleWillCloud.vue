<template>
  <div class="peopleWillCloud-outer">
    <div class="peopleWillCloud-select pad-side-50">
      <p>请选择需要举报的事项</p>
      <div class="div-select">
        <span id="btnSelect" class="btn-select" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop="typeSelectClick(index+1)">
              <router-link class="link" :to="item.path">{{item.str}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="peopleWillCloud-form pad-side-50">
      <!-- <facility v-if="curTab === 'facility'" @submit="submit()"></facility>
      <secure v-else-if="curTab === 'secure'" @submit="submit()"></secure>
      <jam v-else-if="curTab === 'jam'" @submit="submit()"></jam>
      <order v-else @submit="submit()"></order> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'peopleWillCloud',
    data () {
      return {
        curTab: 'facility',
        typeSelectShow: false,
        typeSelectData: [
          {
            'name': 'facility',
            'str': '这里设施坏了',
            'path': '/peopleWillCloud/facility'
          },
          {
            'name': 'secure',
            'str': '这有安全隐患',
            'path': '/peopleWillCloud/secure'
          },
          {
            'name': 'jam',
            'str': '这里经常拥堵',
            'path': '/peopleWillCloud/jam'
          },
          {
            'name': 'order',
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
          this.curTab = this.typeSelectMassage.name
        }
        this.typeSelectShow = !this.typeSelectShow
      },
      select: function () {
        this.typeSelectShow = false
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
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .peopleWillCloud-form{
    margin-top: 10px;
    background: #fff;
  }
}
</style>