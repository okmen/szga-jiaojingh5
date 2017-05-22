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
      title: '深圳交警'
    },
    component: require('../App.vue')
  },
  {
    name: 'authorityIssue',
    path: '/authorityIssue',
    meta: {
      title: '深圳交警权威发布'
    },
    component: require('../views/authorityIssue/authorityIssue.vue')
  },
  {
    name: 'eastSubscribe',
    path: '/eastSubscribe',
    meta: {
      title: '东部预约'
    },
    component: require('../views/eastSubscribe/eastSubscribe.vue')
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
    name: 'findPassword',
    path: '/findPassword',
    meta: {
      title: '深圳交警'
    },
    component: require('../views/login/findPassword.vue')
  },
  {
    name: 'personalCenter',
    path: '/personalCenter',
    meta: {
      title: '个人中心'
    },
    component: require('../views/personalCenter/personalCenter.vue')
  },
  {
    name: 'myECard',
    path: '/myECard',
    meta: {
      title: '我的证件'
    },
    component: require('../views/myECard/myECard.vue')
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
        meta: {
          title: '星级用户认证'
        },
        component: require('../views/starUser/child/carOwner.vue')
      },
      {
        name: 'carUser',
        path: '/starUser/carUser',
        meta: {
          title: '星级用户认证'
        },
        component: require('../views/starUser/child/carUser.vue')
      },
      {
        name: 'drivingLicense',
        path: '/starUser/drivingLicense',
        meta: {
          title: '星级用户认证'
        },
        component: require('../views/starUser/child/drivingLicense.vue')
      },
      {
        name: 'passerBy',
        path: '/starUser/passerBy',
        meta: {
          title: '星级用户认证'
        },
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
    name: 'appeal',
    path: '/appeal',
    meta: {
      title: '违法申诉'
    },
    component: require('../views/queryLawless/child/appealQuery.vue')
  },
  {
    name: 'confirm',
    path: '/confirm',
    meta: {
      title: '违法确认'
    },
    component: require('../views/queryLawless/child/confirmLawless.vue')
  },
  {
    name: 'confirmClaim',
    path: '/confirmClaim/licensePlateNo/:licensePlateNo/plateType/:plateType',
    meta: {
      title: '交通违法打单'
    },
    component: require('../views/queryLawless/child/confirmLawlessPrint.vue')
  },
  {
    name: 'early',
    path: '/early',
    meta: {
      title: '交通违法预约'
    },
    component: require('../views/queryLawless/child/early.vue')
  },
  {
    name: 'illegalTimeSelect',
    path: '/illegalTimeSelect',
    meta: {
      title: '交通违法预约'
    },
    component: require('../views/queryLawless/child/illegalTimeSelect.vue')
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
    name: 'illegalAppealResult',
    path: '/illegalAppealResult',
    meta: {
      title: '违法申诉结果页'
    },
    component: require('../views/queryLawless/child/illegalAppealResult.vue')
  },
  {
    name: 'illegalOrderDeal',
    path: '/illegalOrderDeal',
    meta: {
      title: '违法预约结果查询'
    },
    component: require('../views/queryLawless/child/illegalOrderDeal.vue')
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
    name: 'electricCar',
    path: '/electricCar',
    meta: {
      title: '电动车管理'
    },
    component: require('../views/wschool/electricCar.vue')
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
      title: '交通文明我做主'
    },
    component: require('../views/peopleWillCloud/peopleWillCloud.vue'),
    redirect: '/peopleWillCloud/facility',
    children: [
      {
        name: 'facility',
        path: '/peopleWillCloud/facility',
        meta: {
          title: '交通文明我做主'
        },
        component: require('../views/peopleWillCloud/child/facility.vue')
      },
      {
        name: 'secure',
        path: '/peopleWillCloud/secure',
        meta: {
          title: '交通文明我做主'
        },
        component: require('../views/peopleWillCloud/child/secure.vue')
      },
      {
        name: 'jam',
        path: '/peopleWillCloud/jam',
        meta: {
          title: '交通文明我做主'
        },
        component: require('../views/peopleWillCloud/child/jam.vue')
      },
      {
        name: 'order',
        path: '/peopleWillCloud/order',
        meta: {
          title: '交通文明我做主'
        },
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
    name: 'takePicturesSuccess1',                                                                // 举报成功外部链接
    path: '/takePicturesSuccess1',
    meta: {
      title: '随手拍举报成功'
    },
    component: require('../views/takePictures/child/takePicturesSuccess1.vue')
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
    name: 'appointSuccess',
    path: '/appointSuccess',
    meta: {
      title: '预约申办成功'
    },
    component: require('../components/appointSuccess.vue')
  },
  {
    name: 'userAgreement',
    path: '/userAgreement',
    meta: {
      title: '用户须知'
    },
    component: require('../components/userAgreement.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
