<template>
  <div class="civilization-outer">
    <!-- 导航上部分 -->
    <div class="civilization-nav margin-center radius-top border-bot-1">
      <router-link class="civilization-link border-right-1" to="/peopleWillCloud/facility">
        <div class="civilization-img">
          <em class="facility"></em>
        </div>
        <p class="civilization-str">这里设备坏了</p>
      </router-link>
      <router-link class="civilization-link" to="/peopleWillCloud/secure">
        <div class="civilization-img">
          <em class="secure"></em>
        </div>
        <p class="civilization-str">这有安全隐患</p>
      </router-link>
    </div>
    <!-- 导航下部分 -->
    <div class="civilization-nav margin-center radius-bot">
      <router-link class="civilization-link border-right-1" to="/peopleWillCloud/jam">
        <div class="civilization-img">
          <em class="jam"></em>
        </div>
        <p class="civilization-str">这里经常拥堵</p>
      </router-link>
      <router-link class="civilization-link" to="/peopleWillCloud/order">
        <div class="civilization-img">
          <em class="order"></em>
        </div>
        <p class="civilization-str">这里秩序混乱</p>
      </router-link>
    </div>
    <div class="civilization-news margin-center">
      <ul>
        <li v-for='item in news'>
          <a :href="item.href">{{item.str}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trafficCivilization',
  data () {
    return {
      news: [
        {
          'str': '深圳交警民意云平台运行情况分析（2016年12月22日至2016年12月8日）',
          'href': 'javascript:;'
        },
        {
          'str': '深圳交警民意云平台运行情况分析（2016年12月22日至2016年12月8日）',
          'href': 'javascript:;'
        },
        {
          'str': '深圳交警民意云平台运行情况分析（2016年12月22日至2016年12月8日）',
          'href': 'javascript:;'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.civilization-outer{
  padding-top: 47px;
  .margin-center{
    margin: 0 auto;
  }
  .border-bot-1{
    border-bottom: 2px solid #eaeaea;
    box-sizing: border-box;
  }
  .border-right-1{
    border-right: 2px solid #eaeaea;
    box-sizing: border-box;
  }
  .radius-top{
    border-radius: 5px 5px 0 0;
  }
  .radius-bot{
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 1px #dedede;
  }
  .civilization-nav{
    display: flex;
    width: 680px;
    height: 300px;
    overflow: hidden;
    text-align: center;
    justify-content: space-between;
    align-content: space-between;
    .civilization-link{
      display: block;
      width: 100%;
      height: 100%;
      background: #fff;
      .civilization-img{
        width: 100%;
        height: 190px;
        padding: 45px 0;
        box-sizing: border-box;
        em{
          display: block;
          width: 100%;
          height: 100%;
        }
        .facility{
          background: url('../../images/trafficCivilization-facility.png') center no-repeat;
          background-size: contain;
        }
        .secure{
          background: url('../../images/trafficCivilization-secure.png') center no-repeat;
          background-size: contain;
        }
        .jam{
          background: url('../../images/trafficCivilization-jam.png') center no-repeat;
          background-size: contain;
        }
        .order{
          background: url('../../images/trafficCivilization-order.png') center no-repeat;
          background-size: contain;
        }
      }
    }
  }
  .civilization-news{
    width: 680px;
    margin-top: 28px;
    background: #fff;
    border-radius: 5px;
    ul{
      padding: 0 34px;
      li{
        border-bottom: 2px solid #eaeaea;
        &:last-child{
          border: none;
        }
        a{
          display: block;
          width: 100%;
          line-height: 50px;
          padding: 10px 0 10px 26px;
          color: #4d7fa7;
          font-size: 28px;
          position: relative;
          &::before{
            display: block;
            content: '';
            width: 21px;
            height: 21px;
            position: absolute;
            background: url('../../images/list-style.png') no-repeat;
            background-size: cover;
            left: -16px;
            top: 35px;
          }
        }
      }
    }
  }
}
</style>