let dieselEngineTrucks = [
  {
    name: 'dieselEngineTrucksTab',
    path: '/dieselEngineTrucksTab',
    meta: {
      title: '柴油轻型自卸货车'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieselEngineTrucksTab.vue'], resolve)
  },
  {
    name: 'dieselEngineTrucks',
    path: '/dieselEngineTrucks',
    meta: {
      title: '柴油轻型自卸货车'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieselEngineTrucks.vue'], resolve)
  },
  {
    name: 'dieselEngineTrucksDemand',
    path: '/dieselEngineTrucksDemand',
    meta: {
      title: '业务查询'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieselEngineTrucksDemand.vue'], resolve)
  },
  {
    name: 'dieseDemand',
    path: '/dieseDemand',
    meta: {
      title: '业务查询'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieseDemand.vue'], resolve)
  },
  {
    name: 'dieseInquire',
    path: '/dieseInquire',
    meta: {
      title: '业务查询'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieseInquire.vue'], resolve)
  },
  {
    name: 'dieseSucceed',
    path: '/dieseSucceed',
    meta: {
      title: '申办成功'
    },
    component: resolve => require(['../views/dieselEngineTrucks/dieseSucceed.vue'], resolve)
  }
]

export default dieselEngineTrucks
