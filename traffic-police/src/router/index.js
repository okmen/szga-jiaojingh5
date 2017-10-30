/**
 * Created by Deboy on 2017/1/6.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import greenTravel from 'src/router/greenTravel.js' // 绿色出行
import dealServiceRouter from 'src/router/dealService.js' // 办理类服务
import homeRouter from 'src/router/home.js' // 个人中心、登录、星级用户认证
import queryLawlessRouter from 'src/router/queryLawless.js' // 违法处理类
import peopleWillCloudRouter from 'src/router/peopleWillCloud.js' // 民意云
import precontractTypeRouter from 'src/router/precontractType.js' // 预约类
import takePicturesTipsRouter from 'src/router/takePicturesTips.js' // 随手拍举报
import creditRouter from 'src/router/credit.js' // 信息单据证明
import wschoolRouter from 'src/router/wschool.js' // 微课堂
import newQueryLawlessRouter from 'src/router/newQueryLawless.js' // 违法处理类优化版
import dieselEngineTrucks from 'src/router/dieselEngineTrucks.js'

Vue.use(VueRouter)
const routes = [
  // {
  //   name: 'illegalParking',
  //   path: '/illegalParking',
  //   meta: {
  //     title: '违停免罚'
  //   },
  //   component: resolve => require(['../views/illegalParking/index.vue'], resolve)
  // },
  {
    name: 'illegalParking',
    path: '/illegalParking',
    meta: {
      title: '十分钟违停免罚'
    },
    component: resolve => require(['../views/illegalParking/illegalParking.vue'], resolve)
  },
  {
    name: 'queryIllegalParking',
    path: '/queryIllegalParking',
    meta: {
      title: '查询违停免罚'
    },
    component: resolve => require(['../views/illegalParking/list.vue'], resolve)
  },
  {
    name: 'illegalParking_takePhoto',
    path: '/illegalParking_takePhoto',
    meta: {
      title: '十分钟违停免罚'
    },
    component: resolve => require(['../views/illegalParking/takePhoto.vue'], resolve)
  },
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
    component: resolve => require(['../views/authorityIssue/authorityIssue.vue'], resolve)
  },
  {
    name: 'eastSubscribe',
    path: '/eastSubscribe',
    meta: {
      title: '东部预约'
    },
    component: resolve => require(['../views/eastSubscribe/eastSubscribe.vue'], resolve)
  },
  {
    name: 'handyService',
    path: '/handyService',
    meta: {
      title: '便民服务'
    },
    component: resolve => require(['../views/handyService/handyService.vue'], resolve)
  },
  {
    name: 'moveCar',
    path: '/moveCar',
    meta: {
      title: '一键挪车'
    },
    component: resolve => require(['../views/handyService/child/moveCar.vue'], resolve)
  },
  {
    name: 'moveCar_WeChat',                                                    // 微信版本
    path: '/moveCar_WeChat',
    meta: {
      title: '一键挪车'
    },
    component: resolve => require(['../views/handyService/child/moveCar.vue'], resolve)
  },
  {
    name: 'bindCar',
    path: '/bindCar',
    meta: {
      title: '已绑车辆'
    },
    component: resolve => require(['../views/handyService/child/bindCar.vue'], resolve)
  },
  {
    name: 'appointSuccess',
    path: '/appointSuccess',
    meta: {
      title: '预约申办成功'
    },
    component: resolve => require(['../components/appointSuccess.vue'], resolve)
  },
  //  预约申办成功-微信版
  {
    name: 'appointSuccess_WeChat',
    path: '/appointSuccess_WeChat',
    meta: {
      title: '预约申办成功'
    },
    component: resolve => require(['../components/appointSuccess_WeChat.vue'], resolve)
  },
  {
    name: 'userAgreement',
    path: '/userAgreement/:id',
    meta: {
      title: '用户须知'
    },
    component: resolve => require(['../components/userAgreement.vue'], resolve)
  },
  // 车管规费缴纳
  {
    name: 'feePayment',
    path: '/feePayment',
    meta: {
      title: '车管规费缴纳'
    },
    component: resolve => require(['../views/feePayment/feePayment.vue'], resolve)
  },
  {                                                                                          // 预约类
    name: 'userAgreement_precontract',
    path: '/userAgreement_precontract',
    meta: {
      title: '用户须知'
    },
    component: resolve => require(['../components/userAgreement_precontract.vue'], resolve)
  },
  {                                                                                          // 预约类
    name: 'userAgreement_precontract_WeChat',
    path: '/userAgreement_precontract_WeChat',
    meta: {
      title: '用户须知'
    },
    component: resolve => require(['../components/userAgreement_precontract.vue'], resolve)
  },
  {                                                                                          // 微信版本
    name: 'userAgreement_WeChat',
    path: '/userAgreement_WeChat/:id',
    meta: {
      title: '用户须知'
    },
    component: resolve => require(['../components/userAgreement_WeChat.vue'], resolve)
  },
  {                                                                                          // 微信版本
    name: 'emporaryAppointment',
    path: '/emporaryAppointment',
    meta: {
      title: '临时通行预约'
    },
    component: resolve => require(['../views/emporaryAppointment'], resolve),
    redirect: '/emporaryAppointment/makeAppointment',
    children: [
      {
        path: 'makeAppointment',
        component: resolve => require(['../views/emporaryAppointment/component/makeAppointment.vue'], resolve),
        meta: {
          title: '临时通行预约'
        }
      },
      {
        path: 'queryAppointment',
        component: resolve => require(['../views/emporaryAppointment/component/queryAppointment.vue'], resolve),
        meta: {
          title: '临时通行预约'
        }
      }
    ]
  },
  {
    name: 'electrocarFile',
    path: '/electrocarFile',
    meta: {
      title: '电动车档案'
    },
    component: resolve => require(['../views/electrocarFile'], resolve)
  },
  {
    name: 'electrocarFileScancode',
    path: '/electrocarFile/scancode',
    meta: {
      title: '电动车档案-扫一扫'
    },
    component: resolve => require(['../views/electrocarFile/scanCode.vue'], resolve)
  },
  {
    name: 'roadMsgList',
    path: '/roadMsgList',
    meta: {
      title: '路况查询'
    },
    component: resolve => require(['../views/roadMsg/roadMsgList.vue'], resolve)
  },
  {
    name: 'roadMsgDetails',
    path: '/roadMsgDetails',
    meta: {
      title: '路况查询'
    },
    component: resolve => require(['../views/roadMsg/roadMsgDetails.vue'], resolve)
  },
  {
    name: 'systemUpdate',
    path: '/systemUpdate',
    meta: {
      title: '系统升级中'
    },
    component: resolve => require(['../components/systemUpdate.vue'], resolve)
  },
  {                                                                               // 系统升级中 无弹窗
    name: 'systemUpdateNoAlert',
    path: '/systemUpdateNoAlert',
    meta: {
      title: '系统升级中'
    },
    component: resolve => require(['../components/systemUpdateNoAlert.vue'], resolve)
  },
  {
    name: 'CGPageOne',
    path: '/CGPageOne',
    meta: {
      title: '交通举报'
    },
    component: resolve => require(['../views/takePictures_CG/CGPageOne.vue'], resolve)
  },
  {
    name: 'CGPageTwo',
    path: '/CGPageTwo',
    meta: {
      title: '交通举报查询'
    },
    component: resolve => require(['../views/takePictures_CG/CGPageTwo.vue'], resolve)
  },
  {
    name: 'affirmInfo',
    path: '/affirmInfo',
    meta: {
      title: '信息确认'
    },
    component: resolve => require(['../components/affirmInfo.vue'], resolve)
  },
  {
    name: 'affirmInfo_WeChat',                                                 // 微信版本
    path: '/affirmInfo_WeChat',
    meta: {
      title: '信息确认'
    },
    component: resolve => require(['../components/affirmInfo.vue'], resolve)
  },
  {
    name: 'submitSuccess',
    path: '/submitSuccess',
    meta: {
      title: '提交成功'
    },
    component: resolve => require(['../components/submitSuccess.vue'], resolve)
  },
  {
    name: 'submitSuccess_WeChat',                                              // 微信版本
    path: '/submitSuccess_WeChat',
    meta: {
      title: '提交成功'
    },
    component: resolve => require(['../components/submitSuccess.vue'], resolve)
  },
  {
    name: 'freeAbstract',
    path: '/freeAbstract',
    meta: {
      title: '首违免罚介绍'
    },
    component: resolve => require(['../views/dealService/child/car/freeForFirst/freeAbstract.vue'], resolve)
  },
  {
    name: 'freeAbstract_WeChat',                                               // 微信版本
    path: '/freeAbstract_WeChat',
    meta: {
      title: '首违免罚介绍'
    },
    component: resolve => require(['../views/dealService/child/car/freeForFirst/freeAbstract.vue'], resolve)
  },
  {
    name: 'digitalReceipt',
    path: '/digitalReceipt',
    meta: {
      title: '电子回单'
    },
    component: resolve => require(['../views/credit/child/digitalReceipt.vue'], resolve)
  },
  /* {
    name: 'selfForm',
    path: '/selfForm',
    meta: {
      name: '其它业务'
    },
    component: resolve => require(['../components/formTemplate/index.vue'], resolve)
  }, */
  /* {
    name: 'faceSwiping',
    path: '/faceSwiping',
    meta: {
      name: '星级用户认证'
    },
    component: resolve => require(['../views/starUser/faceSwiping'], resolve)
  }, */
  {
    name: 'getFaceInfo',
    path: '/getFaceInfo',
    meta: {
      name: '星级用户认证'
    },
    component: resolve => require(['../views/starUser/child/getFaceInfo'], resolve)
  },
  {
    name: 'registerChoose',
    path: '/registerChoose',
    meta: {
      name: '注册选择'
    },
    component: resolve => require(['../views/starUser/registerChoose'], resolve)
  },
  {
    name: 'testCardBag',
    path: '/testCardBag',
    meta: {
      name: '测试卡包'
    },
    component: resolve => require(['../views/testCardBag'], resolve)
  },
  // 星级用户验证问题反馈
  {
    name: 'issueFeedback',
    path: '/issueFeedback',
    meta: {
      name: '星级用户验证问题反馈'
    },
    component: resolve => require(['../views/issueFeedback/issueFeedback'], resolve)
  },
  {
    name: 'paymentSucceed',
    path: '/paymentSucceed',
    meta: {
      name: '缴费成功'
    },
    component: resolve => require(['../components/paymentSucceed.vue'], resolve)
  },
  {
    name: 'twiceFaceSwiping',
    path: '/twiceFaceSwiping',
    meta: {
      name: '二次刷脸认证'
    },
    component: resolve => require(['../views/twiceFaceSwiping'], resolve)
  },
  // 个人中心、登录、星级用户认证
  ...homeRouter,

  // 绿色出行 - 开始
  ...greenTravel,

  // 民意云
  ...peopleWillCloudRouter,

  // 违法处理类服务
  ...queryLawlessRouter,

  // 办理类服务
  ...dealServiceRouter,

  // 预约类服务
  ...precontractTypeRouter,

  // 随手拍举报
  ...takePicturesTipsRouter,

  // 信息单据证明
  ...creditRouter,

  // 微课堂
  ...wschoolRouter,

  // 违法处理类 新版
  ...newQueryLawlessRouter,
  // 柴油轻型自卸货车
  ...dieselEngineTrucks
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
