/**
 * 微信 js sdk: //res.wx.qq.com/open/js/jweixin-1.2.0.js
 */
import wx from 'weixin-js-sdk'
import { resultPost } from '../service/getData'
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
localStorage.setItem('openId', openId);
let url = window.location.href;
let data = {
  url: encodeURIComponent(url)
}

resultPost('http://gxg.tunnel.qydev.com/web/h5/sdkConfig.html', JSON.stringify(data)).then((r) => {
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
