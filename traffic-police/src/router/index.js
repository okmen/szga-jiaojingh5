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
    component: require('../views/Home.vue')
  },
  {
    name: 'starUser',
    path: '/starUser',
    meta: {
      title: '星级用户认证'
    },
    component: require('../views/starUser.vue')
  },
  {
    name: 'starUser22',
    path: '/starUser22',
    meta: {
      title: '星级用户认证2'
    },
    component: require('../views/starUser22.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
