let routerConfig = [
  {
    name: 'greenTravel',
    path: '/greenTravel',
    meta: {
      title: '绿色出行'
    },
    component: resolve => require(['../views/greenTravel/greenTravel.vue'], resolve)
  },
  {
    name: 'starLevel',
    path: '/greenTravel/starLevel',
    meta: {
      title: '绿色出行'
    },
    component: resolve => require(['../views/greenTravel/starLevel.vue'], resolve)
  },
  {
    name: 'prize',
    path: '/prize',
    meta: {
      title: '奖励说明'
    },
    component: resolve => require(['../views/greenTravel/prize.vue'], resolve)
  },
  {
    name: 'greenApply',
    path: '/greenTravel/greenApply',
    meta: {
      title: '绿色出行-录入信息'
    },
    component: resolve => require(['../views/greenTravel/greenApply.vue'], resolve)
  },
  {
    name: 'greenApplyNoLogin',
    path: '/greenTravel/greenApplyNoLogin',
    meta: {
      title: '绿色出行-非星级用户录入信息'
    },
    component: resolve => require(['../views/greenTravel/greenApplyNoLogin.vue'], resolve)
  },
  {
    name: 'greenApplyDate',
    path: '/greenTravel/greenApplyDate',
    meta: {
      title: '申报停驶日期'
    },
    component: resolve => require(['../views/greenTravel/greenApplyDate.vue'], resolve)
  },
  {
    name: 'greenComplaint',
    path: '/greenTravel/greenComplaint',
    meta: {
      title: '申报停驶日期'
    },
    component: resolve => require(['../views/greenTravel/greenComplaint.vue'], resolve)
  },
  {
    name: 'greenItem',
    path: '/greenTravel/greenItem',
    meta: {
      title: '申报停驶日期'
    },
    component: resolve => require(['../views/greenTravel/greenItem.vue'], resolve)
  }
]

export default routerConfig
