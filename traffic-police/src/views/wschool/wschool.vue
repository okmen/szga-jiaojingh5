<template>
  <div class="navv">
    <ul class="nav-outer">
      <!--  <li class="nav-outer-center"><router-link to="xstudy"><p>消分学分</p></router-link></li>
      <li class="nav-outer-center"><router-link to="mstudy"><p>满分学习</p></router-link></li>
      <li class="nav-outer-center"><router-link to="ABstudy"><p>AB类驾驶人学习</p></router-link></li>
      <li class="nav-outer-center"><router-link to="motorstudy"><p>电动车学习</p></router-link></li>
      <li class="nav-outer-center"><router-link to="pedestrianstudy"><p>行人、非机动车安全学习</p><em class="nav-outer-right"></em></router-link></li> -->
      <li class="nav-outer-center" v-for="(list, index) in listData" @click="wschoolClick(index)">
        <router-link :to="testData[index].name">
          <p>{{list.classroomName}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'wschool',
  data () {
    return {
      classroomId: 0,
      listData: [{
        classroomName: '消分学习',
        classroomId: 1
      }, {
        classroomName: '满分学习',
        classroomId: '2'
      }, {
        classroomName: 'AB类驾驶人学习',
        classroomI: '3'
      }, {
        classroomName: '电动车学习',
        classroomId: '4'
      }, {
        classroomName: '行人、非机动车安全学习',
        classroomId: '5'
      }],
      testData: [{
        name: 'xstudy'
      }, {
        name: 'mstudy'
      }, {
        name: 'ABstudy'
      }, {
        name: 'motorstudy'
      }, {
        name: 'motorstudy'
      }]
    }
  },
  methods: {
    wschoolClick: function (index) {
      this.classroomId = index + 1
      window.sessionStorage.setItem('classroomId', this.classroomId)
      console.log(window.sessionStorage.getItem('classroomId'))
    }
  }
}
</script>
<style lang="less">
@import "./../../style/base";
.nav-outer {
  width: 100%;
}

.nav-outer-center {
  width: 100%;
  line-height: 90px;
  font-size: 26px;
  border-bottom: 1px solid #dbdbdb;
  background: url('../../images/space.png') no-repeat;
  background-position: 96% center;
}

.nav-outer-center p {
  margin-left: 46px;
}
</style>
