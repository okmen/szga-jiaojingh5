import sceneManageClassRouter from '../views/precontractType/car/sceneManageClass/router'
import verifyIssueClassRouter from '../views/precontractType/car/verifyIssueClass/router'

let precontractTypeRouter = [
  {
    name: 'precontractType',
    path: '/precontractType',
    meta: {
      title: '办理类业务'
    },
    component: require('../views/precontractType/precontract.vue')
  },
  {
    name: 'registerClass',
    path: '/registerClass',
    meta: {
      title: '登记类'
    },
    component: require('../views/precontractType/car/registerClass'),
    redirect: '/registerClass/transferRegistration',
    children: [
      {
        name: 'transferRegistration',
        path: 'transferRegistration',
        meta: {
          title: '转移登记(市内过户)'
        },
        component: require('../views/precontractType/car/registerClass/page/transferRegistration.vue')
      },
      {
        name: 'intoRegister',
        path: 'intoRegister',
        meta: {
          title: '机动车转移登记(转入)'
        },
        component: require('../views/precontractType/car/registerClass/page/intoRegister.vue')
      },
      {
        name: 'enteringRegister',
        path: 'enteringRegister',
        meta: {
          title: '机动车注册登记'
        },
        component: require('../views/precontractType/car/registerClass/page/enteringRegister.vue')
      },
      {
        name: 'cancellationRegister',
        path: 'cancellationRegister',
        meta: {
          title: '机动车注销登记'
        },
        component: require('../views/precontractType/car/registerClass/page/cancellationRegister.vue')
      },
      {
        name: 'changeRegister',
        path: 'changeRegister',
        meta: {
          title: '机动车变更登记'
        },
        component: require('../views/precontractType/car/registerClass/page/changeRegister.vue')
      },
      {
        name: 'generalChangeRegister',
        path: 'generalChangeRegister',
        meta: {
          title: '机动车变更登记(普通变更)'
        },
        component: require('../views/precontractType/car/registerClass/page/generalChangeRegister.vue')
      },
      {
        name: 'fakeLicensedEvidence',
        path: 'fakeLicensedEvidence',
        meta: {
          title: '机动车变更登记(套牌车换证)'
        },
        component: require('../views/precontractType/car/registerClass/page/fakeLicensedEvidence.vue')
      },
      {
        name: 'manWifeChange',
        path: 'manWifeChange',
        meta: {
          title: '机动车变更登记(夫妻变更)'
        },
        component: require('../views/precontractType/car/registerClass/page/manWifeChange.vue')
      },
      {
        name: 'replaceLicense',
        path: 'replaceLicense',
        meta: {
          title: '补换领机动车行驶证'
        },
        component: require('../views/precontractType/car/registerClass/page/replaceLicense.vue')
      }
    ]
  },
  {
    name: 'alterClass',
    path: '/alterClass',
    meta: {
      title: '变更类'
    },
    component: require('../views/precontractType/car/alterClass/alterClass.vue'),
    redirect: '/alterClass/taxiUseAlter',
    children: [
      {
        name: 'taxiUseAlter',
        path: '/alterClass/taxiUseAlter',
        meta: {
          title: '出租客运车辆使用性质变更'
        },
        component: require('../views/precontractType/car/alterClass/child/taxiUseAlter.vue')
      },
      {
        name: 'numberAlter',
        path: '/alterClass/numberAlter',
        meta: {
          title: '机动车打刻原车发动机号码变更备案'
        },
        component: require('../views/precontractType/car/alterClass/child/numberAlter.vue')
      },
      {
        name: 'markAlter',
        path: '/alterClass/markAlter',
        meta: {
          title: '机动车打刻原车辆识别代号变更备案'
        },
        component: require('../views/precontractType/car/alterClass/child/markAlter.vue')
      },
      {
        name: 'fileAlter',
        path: '/alterClass/fileAlter',
        meta: {
          title: '档案更正'
        },
        component: require('../views/precontractType/car/alterClass/child/fileAlter.vue')
      },
      {
        name: 'onlineCarAlter',
        path: '/alterClass/onlineCarAlter',
        meta: {
          title: '网约车使用性质更正'
        },
        component: require('../views/precontractType/car/alterClass/child/onlineCarAlter.vue')
      }
    ]
  },
  {
    name: 'replacementType',
    path: '/replacementType',
    meta: {
      title: '补换领类'
    },
    component: require('../views/precontractType/car/replacementType/renewingClass.vue'),
    redirect: '/replacementType/renewingCollarCredential',
    children: [
      {
        name: 'renewingCollarCredential',
        path: '/replacementType/renewingCollarCredential',
        meta: {
          title: '换领机动车登记证书'
        },
        component: require('../views/precontractType/car/replacementType/child/renewingCollarCredential.vue')
      },
      {
        name: 'replacementNumber',
        path: '/replacementType/replacementNumber',
        meta: {
          title: '补换机动车号牌'
        },
        component: require('../views/precontractType/car/replacementType/child/replacementNumber.vue')
      },
      {
        name: 'renewingDrivingLicense',
        path: '/replacementType/renewingDrivingLicense',
        meta: {
          title: '补换机动车行驶证'
        },
        component: require('../views/precontractType/car/replacementType/child/renewingDrivingLicense.vue')
      },
      {
        name: 'renewingQualification',
        path: '/replacementType/renewingQualification',
        meta: {
          title: '补换检验合格标志'
        },
        component: require('../views/precontractType/car/replacementType/child/renewingQualification.vue')
      },
      {
        name: 'renewingCertificate',
        path: '/replacementType/renewingCertificate',
        meta: {
          title: '申领/补领机动车登记证书'
        },
        component: require('../views/precontractType/car/replacementType/child/renewingCertificate.vue')
      }
    ]
  },
  {
    name: 'carEmigration',
    path: '/carEmigration',
    meta: {
      title: '机动车迁出'
    },
    component: require('../views/precontractType/car/carEmigration')
  },
  {
    name: 'rollOutRecover',
    path: '/rollOutRecover',
    meta: {
      title: '转出、注销恢复'
    },
    component: require('../views/precontractType/car/rollOutRecover/rollOutRecover.vue')
  },
  sceneManageClassRouter,   // 现场办理类
  verifyIssueClassRouter,    // 核发类
  {
    name: 'appClass',
    path: '/appClass',
    meta: {
      title: '申领类'
    },
    component: require('../views/precontractType/card/appClass/appClass.vue'),
    redirect: '/appClass/armyLicence',
    children: [
      {
        name: 'armyLicence',
        path: '/appClass/armyLicence',
        meta: {
          title: '持军队、武警警察部队机动车驾驶证驾驶'
        },
        component: require('../views/precontractType/card/appClass/child/armyLicence.vue')
      },
      {
        name: 'temporaryLicence',
        path: '/appClass/temporaryLicence',
        meta: {
          title: '临时机动车驾驶证许可证申领'
        },
        component: require('../views/precontractType/card/appClass/child/temporaryLicence.vue')
      }
    ]
  },
  {
    name: 'renewalClass',
    path: '/renewalClass',
    meta: {
      title: '换证类'
    },
    component: require('../views/precontractType/card/renewalClass/renewalClass.vue'),
    redirect: '/renewalClass/overseasLicence',
    children: [
      {
        name: 'overseasLicence',
        path: '/renewalClass/overseasLicence',
        meta: {
          title: '持境外驾驶证申请换证'
        },
        component: require('../views/precontractType/card/renewalClass/child/overseasLicence.vue')
      },
      {
        name: 'HkLicence',
        path: '/renewalClass/HkLicence',
        meta: {
          title: '香港机动车驾驶证面试换证'
        },
        component: require('../views/precontractType/card/renewalClass/child/HkLicence.vue')
      }
    ]
  },
  {
    name: 'recoverDrive',
    path: '/recoverDrive',
    mata: {
      name: '恢复驾驶资格'
    },
    component: require('../views/precontractType/card/recoverDrive/recoverDrive.vue'),
    redirect: '/recoverDrive/noPhysicalCheck',
    children: [
      {
        name: 'noPhysicalCheck',
        path: '/recoverDrive/noPhysicalCheck',
        mata: {
          name: '逾期一年以上未体检类'
        },
        component: require('../views/precontractType/card/recoverDrive/child/noPhysicalCheck.vue')
      },
      {
        name: 'noChangeLicence',
        path: '/recoverDrive/noChangeLicence',
        mata: {
          name: '逾期一年以上未体检类'
        },
        component: require('../views/precontractType/card/recoverDrive/child/noChangeLicence.vue')
      }
    ]
  },
  {
    name: 'fullmarkStudy',
    path: '/fullmarkStudy',
    meta: {
      name: '满分学习'
    },
    component: require('../views/precontractType/card/fullmarkStudy.vue')
  },
  {
    name: 'otherBusiness',
    path: '/otherBusiness',
    meta: {
      name: '其它业务'
    },
    component: require('../views/precontractType/card/otherBusiness.vue')
  }
]

export default precontractTypeRouter
