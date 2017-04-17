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
          <dd>{{answertData.answerTime}}</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/sand.png"></dt>
          <dd>剩余{{answertData.surplusAnswe}}题</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/exit.png"></dt>
          <dd :click="popClick()">退出</dd>
        </dl>
        <div class="pop-up" v-bind:class="{ 'reveal' : isReveal}">
          <ul class="pop-up-center" >
            <li class="up-cengter-hint">限时时间到！</li>
            <li class="up-cengter-hint">请退出做题或者从新做题</li>
            <li class="up-cengter-hint">本次学习将不做记分</li>
            <li class="up-cengter-hint">重新学习</li>
            <li class="up-cengter-hint"><router-link to="wschool" class="quit">退出学习</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="answer-center">
    <span class="answer-center-left" v-if="testQuestionsType == 1">判</span>
      <span class="answer-center-left" v-else>选</span>
      <span class="answer-center-right">{{answertData.subjectName}}</span>
    </div>
    <img class="answer-button" v-if="testQuestionsType == 2" :src="subjectImg.img">
    <ul class="answer-foot">
      <li class="answer-foot-button" v-for="(item, index) in answerlistData" @click="clickAnswer(index)" 
      :class="[{'on':flag == index},{'off':tlag == index}]">
        <img class="answer-foot-img" :src="testData[index].img">{{item.answerName}}
      </li>
    </ul>
    <router-link class="answer-option" v-bind:class="{ 'show' : isBtnShow}" to="grade" >下一题</router-link>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { answer, answers } from '../../../config/baseUrl'

export default {
  name: 'answer',
  data () {
    return {
      testQuestionsType: 1,
      isBtnShow: false,
      isReveal: false,
      tlag: 5,
      flag: 5,
      answertData: {
        answerTime: '00:01'
      },
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
      }],
      answerlistData: [],
      subjectImg: {
        img: require('../../../images/answertu.png')
      },
      subjectAnswerData: '靠左停车'
    }
  },
  methods: {
    clickAnswer: function (clickIndex) {
      this.isBtnShow = true
      resultPost(answers, 'hello').then(json => {
        this.testData[clickIndex].img = require('../../../images/fault.png')
        this.tlag = clickIndex
        this.answerlistData.forEach((obj, index) => {
          if (obj.answerName === this.subjectAnswerData) {
            this.testData[index].img = require('../../../images/correct.png')
            this.flag = index
          }
        })
      })
    },
    popClick: function () {
      // console.log(this.answertData)
      let anData = this.answertData
      console.log(anData.answerTime)
      if (anData.answerTime === '00:00') {
        console.log('11')
        this.isReveal = true
        // this.isReveal = !this.isReveal
        console.log(this.isReveal)
      }
    }
  },
  mounted () {
    var answeData = {
      classroomId: this.classroomId,
      userId: '',
      userPwd: '',
      identityCard: '',
      mobilephone: '',
      drive: this.drive
    }
    // console.log(JSON.stringify(answeData))
    resultPost(answer, JSON.stringify(answeData)).then(json => {
      console.log(json)
      // console.log(JSON.stringify(answeData))
      // this.answertData = json.data[0]
      this.answerlistData = json.data[0].answeroptions
      this.testQuestionsType = json.data[0].testQuestionsType
      this.subjectImg = json.data[0].subjectImg
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
  display: none;
  width: 430px;
  line-height: 80px;
  margin: 54px auto;
  background: #4c9ff4;
  border-radius: 8px;
  color: #fff;
  font-size: 28px;
  text-align: center;
}
.answer-foot-button.color{
  color: #16b221
}
.answer-option.show {
  display: block;
}
.pop-up {
  display: none;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 550px;
  height: 444px;
  margin-top: -225px;
  margin-left: -274px;
  background: #fff;
  border-radius: 10px;
}
.pop-up-center .up-cengter-hint{
  width:416px;
  margin: 20px auto;
  text-align: center;
}
.pop-up-center :nth-of-type(1){
  font:700 30px/70px "";
  color: #f46263;
}
.pop-up-center :nth-of-type(4){
  font-size: 30px;
  line-height: 70px;
  border: 1px solid #2696dd;
  color: #2696dd;
  border-radius: 10px;
  margin-top: 30px;
}
.pop-up-center :nth-of-type(5){
  font-size: 30px;
  line-height: 70px;
  border: 1px solid #2696dd;
  color: #2696dd;
  border-radius: 10px;
}
.pop-up.reveal{
  display: block
}
.pop-up-center .quit{
  display: block;
  color: #2696dd;
  width: 100%;
  height: 100%;
  font-weight:normal;
}
.off{ color: #f53f31; }
.on{ color: #09bb07; }
</style>