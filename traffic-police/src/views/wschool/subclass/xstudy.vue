<template>
  <div class="navv" >
    <div class="nav-xstudy">
      <div class="nav-top">
      </div>
      <span class="nav-top-bottom">{{listData.userName}}</span>
    </div>
    <ul class="nav-xstudy-cengter">
      <li class="nav-xstudy-left"><span>驾驶证号</span><em class="nav-xstudy-right">{{listData.drive}}</em></li>
      <li class="nav-xstudy-left"><span>记分周期(始)</span><em class="nav-xstudy-right">{{listData.scoreStartDate}}</em></li>
      <li class="nav-xstudy-left"><span>记分周期(末)</span><em class="nav-xstudy-right">{{listData.scoreEndDate}}</em></li>
      <li class="nav-xstudy-left"><span>学习积分数</span><em class="nav-xstudy-right nav-col">{{listData.integral}}</em></li>
      <li class="nav-mstudy-left">
        <p @click.stop="clickShow()"><span>学习记录</span></p>
        <div class="nav-xstudy-footer-lout" v-bind:class="{ 'show' : isShow}">
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{itemsData.answerDate}}</span><a class="nav-xstudy-footer-right" href="javascripit:void(0)" v-if="isComplete">未完成</a></li>
              <li><span>答对题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">{{itemsData.ansLogarithm}}</a></li>
            </ul>
          </div>
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{itemsData.answerDate}}</span><a class="nav-xstudy-footer-rig" href="javascripit:void(0)">已完成</a></li>
              <li><span>答错题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">{{itemsData.ansLogarithm}}</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <router-link class="nav-xstudy-button" to="answer">开始学习</router-link>
    <a class="nav-xstudy-xst" @click="myAlert()">学习须知</a>
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
      itemsData: {
      }
    }
  },
  methods: {
    clickShow: function () {
      this.isShow = !this.isShow
    },
    myAlert: function () {
      console.log(this)
    }
  },
  mounted () {
    resultPost(xstudy, 'asdasd').then(json => {
      console.log(json)
      this.listData = json.data[0]
      this.itemsData = json.data[0].studyRecord[0]
    })
  }
}
</script>
<style lang="less">
@import "./../../../style/base";
.nav-xstudy {
  width: 100%;
  height: 350px;
  background: url('../../../images/xstudyBackground.png');
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

.nav-xstudy .nav-top-bottom {
  position: absolute;
  left: 45%;
  top: 70%;
  color: #fff;
  font-size: 30px;
}

.nav-xstudy-left {
  width: 100%;
  line-height: 108px;
  font-size: 26px;
  border-bottom: 1px solid #ddd;
}

.nav-xstudy-left span {
  margin-left: 46px;
}

.nav-xstudy-footer {
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

.nav-footer-bottom .nav-xstudy-footer-right {
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

.nav-xstudy-button {
  display: inline-block;
  width: 650px;
  margin: 48px 50px 12px;
  line-height: 80px;
  color: #fff;
  font-size: 30px;
  background-color: #09bb07;
  border-radius: 8px;
  text-align: center;
}

.nav-xstudy-xst {
  margin-left: 26px;
  color: #3da8e8;
  font-size: 26px;
  text-decoration: underline;
}

.nav-xstudy-right {
  float: right;
  margin-right: 48px;
  font-style: normal;
}

.nav-col {
  color: #ff0000;
}

.nav-xstudy-footer-lout {
  display: none;
}

.nav-mstudy-left.show {
  display: block;
}
</style>
