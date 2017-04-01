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
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
