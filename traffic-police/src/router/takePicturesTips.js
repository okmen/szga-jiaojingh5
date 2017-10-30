let takePicturesTipsRouter = [
  // 随手拍功能微信版本路由
  {
    name: 'takePicturesTips_WeChat',                                                         // 微信版本
    path: '/takePicturesTips_WeChat',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures_WeChat/child/takePicturesTips.vue'], resolve)
  },
  {
    name: 'takePicturesSuccess_WeChat',                                                      // 微信版本
    path: '/takePicturesSuccess_WeChat',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures_WeChat/child/takePicturesSuccess.vue'], resolve)
  },
  {
    name: 'takePicturesSuccess1_WeChat',                                                     // 微信版本
    path: '/takePicturesSuccess1_WeChat',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures_WeChat/child/takePicturesSuccess1.vue'], resolve)
  },
  {
    name: 'takePicturesInform_WeChat',                                                       // 微信版本
    path: '/takePicturesInform_WeChat',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures_WeChat/takePicturesInform'], resolve)
  },
  {
    name: 'map_WeChat',                                                                      // 微信版本
    path: '/map_WeChat',
    meta: {
      title: '地图'
    },
    component: resolve => require(['../views/takePictures_WeChat/map.vue'], resolve)
  },
  {
    name: 'takePicturesQuery_WeChat',                                                        // 微信版本
    path: '/takePicturesQuery_WeChat',
    meta: {
      title: '随手拍查询'
    },
    component: resolve => require(['../views/takePictures_WeChat/child/takePicturesQuery'], resolve)
  },
  {
    name: 'takePicturesSuccess1',                                                                // 举报成功外部链接
    path: '/takePicturesSuccess1',
    meta: {
      title: '随手拍举报成功'
    },
    component: resolve => require(['../views/takePictures/child/takePicturesSuccess1.vue'], resolve)
  },
  {
    name: 'takePicturesInform',
    path: '/takePicturesInform',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures/takePicturesInform'], resolve)
  },
  {
    name: 'takePicturesQuery',
    path: '/takePicturesQuery',
    meta: {
      title: '随手拍查询'
    },
    component: resolve => require(['../views/takePictures/child/takePicturesQuery'], resolve)
  },
  {
    name: 'map',
    path: '/map',
    meta: {
      title: '地图'
    },
    component: resolve => require(['../views/takePictures/map.vue'], resolve)
  },
  {
    name: 'takePicturesTips',
    path: '/takePicturesTips',
    meta: {
      title: '随手拍举报'
    },
    component: resolve => require(['../views/takePictures/child/takePicturesTips.vue'], resolve)
  },
  {
    name: 'takePicturesSuccess',
    path: '/takePicturesSuccess',
    meta: {
      title: '随手拍举报成功'
    },
    component: resolve => require(['../views/takePictures/child/takePicturesSuccess.vue'], resolve)
  }
]

export default takePicturesTipsRouter
