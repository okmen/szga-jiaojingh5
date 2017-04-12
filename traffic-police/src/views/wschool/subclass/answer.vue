<template>
  <div class="answer">
    <div class="answer-head">
      <div class="answer-head-regit" >
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/mistake.png"></dt>
          <dd>已做{{answertData.answererror}}题</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/time.png"></dt>
          <dd>剩余{{answertData.surplusAnswe}}题</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/sand.png"></dt>
          <dd>{{answertData.answerTime}}</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/exit.png"></dt>
          <dd>退出</dd>
        </dl>
      </div>
    </div>
    <div class="answer-center" >
      <span class="answer-center-left">选</span>
      <span class="answer-center-right">{{answertData.subjectName}}</span>
    </div>
    <img class="answer-button" src="../../../images/answertu.png">
    <ul class="answer-foot">
      <li class="answer-foot-button" v-for="itme in answerlistData"><img v-for="items in testData" class="answer-foot-img" :src="items.img">{{itme.answerName}}</li>
    <!--   <li><img class="answer-foot-img" src="../../../images/B.png">{{answertData.answerName}}</li>
      <li><img class="answer-foot-img" src="../../../images/C.png">{{answertData.answerName}}</li>
      <li><img class="answer-foot-img" src="../../../images/D.png">{{answertData.answerName}}</li> -->
    </ul>
    <router-link class="answer-option" to="grade">下一题</router-link>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { answer } from '../../../config/baseUrl'

export default {
  name: 'answer',
  data () {
    return {
      answertData: {
      },
      answerlistData: [{
      }],
      testData: [{
        img: require('../../../images/A.png')
      },
      {
        img: require('../../../images/B.png')
      },
      {
        img: require('../../../images/C.png')
      },
      {
        img: require('../../../images/D.png')
      }]
    }
  },
  methods: {
    // countdowm: function () {
    //   setInterval(function () {
    //     let nowTime = new Date()
    //     let nowgetSeconds = nowTime.getSeconds()
    //     console.log(nsowgetSeconds)
    //   }, 1000)
    // }
  },
  mounted () {
    resultPost(answer, 'answe').then(json => {
      console.log(json)
      this.answertData = json.data[0]
      this.answerlistData = json.data[0].answeroptions
      console.log(this.answertData)
    })
  }
}
</script>
<style lang="less">
@import "./../../../style/base";
.answer-head {
  width: 100%;
  height: 116px;
  background-color: #cfd2d4;
  overflow: hidden;
}
.answer-head-regit {
  float: right;
  font-size: 16px;
}
.answer-head-regit .answer-head-rgt {
  width: 110px;
  height: 116px;
  float: left;
  text-align: center;
  font-size: 16px;
}
.answer-head-regit .answer-head-rgt dt img {
  margin-top: 16px;
  /*  width: 50%;*/
  height: 50px;
}
.answer-center-left {
  display: inline-block;
  width: 56px;
  height: 52px;
  background-color: #4c9ff4;
  text-align: center;
  border-radius: 8px;
  color: #fff;
  margin: 22px 22px 0 32px;
}
.answer-center-right {
  font-size: 24px;
}
.answer-button {
  display: block;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  vertical-align: middle;
  margin-top: 58px;
}
.answer-foot {
  width: 600px;
  margin: 0 auto;
}
.answer-foot li {
  line-height: 60px;
  font-size: 28px;
  margin-top: 20px;
}
.answer-foot-button {
  margin-top: 60px;
}
.answer-foot-img {
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  margin-right: 30px;
}
.answer-option {
  display: block;
  width: 430px;
  line-height: 80px;
  margin: 54px auto;
  background: #4c9ff4;
  border-radius: 8px;
  color: #fff;
  font-size: 28px;
  text-align: center;
}
</style>
