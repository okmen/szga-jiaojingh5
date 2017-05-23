<template>
  <div class="illegalParking">
    <div class="ip-inform-box">
      <div class="=ip-inform-time">
        <div class="ip-inform-title">时间</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-only" disabled :value="currentDate">
        </div>
      </div>
      <div class="=ip-inform-number">
        <div class="ip-inform-title">号码车牌</div>
        <div class="ip-inform-content">
          <select name="" class="ip-inform-only">
            <option selected = "selected">{{myNumberPlate||111111111}}</option>
            <option selected = "selected">{{myNumberPlate||111111111}}</option>
            <option selected = "selected">{{myNumberPlate||111111111}}</option>
            <option selected = "selected">{{myNumberPlate||111111111}}</option>
          </select>
        </div>
      </div>
      <div class="=ip-inform-kind">
        <div class="ip-inform-title">号码种类</div>
        <div class="ip-inform-content">
          <select name="" class="ip-inform-only">
            <option value="item.type" v-for="item in plateType">{{item.str}}</option>
          </select>
        </div>
      </div>
      <div class="=ip-inform-IDcard">
        <div class="ip-inform-title">身份证号</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-only" disabled :value="IDcard">
        </div>
      </div>
      <div class="=ip-inform-ticket">
        <div class="ip-inform-title">罚单单号</div>
        <div class="ip-inform-content">
          <input type="text" placeholder="请输入罚单单号" class="ip-inform-only">
        </div>
      </div>
      <div class="=ip-inform-place">
        <div class="ip-inform-title">停车地点</div>
        <div class="ip-inform-content">
          <input type="text" class="ip-inform-local">
          <span class="ip-inform-local-img">
            <img src="../../images/location-1.png"/>
          </span>
        </div>
      </div>
      <div class="ip-inform-reason">
        <div class="ip-inform-title">停车原因</div>
        <div class="ip-inform-content">
          <textarea placeholder="请输入停车原因" class="ip-inform-park"></textarea>
        </div>
      </div>
    </div>
    <div class="ip-photo-box">
      <div class="ip-photo-header">
        <span class="ip-photo-title">图片上传</span>
        <span class="ip-photo-check">点击名称查看图片案例</span>
      </div>
      <div class="ip-photo-content">
        <div class="ip-photo-top">
          <div class="ip-photo-item">
            <div class="ip-photo-img">
              <img src="../../images/ticket.png"/>
            </div>
            <div class="ip-photo-remake">罚单</div>
          </div>
          <div class="ip-photo-item">
            <div class="ip-photo-img">

              <img src="../../images/bigscence1.png"/></div>
            <div class="ip-photo-remake">大场景1</div>
          </div>
          <div class="ip-photo-item">
            <div class="ip-photo-img"><img src="../../images/headstock.png"/></div>
            <div class="ip-photo-remake">大场景(含车头正面)
            </div>
          </div>
        </div>
        <div class="ip-photo-bottom">
          <div class="ip-photo-item">
            <div class="ip-photo-img"><img src="../../images/front5.png"/></div>
            <div class="ip-photo-remake">前5米无车辆全景</div>
          </div>
          <div class="ip-photo-item">
            <div class="ip-photo-img">
              <img src="../../images/back5.png"/></div>
            <div class="ip-photo-remake">后5米无车辆全景</div>
          </div>
        </div>
      </div>
    </div>
    <div class="submit" @click="submit">
      提 &nbsp交
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<style lang="less" scoped>
  .illegalParking{
    padding-top: 26px;
    background: white;
  }
  .ip-inform-box > div {
    height: 96px;
    display: flex;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: space-between;
    align-items: center;
  }
  input,textarea,select{
    border: 1px solid #e2e2e7;
    color: #999;
  }
  .ip-inform-title {
    font-size: 30px;
  }

  .ip-inform-only {
    width: 504px;
    height: 60px;
    border-radius: 8px;
    padding: 0 22px;
  }
  .ip-inform-content {
    width: 504px;
    display: flex;
    justify-content: space-between;
  }

  .ip-inform-province, .ip-inform-plate {
    height: 60px;
    width: 116px;
    padding: 0 22px;
    border-radius: 8px;
  }

  .ip-inform-plate {
    width: 345px;
  }

  .ip-inform-local {
    height: 60px;
    width: 436px;
    border-radius: 8px;
  }

  .ip-inform-park {
    width: 504px;
    height: 186px;
    resize: none;
    border-radius: 8px;
    padding: 18px 22px;
  }

  .ip-inform-box .ip-inform-reason {
    align-items: flex-start;
    height: 186px;
    margin-top: 12px;
  }
.ip-inform-local-img{
  width: 30px;
  height: 41px;
  display: inline-block;
  margin-top: 10px;
}
  .ip-inform-local-img img{
    height:100%;
  }
  .ip-photo-title {
    margin-left: 50px;
  }

  .ip-photo-check {
    font-size: 26px;
    color: #9e9e9e;
    margin-left: 32px;
  }

  .ip-photo-box {
    margin-top: 64px;
  }

  .ip-photo-img {
    height: 192px;
    width: 192px;
    border: 2px solid #dddde1;
    border-radius: 10px;
  }

  .ip-photo-content {
    margin-left: 50px;
    margin-right: 50px;
  }

  .ip-photo-top, .ip-photo-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .ip-photo-bottom {
    justify-content: flex-start;
  }
  .ip-photo-item {
    margin-top: 30px;
  }
  .ip-photo-bottom .ip-photo-item {
    margin-right: 34px;
    margin-top: 48px;
  }
  .ip-photo-remake {
    font-size: 23px;
    color: #666666;
    text-align: center;
    text-decoration: underline;
    margin-top: 18px;
  }
  .submit{
    margin: 68px 50px 52px;
    height: 80px;
    width: 650px;
    background: #09bb07;
    text-align: center;
    line-height: 80px;
    color: white;
    font-size: 30px;
    border-radius: 10px;
  }
  .ip-photo-img{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .ip-photo-img img{
    height: 82%;
  }
  .ip-photo-bottom .ip-photo-img img{
    height: 100%;
  }
</style>
<script>
  export default {
    data () {
      return {
        currentDate: '',
        myNumberPlate: '',
        plateType: '',
        IDcard: ''
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.getUserInfo()
        vm.getNowFormatDate()
      })
    },
    methods: {
      getUserInfo () {
        this.myNumberPlate = window.localStorage.getItem('myNumberPlate')
//        var number = window.localStorage.getItem('plateType')
        this.plateType = this.$store.state.licenseSelectData
        this.IDcard = window.localStorage.getItem('identityCard')
      },
      submit () {

      },
      getNowFormatDate () {
        /* eslint-disable */
        var date = new Date ()
        /* eslint-enable */
        var seperator1 = '-'
        var seperator2 = ':'
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        this.currentDate = `${date.getFullYear()}${seperator1}${month}${seperator1}${strDate} ${date.getHours()}${seperator2}${date.getMinutes()}${seperator2}${date.getSeconds()}`
      }
    }
  }
</script>
