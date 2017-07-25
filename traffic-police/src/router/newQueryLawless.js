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
  }
]

export default newQueryLawlessRouter
