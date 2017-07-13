/**
 * Created by Administrator on 2017/7/12.
 */
const sceneManageClassRouter = {
  name: 'sceneManageClass',
  path: '/sceneManageClass',
  meta: {
    title: '现场办理类'
  },
  component: require('../index.vue'),
  redirect: '/sceneManageClass/pledgeRegister',
  children: [
    {
      name: 'otherPlaceAudit',
      path: 'otherPlaceAudit',
      meta: {
        title: '机动车委托异地年审现场办理'
      },
      component: require('../page/otherPlaceAudit.vue')
    },
    {
      name: 'pledgeRegister',
      path: 'pledgeRegister',
      meta: {
        title: '抵押/解押登记现场办理'
      },
      component: require('../page/pledgeRegister.vue')
    }
  ]
}
export default sceneManageClassRouter
