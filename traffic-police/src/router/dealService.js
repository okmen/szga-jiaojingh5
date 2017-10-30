let dealServiceRouter = [
  {
    name: 'dealService_WeChat',                                                              // 微信版本
    path: '/dealService_WeChat',
    meta: {
      title: '办理类业务'
    },
    component: resolve => require(['../views/dealService_WeChat/dealService.vue'], resolve)
  },
  {
    name: 'confirmLawless_WeChat',                                                           // 微信版本
    path: '/confirmLawless_WeChat',
    meta: {
      title: '违法在线确认'
    },
    component: resolve => require(['../views/dealService_WeChat/child/confirmLawless_WeChat.vue'], resolve)
  },
  {
    name: 'newLawlessMsg_WeChat',                                                            // 微信版本
    path: '/newLawlessMsg_WeChat',
    meta: {
      title: '违法查询结果'
    },
    component: resolve => require(['../views/dealService_WeChat/child/newLawlessMsg_WeChat.vue'], resolve)
  },
  {
    name: 'newEarly_WeChat',                                                                 // 微信版本
    path: '/newEarly_WeChat/:id?',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/dealService_WeChat/child/newEarly_WeChat.vue'], resolve)
  },
  {
    name: 'newPayLawless_WeChat',                                                            // 微信版本
    path: '/newPayLawless_WeChat',
    meta: {
      title: '交通违法缴款'
    },
    component: resolve => require(['../views/dealService_WeChat/child/newPayLawless_WeChat.vue'], resolve)
  },
  {
    name: 'newTimeSelect_WeChat',
    path: '/newTimeSelect_WeChat',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/dealService_WeChat/child/newTimeSelect_WeChat.vue'], resolve)
  },
  {
    name: 'dealService',
    path: '/dealService',
    meta: {
      title: '办理类业务'
    },
    component: resolve => require(['../views/dealService/dealService.vue'], resolve)
  },
  {
    name: 'IDQuery',
    path: '/IDQuery',
    meta: {
      title: '办理类业务'
    },
    component: resolve => require(['../views/dealService/child/queryProgress/IDQuery.vue'], resolve)
  },
  {
    name: 'queryProgress',
    path: '/queryProgress',
    meta: {
      title: '办理进度查询'
    },
    component: resolve => require(['../views/dealService/child/queryProgress/queryProgress.vue'], resolve)
  },
  {
    name: 'queryProgress_WeChat',                                              // 微信版本
    path: '/queryProgress_WeChat',
    meta: {
      title: '办理进度查询'
    },
    component: resolve => require(['../views/dealService/child/queryProgress/queryProgress.vue'], resolve)
  },
  {
    name: 'applyClass',
    path: '/applyClass/:id',
    meta: {
      title: '申请类'
    },
    component: resolve => require(['../views/dealService/child/car/applyClass/applyClass.vue'], resolve)
  },
  {
    name: 'applyClass_WeChat',                                                           // 微信版本
    path: '/applyClass_WeChat/:id',
    meta: {
      title: '申请类'
    },
    component: resolve => require(['../views/dealService/child/car/applyClass/applyClass.vue'], resolve)
  },
  {
    name: 'changeCard',
    path: '/changeCard/id/:id',
    meta: {
      title: '补换证类'
    },
    component: resolve => require(['../views/dealService/child/card/changeCard/changeCard.vue'], resolve)
  },
  {
    name: 'changeCard_WeChat',                                                         // 微信版本
    path: '/changeCard_WeChat/id/:id',
    meta: {
      title: '补换证类'
    },
    component: resolve => require(['../views/dealService/child/card/changeCard/changeCard.vue'], resolve)
  },
  {
    name: 'freeForFirst',
    path: '/freeForFirst',
    meta: {
      title: '首违免罚查询'
    },
    component: resolve => require(['../views/dealService/child/car/freeForFirst/freeForFirst.vue'], resolve)
  },
  {
    name: 'freeForFirst_WeChat',                                                    // 微信版本
    path: '/freeForFirst_WeChat',
    meta: {
      title: '首违免罚查询'
    },
    component: resolve => require(['../views/dealService/child/car/freeForFirst/freeForFirst.vue'], resolve)
  },
  {
    name: 'annualExaminations',
    path: '/annualExaminations',
    meta: {
      title: '驾驶证年审'
    },
    component: resolve => require(['../views/dealService/child/card/annualExaminations/annualExaminations.vue'], resolve)
  },
  {
    name: 'annualExaminations_WeChat',                                              // 微信版本
    path: '/annualExaminations_WeChat',
    meta: {
      title: '驾驶证年审'
    },
    component: resolve => require(['../views/dealService/child/card/annualExaminations/annualExaminations.vue'], resolve)
  },
  {
    name: 'intoCard',
    path: '/intoCard',
    meta: {
      title: '驾驶证转入'
    },
    component: resolve => require(['../views/dealService/child/card/intoCard/intoCard.vue'], resolve)
  },
  {
    name: 'intoCard_WeChat',                                                        // 微信版本
    path: '/intoCard_WeChat',
    meta: {
      title: '驾驶证转入'
    },
    component: resolve => require(['../views/dealService/child/card/intoCard/intoCard.vue'], resolve)
  },
  {
    name: 'degradeCard',
    path: '/degradeCard',
    meta: {
      title: '驾驶证自愿降级'
    },
    component: resolve => require(['../views/dealService/child/card/degradeCard/degradeCard.vue'], resolve)
  },
  {
    name: 'degradeCard_WeChat',                                                     // 微信版本
    path: '/degradeCard_WeChat',
    meta: {
      title: '驾驶证自愿降级'
    },
    component: resolve => require(['../views/dealService/child/card/degradeCard/degradeCard.vue'], resolve)
  },
  {
    name: 'changeConnect',
    path: '/changeConnect',
    meta: {
      title: '驾驶人联系方式变更'
    },
    component: resolve => require(['../views/dealService/child/card/changeConnect/changeConnect.vue'], resolve)
  },
  {
    name: 'changeConnect_WeChat',                                                   // 微信版本
    path: '/changeConnect_WeChat',
    meta: {
      title: '驾驶人联系方式变更'
    },
    component: resolve => require(['../views/dealService/child/card/changeConnect/changeConnect.vue'], resolve)
  },
  {
    name: 'replaceCredentials',
    path: '/replaceCredentials',
    component: resolve => require(['../views/dealService/child/car/replaceCredentials/index.vue'], resolve),
    redirect: '/replaceCredentials/repairDrivingLicense',
    children: [
      {
        name: 'repairDrivingLicense',
        path: 'repairDrivingLicense',
        meta: {
          title: '补领行驶证'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/repairDrivingLicense.vue'], resolve)
      },
      {
        name: 'exchangeDrivingLicense',
        path: 'exchangeDrivingLicense',
        meta: {
          title: '换领行驶证'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/exchangeDrivingLicense.vue'], resolve)
      },
      {
        name: 'replaceQualifiedMark',
        path: 'replaceQualifiedMark',
        meta: {
          title: '补换检验合格标志'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/replaceQualifiedMark.vue'], resolve)
      },
      {
        name: 'replaceLicencePlate',
        path: 'replaceLicencePlate',
        meta: {
          title: '补领机动车号牌'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/replaceLicencePlate.vue'], resolve)
      }
    ]
  },
  {
    name: 'replaceCredentials_WeChat',                                                // 微信版本
    path: '/replaceCredentials_WeChat',
    component: resolve => require(['../views/dealService/child/car/replaceCredentials/index.vue'], resolve),
    redirect: '/replaceCredentials_WeChat/repairDrivingLicense',
    children: [
      {
        name: 'repairDrivingLicense',
        path: 'repairDrivingLicense',
        meta: {
          title: '补领行驶证'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/repairDrivingLicense.vue'], resolve)
      },
      {
        name: 'exchangeDrivingLicense',
        path: 'exchangeDrivingLicense',
        meta: {
          title: '换领行驶证'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/exchangeDrivingLicense.vue'], resolve)
      },
      {
        name: 'replaceQualifiedMark',
        path: 'replaceQualifiedMark',
        meta: {
          title: '补换检验合格标志'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/replaceQualifiedMark.vue'], resolve)
      },
      {
        name: 'replaceLicencePlate',
        path: 'replaceLicencePlate',
        meta: {
          title: '补领机动车号牌'
        },
        component: resolve => require(['../views/dealService/child/car/replaceCredentials/replaceLicencePlate.vue'], resolve)
      }
    ]
  },
  {
    name: 'esemptionCar',
    path: '/esemptionCar',
    meta: {
      title: '六年免检申请'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/esemptionCar.vue'], resolve)
  },
  {
    name: 'esemptionCar_WeChat',                                               // 微信版本
    path: '/esemptionCar_WeChat',
    meta: {
      title: '六年免检申请'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/esemptionCar.vue'], resolve)
  },
  {
    name: 'exemption',
    path: '/exemption',
    meta: {
      title: '六年免检申请'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/exemption.vue'], resolve)
  },
  {
    name: 'exemptionDemand',
    path: '/exemptionDemand',
    meta: {
      title: '六年免检查询取消'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/exemptionDemand.vue'], resolve)
  },
  {
    name: 'exemptionAbolish',
    path: '/exemptionAbolish',
    meta: {
      title: '六年免检查询取消'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/exemptionAbolish.vue'], resolve)
  },
  {
    name: 'exemptionAbolish_WeChat',                                           // 微信版本
    path: '/exemptionAbolish_WeChat',
    meta: {
      title: '六年免检查询取消'
    },
    component: resolve => require(['../views/dealService/child/car/exemption/exemptionAbolish.vue'], resolve)
  },
  {
    name: 'placeExamine',
    path: '/placeExamine',
    meta: {
      title: '机动车委托异地定期检验申报'
    },
    component: resolve => require(['../views/dealService/child/car/placeExamine/placeExamine.vue'], resolve)
  },
  {
    name: 'placeExamine_WeChat',                                               // 微信版本
    path: '/placeExamine_WeChat',
    meta: {
      title: '机动车委托异地定期检验申报'
    },
    component: resolve => require(['../views/dealService/child/car/placeExamine/placeExamine.vue'], resolve)
  },
  {
    name: 'placeExamineCar',
    path: '/placeExamineCar',
    meta: {
      title: '机动车委托异地定期检验申报'
    },
    component: resolve => require(['../views/dealService/child/car/placeExamine/placeExamineCar.vue'], resolve)
  },
  {
    name: 'placeExamineDemand',
    path: '/placeExamineDemand',
    meta: {
      title: '机动车委托异地定期检验申报查询'
    },
    component: resolve => require(['../views/dealService/child/car/placeExamine/placeExamineDemand.vue'], resolve)
  },
  {
    name: 'motorAlteration',
    path: '/motorAlteration',
    meta: {
      title: '机动车联系方式变更'
    },
    component: resolve => require(['../views/dealService/child/car/motorAlteration.vue'], resolve)
  },
  {
    name: 'motorAlteration_WeChat',                                            // 微信版本
    path: '/motorAlteration_WeChat',
    meta: {
      title: '机动车联系方式变更'
    },
    component: resolve => require(['../views/dealService/child/car/motorAlteration.vue'], resolve)
  }
]

export default dealServiceRouter
