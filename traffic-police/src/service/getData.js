import 'whatwg-fetch'
/* eslint-disable */

var dataFun = (obj) => {
  obj.sourceOfCertification = window.localStorage.getItem('sourceOfCertification')
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

export const resultPost = (url, bodyData) => fetch(url, {
      method: 'POST',
      body: dataFun(bodyData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'same-origin'
    }).then((res) => {
    	return res.json()
    })

export const resultGet = (url) => fetch(url).then((res) => {
  return res.json()
})

/* eslint-enable */
