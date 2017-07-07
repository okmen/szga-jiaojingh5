<template>
    <div class="replace-credentials">
      <div-select :childInfo="businessType" @getSelected="getBusinessType" :defaultVal="defaultVal"></div-select>
      <div class="exchange-license-line"></div>
      <router-view></router-view>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
</template>
<style lang="less" scoped>
  .replace-credentials>div{
    margin: 0 40px 30px;
  }
  .replace-credentials{
    height: auto;
    background: white;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .replace-credentials .exchange-license-line{
    height: 10px;
    background: #eeeeee;
    margin-left: 0;
    margin-right: 0;
  }
</style>
<script>
  export default {
    data () {
      return {
        defaultVal: '',
        businessType: {
          title: '业务类型',
          option: [
            {
              'str': '补领行驶证',
              'id': '01'
            },
            {
              'str': '换领行驶证',
              'id': '02'
            },
            {
              'str': '补换检验合格标志',
              'id': '03'
            },
            {
              'str': '补换机动车号牌',
              'id': '04'
            }
          ]
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (to.name === 'repairDrivingLicense') {
          vm.defaultVal = '补领行驶证'
        } else if (to.name === 'exchangeDrivingLicense') {
          vm.defaultVal = '换领行驶证'
        } else if (to.name === 'replaceQualifiedMark') {
          vm.defaultVal = '补换检验合格标志'
        } else if (to.name === 'replaceLicencePlate') {
          vm.defaultVal = '补换机动车号牌'
        }
      })
    },
    components: {
      divSelect: require('./components/divSelect.vue')
    },
    methods: {
      hopRouting (val) {
        if (val === '01') {
          this.$router.push('repairDrivingLicense')
        } else if (val === '02') {
          this.$router.push('exchangeDrivingLicense')
        } else if (val === '03') {
          this.$router.push('replaceQualifiedMark')
        } else if (val === '04') {
          this.$router.push('replaceLicencePlate')
        }
      },
      getBusinessType (val) {
        this.hopRouting(val)
      }
    }
  }
</script>
