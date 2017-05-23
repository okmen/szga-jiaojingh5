import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  appoinSuccess: {
    appoinNum: '',
    appoinType: ''
  },
  informSuccess: {
    takePicturesRecord: '',
    takePicturesPassword: ''
  },
  appealQuery: [],
  licenseSelectData: [
    {
      'str': '蓝牌',
      'type': '02'
    },
    {
      'str': '黄牌',
      'type': '01'
    },
    {
      'str': '黑牌',
      'type': '06'
    },
    {
      'str': '个性牌',
      'type': '02'
    },
    {
      'str': '小型新能源车号牌',
      'type': '02'
    },
    {
      'str': '大型新能源车号牌',
      'type': '02'
    }
  ]
}

const actions = {
  postAppoin ({ commit }, appoinSuccess) {
    commit('saveAppoin', appoinSuccess)
  },
  postInform ({ commit }, informSuccess) {
    commit('saveInform', informSuccess)
  },
  postAppealQuery ({ commit }, appealQuery) {
    commit('saveAppealQuery', appealQuery)
  }
}

const mutations = {
  saveAppoin (state, appoinSuccess) {
    state.appoinSuccess = appoinSuccess
  },
  saveInform (state, informSuccess) {
    state.informSuccess = informSuccess
  },
  saveAppealQuery (state, appealQuery) {
    state.appealQuery = appealQuery
  }
}

const getters = {
  showAppoin (state) {
    return state.appoinSuccess
  },
  showInform (state) {
    return state.informSuccess
  },
  showAppealQuery (state) {
    return state.appealQuery
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
