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

var openId = getQueryString('openId') || localStorage.getItem('openId');
var headImgUrl = getQueryString('headimgurl') || localStorage.getItem('headimgurl');
var nickname = getQueryString('nickname') || localStorage.getItem('nickname');
localStorage.setItem('openId', decodeURIComponent('000000xxx'));
localStorage.setItem('identityCard', '440301199002101119') // 身份证
localStorage.setItem('mobilePhone', '18603017278') // 手机号码
localStorage.setItem('myNumberPlate', '粤B701NR') // 车牌号码
localStorage.setItem('userName', '杨明畅') // 用户名字
localStorage.setItem('behindTheFrame4Digits', '7336') // 车架号后4位
localStorage.setItem('plateType', '02') // 车牌类型
localStorage.setItem('isLogin', true) // 是否登录

if (openId != 'null' || openId != 'undefined') {
  localStorage.setItem('openId', decodeURIComponent('000000xxx'));
  localStorage.setItem('headImgUrl', decodeURIComponent(headImgUrl));
  localStorage.setItem('nickname', decodeURIComponent(nickname));
} else{
  alert('网络错误，请稍后重试')
}
let url = window.location.href;
let data = {
  url: encodeURIComponent(url)
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
