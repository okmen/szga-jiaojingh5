<template>
  <div class="navv">
    <div class="nav-mstudy">
      <div class="nav-top">
      </div>
      <span class="nav-top-bottom">{{itemData.userName}}</span>
    </div>
    <ul class="nav-mstudy-cengter" >
      <li class="nav-mstudy-left"><span>驾驶证号</span><em class="nav-mstudy-right">{{itemData.drive}}</em></li>
      <li class="nav-mstudy-left"><span>记分周期(始)</span><em class="nav-mstudy-right">{{itemData.scoreStartDate}}</em></li>
      <li class="nav-mstudy-left"><span>记分周期(末)</span><em class="nav-mstudy-right">{{itemData.scoreEndDate}}</em></li>
      <li class="nav-mstudy-left"><span>学习积分数</span><em class="nav-mstudy-right nav-col">{{itemData.integral}}</em></li>
      <li class="nav-mstudy-left">
        <p @click.stop="clickShow()"><span>学习记录</span></p>
        <div class="nav-mstudy-footer-lout" v-bind:class="{ 'show' : isShow}" v-for="item in listData">
          <div class="nav-mstudy-footer" >
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li>
                <span>{{item.answerDate}}</span>
                <a class="nav-mstudy-footer-right" href="javascripit:void(0)" v-if="isComplete == 0">未完成</a>
                <a class="nav-xstudy-footer-rig" href="javascripit:void(0)" v-else>已完成</a>
              </li>
              <li><span>答对题数</span><a class="nav-mstudy-right nav-col" href="javascripit:void(0)">{{item.ansLogarithm}}</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <router-link class="nav-mstudy-button" to="answer">开始学习</router-link>
    <a class="nav-mstudy-xst" href="#">学习须知</a>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { xstudy } from '../../../config/baseUrl'
export default {
  data () {
    return {
      isShow: false,
      isComplete: 1,
      itemData: {
      },
      listData: [{
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
    resultPost(xstudy, 'kdkd').then(json => {
      this.itemData = json.data[0]
      this.listData = json.data[0].studyRecord
      this.isComplete = json.data[0].isComplete
    })
  }
}
</script>
<style lang="less">
@import "./../../../style/base";
.navv {
  width: 100%;
  overflow: hidden;
}

.nav-mstudy {
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

.nav-mstudy .nav-top-bottom {
  position: absolute;
  left: 38%;
  top: 70%;
  display: block;
  width: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.nav-mstudy-cengter {
  overflow: hidden;
}

.nav-mstudy-left {
  width: 100%;
  line-height: 108px;
  font-size: 26px;
  border-bottom: 1px solid #ddd;
}

.nav-mstudy-left span {
  margin-left: 46px;
}

.nav-mstudy-button {
  display: block;
  width: 650px;
  line-height: 80px;
  color: #fff;
  font-size: 30px;
  background-color: #09bb07;
  border-radius: 8px;
  margin: 48px 50px 12px;
  text-align: center;
}

.nav-mstudy-xst {
  margin-left: 26px;
  color: #3da8e8;
  font-size: 26px;
  text-decoration: underline;
}

.nav-mstudy-right {
  float: right;
  margin-right: 48px;
  font-style: normal;
}

.nav-mstudy-footer {
  width: 100%;
  background-color: #f0f1f3;
  overflow: hidden;
}

.nav-footer-top {
  background: url('../../../images/xstudy-tu.png')no-repeat;
  width: 104px;
  height: 126px;
  float: left;
  background-position: right center;
}

.nav-footer-bottom {
  float: left;
  width: 86%;
}

.nav-footer-bottom li {
  width: 100%;
  border-bottom: 1px solid #dadada;
  line-height: 126px;
}

.nav-footer-bottom .nav-mstudy-footer-right {
  display: inline-block;
  width: 98px;
  font-size: 26px;
  background: #939393;
  margin: 50px 0 50px 310px;
  border-radius: 8px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}

.nav-xstudy-footer-rig {
  display: inline-block;
  width: 98px;
  font-size: 26px;
  background: #ffae00;
  margin: 50px 0 50px 310px;
  border-radius: 8px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.nav-mstudy-footer-lout {
  display: none;
}

.nav-mstudy-left.show {
  display: block;
}

</style>
