/**
 * Created by Deboy on 2017/1/6.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: require('../App.vue')
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: require('../views/login/login.vue')
  },
  {
    name: 'personalCenter',
    path: '/personalCenter',
    meta: {
      title: '登录'
    },
    component: require('../views/personalCenter/personalCenter.vue')
  },
  {
    name: 'starUser',
    path: '/starUser',
    meta: {
      title: '星级用户认证'
    },
    component: require('../views/starUser/starUser.vue'),
    redirect: '/starUser/carOwner',
    children: [
      {
        name: 'carOwner',
        path: '/starUser/carOwner',
        component: require('../views/starUser/child/carOwner.vue')
      },
      {
        name: 'carUser',
        path: '/starUser/carUser',
        component: require('../views/starUser/child/carUser.vue')
      },
      {
        name: 'drivingLicense',
        path: '/starUser/drivingLicense',
        component: require('../views/starUser/child/drivingLicense.vue')
      },
      {
        name: 'passerBy',
        path: '/starUser/passerBy',
        component: require('../views/starUser/child/passerBy.vue')
      }
    ]
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
    name: 'payLawless',
    path: '/payLawless',
    meta: {
      title: '违法缴款'
    },
    component: require('../views/queryLawless/child/payLawless.vue')
  },
  {
    name: 'queryLawlessPage',
    path: '/queryLawlessPage',
    meta: {
      title: '查询违法记录页面'
    },
    component: require('../views/queryLawless/child/queryLawlessPage.vue')
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
    name: 'motorstudy',
    path: '/motorstudy',
    meta: {
      title: '微学堂学习'
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
    component: require('../views/wschool/subclass/child/grade.vue')

  },
  {
    name: 'result',
    path: '/result',
    meta: {
      title: '成绩'
    },
    component: require('../views/wschool/subclass/child/result.vue')
  },
  {
    name: 'peopleWillCloud',
    path: '/peopleWillCloud',
    meta: {
      title: '深圳交警'
    },
    component: require('../views/peopleWillCloud/peopleWillCloud.vue'),
    redirect: '/peopleWillCloud/facility',
    children: [
      {
        name: 'facility',
        path: '/peopleWillCloud/facility',
        component: require('../views/peopleWillCloud/child/facility.vue')
      },
      {
        name: 'secure',
        path: '/peopleWillCloud/secure',
        component: require('../views/peopleWillCloud/child/secure.vue')
      },
      {
        name: 'jam',
        path: '/peopleWillCloud/jam',
        component: require('../views/peopleWillCloud/child/jam.vue')
      },
      {
        name: 'order',
        path: '/peopleWillCloud/order',
        component: require('../views/peopleWillCloud/child/order.vue')
      }
    ]
  },
  {
    name: 'handyService',
    path: '/handyService',
    meta: {
      title: '便民服务'
    },
    component: require('../views/handyService/handyService.vue')
  },
  {
    name: 'moveCar',
    path: '/moveCar',
    meta: {
      title: '一键挪车'
    },
    component: require('../views/handyService/child/moveCar.vue')
  },
  {
    name: 'answers',
    path: '/answers',
    meta: {
      title: '学习答题'
    },
    component: require('../views/wschool/subclass/answers.vue')
  },
  {
    name: 'takePicturesTips',
    path: '/takePicturesTips',
    meta: {
      title: '随手拍举报温馨提示'
    },
    component: require('../views/takePictures/child/takePicturesTips.vue')
  },
  {
    name: 'takePicturesSuccess',
    path: '/takePicturesSuccess',
    meta: {
      title: '随手拍举报成功'
    },
    component: require('../views/takePictures/child/takePicturesSuccess.vue')
  },
  {
    name: 'takePicturesInform',
    path: '/takePicturesInform',
    meta: {
      title: '随手拍举报'
    },
    component: require('../views/takePictures/takePicturesInform')
  },
  {
    name: 'trafficCivilization',
    path: '/trafficCivilization',
    mate: {
      title: '文明交通我做主'
    },
    component: require('../views/peopleWillCloud/trafficCivilization.vue')
  },
  {
    name: 'updatePwd',
    path: '/updatePwd',
    meta: {
      title: '个人资料'
    },
    component: require('../views/personalCenter/child/updatePwd.vue')
  },
  {
    name: 'updateMobile',
    path: '/updateMobile',
    meta: {
      title: '个人资料'
    },
    component: require('../views/personalCenter/child/updateMobile.vue')
  },
  {
    name: 'addVehicle',
    path: '/addVehicle',
    meta: {
      title: '添加车辆'
    },
    component: require('../views/personalCenter/child/addVehicle.vue')
  },
  {
    name: 'updateUser',
    path: '/updateUser',
    meta: {
      title: '个人资料'
    },
    component: require('../views/personalCenter/child/updateUser.vue')
  },
  {
    name: 'userInfo',
    path: '/userInfo',
    component: require('../views/personalCenter/child/userInfo.vue')
  },
  {
    name: 'map',
    path: '/map',
    meta: {
      title: '地图'
    },
    component: require('../views/takePictures/map.vue')
  },
  {
    name: 'getLocation',
    path: '/getLocation',
    meta: {
      title: '互联网+民意投票'
    },
    component: require('../views/getLocation/getLocation.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
