/**
 * 微信 js sdk: //res.wx.qq.com/open/js/jweixin-1.2.0.js
 */
import wx from 'weixin-js-sdk'
import { resultGetNoLoading } from '../service/getData'
/* eslint-disable */

function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let href = window.location.href;
  let r = href.substr(href.indexOf('?') + 1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return false;
}

let ua = window.navigator.userAgent; //浏览器版本

var openId = getQueryString('openId') ? getQueryString('openId') : localStorage.getItem('openId');
var headImgUrl = getQueryString('headimgurl') ? getQueryString('headimgurl') : localStorage.getItem('headImgUrl');
var nickname = getQueryString('nickname') ? getQueryString('nickname') : localStorage.getItem('nickname');

var openId = 'zhanshancheng';
var headImgUrl = 'zhanshancheng';
var nickname = 'zhanshancheng';

let url = window.location.href;
let data = {
  hostUrl: encodeURIComponent(url.split('#')[0]),
  hostUrl1: url.split('#')[1],
  url: encodeURIComponent(url),
  openIdURL: url.split('?openId')[0]
}
if (!!openId && openId !== 'undefined') {
  localStorage.setItem('openId', decodeURIComponent(openId));
  localStorage.setItem('headImgUrl', decodeURIComponent(headImgUrl));
  localStorage.setItem('nickname', decodeURIComponent(nickname));
} else {
  if (/MicroMessenger/i.test(ua)) { // 微信跳转获取openId
  window.localStorage.setItem('sourceOfCertification', 'C')
  // 交警u-load环境
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc2b699cf2f919b58&redirect_uri=http%3A%2F%2Fszjj.u-road.com%2Fapi%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${data.openIdURL}#wechat_redirect`

  } else if (/AlipayClient/i.test(ua)) { // 支付宝
    window.localStorage.setItem('sourceOfCertification', 'Z')
    window.location.href = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2016082201786470&scope=auth_user&redirect_uri=http%3A%2F%2Fszjj.u-road.com%2Fapi%2FoauthAlipay%2Fcallback.html&state=${data.openIdURL}`

  } else {
    window.localStorage.setItem('sourceOfCertification', 'C')
    // 交警u-load环境
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc2b699cf2f919b58&redirect_uri=http%3A%2F%2Fszjj.u-road.com%2Fapi%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${data.openIdURL}#wechat_redirect`

  }
}

if (/MicroMessenger/i.test(ua)) {
  wxConfig();
}

function wxConfig() {
  resultGetNoLoading(`http://szjj.u-road.com/api/h5/sdkConfig.html?url=${data.hostUrl}`).then((r) => { // 测试环境
    if (r.code == '0000') {
      var res = r.data;
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.noncestr,
        signature: res.signature,
        jsApiList: [
          'scanQRCode',
          'getLocation',
          'addCard'
        ]
      });
    } else {
      alert('访问异常！');
    }
  })
}

/* eslint-enable */
