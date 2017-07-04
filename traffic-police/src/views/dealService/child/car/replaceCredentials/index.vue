<template>
    <div class="replace-credentials" @click="selectUl">
      <div-select :childInfo="businessType" @getSelected="getBusinessType"></div-select>
      <div class="exchange-license-line"></div>
      <router-view></router-view>
    </div>
</template>
<style lang="less" scoped>
  .replace-credentials>div{
    margin: 0 40px 30px;
  }
  .replace-credentials{
    height: 100%;
    background: white;
    position: relative;
    padding-top: 20px;
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
              'str': '补换合格检验标志',
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
    components: {
      divSelect: require('./components/divSelect.vue')
    },
    methods: {
      selectUl () {
        this.$store.commit('setSelectShowul', false)
      },
      getBusinessType (val) {
        console.log(val)
      }
    }
  }
</script>
