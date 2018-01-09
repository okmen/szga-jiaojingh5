import {resultPost} from '../../service/getData'
import wx from 'weixin-js-sdk'
const cardParameter = {
  drive: 'pILMDwCdXZ-ir95D8p1C0jWw8f_o', // 驾驶证
  travel: 'pILMDwI0YyTv1ikElE4IOHDxU00I', // 行驶证
  url: 'http://testjava.chudaokeji.com/h5/cardConfig.html'
}
export default cardParameter

export const addCard = (type) => {
  let requestData = {
    cardId: cardParameter[type]
  }
  resultPost(cardParameter.url, requestData).then(data => {
    let cardExt = {
      openid: window.localStorage.openId,
      timestamp: data.data.timestamp,
      signature: data.data.signature,
      nonce_str: data.data.noncestr
    }
    wx.addCard({
      cardList: [{
        cardId: data.data.cardId,
        cardExt: JSON.stringify(cardExt)
      }], // 需要添加的卡券列表
      success: function (res) {
//              var cardList = res.cardList // 添加的卡券列表信息
      }
    })
  })
}

export const openCard = (that) => {
  wx.openCard({
    cardList: [{
      cardId: that.$route.query.type === '1' ? cardParameter.drive : cardParameter.travel,
      code: that.$route.query.code
    }]
  })
}
