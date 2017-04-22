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
  }
}

const actions = {
  postAppoin ({ commit }, appoinSuccess) {
    commit('saveAppoin', appoinSuccess)
  },
  postInform ({ commit }, informSuccess) {
    commit('saveInform', informSuccess)
  }
}

const mutations = {
  saveAppoin (state, appoinSuccess) {
    state.appoinSuccess = appoinSuccess
  },
  saveInform (state, informSuccess) {
    state.informSuccess = informSuccess
  }
}

const getters = {
  showAppoin (state) {
    return state.appoinSuccess
  },
  showInform (state) {
    return state.informSuccess
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
