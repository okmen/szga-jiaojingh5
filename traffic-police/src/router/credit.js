let creditRouter = [
  {
    name: 'credit',
    path: '/credit',
    meta: {
      title: '信息单据证明'
    },
    component: resolve => require(['../views/credit/index.vue'], resolve)
  },
  {
    name: 'motorVehicle',
    path: '/motorVehicle',
    meta: {
      title: '机动车信息单'
    },
    component: resolve => require(['../views/credit/child/motorVehicle.vue'], resolve)
  },
  {
    name: 'driverCredit',
    path: '/driverCredit',
    meta: {
      title: '驾驶人安全事故信用表'
    },
    component: resolve => require(['../views/credit/child/driverCredit.vue'], resolve)
  },
  {
    name: 'carFree',
    path: '/carFree',
    meta: {
      title: '无车证明'
    },
    component: resolve => require(['../views/credit/child/driverCredit.vue'], resolve)
  },
  {
    name: 'driversInformation',
    path: '/driversInformation',
    meta: {
      title: '驾驶人信用单'
    },
    component: resolve => require(['../views/credit/child/driverCredit.vue'], resolve)
  },
  {
    name: 'digitalReceipt',
    path: '/digitalReceipt',
    meta: {
      title: '电子回单'
    },
    component: resolve => require(['../views/credit/child/digitalReceipt.vue'], resolve)
  },
  {
    name: 'digitalreceipTinquire',
    path: '/digitalreceipTinquire',
    meta: {
      title: '电子回单'
    },
    component: resolve => require(['../views/credit/child/digitalreceipTinquire.vue'], resolve)
  },
  {
    name: 'digitalReceiptRecord',
    path: '/digitalReceiptRecord',
    meta: {
      title: '电子回单'
    },
    component: resolve => require(['../views/credit/child/digitalReceiptRecord.vue'], resolve)
  },
  {
    name: 'digByCar',
    path: '/digByCar',
    meta: {
      title: '电子回单'
    },
    component: resolve => require(['../views/credit/child/digByCar.vue'], resolve)
  }
]

export default creditRouter
