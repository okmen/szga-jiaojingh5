let wschoolRouter = [
  {
    name: 'wschool',
    path: '/wschool',
    meta: {
      title: '微学堂'
    },
    component: resolve => require(['../views/wschool/wschool.vue'], resolve)
  },
  {
    name: 'electricCar',
    path: '/electricCar',
    meta: {
      title: '电动车管理'
    },
    component: resolve => require(['../views/wschool/electricCar.vue'], resolve)
  },
  {
    name: 'motorstudy',
    path: '/motorstudy',
    meta: {
      title: '微学堂学习'
    },
    component: resolve => require(['../views/wschool/subclass/motorstudy.vue'], resolve)
  },
  {
    name: 'motorstudy_WeChat',                                                 // 微信版本
    path: '/motorstudy_WeChat',
    meta: {
      title: '微学堂学习'
    },
    component: resolve => require(['../views/wschool/subclass/motorstudy.vue'], resolve)
  },
  {
    name: 'answer',
    path: '/answer',
    meta: {
      title: '答题'
    },
    component: resolve => require(['../views/wschool/subclass/answer.vue'], resolve)
  },
  {
    name: 'grade',
    path: '/grade',
    meta: {
      title: '评分'
    },
    component: resolve => require(['../views/wschool/subclass/child/grade.vue'], resolve)

  },
  {
    name: 'result',
    path: '/result',
    meta: {
      title: '成绩'
    },
    component: resolve => require(['../views/wschool/subclass/child/result.vue'], resolve)
  },
  {
    name: 'answers',
    path: '/answers',
    meta: {
      title: '学习答题'
    },
    component: resolve => require(['../views/wschool/subclass/answers.vue'], resolve)
  }
]

export default wschoolRouter
