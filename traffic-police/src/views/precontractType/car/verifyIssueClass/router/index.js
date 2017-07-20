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
  redirect: '/verifyIssueClass/verifyIssueSchoolCard',
  children: [
    {
      name: 'verifyIssueCard',
      path: 'verifyIssueCard',
      meta: {
        title: '核发临牌'
      },
      component: require('../page/verifyIssueCard.vue')
    },
    {
      name: 'verifyIssueSchoolCard',
      path: 'verifyIssueSchoolCard',
      meta: {
        title: '核发校车标牌'
      },
      component: require('../page/verifyIssueSchoolCard.vue')
    }
  ]
}
export default verifyIssueClassRouter
