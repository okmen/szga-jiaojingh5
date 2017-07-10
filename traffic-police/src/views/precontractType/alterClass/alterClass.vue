<!-- 
*  #变更类#
 -->
<template>
  <div class="alter-outer">
    <div class="alter-select pad-side-50">
      <div class="alter-chose">
        <span>业务类型</span>
      </div>
      <div class="div-select alter-wd">
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
          'name': 'taxiUseAlter',
          'str': '出租客运车辆使用性质变更',
          'path': '/alterClass/taxiUseAlter'
        },
        {
          'name': 'numberAlter',
          'str': '机动车打刻原车发动机号码变更备案',
          'path': '/alterClass/numberAlter'
        },
        {
          'name': 'markAlter',
          'str': '机动车打刻原车辆识别代号变更备案',
          'path': '/alterClass/markAlter'
        },
        {
          'name': 'fileAlter',
          'str': '档案更正',
          'path': '/alterClass/fileAlter'
        },
        {
          'name': 'onlineCarAlter',
          'str': '网约车使用性质更正',
          'path': '/alterClass/onlineCarAlter'
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
      case '#/alterClass/taxiUseAlter':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/alterClass/numberAlter':
        this.typeSelectMassage = this.typeSelectData[1]
        break
      case '#/alterClass/markAlter':
        this.typeSelectMassage = this.typeSelectData[2]
        break
      case '#/alterClass/fileAlter':
        this.typeSelectMassage = this.typeSelectData[3]
        break
      case '#/alterClass/onlineCarAlter':
        this.typeSelectMassage = this.typeSelectData[4]
        break
    }
  }
}
</script>
<style lang="less">
.alter-outer {
  font-size: 26px;
  color: #000;
  overflow: hidden;
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

