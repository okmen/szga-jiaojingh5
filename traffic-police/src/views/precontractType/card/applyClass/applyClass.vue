<template>
  <div class="applyClass-outer">
    <div class="applyClass-select pad-side-50 clear">
      <p class="applyClass-chose">业务类型</p>
      <div class="div-select applyClass-wd left">
        <span id="btnSelect" class="btn-select" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop = "typeSelectClick(index+1)">
              <router-link class="link" :to="item.path">{{ item.str }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="applyClass-from pad-side-50">
      <router-view></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
export default {
  name: 'applyClass',
  data () {
    return {
      curTab: 'applyClass',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      typeSelectData: [
        {
          'name': 'armyLicence',
          'str': '持军队、武警警察部队机动车驾驶证驾驶',
          'path': '/applyClass/armyLicence'
        },
        {
          'name': 'temporaryLicence',
          'str': '临时机动车驾驶证许可证申领',
          'path': '/applyClass/temporaryLicence'
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
      case '#/applyClass/armyLicence':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/applyClass/temporaryLicence':
        this.typeSelectMassage = this.typeSelectData[1]
        break
    }
  }
}
</script>
<style lang="less" scoped>
.applyClass-outer {
  font-size: 26px;
  color: #000;
  position: relative;
  .width-120 {
    width: 120px !important;
  }
  .width-70 {
    width: 70% !important;
  }
  .width-40{
    width: 40% !important;
  }
  .applyClass-select {
    width: 100%;
    background-color: #fff;
    position: relative;
    .applyClass-chose{
      float: left;
      width: 180px;
      color: #666;
      line-height: 100px;
    }
    .applyClass-wd{
      width: 465px;
      padding-top: 22px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .applyClass-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

