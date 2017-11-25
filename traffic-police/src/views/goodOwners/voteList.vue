<template>
  <div class="m-voteList">
    <!-- banner -->
    <div class="banner"></div>
    <!-- 搜索 -->
    <div class="search">
      <div class="box">
        <input type="text" v-model="searchText" placeholder="请输入数字编号或者姓名搜索投票">
        <div class="submit" @click="handleSearch">
          <i class="votefont">&#xe601;</i>
          搜索
        </div>
      </div>
    </div>
    <!-- 倒计时 -->
    <div class="djs">
      <h3 class="title">活动结束倒计时</h3>
      <CountDown date="2017/11/28 23:59:59"></CountDown>
    </div>
    <!-- 列表 -->
    <div class="list" v-if="voteList.length > 0"
      v-infinite-scroll="loadMoreInit"
      :infinite-scroll-disabled="loading"
    >
      <div class="item" v-for="(item, index) in voteList">
        <router-link tag="div" class="box" :to="`/goodOwners/voteView/${item.id}`">
          <div class="number">{{ item.id }}</div>
          <div class="pic">
            <img :src="item.imgUrl">
          </div>
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="text">{{ item.securityDeclaration }}</div>
            <div class="p">{{ item.count }}票</div>
          </div>
        </router-link>
        <div class="button" @click="handleVote(item, index)" :class="{ act: item.status }">为ta投一票</div>
      </div>
    </div>
    <!-- 底部导航 -->
    <VoteNav />
    <VoteConfim v-model="confirmState" text="是否确认投票？" @ok="handleSubmitVote"></VoteConfim>
    <VoteConfim v-model="repeatState" text="每人每天只能投一票，明天再来吧。" :escShow=false></VoteConfim>
    <VoteConfim v-model="successfulState" @ok="handleShare" text="投票成功啦！分享给其他人为小伙伴拉票加油吧。" okText="去分享" escText="取消分享"></VoteConfim>
    <VoteShare v-model="shareState"></VoteShare>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { resultPost } from 'src/service/getData'
import VoteNav from './voteNav'
import voteMixins from './voteMixins'
import CountDown from 'components/CountDown'
export default {
  mixins: [voteMixins],
  components: {
    VoteNav,
    CountDown
  },
  data () {
    return {
      // 搜索提交的文本
      searchText: '',
      searchStatus: false,
      // 列表数据
      list: [],
      page: 1,
      pageSize: 20,
      loading: false,
      loadingTimer: null
    }
  },
  computed: {
    // 格式化后的数据
    voteList () {
      let nList = this.list.map(el => {
        let nEl = el
        if (this.localVote.includes(el.id)) {
          nEl.status = true
        } else {
          nEl.status = false
        }
        return nEl
      })
      return nList
    }
  },
  methods: {
    // 搜索
    handleSearch () {
      if (this.searchText === '') {
        this.searchStatus = false
        this.page = 1
        this.list = []
        this.loadMoreInit()
      } else {
        this.searchStatus = true
        resultPost('http://testjava.chudaokeji.com/convenience/selectByIdOrName.html', {
          page: 1,
          pageSize: 50,
          content: this.searchText
        }).then(data => {
          if (data.code === '0000') {
            this.list = data.data
            this.loading = false
          } else {
            Toast({
              message: data.msg,
              position: 'bottom'
            })
          }
        })
      }
    },
    // 加载更多数据
    loadMoreInit () {
      window.clearTimeout(this.loadingTimer)
      this.loadingTimer = setTimeout(() => {
        this.loadMore()
      }, 100)
    },
    loadMore () {
      if (this.searchStatus) {
        return false
      }
      this.loading = true
      resultPost('http://testjava.chudaokeji.com/convenience/getVoteByPage.html', {
        page: this.page,
        pageSize: this.pageSize
      }).then(data => {
        if (data.code === '0000') {
          this.page ++
          this.list.push(...data.data.activityVoteList)
          this.loading = false
        } else {
          Toast({
            message: data.msg,
            position: 'bottom'
          })
        }
      })
    }
  },
  created () {
    this.loadMoreInit()
  }
}
</script>

<style lang="less">
@import './vote.less';
</style>