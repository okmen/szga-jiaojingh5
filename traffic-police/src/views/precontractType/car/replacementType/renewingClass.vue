<template>
  <div class="renewing-outer">
    <div class="renewing-select pad-side-50 clear">
      <p class="renewing-chose">业务类型</p>
      <div class="div-select renewing-wd left">
        <span id="btnSelect" class="btn-select bg-colour" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop = "typeSelectClick(index+1)">
              <router-link class="link" :to="item.path">{{ item.str }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="renewing-from pad-side-50">
      <router-view></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
export default {
  name: 'renewingClass',
  data () {
    return {
      curTab: 'replacementType',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      typeSelectData: [
        {
          'name': 'renewingCollarCredential',
          'str': '换领机动车登记证书',
          'path': '/replacementType/renewingCollarCredential'
        },
        {
          'name': 'replacementNumber',
          'str': '补领机动车号牌',
          'path': '/replacementType/replacementNumber'
        },
        {
          'name': 'renewingDrivingLicense',
          'str': '补换机动车行驶证',
          'path': '/replacementType/renewingDrivingLicense'
        },
        {
          'name': 'renewingQualification',
          'str': '补换检验合格标志',
          'path': '/replacementType/renewingQualification'
        },
        {
          'name': 'renewingCertificate',
          'str': '申领/补领机动车登记证书',
          'path': '/replacementType/renewingCertificate'
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
      case '#/replacementType/renewingCollarCredential':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/replacementType/replacementNumber':
        this.typeSelectMassage = this.typeSelectData[1]
        break
      case '#/replacementType/renewingDrivingLicense':
        this.typeSelectMassage = this.typeSelectData[2]
        break
      case '#/replacementType/renewingQualification':
        this.typeSelectMassage = this.typeSelectData[3]
        break
      case '#/replacementType/renewingCertificate':
        this.typeSelectMassage = this.typeSelectData[4]
        break
    }
  }
}
</script>
<style lang="less" scoped>
.renewing-outer {
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
  .renewing-select {
    width: 100%;
    background-color: #fff;
    position: relative;
    .renewing-chose{
      float: left;
      width: 180px;
      color: #666;
      line-height: 100px;
    }
    .renewing-wd{
      width: 465px;
      padding-top: 22px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .renewing-from{
    background:#FFF;
    margin-top:10px;
  }
  .bg-colour{
    background-color: #fff;
  }
}
</style>

