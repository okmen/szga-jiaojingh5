<template>
  <common :typeData='typeData'></common>
</template>
<script>
import common from './common'
export default {
  name: 'facility',
  data () {
    return {
      typeData: [
        {
          'str': '设施',
          'subTypeData': [
            '没有安装隔离护栏，或隔离护栏设置不完善、不合理',
            '没有交通标志标线，或交通标志标线设置不完善、不合理',
            '没有减速设施',
            '路口渠化不合理',
            '没有行人通过设施',
            '临崖、临水、急弯、陡坡、视距不良的路段没有完全防护设施，或安全防护设施不完善',
            '告诉公路路肩宽度不符合国家标准且未按规定设置港湾式紧急停车带',
            '高速公路中央隔离栏、两侧防护网设置不完善'
          ]
        },
        {
          'str': '路灯照明',
          'subTypeData': [
            '没有照明设施、不合理',
            '照明设施不能正常工作，或照明功率太低'
          ]
        },
        {
          'str': '绿化遮挡交通标志，或遮挡行车视线',
          'subTypeData': [
            '绿化遮挡交通标志，或遮挡行车视线'
          ]
        },
        {
          'str': '占道施工存在安全隐患',
          'subTypeData': [
            '占道施工存在安全隐患'
          ]
        },
        {
          'str': '容易发生水浸',
          'subTypeData': [
            '容易发生水浸'
          ]
        },
        {
          'str': '居民、人群较为密集，交通秩序混乱',
          'subTypeData': [
            '居民、人群较为密集，交通秩序混乱'
          ]
        }
      ]
    }
  },
  components: {
    common
  }
}
</script>

<style lang='less'>
  
</style>