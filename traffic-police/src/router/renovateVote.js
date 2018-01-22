let renovateVote = [
  {
    name: 'renovateVote',
    path: '/renovateVote',
    meta: {
      title: '深圳交警投票'
    },
    component: resolve => require(['../views/renovateVote/renovateVote.vue'], resolve)
  }
]

export default renovateVote
