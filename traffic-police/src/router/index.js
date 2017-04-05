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
    name: 'queryTab',
    path: '/queryTab',
    meta: {
      title: '交通违法预约'
    },
    component: require('../views/queryLawless/child/queryTab.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
