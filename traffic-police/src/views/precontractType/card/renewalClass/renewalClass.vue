<template>
  <div class="renewalClass-outer">
    <div class="renewalClass-select pad-side-50 clear">
      <p class="renewalClass-chose">业务类型</p>
      <div class="div-select renewalClass-wd left">
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
    <div class="renewalClass-from pad-side-50">
      <router-view></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
export default {
  name: 'renewalClass',
  data () {
    return {
      curTab: 'renewalClass',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      typeSelectData: [
        {
          'name': 'overseasLicence',
          'str': '持境外驾驶证申请换证',
          'path': '/renewalClass/overseasLicence'
        },
        {
          'name': 'HkLicence',
          'str': '香港机动车驾驶证面试换证',
          'path': '/renewalClass/HkLicence'
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
      case '#/renewalClass/overseasLicence':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/renewalClass/HkLicence':
        this.typeSelectMassage = this.typeSelectData[1]
        break
    }
  }
}
</script>
<style lang="less" scoped>
.renewalClass-outer {
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
  .renewalClass-select {
    width: 100%;
    background-color: #fff;
    position: relative;
    .renewalClass-chose{
      float: left;
      width: 180px;
      color: #666;
      line-height: 100px;
    }
    .renewalClass-wd{
      width: 465px;
      padding-top: 22px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .renewalClass-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

