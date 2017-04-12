<template>
  <div class="content">
    <div class="nav-pedestrianstudy">
      <div class="nav-top">
      </div>
      <span class="nav-top-bottom">{{listData.userName}}</span>
    </div>
    <ul class="nav-pedestrianstudy-cengter">
      <li class="nav-pedestrianstudy-left"><span>驾驶证号</span><em class="nav-pedestrianstudy-right">{{listData.drive}}</em></li>
      <li class="nav-mstudy-left">
        <p @click.stop="clickShow()"><span>学习记录</span></p>
        <div class="nav-xstudy-footer-lout" v-bind:class="{ 'show' : isShow}" v-for="record in itemData">
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{record.answerDate}}</span><a class="nav-xstudy-footer-right" href="javascripit:void(0)" v-if="1">未完成</a></li>
              <li><span>答对题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">{{record.ansLogarithm}}</a></li>
            </ul>
          </div>
         <!--  <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{record.answerDate}}</span><a class="nav-xstudy-footer-rig" href="javascripit:void(0)">已完成</a></li>
              <li><span>答错题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">1</a></li>
            </ul>
          </div> -->
        </div>
      </li>
    </ul>
    <router-link class="nav-xstudy-button" to="answer">开始学习</router-link>
    <a class="nav-pedestrianstudy-xst" href="#">学习须知</a>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { xstudy } from '../../../config/baseUrl'
export default {
  data () {
    return {
      isShow: false,
      listData: {
      },
      itemData: [{
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
  },
  mounted () {
    resultPost(xstudy, 'hello').then(json => {
      this.listData = json.data[0]
      this.itemData = json.data[0].studyRecord
    })
  }
}
</script>
<style lang="less">
@import "./../../../style/base";
.nav-pedestrianstudy {
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

.nav-pedestrianstudy .nav-top-bottom {
 position: absolute;
  left: 38%;
  top: 70%;
  display: block;
  width: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.nav-pedestrianstudy-left {
  width: 100%;
  line-height: 108px;
  font-size: 26px;
  border-bottom: 1px solid #ddd;
}

.nav-pedestrianstudy-left span {
  margin-left: 46px;
}

.nav-pedestrianstudy-button {
  width: 650px;
  margin: 48px 50px 12px;
  line-height: 80px;
  color: #fff;
  font-size: 30px;
  background-color: #09bb07;
  border-radius: 8px;
}

.nav-pedestrianstudy-xst {
  margin-left: 26px;
  color: #3da8e8;
  font-size: 26px;
  text-decoration: underline;
}

.nav-pedestrianstudy-right {
  float: right;
  margin-right: 48px;
  font-style: normal;
}
</style>
