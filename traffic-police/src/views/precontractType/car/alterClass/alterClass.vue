<!-- 
*  #变更类#
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
      <router-view :businessId="curTabID"></router-view>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import { resultPost } from '../../../../service/getData'
import { getBusinessTypeId } from '../../../../config/baseUrl'
import { Toast } from 'mint-ui'
export default {
  name: 'alterClass',
  data () {
    return {
      curTab: 'alterClass',   // 当前 tab
      typeSelectShow: false,
      typeSelectMassage: '',
      curTabID: '',           // 当前选择业务 id
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
  created () {
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
  },
  mounted () {
    document.addEventListener('click', this.select)
  },
  destroyed () {
    document.removeEventListener('click', this.select)
  },
  methods: {
    typeSelectClick: function (index) {
      if (index) {
        index--
        this.typeSelectMassage = this.typeSelectData[index]
        this.curTab = this.typeSelectMassage.name
      }
      this.typeSelectShow = !this.typeSelectShow
      // 获取业务类型 id
      let taskReaData = {
        type: '1',
        part: '1'
      }
      if (this.curTab === 'taxiUseAlter') {
        taskReaData.code = '1111'
      } else if (this.curTab === 'numberAlter') {
        taskReaData.code = 'JD28'       // 机动车打刻原车发动机号码变更备案  JD28
      } else if (this.curTab === 'markAlter') {
        taskReaData.code = '3333'
      } else if (this.curTab === 'fileAlter') {
        taskReaData.code = '4444'
      } else if (this.curTab === 'onlineCarAlter') {
        taskReaData.code = '5555'
      }
      if (this.curTab === 'numberAlter') {
        resultPost(getBusinessTypeId, taskReaData).then(json => {
          if (json.code === '0000') {
            this.curTabID = json.data   // 当前选择业务的id
          } else {
            Toast({ message: json.msg, className: 'white', duration: 1500 })
          }
        })
      }
    },
    select: function () {
      this.typeSelectShow = false
    }
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

