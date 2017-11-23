import VoteConfim from './VoteConfim'
import VoteShare from './VoteShare'
import { goodOwnersVote } from 'src/config/baseUrl.js'
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
      actItem: null
    }
  },
  methods: {
    // 点击投票按钮
    handleVote (item) {
      if (item.status) {
        this.repeatState = true
      } else {
        this.confirmState = true
        this.actItem = item
      }
    },
    // 投票
    handleSubmitVote () {
      if (!this.localVote.includes(this.actItem.id)) {
        resultPost(goodOwnersVote, {
          id: this.actItem.id
        }).then(data => {
          if (data.code === '0000') {
            this.localVote.push(this.actItem.id)
            window.localStorage.setItem('vote', JSON.stringify(this.localVote))
            window.localStorage.setItem('voteTime', new Date())
            this.successfulState = true
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
    }
  },
  created () {
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
  }
}
