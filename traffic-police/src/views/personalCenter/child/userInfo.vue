<template>
<div class="userInfo-outer">
  <div class="userInfo-banner">
    <div class="userInfo-avatar"><img :src="avatar"></div>
    <p class="userInfo-name">{{userName}}</p>
    <div class="userInfo-mobile">
      <i class="mobile"></i>
      {{mobile}}
    </div>
  </div>
  <ul class="userInfo-list">
    <li class="userInfo-item">
      <router-link class="link" to="/updateMobile">
        <div class="userInfo-item-name">手机号码</div>
        <div class="userInfo-item-arrow">
          <p>{{mobile}}</p>
        </div>
      </router-link>
    </li>
    <li class="userInfo-item">
      <router-link class="link" to="/updatePwd">
        <div class="userInfo-item-name">账号安全</div>
        <div class="userInfo-item-arrow">
          <p>修改密码</p>
        </div>
      </router-link>
    </li>
    <li class="userInfo-item">
      <router-link class="link" to="/updateUser">
        <div class="userInfo-item-name">补全或修改资料</div>
        <div class="userInfo-item-arrow">
        </div>
      </router-link>
    </li>
  </ul>
  <div class="userInfo-btn pad-side-50">
    <button class="btn btn-red" type="button" name="button" @click.stop="deleteVehicle()">取消微信綁定</button>
    <div class="tips">
      <p>取消关联后，将不可及时获取到您车辆的交通违法提醒、驾驶证到期换证提醒等信息。</p>
    </div>
  </div>
  <select-tip v-if="hintShow" tipsText="是否确定取消绑定？" @confirm="submit()" @cancle="cancle()"></select-tip>
</div>
</template>

<script>
import { deleteVehicle } from '../../../config/baseUrl.js'
import { resultPost } from '../../../service/getData.js'
import selectTip from '../../../components/selectTip.vue'

export default{
  name: 'userInfo',
  data () {
    return {
      avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdWgUYimT51r4FGMGtDoQGZ6S32U9TraS8BWgJ-JgHSDi2GhsUtQ',
      userName: '刘小明',
      mobile: '13600138000',
      hintShow: false
    }
  },
  components: {
    selectTip
  },
  methods: {
    deleteVehicle: function () {
      this.hintShow = true
    },
    submit: function () {
      let reqData = {
        // identityCard: this.identityCard,
        // openId: this.openId,
        // unionId: this.unionId
        identityCard: '1156646515564651',
        openId: 'a56sc32a1cs',
        unionId: 'ascasc65655'
      }
      console.log('退出登录状态，返回星级用户页面')
      resultPost(deleteVehicle, reqData).then(json => {
        console.log(json)
      })
    },
    cancle: function () {
      this.hintShow = false
    }
  }
}
</script>

<style lang="less">
@import '../../../style/base.less';

.userInfo-outer{
  background: #fff;
  .userInfo-banner{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 360px;
    background: url("../../../images/user-banner.png") no-repeat;
    background-size: cover;
    font-size: 30px;
    overflow: hidden;
    .userInfo-avatar{
      width: 140px;
      height: 140px;
      margin-top: 36px;
      border-radius: 50%;
      background: #fff;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        vertical-align: top;
      }
    }
    .userInfo-name{
      margin-top: 10px;
      color: #fff;
    }
    .userInfo-mobile{
      margin-top: 30px;
      color: #fff;
      i{
        display: inline-block;
        width: 20px;
        height: 36px;
        vertical-align: -3px;
        margin-right: 12px;
        background-image: url('../../../images/userInfo-mobile.png');
        background-size: cover;
      }
    }
  }
  .userInfo-list{
    .userInfo-item{
      width: 100%;
      line-height: 94px;
      border-bottom: 1px solid #dadada;
      .link{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0 20px 0 26px;
        box-sizing: border-box;
        font-size: 28px;
        .userInfo-item-arrow{
          padding-right: 30px;
          background: url('../../../images/userInfo-arrow.png') right no-repeat;
          background-size: 12px 22px;
          p{
            color: #999;
          }
        }
      }
    }
  }
  .userInfo-btn{
    .btn-red{
      background-color: #f76260;
    }
    .tips{
      margin-top: 20px;
      padding-left: 38px;
      background: url('../../../images/userInfo-warn.png') 0 0 no-repeat;
      background-size: 24px;
      p{
        font-size: 18px;
        line-height: 26px;
        color: #999;
      }
    }
  }
}

</style>