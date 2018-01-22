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
    <TheRules v-if="theRules"></TheRules>
    <VoteShare v-if='shareState' @click.native="voteFn"></VoteShare>
    <div class="renovateVote-bottom">
      <p :class="{ 'active': true == voteFns}" @click='voteFn'>投票</p>
      <p :class="{ 'active': true == shareState}" @click='handleShare'>分享</p>
      <p :class="{ 'active': true == theRules}" @click='theRulesFn'>规则</p>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { Checklist, Toast, MessageBox } from 'mint-ui'
import { resultPost } from 'src/service/getData'
import { getAllVote, szjjVote } from 'src/config/baseUrl'
import TheRules from './theRules'
import VoteShare from './VoteShare'
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
      theRules: false,
      voteFns: true
    }
  },
  components: {
    Checklist,
    TheRules,
    VoteShare
  },
  methods: {
    voteFn () {
      console.log('123')
      this.voteFns = true
      this.shareState = false
      this.theRules = false
    },
    theRulesFn () {
      this.shareState = false
      this.theRules = true
      this.voteFns = false
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
              Toast({message: '投票时要求获取微信ID，每个微信ID一天只允许投3次。', position: 'bottom', className: 'white'})
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
              item.innerHTML = `${options[index].label}<div><span class="font">已投${options[index].count}票</span></div>`
            })
          })
        } else {
          Toast({message: json.msg, position: 'bottom', className: 'white'})
        }
      })
    },
    subFn () {
      if (this.value.length) {
        let subData = {
          voteId: this.value.join(',')
        }
        resultPost(szjjVote, subData).then(json => {
          if (json.code === '0000') {
            window.localStorage.setItem('vote', ++this.localVote)
            window.localStorage.setItem('voteTime', new Date())
            MessageBox({
              title: '温馨提示',
              message: '投票成功,感谢您参与'
            }).then(action => {
              console.log('123')
            })
          } else {
            Toast({message: json.msg, position: 'bottom', className: 'white'})
          }
        })
      } else {
        Toast({message: '请先选择投票选项', position: 'bottom', className: 'white'})
      }
    },
    // 分享
    handleShare () {
      this.theRules = false
      this.shareState = true
      this.voteFns = false
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
    this.startFn()
  }
}
</script>

<style lang="less">
.renovateVote {
  .mint-checklist-label {
    padding: 10px 40px 10px 10px;
  }
  .mint-checkbox-label {
    /*white-space: pre-wrap;*/
    margin: 20px 0;
    white-space: pre-line;
    line-height: 40px;
  }
  .mint-checklist {
    border-top: 10px solid #eee;
    border-bottom: 9px solid #eee;
  }
  .mint-checklist .mint-cell {
    border-bottom: 1px solid #eee;
    margin-left: 0;
  }
  .mint-checklist-label {
    position: relative;
  }
  .mint-checkbox-core {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .font {
    color:red;
    line-height: 30px;
    font-size: 26px;
  }
}
</style>


<style lang="less" scoped>
  .renovateVote {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding-bottom: 20px;
    >h2 {
      font-size: 42px;
      text-align: center;
      line-height: 58px;
      padding: 20px 0;
      padding-top: 60px;
    }
    >p {
      padding: 30px;
      font-size: 26px;
    }
    .renovateVote-button {
      display: block;
      width: 90%;
      margin: 30px auto 100px;
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
      box-shadow: 0 0 5px rgba(0, 0, 0, .3);
      p {
        width: 33%;
        line-height: 80px;
        text-align: center;
        font-size: 26px;
        &.active {
          color: #174ed0;
          border-bottom: 6px solid #174ed0;
        }
      }
    }
  }
</style>
