<template>
  <common :typeData='typeData' :reportingMatters="reportingMatters" @submit="submit"></common>
</template>
<script>
import common from './common'
import { resultPost } from '../../../service/getData'
import { facility } from '../../../config/baseUrl'
export default {
  name: 'facility',
  data () {
    return {
      typeData: [
        {
          'str': '交通信号灯',
          'selectType': 1001,
          'subTypeData': [
            '手控坏',
            '异常闪烁',
            '一直亮绿灯',
            '一直亮红灯',
            '一直闪黄灯',
            '黄灯不亮',
            '红灯不亮',
            '绿灯不亮',
            '红黄绿一起闪',
            '红绿一起亮',
            '全亮红灯',
            '全亮绿灯',
            '异常黄闪',
            '灭灯',
            '停电',
            '烧灯芯',
            '机动车倒计时故障',
            '行人倒计时故障',
            '信号灯设备脱落',
            '行人灯坏',
            '灯杆倾斜',
            '行人过街按钮故障',
            '信号灯被撞',
            'Smooth中央系统异常',
            '脱机',
            '下载绿冲突检测错误',
            '下载获取控制数据丢失或有误',
            '通讯故障',
            '控制异常',
            '车检器故障',
            '其他现象',
            '绿冲突'
          ]
        }
      ]
    }
  },
  components: {
    common
  },
  methods: {
    submit: function (reqData) {
      resultPost(facility, JSON.stringify(reqData)).then(json => {
        console.log(json)
      })
    }
  },
  created () {
    this.reportingMatters = 1001
  }
}
</script>

<style lang='less'>
  
</style>