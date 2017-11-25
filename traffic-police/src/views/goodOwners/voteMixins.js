import VoteConfim from './VoteConfim'
import VoteShare from './VoteShare'
import { Toast } from 'mint-ui'
import { resultPost } from 'src/service/getData'
export default {
  components: {
    VoteConfim,
    VoteShare
  },
  data () {
    return {
      localVote: [],
      // 确认提交状态
      confirmState: false,
      // 重复提交状态
      repeatState: false,
      // 成功状态
      successfulState: false,
      shareState: false,
      // 当前点击的选项
      actItem: null,
      actIndex: null,
      openId: null
    }
  },
  methods: {
    // 点击投票按钮
    handleVote (item, index) {
      if (item.status) {
        this.repeatState = true
      } else {
        this.confirmState = true
        this.actIndex = index
        this.actItem = item
      }
    },
    // 投票
    handleSubmitVote () {
      if (!this.localVote.includes(this.actItem.id)) {
        resultPost('http://testjava.chudaokeji.com/convenience/activityVote.html', {
          id: this.actItem.id,
          openId: this.$store.state.getOpenId.value
        }).then(data => {
          if (data.code === '0000') {
            this.localVote.push(this.actItem.id)
            window.localStorage.setItem('vote', JSON.stringify(this.localVote))
            window.localStorage.setItem('voteTime', new Date())
            this.successfulState = true
            if (this.list) {
              this.list[this.actIndex].count ++
            } else {
              this.item.count ++
            }
            console.log('投票成功')
          } else {
            Toast({
              message: data.msg,
              position: 'bottom'
            })
          }
        })
      } else {
        console.log('不要重复投票')
      }
    },
    // 分享
    handleShare () {
      this.shareState = true
    },
    getQueryString (name) {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      let href = window.location.href
      let r = href.substr(href.indexOf('?') + 1).match(reg)
      if (r != null) return decodeURI(r[2])
      return false
    },
    init () {
      let oTimer = window.localStorage.getItem('voteTime')
      if (oTimer) {
        oTimer = new Date(oTimer)
        let nTimer = new Date()
        if (nTimer.getFullYear() > oTimer.getFullYear() || nTimer.getMonth() > oTimer.getMonth() || nTimer.getDate() > oTimer.getDate()) {
          window.localStorage.removeItem('voteTime')
          window.localStorage.removeItem('vote')
          console.log('时间已过期，清除数据可重新投票')
        } else {
          this.localVote = JSON.parse(window.localStorage.getItem('vote'))
        }
      }
      resultPost('http://testjava.chudaokeji.com/convenience/netCounter.html', {})
    }
  },
  created () {
    let openId = this.getQueryString('openId')
    if (openId) {
      console.log('已获取openId')
      this.$store.registerModule('getOpenId', {
        value: openId
      })
      this.init()
    } else {
      if (!this.$store.state.getOpenId) {
        let URL
        if (window.location.href.includes('?from=singlemessage')) {
          URL = window.location.href.split('?from=singlemessage')[0] + '#' + this.$route.fullPath
        } else if (window.location.href.includes('?from=groupmessage')) {
          URL = window.location.href.split('?from=groupmessage')[0] + '#' + this.$route.fullPath
        } else if (window.location.href.includes('?from=groupmessage&isappinstalled=0')) {
          URL = window.location.href.split('?from=groupmessage&isappinstalled=0')[0] + '#' + this.$route.fullPath
        } else {
          URL = window.location.href.split('#')[0] + '#' + this.$route.fullPath
        }
        let ua = window.navigator.userAgent
        console.log(URL)
        if (/MicroMessenger/i.test(ua)) {
          if (process.env.type === 'test') {
            // 测试环境
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc2b699cf2f919b58&redirect_uri=http%3A%2F%2Fgzh.stc.gov.cn%2fapi%2foauth%2fcallback.html&response_type=code&scope=snsapi_userinfo&state=${encodeURIComponent(URL)}#wechat_redirect`
            // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx48a8104946507c1e&redirect_uri=http%3A%2F%2Ftestjava.chudaokeji.com%2Foauth%2Fcallback.html&response_type=code&scope=snsapi_userinfo&state=${encodeURIComponent(URL)}#wechat_redirect`
          } else {
            // 交警环境
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc2b699cf2f919b58&redirect_uri=http%3A%2F%2Fgzh.stc.gov.cn%2fapi%2foauth%2fcallback.html&response_type=code&scope=snsapi_userinfo&state=${encodeURIComponent(URL)}#wechat_redirect`
          }
        }
      } else {
        this.init()
      }
    }
  }
}
