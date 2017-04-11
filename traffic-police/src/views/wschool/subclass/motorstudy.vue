<template>
  <div class="navv">
    <div class="nav-motorstudy">
      <div class="nav-top">
      </div>
      <span class="nav-top-bottom">刘小明</span>
    </div>
    <ul class="nav-motorstudy-cengter">
      <li class="nav-motorstudy-left"><span>驾驶证号</span><em class="nav-motorstudy-right">441571189210212120</em></li>
      <li class="nav-mstudy-left">
        <p @click.stop="clickShow()"><span>学习记录</span></p>
        <div class="nav-xstudy-footer-lout" v-bind:class="{ 'show' : isShow}" v-for="record in listData">
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{record.answerDate}}</span><a class="nav-xstudy-footer-right" href="javascripit:void(0)" v-if="1">未完成</a></li>
              <li><span>答对题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">{{record.ansLogarithm}}</a></li>
            </ul>
          </div>
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{record.answerDate}}</span><a class="nav-xstudy-footer-rig" href="javascripit:void(0)">已完成</a></li>
              <li><span>答错题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">1</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <router-link class="nav-xstudy-button" to="answer">开始学习</router-link>
    <a class="nav-motorstudy-xst" href="#">学习须知</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      listData: [{
        'ClassroomId': '1',
        'userName': '小李李',
        'drive': '41302219991234****',
        'scoreStartDate': '2016-05-18',
        'scoreEndDate': '2017-05-18',
        'integral': '100',
        'answerDate': '2010-05-18',
        'isComplete': '1',
        'ansLogarithm': '10'
      }]
    }
  },
  methods: {
    clickShow: function () {
      this.isShow = !this.isShow
    },
    learningInstructions: function () {
      console.log(this)
    }
  }
}
</script>
<style lang="less">
@import "./../../../style/base";
.nav-motorstudy {
  background: url('../../../images/xstudyBackground.png');
  height: 350px;
  position: relative;
  background-size: 100% 100%;
}

.nav-top {
  width: 194px;
  height: 194px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -87px;
  margin-top: -140px;
}

.nav-motorstudy .nav-top-bottom {
  position: absolute;
  left: 45%;
  top: 70%;
  color: #fff;
  font-size: 30px;
}

.nav-motorstudy-left {
  width: 100%;
  line-height: 108px;
  font-size: 26px;
  border-bottom: 1px solid #ddd;
}

.nav-motorstudy-left span {
  margin-left: 46px;
}

.nav-motorstudy-button {
  width: 650px;
  margin: 48px 50px 12px;
  line-height: 80px;
  color: #fff;
  font-size: 30px;
  background-color: #09bb07;
  border-radius: 8px;
}

.nav-motorstudy-xst {
  margin-left: 26px;
  color: #3da8e8;
  font-size: 26px;
  text-decoration: underline;
}

.nav-motorstudy-right {
  float: right;
  margin-right: 48px;
  font-style: normal;
}
</style>
