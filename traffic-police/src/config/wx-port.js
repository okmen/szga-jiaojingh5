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
  return '';
}

var openId = getQueryString('openId') || localStorage.getItem('openId');
var headImgUrl = getQueryString('headimgurl') || localStorage.getItem('headimgurl');
var nickname = getQueryString('nickname') || localStorage.getItem('nickname');
localStorage.setItem('openId', decodeURIComponent('000000xxx'));
localStorage.setItem('identityCard', '440301199002101119') // 身份证
localStorage.setItem('mobilePhone', '18603017278') // 手机号码
localStorage.setItem('myNumberPlate', '粤B701NR') // 车牌号码
localStorage.setItem('userName', '杨明畅') // 用户名字
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
resultGet(`http://gxg.tunnel.qydev.com/web/h5/sdkConfig.html?url=${data.url}`).then((r) => {
  if (r.code == '00000') {
      console.log(r);
      var res = r.data;
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.noncestr,
        signature: res.signature,
        jsApiList: [
          'checkJsApi',
          'chooseImage',
          'uploadImage',
          'getLocalImgData'
        ]
      });
    } else {
      alert('访问异常！');
    }
})

/* eslint-enable */
