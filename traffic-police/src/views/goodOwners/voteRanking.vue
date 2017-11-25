<template>
  <div class="m-voteRanking">
    <template v-if="list.length > 3">
      <div class="top3">
        <router-link tag="div" class="item item2" v-if="list[1]" :to="`/goodOwners/voteView/${list[1].id}`">
          <div class="pic"><div class="box"><img :src="list[1].imgUrl"></div></div>
          <div class="name">{{ list[1].name }}</div>
          <div class="p">{{ list[1].count }}</div>
        </router-link>
        <router-link tag="div" class="item item1" v-if="list[0]" :to="`/goodOwners/voteView/${list[0].id}`">
          <div class="pic"><div class="box"><img :src="list[0].imgUrl"></div></div>
          <div class="name">{{ list[0].name }}</div>
          <div class="p">{{ list[0].count }}</div>
        </router-link>
        <router-link tag="div" class="item item3" v-if="list[2]" :to="`/goodOwners/voteView/${list[2].id}`">
          <div class="pic"><div class="box"><img :src="list[2].imgUrl"></div></div>
          <div class="name">{{ list[2].name }}</div>
          <div class="p">{{ list[2].count }}</div>
        </router-link>
      </div>
      <div class="itembox">
        <router-link tag="div" class="item" v-for="(item, index) in list" :to="`/goodOwners/voteView/${item.id}`" v-if="index >= 3">
          <div class="number">{{ index + 1 }}</div>
          <div class="pic"><img :src="item.imgUrl"></div>
          <div class="name">{{ item.name }}</div>
          <div class="p">{{ item.count }} 票</div>
        </router-link>
      </div>
    </template>
    <div class="noinfo" v-else>暂无排名信息</div>
    <!-- 底部导航 -->
    <VoteNav />
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { resultPost } from 'src/service/getData'
import VoteNav from './voteNav'
export default {
  components: {
    VoteNav
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    resultPost('http://testjava.chudaokeji.com/convenience/getFrontVote.html', {
      total: 15
    }).then(data => {
      if (data.code === '0000') {
        this.list.push(...data.data)
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