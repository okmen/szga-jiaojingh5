<template>
  <div class="m-voteView" v-if="item">
    <div class="m-confirminfoCard2">
      <div class="pic"><img :src="item.imgUrl" /></div>
      <ul class="top">
        <li>排名：{{ item.rank }}</li>
        <li>票数：{{ item.count }}</li>
      </ul>
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="text">{{ item.securityDeclaration }}</div>
      </div>
    </div>
    <div class="buttons">
      <div class="ok" :class="{ act: item.status }" @click="handleVote(item)">投票</div>
      <div class="share" @click="handleShare(item)">分享一下</div>
    </div>
    <VoteConfim v-model="confirmState" text="是否确认投票？" @ok="handleSubmitVote"></VoteConfim>
    <VoteConfim v-model="repeatState" text="每人每天只能投一票，明天再来吧。" :escShow=false></VoteConfim>
    <VoteConfim v-model="successfulState" @ok="handleShare" text="投票成功啦！分享给其他人为小伙伴拉票加油吧。" okText="去分享" escText="取消分享"></VoteConfim>
    <VoteShare v-model="shareState"></VoteShare>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { resultPost } from 'src/service/getData'
import voteMixins from './voteMixins'
export default {
  mixins: [voteMixins],
  data () {
    return {
      item: null
    }
  },
  watch: {
    // 如果本地已投票数据变化，则设置用户投票状态
    localVote () {
      if (!this.item) {
        return false
      }
      if (this.localVote.includes(this.item.id)) {
        this.item.status = true
      } else {
        this.item.status = false
      }
    }
  },
  created () {
    resultPost('http://testjava.chudaokeji.com/convenience/selectById.html', {
      id: this.$route.params.id
    }).then(data => {
      if (data.code === '0000') {
        this.item = data.data
        if (this.localVote.includes(this.item.id)) {
          this.item.status = true
        } else {
          this.item.status = false
        }
      } else {
        Toast({
          message: data.msg,
          position: 'bottom'
        })
      }
    })
  }
}
</script>

<style lang="less">
@import './vote.less';
</style>
