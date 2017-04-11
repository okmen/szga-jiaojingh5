import 'whatwg-fetch'
/* eslint-disable */

export const resultPost = (url, bodyData) => fetch(url, {
      method: 'POST',
      body: bodyData,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then((res) => {
    	return res.json()
    })

/* eslint-enable */
