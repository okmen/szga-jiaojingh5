<template>
  <div class="answer">
    <div class="answer-head">
      <div class="answer-head-regit" >
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/mistake.png"></dt>
          <dd>已错{{answertData.answererror}}题</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/time.png"></dt>
          <!-- <dd id="tt">{{answertData.answerTime}}</dd> -->
          <dd id="tt">{{chronoScope}}</dd>
        </dl>
        <dl class="answer-head-rgt">
          <dt><img src="../../../images/sand.png"></dt>
          <dd>剩余{{surplusAnswe}}题</dd>
        </dl>
        <dl class="answer-head-rgt" :click="popClick()">
          <dt><img src="../../../images/exit.png"></dt>
          <dd>退出</dd>
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
    <span class="answer-center-left" v-if="testQuestionsType == '判断题'">判</span>
      <span class="answer-center-left" v-else>选</span>
      <span class="answer-center-right">{{answertData.subjectName}}</span>
    </div>
    <img class="answer-button" v-if="testQuestionsType == '选择题'" :src="'data:image/jpg;base64,'+answertData.subjectImg">
    <ul class="answer-foot"  @click="clickAnswer()">
      <!-- <li class="answer-foot-button" v-for="(item, index) in answerName" @click="clickAnswer(index)" 
      :class="[{'on':flag == index},{'off':tlag == index}]">
        <img class="answer-foot-img" :src="testData[index].img">{{item}}
      }
      </li> -->
      <li class="answer-foot-button" >
        <img class="answer-foot-img" src="../../../images/A.png">{{answertData.answerA}}
      </li>
      <li class="answer-foot-button" >
        <img class="answer-foot-img" src="../../../images/B.png">{{answertData.answerB}}
      </li>
      <li class="answer-foot-button" >
        <img class="answer-foot-img" src="../../../images/C.png">{{answertData.answerC}}
      </li>
      <li class="answer-foot-button" >
        <img class="answer-foot-img" src="../../../images/D.png">{{answertData.answerD}}
      </li>
    </ul>
    <div id="NofItems" class="answer-option" v-bind:class="{ 'show' : isBtnShow}" @click="countClick()">下一题</div>
  </div>
</template>
<script>
import { resultPost } from '../../../service/getData'
import { answer, answers } from '../../../config/baseUrl'

export default {
  name: 'answer',
  data () {
    return {
      testQuestionsType: '',
      isBtnShow: false,
      isReveal: false,
      tlag: 5,
      flag: 5,
      clickNum: 1,
      chronoScope: 0,
      surplusAnswe: 10,
      skip: '',
      answertData: {
      },
      subjectAnswer: '',
      testData: [{
        img: require('../../../images/A.png')
      }]
    }
  },
  methods: {
    // clickAnswer: function (clickIndex) {
    //   this.isBtnShow = true
    //   var answesData = {
    //     classroomId: 2,
    //     userId: '',
    //     userPwd: '',
    //     identityCard: '',
    //     mobilephone: '',
    //     drive: ''
    //   }
    //   resultPost(answers, answesData).then(json => {
    //     // console.log(json)
    //     this.testData[clickIndex].img = require('../../../images/fault.png')
    //     this.tlag = clickIndex
    //     this.answertData.forEach((obj, index) => {
    //       console.log(obj.answertData)
    //       if (obj.answertData === this.subjectAnswer) {
    //         this.testData[index].img = require('../../../images/correct.png')
    //         this.flag = index
    //         this.answertData.answererror++
    //       }
    //     })
    //   })
    // },
    clickAnswer: function () {
      this.isBtnShow = true
      var answesData = {
        classroomId: 4,
        userId: '',
        userPwd: '',
        identityCard: '',
        mobilephone: '',
        drive: '',
        subjectAnswer: ''
      }
      resultPost(answers, answesData).then(json => {
        this.testData.img = require('../../../images/fault.png')
      })
    },
    popClick: function () {
      let anData = this.chronoScope
      if (anData === '30:00') {
        this.isReveal = true
        // window.clearInterval(timePiece)
      }
    },
    countClick: function () {
      let isclickNum = this.clickNum++
      this.surplusAnswe--
      this.loadingData()
      console.log(isclickNum)
      if (isclickNum === 10) {
        document.getElementById('NofItems').innerHTML = '结束答题'
      } else if (isclickNum === 11) {
        this.$router.push('grade')
      }
    },
    loadingData: function () {
      var answeData = {
        classroomId: 4,
        userId: '',
        userPwd: '',
        identityCard: '',
        mobilephone: '',
        drive: ''
      }
      resultPost(answer, answeData).then(json => {
        this.answertData = json.data[0]
        console.log(json)
        this.testQuestionsType = json.data[0].testQuestionsType
      })
    },
    timePiece: function () {
      var mm = 0
      var ss = 0
      var str = ''
      setInterval(() => {
        str = ''
        if (++ss === 60) {
          if (++mm === 60) {
            mm = 0
          }
          ss = 0
        }
        str += mm < 10 ? '0' + mm : mm
        str += ':'
        str += ss < 10 ? '0' + ss : ss
        this.chronoScope = str
      }, 1000)
    }
  },
  created () {
    this.loadingData()
    this.timePiece()
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
  width: 120px;
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