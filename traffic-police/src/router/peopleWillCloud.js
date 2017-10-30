let peopleWillCloudRouter = [
  {
    name: 'trafficCivilization',
    path: '/trafficCivilization',
    mate: {
      title: '文明交通我做主'
    },
    component: resolve => require(['../views/peopleWillCloud/trafficCivilization.vue'], resolve)
  },
  {
    name: 'peopleWillCloud',
    path: '/peopleWillCloud',
    meta: {
      title: '交通文明我做主'
    },
    component: resolve => require(['../views/peopleWillCloud/peopleWillCloud.vue'], resolve),
    redirect: '/peopleWillCloud/facility',
    children: [
      {
        name: 'facility',
        path: '/peopleWillCloud/facility',
        meta: {
          title: '交通文明我做主'
        },
        component: resolve => require(['../views/peopleWillCloud/child/facility.vue'], resolve)
      },
      {
        name: 'secure',
        path: '/peopleWillCloud/secure',
        meta: {
          title: '交通文明我做主'
        },
        component: resolve => require(['../views/peopleWillCloud/child/secure.vue'], resolve)
      },
      {
        name: 'jam',
        path: '/peopleWillCloud/jam',
        meta: {
          title: '交通文明我做主'
        },
        component: resolve => require(['../views/peopleWillCloud/child/jam.vue'], resolve)
      },
      {
        name: 'order',
        path: '/peopleWillCloud/order',
        meta: {
          title: '交通文明我做主'
        },
        component: resolve => require(['../views/peopleWillCloud/child/order.vue'], resolve)
      }
    ]
  }
]

export default peopleWillCloudRouter
