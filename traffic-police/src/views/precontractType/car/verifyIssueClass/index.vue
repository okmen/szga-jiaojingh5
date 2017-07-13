<template>
    <div class="form-template">
      <div-select :childInfo="businessType" @getSelected="getBusinessType" :defaultVal="defaultVal"></div-select>
      <div class="exchange-license-line"></div>
      <router-view></router-view>
      <div v-wechat-title="$route.meta.title"></div>
    </div>
</template>
<style scoped>
  .form-template .exchange-license-line{
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
              'str': '机动车打刻原车发动机号码变更备案',
              'id': 'changeEngineNumber'
            },
            {
              'str': '出租客运车辆使用性质变更',
              'id': 'changeUseNature'
            }
          ]
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.businessType.option.map(item => {
          if (item.id === to.name) {
            vm.defaultVal = item
          }
        })
      })
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    methods: {
      getBusinessType (val) {
        this.$router.push(val)
      }
    }
  }
</script>
