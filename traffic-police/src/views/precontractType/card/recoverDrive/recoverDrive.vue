<!-- 
*  #恢复驾驶资格#
* 选择业务
 -->
<template>
  <div class="alter-class-outer">
    <div class="alter-select pad-side-50">
      <div class="alter-chose">
        <span>业务类型</span>
      </div>
      <div class="div-select alter-wd">
        <span id="btnSelect" class="btn-select bg-white" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop = "typeSelectClick(index+1)">
              <router-link class="link" :to="item.path">{{ item.str }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="alter-from pad-side-50">
      <router-view></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
export default {
  name: 'alterClass',
  data () {
    return {
      curTab: 'alterClass',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      typeSelectData: [
        {
          'name': 'noPhysicalCheck',
          'str': '逾期一年以上未体检类',
          'path': '/recoverDrive/noPhysicalCheck'
        },
        {
          'name': 'noChangeLicence',
          'str': '逾期一年以上未换证类',
          'path': '/recoverDrive/noChangeLicence'
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
    switch (window.location.hash) {
      case '#/recoverDrive/noPhysicalCheck':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/recoverDrive/noChangeLicence':
        this.typeSelectMassage = this.typeSelectData[1]
        break
    }
  },
  mounted () {
    document.addEventListener('click', this.select)
  },
  destroyed () {
    document.removeEventListener('click', this.select)
  }
}
</script>
<style lang="less">
.alter-class-outer {
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
  }
  .width-120 {
    width: 120px !important;
  }
  .width-70 {
    width: 70% !important;
  }
  .width-40{
    width: 40% !important;
  }
  .alter-select {
    height: 100px;
    background-color: #fff;
    position: relative;
    padding-left: 230px;
    .alter-chose{
      width: 180px;
      position: absolute;
      left: 50px;
      color: #666;
      line-height: 100px;
    }
    .alter-wd{
      padding-top: 22px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

