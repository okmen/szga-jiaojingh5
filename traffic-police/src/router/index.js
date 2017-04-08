/**
 * Created by Deboy on 2017/1/6.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    name: 'Home',
    path: '/home',
    meta: {
      title: '首页'
    },
    component: require('../views/home/Home')
  },
  {
    name: 'starUser',
    path: '/starUser',
    meta: {
      title: '星级用户认证'
    },
    component: require('../views/starUser/starUser.vue')
  },
  {
    name: 'queryLawless',
    path: '/queryLawless',
    meta: {
      title: '违法处理类业务'
    },
    component: require('../views/queryLawless/queryLawless.vue')
  },
  {
    name: 'earlyLawless',
    path: '/earlyLawless',
    meta: {
      title: '交通违法预约'
    },
    component: require('../views/queryLawless/child/earlyLawless.vue')
  },
  {
    name: 'wschool',
    path: '/wschool',
    meta: {
      title: '微学堂'
    },
    component: require('../views/wschool/wschool.vue')
  },
  {
    name: 'xstudy',
    path: '/xstudy',
    meta: {
      title: '消分学习'
    },
    component: require('../views/wschool/subclass/xstudy.vue')
  },
  {
    name: 'mstudy',
    path: '/mstudy',
    meta: {
      title: '满分学习'
    },
    component: require('../views/wschool/subclass/mstudy.vue')
  },
  {
    name: 'motorstudy',
    path: '/motorstudy',
    meta: {
      title: '电动车学习'
    },
    component: require('../views/wschool/subclass/motorstudy.vue')
  },
  {
    name: 'answer',
    path: '/answer',
    meta: {
      title: '答题'
    },
    component: require('../views/wschool/subclass/answer.vue')
  },
  {
    name: 'grade',
    path: '/grade',
    meta: {
      title: '评分'
    },
    component: require('../views/wschool/subclass/grade.vue')
  },
  {
    name: 'result',
    path: '/result',
    meta: {
      title: '成绩'
    },
    component: require('../views/wschool/subclass/result.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
