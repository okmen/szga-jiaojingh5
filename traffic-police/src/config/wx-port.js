/**
 * 微信 js sdk: //res.wx.qq.com/open/js/jweixin-1.2.0.js
 */
import wx from 'weixin-js-sdk'
import { resultGet } from '../service/getData'
/* eslint-disable */

function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let href = window.location.href;
  let r = href.substr(href.indexOf('?') + 1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return false;
}

var openId = getQueryString('openId') ? getQueryString('openId') : localStorage.getItem('openId'); 

var headImgUrl = getQueryString('headimgurl') ? getQueryString('headimgurl') : localStorage.getItem('headimgurl');

var nickname = getQueryString('nickname') ? getQueryString('nickname') : localStorage.getItem('nickname');

let url = window.location.href;
let data = {
  url: encodeURIComponent(url.split('#')[0])
}
if (!!openId) {
  localStorage.setItem('openId', decodeURIComponent(openId));
  localStorage.setItem('headImgUrl', decodeURIComponent(headImgUrl));
  localStorage.setItem('nickname', decodeURIComponent(nickname));
} else{
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx48a8104946507c1e&redirect_uri=http%3A%2F%2Ftestjava.chudaokeji.com%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${data.url}#wechat_redirect`
}

let ua = window.navigator.userAgent; //浏览器版本
if(/MicroMessenger/i.test(ua)){
  wxConfig();
}else if(/AlipayClient/i.test(ua)){
  alipayConfig();
}
function wxConfig(){
  resultGet(`http://testjava.chudaokeji.com/h5/sdkConfig.html?url=${data.url}`).then((r) => {
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
          'getLocation'
        ]
      });
    } else {
      alert('访问异常！');
    }
  })
}

function alipayConfig(){
  alert('alipay');
}

/* eslint-enable */
