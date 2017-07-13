/**
 * Created by Administrator on 2017/7/12.
 */

const verifyIssueClassRouter = {
  name: 'verifyIssueClass',
  path: '/verifyIssueClass',
  meta: {
    title: '核发类'
  },
  component: require('../index.vue'),
  redirect: '/verifyIssueClass/changeEngineNumber',
  children: [
    {
      name: 'changeEngineNumber',
      path: 'changeEngineNumber',
      meta: {
        title: '机动车打刻原车发动机号码变更备案'
      },
      component: require('../page/changeEngineNumber.vue')
    },
    {
      name: 'changeUseNature',
      path: 'changeUseNature',
      meta: {
        title: '出租客运车辆使用性质变更'
      },
      component: require('../page/changeUseNature.vue')
    }
  ]
}
export default verifyIssueClassRouter
