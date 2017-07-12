<!-- 
* 满分学习
 -->
<template>
  <div id="fullmarkStudy">
    <div class="alter-select pad-side-50">
      <div class="alter-chose"><span>业务类型</span></div>
      <div class="div-select alter-wd">
        <input class="text-input bg-white" value="满分学习考试" readonly>
      </div>
    </div>
    <div class="alter-from pad-side-50">
      <common :orderPlaceData="appointPlaceData"
              @appointTaskClick="appointTask"></common>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
import common from './recoverDrive/child/common.vue'
export default {
  name: 'fullmarkStudy',
  data () {
    return {
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' }
      ]
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('满分学习', params)
    }
  }
}
</script>
<style lang="less">
#fullmarkStudy {
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
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
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>

