let dieselEngineTrucks = [
  {
    name: 'dieselEngineTrucksTab',
    path: '/dieselEngineTrucksTab',
    meta: {
      title: '柴油轻型自卸货车'
    },
    component: require('../views/dieselEngineTrucks/dieselEngineTrucksTab.vue')
  },
  {
    name: 'dieselEngineTrucks',
    path: '/dieselEngineTrucks',
    meta: {
      title: '柴油轻型自卸货车'
    },
    component: require('../views/dieselEngineTrucks/dieselEngineTrucks.vue')
  },
  {
    name: 'dieselEngineTrucksDemand',
    path: '/dieselEngineTrucksDemand',
    meta: {
      title: '业务查询'
    },
    component: require('../views/dieselEngineTrucks/dieselEngineTrucksDemand.vue')
  },
  {
    name: 'dieseDemand',
    path: '/dieseDemand',
    meta: {
      title: '业务查询'
    },
    component: require('../views/dieselEngineTrucks/dieseDemand.vue')
  }
]

export default dieselEngineTrucks
