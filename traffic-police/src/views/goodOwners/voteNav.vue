<template>
  <ul class="m-voteNav">
    <router-link to="/goodOwners/votelist" tag="li">
      <i class="votefont">&#xe609;</i>
      <span>投票</span>
    </router-link>
    <router-link to="/goodOwners/voteRanking" tag="li">
      <i class="votefont">&#xe600;</i>
      <span>排行榜</span>
    </router-link>
    <router-link to="/goodOwners/voteRules" tag="li">
      <i class="votefont">&#xe637;</i>
      <span>投票规则</span>
    </router-link>
  </ul>
</template>

<style lang="less">
@import './vote.less';
</style>
