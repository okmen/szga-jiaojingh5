let newQueryLawlessRouter = [
  {
    name: 'newQueryLawless',
    path: '/newQueryLawless',
    meta: {
      title: '违法处理类业务'
    },
    component: resolve => require(['../views/newQueryLawless/queryLawless.vue'], resolve)
  },
  {
    name: 'newqueryByCar',
    path: '/newqueryByCar',
    meta: {
      title: '交通违法查询'
    },
    component: resolve => require(['../views/newQueryLawless/child/newqueryByCar.vue'], resolve)
  },
  {
    name: 'newqueryByCar_manual',               // 手动交通违法查询
    path: '/newqueryByCar_manual',
    meta: {
      title: '交通违法查询'
    },
    component: resolve => require(['../views/newQueryLawless/child/newqueryByCar_manual.vue'], resolve)
  },
  {
    name: 'newqueryByCard',               // 手动交通驾驶证违法查询
    path: '/newqueryByCard',
    meta: {
      title: '交通违法驾驶证查询'
    },
    component: resolve => require(['../views/newQueryLawless/child/newqueryByCard.vue'], resolve)
  },
  {
    name: 'newLawlessMsg',
    path: '/newLawlessMsg',
    meta: {
      title: '违法查询结果'
    },
    component: resolve => require(['../views/newQueryLawless/child/newLawlessMsg.vue'], resolve)
  },
  {
    name: 'newLawlessMsg_noBtn',
    path: '/newLawlessMsg_noBtn',
    meta: {
      title: '违法查询结果'
    },
    component: resolve => require(['../views/newQueryLawless/child/newLawlessMsg_noBtn.vue'], resolve)
  },
  {
    name: 'appeal',
    path: '/appealEntry',
    meta: {
      title: '违法申诉入口'
    },
    component: resolve => require(['../views/newQueryLawless/child/appealQuery.vue'], resolve)
  },
  {
    name: 'appeal_WeChat',                                                           // 微信版本
    path: '/appealEntry_WeChat',
    meta: {
      title: '违法申诉入口'
    },
    component: resolve => require(['../views/newQueryLawless/child/appealQuery.vue'], resolve)
  },
  {
    name: 'illegalAppealResult',
    path: '/illegalResult',
    meta: {
      title: '违法申诉结果页'
    },
    component: resolve => require(['../views/newQueryLawless/child/illegalAppealResult.vue'], resolve)
  },
  {
    name: 'newqueryAppeal',
    path: '/newqueryAppeal',
    meta: {
      title: '违法申诉提交表单'
    },
    component: resolve => require(['../views/newQueryLawless/child/appealForm.vue'], resolve)
  },
  {
    name: 'confirmLawless',
    path: '/confirmLawless',
    meta: {
      title: '违法在线确认'
    },
    component: resolve => require(['../views/newQueryLawless/child/confirmLawless.vue'], resolve)
  },
  {
    name: 'newEarly',
    path: '/newEarly',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/newQueryLawless/child/early.vue'], resolve)
  },
  {
    name: 'newPayLawless',
    path: '/newPayLawless',
    meta: {
      title: '交通违法缴款'
    },
    component: resolve => require(['../views/newQueryLawless/child/newPayLawless.vue'], resolve)
  },
  {
    name: 'newTimeSelect',
    path: '/newTimeSelect',
    meta: {
      title: '交通违法预约'
    },
    component: resolve => require(['../views/newQueryLawless/child/illegalTimeSelect.vue'], resolve)
  },
  {
    name: 'illegalImage',
    path: '/illegalImage',
    meta: {
      title: '违法图片'
    },
    component: resolve => require(['../views/newQueryLawless/child/illegalImage.vue'], resolve)
  }
]

export default newQueryLawlessRouter
