<template>
  <div class="handyService-outer">
    <ul class="handyService-list">
      <li class="handyService-item" v-for="item in listData">
        <router-link :to='item.serviceLink'>
          <p>{{item.serviceName}}</p>
        </router-link>
      </li>
    </ul>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'handyService',
    data () {
      return {
        listData: [
          {
            'serviceName': '一键挪车',
            'serviceLink': '/moveCar'
          },
          {
            'serviceName': '一键救援',
            'serviceLink': '/starUser'
          },
          {
            'serviceName': '自主考试',
            'serviceLink': '/starUser'
          }
        ]
      }
    },
    mounted () {
      if (window.localStorage.getItem('isLogin') === 'false') {
        this.$router.push('login')
      }
    }
  }
</script>
<style lang='less'>
  @import "./../../style/base";
  .handyService-outer{
    .handyService-list{
      .handyService-item{
        width: 100%;
        line-height: 90px;
        font-size: 26px;
        border-bottom: 1px solid #dbdbdb;
        background: url('../../images/space.png') no-repeat;
        background-position: 96% center;
        background-size: 12px 21px;
        &:hover{
          background-color: #7ab8df;
        };
        a{
          display: block;
          p{
            margin-left: 46px;
          }
        }
      }
    }
  }
</style>