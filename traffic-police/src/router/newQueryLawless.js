let newQueryLawlessRouter = [
  {
    name: 'newQueryLawless',
    path: '/newQueryLawless',
    meta: {
      title: '违法处理类业务'
    },
    component: require('../views/newQueryLawless/queryLawless.vue')
  },
  {
    name: 'newqueryByCar',
    path: '/newqueryByCar',
    meta: {
      title: '交通违法查询'
    },
    component: require('../views/newQueryLawless/child/newqueryByCar.vue')
  },
  {
    name: 'newLawlessMsg',
    path: '/newLawlessMsg',
    meta: {
      title: '违法查询结果'
    },
    component: require('../views/newQueryLawless/child/newLawlessMsg.vue')
  },
  {
    name: 'appeal',
    path: '/appealEntry',
    meta: {
      title: '违法申诉入口'
    },
    component: require('../views/newQueryLawless/child/appealQuery.vue')
  },
  {
    name: 'illegalAppealResult',
    path: '/illegalResult',
    meta: {
      title: '违法申诉结果页'
    },
    component: require('../views/newQueryLawless/child/illegalAppealResult.vue')
  },
  {
    name: 'newqueryAppeal',
    path: '/newqueryAppeal',
    meta: {
      title: '违法申诉提交表单'
    },
    component: require('../views/newQueryLawless/child/appealForm.vue')
  }
]

export default newQueryLawlessRouter
