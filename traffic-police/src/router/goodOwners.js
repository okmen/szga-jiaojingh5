export default [
  {
    name: 'goodOwners',
    path: '/goodOwners',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/index.vue'], resolve)
  },
  {
    name: 'GOregistration',
    path: '/goodOwners/registration',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/registration.vue'], resolve)
  },
  {
    name: 'GOregistration_pa',
    path: '/goodOwners/registration_pa',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/registration_pa.vue'], resolve)
  },
  {
    name: 'GOconfirminfo',
    path: '/goodOwners/confirminfo',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/confirminfo.vue'], resolve)
  },
  {
    name: 'GOsubmitSuccess',
    path: '/goodOwners/submitSuccess',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/submitSuccess.vue'], resolve)
  },
  {
    name: 'GOpushWX',
    path: '/goodOwners/pushwx',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/pushWX.vue'], resolve)
  },
  {
    name: 'GOpushZFB',
    path: '/goodOwners/pushzfb',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/pushZFB.vue'], resolve)
  },
  {
    name: 'GOview',
    path: '/goodOwners/view',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/goodView.vue'], resolve)
  },
  {
    name: 'voteList',
    path: '/goodOwners/voteList',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/voteList.vue'], resolve)
  },
  {
    name: 'voteView',
    path: '/goodOwners/voteView/:id',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/voteView.vue'], resolve)
  },
  {
    name: 'voteRanking',
    path: '/goodOwners/voteRanking',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/voteRanking.vue'], resolve)
  },
  {
    name: 'voteRules',
    path: '/goodOwners/voteRules',
    meta: {
      title: '发现平安好车主，争做文明驾驶人'
    },
    component: resolve => require(['../views/goodOwners/voteRules.vue'], resolve)
  }
]
