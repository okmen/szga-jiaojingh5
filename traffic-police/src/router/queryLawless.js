let queryLawlessRouter = [
  {
    name: 'queryLawless',
    path: '/queryLawless',
    meta: {
      title: '违法处理类业务'
    },
    component: resolve => require(['../views/queryLawless/queryLawless.vue'], resolve)
  },
  {
    name: 'appeal',
    path: '/appeal',
    meta: {
      title: '违法申诉'
    },
    component: resolve => require(['../views/queryLawless/child/appealQuery.vue'], resolve)
  },
  {
    name: 'confirm',
    path: '/confirm',
    meta: {
      title: '违法确认'
    },
    component: resolve => require(['../views/queryLawless/child/confirmLawless.vue'], resolve)
  },
  {
    name: 'confirmClaim',
    path: '/confirmClaim/licensePlateNo/:licensePlateNo/plateType/:plateType',
    meta: {
      title: '交通违法打单'
    },
    component: resolve => require(['../views/queryLawless/child/confirmLawlessPrint.vue'], resolve)
  },
  {
    name: 'early',
    path: '/early',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/queryLawless/child/early.vue'], resolve)
  },
  {
    name: 'illegalTimeSelect',
    path: '/illegalTimeSelect',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/queryLawless/child/illegalTimeSelect.vue'], resolve)
  },
  {
    name: 'payLawless',
    path: '/payLawless',
    meta: {
      title: '违法缴款'
    },
    component: resolve => require(['../views/queryLawless/child/payLawless.vue'], resolve)
  },
  {
    name: 'queryLawlessPage',
    path: '/queryLawlessPage',
    meta: {
      title: '查询违法记录页面'
    },
    component: resolve => require(['../views/queryLawless/child/queryLawlessPage.vue'], resolve)
  },
  {
    name: 'illegalAppealResult',
    path: '/illegalAppealResult',
    meta: {
      title: '违法申诉结果页'
    },
    component: resolve => require(['../views/queryLawless/child/illegalAppealResult.vue'], resolve)
  },
  {
    name: 'illegalOrderDeal',
    path: '/illegalOrderDeal',
    meta: {
      title: '违法预约结果查询'
    },
    component: resolve => require(['../views/queryLawless/child/illegalOrderDeal.vue'], resolve)
  }
]

export default queryLawlessRouter
