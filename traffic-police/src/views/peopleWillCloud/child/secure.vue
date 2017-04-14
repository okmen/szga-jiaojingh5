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
          'id': 1001,
          'subTypeData': [
            {
              'str': '没有安装隔离护栏，或隔离护栏设置不完善、不合理',
              'id': 101
            },
            {
              'str': '没有交通标志标线，或交通标志标线设置不完善、不合理',
              'id': 102
            },
            {
              'str': '没有减速设施',
              'id': 103
            },
            {
              'str': '路口渠化不合理',
              'id': 104
            },
            {
              'str': '没有行人通过设施',
              'id': 105
            },
            {
              'str': '临崖、临水、急弯、陡坡、视距不良的路段没有完全防护设施，或安全防护设施不完善',
              'id': 106
            },
            {
              'str': '高速公路路肩宽度不符合国家标准且未按规定设置港湾式紧急停车带',
              'id': 107
            },
            {
              'str': '高速公路中央隔离栏、两侧防护网设置不完善',
              'id': 108
            }
          ]
        },
        {
          'str': '路灯照明',
          'id': 1002,
          'subTypeData': [
            {
              'str': '没有照明设施、不合理',
              'id': 101
            },
            {
              'str': '照明设施不能正常工作，或照明功率太低',
              'id': 102
            }
          ]
        },
        {
          'str': '绿化遮挡交通标志，或遮挡行车视线',
          'id': 1003,
          'subTypeData': [
            {
              'str': '绿化遮挡交通标志，或遮挡行车视线',
              'id': 101
            }
          ]
        },
        {
          'str': '占道施工存在安全隐患',
          'id': 1004,
          'subTypeData': [
            {
              'str': '占道施工存在安全隐患',
              'id': 101
            }
          ]
        },
        {
          'str': '容易发生水浸',
          'id': 1005,
          'subTypeData': [
            {
              'str': '容易发生水浸',
              'id': 101
            }
          ]
        },
        {
          'str': '居民、人群较为密集，交通秩序混乱',
          'id': 1006,
          'subTypeData': [
            {
              'str': '居民、人群较为密集，交通秩序混乱',
              'id': 101
            }
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
      this.$emit('submit')
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