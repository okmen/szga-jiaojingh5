import 'whatwg-fetch'
import { Indicator } from 'mint-ui'
/* eslint-disable */

var dataFun = (obj) => {
  obj.version = '1.2.6'
  obj.sourceOfCertification = window.localStorage.getItem('sourceOfCertification') ? window.localStorage.getItem('sourceOfCertification') : 'C'
	obj.openId = window.localStorage.getItem('openId') ? window.localStorage.getItem('openId') : ''
  var length = obj && obj.length,
         idx = 0,
         url = '&';
     for (var key in obj) {
         if (key != 'url' && obj[key] !== null) {
             url += (key + '=' + encodeURIComponent(obj[key]) + '&');
         }
     }
     return url.substring(0, url.lastIndexOf('&'));
}

export const resultPost = (url, bodyData) => {
  Indicator.open()
  return fetch(url, {
      method: 'POST',
      body: dataFun(bodyData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'same-origin'
    }).then((res) => {
      Indicator.close()
    	return res.json()
    })
}

export const resultPostNoLoading = (url, bodyData) => {
  return fetch(url, {
      method: 'POST',
      body: dataFun(bodyData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'same-origin'
    }).then((res) => {
      return res.json()
    })
}

export const resultGet = (url) => {
  Indicator.open()
  return fetch(url).then((res) => {
    Indicator.close()
    return res.json()
  })
}

export const resultGetNoLoading = (url) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

/* eslint-enable */
