<template>
    <div id="eastSubscribe-outer">
      <p>页面正在建设中...</p>
    </div>
</template>

<script>
export default {
  name: 'eastSubscribe',
  mounted () {
    let ua = window.navigator.userAgent // 浏览器版本
    this.openId = window.localStorage.getItem('openId')
    let data = {
      url: 'https://gzh.stc.gov.cn/#/eastSubscribe'
    }
    if (!this.openId) {
      if (/MicroMessenger/i.test(ua)) { // 微信跳转获取openId
        window.localStorage.setItem('sourceOfCertification', 'C')
        // 一摇夺宝
        // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx629dea91ac256691&redirect_uri=https%3A%2F%2Fszjjapi.stc.gov.cn%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${data.url}#wechat_redirect`
        // 深圳交警
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc2b699cf2f919b58&redirect_uri=https%3A%2F%2Fszjjapi.stc.gov.cn%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${data.url}#wechat_redirect`
      } else if (/AlipayClient/i.test(ua)) { // 支付宝
        window.localStorage.setItem('sourceOfCertification', 'Z')
        window.location.href = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2016082201786470&scope=auth_user&redirect_uri=https%3A%2F%2Fszjjapi.stc.gov.cn%2FoauthAlipay%2Fcallback.html&state=${data.url}`
      }
    }
  }

}
</script>

<style lang="less">
@import '../../style/base';
#app{
  width: 100%;
  height: 100%;
}
#eastSubscribe-outer{
  width: 100%;
  height: 100%;
  position: relative;
  p{
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%)
  }
}
</style>
