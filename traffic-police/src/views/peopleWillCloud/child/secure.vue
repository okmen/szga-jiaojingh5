<template>
  <common :typeData='typeData' :reportingMatters="reportingMatters" @submit="submit"></common>
</template>
<script>
import common from './common'
import { resultPost } from '../../../service/getData'
import { secure } from '../../../config/baseUrl'
export default {
  name: 'facility',
  data () {
    return {
      typeData: [
        {
          'str': '设施',
          'selectType': 1001,
          'subTypeData': [
            '没有安装隔离护栏，或隔离护栏设置不完善、不合理',
            '没有交通标志标线，或交通标志标线设置不完善、不合理',
            '没有减速设施',
            '路口渠化不合理',
            '没有行人通过设施',
            '临崖、临水、急弯、陡坡、视距不良的路段没有完全防护设施，或安全防护设施不完善',
            '高速公路路肩宽度不符合国家标准且未按规定设置港湾式紧急停车带',
            '高速公路中央隔离栏、两侧防护网设置不完善'
          ]
        },
        {
          'str': '路灯照明',
          'selectType': 1002,
          'subTypeData': [
            '没有照明设施、不合理',
            '照明设施不能正常工作，或照明功率太低'
          ]
        },
        {
          'str': '绿化遮挡交通标志，或遮挡行车视线',
          'selectType': 1003,
          'subTypeData': [
            '绿化遮挡交通标志，或遮挡行车视线'
          ]
        },
        {
          'str': '占道施工存在安全隐患',
          'selectType': 1004,
          'subTypeData': [
            '占道施工存在安全隐患'
          ]
        },
        {
          'str': '容易发生水浸',
          'selectType': 1005,
          'subTypeData': [
            '容易发生水浸'
          ]
        },
        {
          'str': '居民、人群较为密集，交通秩序混乱',
          'selectType': 1006,
          'subTypeData': [
            '居民、人群较为密集，交通秩序混乱'
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
      console.log(JSON.stringify(reqData))
      resultPost(secure, JSON.stringify(reqData)).then(json => {
        console.log(json)
      })
    }
  },
  created () {
    this.reportingMatters = 1002
  }
}
</script>

<style lang='less'>
  
</style>