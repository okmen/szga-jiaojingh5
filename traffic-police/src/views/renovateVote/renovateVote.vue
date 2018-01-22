<template>
  <div class="renovateVote">
    <h2>深圳交警重点整治工作网络投票</h2>
    <p>
      尊敬的用户，为了给您提供更优质的服务，深圳交警将进行重点整治工作网络投票，感谢您的支持！
    </p>
    <mt-checklist
      align="right"
      v-model="value"
      :max="10"
      :options="options">
    </mt-checklist>
    <button class="renovateVote-button" @click="subFn" v-if="show">提交</button>
    <button class="renovateVote-button" style="background: gray" v-if="isShow">提交</button>
    <TheRules v-if = "theRules"></TheRules>
    <div class="renovateVote-bottom">
      <p @click='voteFn'>投票</p>
      <p @click='handleShare'>分享</p>
      <p @click='theRulesFn'>规则</p>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { Checklist, Toast } from 'mint-ui'
import { resultPost } from 'src/service/getData'
import { getAllVote, szjjVote } from 'src/config/baseUrl'
import TheRules from './theRules'
export default {
  name: 'renovateVote',
  data () {
    return {
      value: [],
      options: [],
      shareState: false,
      localVote: '',
      show: true,
      isShow: false,
      theRules: false
    }
  },
  components: {
    Checklist,
    TheRules
  },
  methods: {
    voteFn () {
      this.theRules = false
    },
    theRulesFn () {
      this.theRules = true
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
          if (window.localStorage.getItem('vote') === 'NaN' || window.localStorage.getItem('vote') === 'undefined') {
            this.localVote = 1
          } else {
            if (window.localStorage.getItem('vote') > 3) {
              this.isShow = true
              this.show = false
            } else {
              this.localVote = window.localStorage.getItem('vote')
            }
          }
        }
      }
    },
    startFn () {
      resultPost(getAllVote, {}).then(json => {
        if (json.code === '0000') {
          let options = []
          // json.data.map(item => {
          //   let str = `${item.name}\n${'投票数:'}${item.count}`
          //   options.push({'label': str, 'value': item.id})
          // })
          json.data.map(item => {
            options.push({'label': `${item.name}`, 'value': item.id, count: `${item.count}`})
          })
          this.options = options
          this.$nextTick(() => {
            let labelList = document.getElementsByClassName('mint-checkbox-label')
            Array.from(labelList).map((item, index) => {
              item.innerHTML = `${options[index].label}<div><span class="font">${options[index].count}</span>票</div>`
            })
          })
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    },
    subFn () {
      let subData = {
        voteId: this.value.join(',')
      }
      resultPost(szjjVote, subData).then(json => {
        if (json.code === '0000') {
          console.log(json)
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
      window.localStorage.setItem('vote', ++this.localVote)
      window.localStorage.setItem('voteTime', new Date())
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
    }
  },
  created () {
    this.startFn()
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
        if (window.location.href.includes('?renovateVote')) {
          URL = window.location.href.split('?renovateVote')[0] + '#' + this.$route.fullPath
        } else {
          URL = window.location.href.split('#')[0] + '#' + this.$route.fullPath
        }
        let ua = window.navigator.userAgent
        console.log(URL)
        this.init()
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
</script>

<style lang="less">
.renovateVote {
  .mint-checkbox-label {
    white-space: pre-wrap;
    margin:20px 0;
  }
  .mint-checklist .mint-cell {
    border-bottom: 1px solid #eee;
  }
}
</style>


<style lang="less" scoped>
  .renovateVote {
    position: relative;
    width: 100%;
    background-color: #fff;
    h2 {
      font-size: 42px;
      text-align: center;
      line-height: 58px;
      padding: 20px 0;
    }
    p {
      width: 90%;
      margin: 0 auto;
      font-size: 26px;
    }
    .renovateVote-button {
      display: block;
      width: 90%;
      margin: 20px auto 80px;
      border: none;
      background-color: #26a2ff;
      border-radius: 6px;
      color: #fff;
      font-size: 36px;
      line-height: 70px;
      outline: none;
    }
    .renovateVote-bottom {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      background-color: #fff;
      p {
        width: 30%;
        line-height: 70px;
        text-align: center;
        font-size: 26px;
      }
    }
    .font {
      color:red;
    }
  }
</style>
