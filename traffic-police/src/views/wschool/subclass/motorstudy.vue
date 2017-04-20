<template>
  <div class="navv">
    <div class="nav-motorstudy">
      <div class="nav-top">
      </div>
      <span class="nav-top-bottom">{{listData.userName}}</span>
    </div>
    <ul class="nav-motorstudy-cengter">
      <li class="nav-motorstudy-left"><span>驾驶证号</span><em class="nav-motorstudy-right">{{listData.identityCard}}</em></li>
      <li class="nav-mstudy-left">
        <p @click.stop="clickShow()"><span>学习记录</span></p>
        <div class="nav-xstudy-footer-lout" v-bind:class="{ 'show' : isShow}" v-for="record in itemData">
          <div class="nav-xstudy-footer">
            <div class="nav-footer-top"></div>
            <ul class="nav-footer-bottom">
              <li><span>{{record.answerDate}}</span>
                <a class="nav-xstudy-footer-right" href="javascripit:void(0)" v-if="record.isComplete == '不合格' || record.isComplete == ''">未完成</a>
                <a class="nav-xstudy-footer-rig" href="javascripit:void(0)" v-else>已完成</a>
              </li>
              <li><span>答对题数</span><a class="nav-xstudy-right nav-col" href="javascripit:void(0)">{{record.ansLogarithm}}</a></li>
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
import { resultPost } from '../../../service/getData'
import { xstudy } from '../../../config/baseUrl'
export default {
  data () {
    return {
      isShow: false,      // 控制学习记录样式
      listData: {
      },
      itemData: [{       // 学习记录数据
      }]
    }
  },
  methods: {
    clickShow: function () {     // 学习记录控制样式
      this.isShow = !this.isShow
    }
  },
  created () {
    let motorstudyData = {       // 获取页面数据
      classroomId: window.sessionStorage.getItem('classroomId'), // 列表请求参数
      identityCard: window.localStorage.getItem('identityCard'), // 身份证
      mobilephone: window.localStorage.getItem('mobilePhone'),   // 手机号码
      userSource: 'C'    // 用户来源
    }
    console.log(motorstudyData)
    console.log(window.sessionStorage.getItem('classroomId'))
    console.log(window.localStorage.getItem('identityCard'))
    console.log(window.localStorage.getItem('mobilePhone'))
    resultPost(xstudy, motorstudyData).then(json => {
      console.log(json)
      this.listData = json.data[0]
      this.itemData = json.data[0].studyRecord
    })
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
  left: 38%;
  top: 70%;
  display: block;
  width: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
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
