<template>
  <div class="renovateVote">
    <div class="banner"><img width="100%" src="../../images/renovate/banner.png" alt="重点整治的交通违法行为"></div>
    <div class="checklist">
      <checkCard
        v-for="(item, index) in options"
        v-if="item" :opt="item"
        @click.native="handleCheck(item.value)"
        :key="index"
        :value="value"
        :all="allCount"
      ></checkCard>
    </div>
    <button class="renovateVote-button" @click="subFn" v-if="show">提交</button>
    <button class="renovateVote-button" style="background: gray" v-if="isShow">提交</button>
<!--     <TheRules v-if="theRules"></TheRules>
    <VoteShare v-if='shareState' @click.native="voteFn"></VoteShare> -->
<!--     <div class="renovateVote-bottom">
      <p :class="{ 'active': true == voteFns}" @click='voteFn'>投票</p>
      <p :class="{ 'active': true == theRules}" @click='theRulesFn'>规则</p>
      <p :class="{ 'active': true == shareState}" @click='handleShare'>分享</p>
    </div> -->
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import { resultPost } from 'src/service/getData'
// import TheRules from './theRules'
// import VoteShare from './VoteShare'
import checkCard from './checkCard'
export default {
  name: 'renovateVote',
  data () {
    return {
      value: [],
      options: [],
      shareState: false,
      localVote: 1,
      show: true,
      isShow: false,
      theRules: false,
      voteFns: true,
      colors: [
        '#55c8f6', '#fbb649', '#46d963', '#f57963', '#55f68e',
        '#f65568', '#7355f6', '#55f682', '#c3f655', '#f6b055',
        '#f655ac', '#55e9f6', '#55f65d', '#f4f655', '#f67055',
        '#7355f6', '#55f6c7', '#7ff655', '#f6c355', '#f65555'
      ]
    }
  },
  components: {
    // TheRules,
    // VoteShare,
    checkCard
  },
  computed: {
    allCount () {
      let count = 0
      this.options.forEach((item, index, array) => {
        item.color = this.colors[index]
        count += +item.count
      })
      return count + 20
    }
  },
  methods: {
    // 选择选项
    handleCheck (data) {
      let index = this.value.indexOf(data)
      console.log(index)
      if (index >= 0) {
        this.value.splice(index, 1)
      } else {
        if (this.value.length >= 10) {
          Toast({message: '最多只能选10个', className: 'white'})
        } else {
          this.value.push(data)
        }
      }
    },
    // voteFn () {
    //   console.log('123')
    //   this.voteFns = true
    //   this.shareState = false
    //   this.theRules = false
    // },
    // theRulesFn () {
    //   this.shareState = false
    //   this.theRules = true
    //   this.voteFns = false
    // },
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
              Toast({message: '已达当日投票上限', className: 'white'})
            } else {
              this.localVote = window.localStorage.getItem('vote')
            }
          }
        }
      }
    },
    startFn () {
      resultPost('http://gzh.stc.gov.cn/api/convenience/getAllVote.html', {}).then(json => {
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
        resultPost('http://gzh.stc.gov.cn/api/convenience/szjjVote.html', subData).then(json => {
          if (json.code === '0000') {
            this.value = []
            this.localVote = +this.localVote + 1
            window.localStorage.setItem('vote', this.localVote)
            window.localStorage.setItem('voteTime', new Date())
            MessageBox({
              title: '温馨提示',
              message: '投票成功,感谢您参与'
            }).then(action => {
              this.startFn()
            })
          } else {
            Toast({message: json.msg, position: 'bottom', className: 'white'})
          }
        })
      } else {
        Toast({message: '请先选择投票选项', className: 'white'})
      }
    },
    // // 分享
    // handleShare () {
    //   this.theRules = false
    //   this.shareState = true
    //   this.voteFns = false
    // },
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
  background: #f1f8ff;
/*  .banner{ padding-top: 80px; }*/
  .checklist {
    padding: 30px;
  }
  .mint-checklist-label {
    padding: 10px 40px 10px 10px;
  }
  .mint-checkbox-label {
    /*white-space: pre-wrap;*/
    margin: 20px 0;
    white-space: pre-line;
    line-height: 40px;
  }
  .mint-checklist .mint-cell {
    border-bottom: 10px solid #eee;
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
    color:#ccc;
    line-height: 30px;
    font-size: 26px;
  }
}
</style>


<style lang="less" scoped>
  .renovateVote {
    position: relative;
    width: 100%;
    /*background-color: #fff;*/
    padding-bottom: 20px;
    >h2 {
      font-size: 40px;
      text-align: center;
      line-height: 58px;
      padding-top: 120px;
    }
    >p {
      padding: 30px;
      font-size: 30px;
      line-height: 48px;
      color:#666;
      text-indent: 60px;
    }
    .renovateVote-button {
      display: block;
      width: 90%;
      margin: 30px auto;
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
      top: 0;
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
