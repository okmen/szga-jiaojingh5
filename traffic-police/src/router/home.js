import router from './index'

let loginTo = {}
let homeRouter = [
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: resolve => require(['../views/login/login.vue'], resolve),
    beforeEnter: (to, from, next) => {
      if (from.name !== 'findPassword' && from.name !== 'initAuthentication' && from.name !== 'carOwner') {
        loginTo = Object.assign({}, from)
      }
      router.from = loginTo
      next()
    }
  },
  {
    name: 'login_dealService',
    path: '/login_dealService',
    meta: {
      title: '登录'
    },
    component: resolve => require(['../views/login/login_dealService.vue'], resolve),
    beforeEnter: (to, from, next) => {
      router.from = from
      next()
    }
  },
  // {
  //   name: 'loginIcp',
  //   path: '/loginIcp',
  //   meta: {
  //     title: '星级用户登录'
  //   },
  //   component: resolve => require(['../views/login/loginIcp.vue'], resolve)
  // },
  {
    name: 'findPassword',
    path: '/findPassword',
    meta: {
      title: '忘记密码'
    },
    component: resolve => require(['../views/login/findPassword.vue'], resolve)
  },
  {
    name: 'initAuthentication',
    path: '/initAuthentication',
    meta: {
      title: '重新认证'
    },
    component: resolve => require(['../views/login/initAuthentication.vue'], resolve)
  },
  {
    name: 'personalCenter',
    path: '/personalCenter',
    meta: {
      title: '个人中心'
    },
    component: resolve => require(['../views/personalCenter/personalCenter.vue'], resolve)
  },
  {
    name: 'myECard',
    path: '/myECard',
    meta: {
      title: '我的证件'
    },
    component: resolve => require(['../views/myECard/myECard.vue'], resolve)
  },
  {
    name: 'DriverCardNone',
    path: '/DriverCardNone',
    meta: {
      title: '无驾驶证页面'
    },
    component: resolve => require(['../views/personalCenter/child/DriverCardNone.vue'], resolve)
  },
  {
    name: 'DriverCardVerify',
    path: '/DriverCardVerify',
    meta: {
      title: '我的证件'
    },
    component: resolve => require(['../views/personalCenter/child/DriverCardVerify.vue'], resolve)
  },
  {
    name: 'updatePwd',
    path: '/updatePwd',
    meta: {
      title: '个人资料'
    },
    component: resolve => require(['../views/personalCenter/child/updatePwd.vue'], resolve)
  },
  {
    name: 'updateMobile',
    path: '/updateMobile',
    meta: {
      title: '个人资料'
    },
    component: resolve => require(['../views/personalCenter/child/updateMobile.vue'], resolve)
  },
  {
    name: 'addVehicle',
    path: '/addVehicle',
    meta: {
      title: '添加车辆'
    },
    component: resolve => require(['../views/personalCenter/child/addVehicle.vue'], resolve)
  },
  {
    name: 'updateUser',
    path: '/updateUser',
    meta: {
      title: '个人资料'
    },
    component: resolve => require(['../views/personalCenter/child/updateUser.vue'], resolve)
  },
  {
    name: 'userInfo',
    path: '/userInfo',
    component: resolve => require(['../views/personalCenter/child/userInfo.vue'], resolve)
  },
  {
    name: 'starUser',
    path: '/starUser',
    meta: {
      title: '星级用户认证'
    },
    component: resolve => require(['../views/starUser/starUser.vue'], resolve),
    redirect: '/starUser/carOwner',
    children: [
      {
        name: 'carOwner',
        path: '/starUser/carOwner',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser/child/carOwner.vue'], resolve)
      },
      {
        name: 'carUser',
        path: '/starUser/carUser',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser/child/carUser.vue'], resolve)
      },
      {
        name: 'drivingLicense',
        path: '/starUser/drivingLicense',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser/child/drivingLicense.vue'], resolve)
      },
      {
        name: 'passerBy',
        path: '/starUser/passerBy',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser/child/passerBy.vue'], resolve)
      }
    ]
  },
  {                                                                                             // 星级用户认证微信版本路由
    name: 'starUser_WeChat',
    path: '/starUser_WeChat',
    meta: {
      title: '星级用户认证'
    },
    component: resolve => require(['../views/starUser_WeChat/starUser.vue'], resolve),
    redirect: '/starUser_WeChat/carOwner',
    children: [
      {
        name: 'carOwner_WeChat',
        path: '/starUser_WeChat/carOwner',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser_WeChat/child/carOwner.vue'], resolve)
      },
      {
        name: 'carUser_WeChat',
        path: '/starUser_WeChat/carUser',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser_WeChat/child/carUser.vue'], resolve)
      },
      {
        name: 'drivingLicense_WeChat',
        path: '/starUser_WeChat/drivingLicense',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser_WeChat/child/drivingLicense.vue'], resolve)
      },
      {
        name: 'passerBy_WeChat',
        path: '/starUser_WeChat/passerBy',
        meta: {
          title: '星级用户认证'
        },
        component: resolve => require(['../views/starUser_WeChat/child/passerBy.vue'], resolve)
      }
    ]
  }
]

export default homeRouter
