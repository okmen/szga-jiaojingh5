let dealServiceRouter = [
  {
    name: 'dealService',
    path: '/dealService',
    meta: {
      title: '办理类业务'
    },
    component: require('../views/dealService/dealService.vue')
  },
  {
    name: 'queryProgress',
    path: '/queryProgress',
    meta: {
      title: '办理进度查询'
    },
    component: require('../views/dealService/child/queryProgress/queryProgress.vue')
  },
  {
    name: 'applyClass',
    path: '/applyClass/:id',
    meta: {
      title: '申请类'
    },
    component: require('../views/dealService/child/car/applyClass/applyClass.vue')
  },
  {
    name: 'changeCard',
    path: '/changeCard/id/:id',
    meta: {
      title: '补换证类'
    },
    component: require('../views/dealService/child/card/changeCard/changeCard.vue')
  },
  {
    name: 'freeForFirst',
    path: '/freeForFirst',
    meta: {
      title: '首违免罚查询'
    },
    component: require('../views/dealService/child/car/freeForFirst/freeForFirst.vue')
  },
  {
    name: 'annualExaminations',
    path: '/annualExaminations',
    meta: {
      title: '驾驶证年审'
    },
    component: require('../views/dealService/child/card/annualExaminations/annualExaminations.vue')
  },
  {
    name: 'intoCard',
    path: '/intoCard',
    meta: {
      title: '驾驶证转入'
    },
    component: require('../views/dealService/child/card/intoCard/intoCard.vue')
  },
  {
    name: 'degradeCard',
    path: '/degradeCard',
    meta: {
      title: '驾驶证自愿降级'
    },
    component: require('../views/dealService/child/card/degradeCard/degradeCard.vue')
  },
  {
    name: 'changeConnect',
    path: '/changeConnect',
    meta: {
      title: '驾驶人联系方式变更'
    },
    component: require('../views/dealService/child/card/changeConnect/changeConnect.vue')
  },
  {
    name: 'replaceCredentials',
    path: '/replaceCredentials',
    component: require('../views/dealService/child/car/replaceCredentials/index.vue'),
    redirect: '/replaceCredentials/repairDrivingLicense',
    children: [
      {
        name: 'repairDrivingLicense',
        path: 'repairDrivingLicense',
        meta: {
          title: '补领行驶证'
        },
        component: require('../views/dealService/child/car/replaceCredentials/repairDrivingLicense.vue')
      },
      {
        name: 'exchangeDrivingLicense',
        path: 'exchangeDrivingLicense',
        meta: {
          title: '换领行驶证'
        },
        component: require('../views/dealService/child/car/replaceCredentials/exchangeDrivingLicense.vue')
      },
      {
        name: 'replaceQualifiedMark',
        path: 'replaceQualifiedMark',
        meta: {
          title: '补换检验合格标志'
        },
        component: require('../views/dealService/child/car/replaceCredentials/replaceQualifiedMark.vue')
      },
      {
        name: 'replaceLicencePlate',
        path: 'replaceLicencePlate',
        meta: {
          title: '补领机动车号牌'
        },
        component: require('../views/dealService/child/car/replaceCredentials/replaceLicencePlate.vue')
      }
    ]
  },
  {
    name: 'exemption',
    path: '/exemption',
    meta: {
      title: '六年免检申请'
    },
    component: require('../views/dealService/child/car/exemption.vue')
  },
  {
    name: 'placeExamine',
    path: '/placeExamine',
    meta: {
      title: '机动车委托异地定期检验申报'
    },
    component: require('../views/dealService/child/car/placeExamine.vue')
  },
  {
    name: 'motorAlteration',
    path: '/motorAlteration',
    meta: {
      title: '机动车联系方式变更'
    },
    component: require('../views/dealService/child/car/motorAlteration.vue')
  }
]

export default dealServiceRouter
