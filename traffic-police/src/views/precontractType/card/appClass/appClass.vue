<template>
  <div class="appClass-outer">
    <div class="appClass-select pad-side-50 clear">
      <p class="appClass-chose">业务类型</p>
      <div class="div-select appClass-wd left">
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
    <div class="appClass-from pad-side-50">
      <router-view :businessId="curTabID" :businessCode="busines"></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { resultPost } from '../../../../service/getData'
import { getBusinessTypeId } from '../../../../config/baseUrl.js'
import { Toast } from 'mint-ui'
export default {
  name: 'appClass',
  data () {
    return {
      curTab: 'appClass',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      curTabID: '',           // 当前选择业务 id
      busines: '',            // 当前选择业务code
      typeSelectData: [
        {
          'name': 'armyLicence',
          'str': '持军队、武警警察部队机动车驾驶证驾驶',
          'path': '/appClass/armyLicence'
        },
        {
          'name': 'temporaryLicence',
          'str': '临时机动车驾驶证许可证申领',
          'path': '/appClass/temporaryLicence'
        }
      ],
      businescode: ''
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.typeSelectShow = false
    })
    this.switchFn()
    this.businessTypeIdFn()
  },
  methods: {
    typeSelectClick: function (index) {
      if (index) {
        index--
        this.typeSelectMassage = this.typeSelectData[index]
        this.curTab = this.typeSelectMassage.name
        this.switchFn()
        this.businessTypeIdFn()
      }
      this.typeSelectShow = !this.typeSelectShow
    },
    select: function () {
      this.typeSelectShow = false
    },
    switchFn: function () {
      switch (window.location.hash) {
        case '#/appClass/armyLicence':
          this.typeSelectMassage = this.typeSelectData[0]
          this.businescode = 'ZJ11'
          break
        case '#/appClass/temporaryLicence':
          this.typeSelectMassage = this.typeSelectData[1]
          this.businescode = 'ZJ16'
          break
      }
    },
    // 获取业务id
    businessTypeIdFn: function () {
      let businesData = {
        type: '0',
        part: '',
        code: this.businescode
      }
      resultPost(getBusinessTypeId, businesData).then(json => {
        if (json.code === '0000') {
          this.curTabID = json.data
          this.busines = this.businescode
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.appClass-outer {
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
  .appClass-select {
    width: 100%;
    background-color: #fff;
    position: relative;
    .appClass-chose{
      float: left;
      width: 180px;
      color: #666;
      line-height: 100px;
    }
    .appClass-wd{
      width: 465px;
      padding-top: 22px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .appClass-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

