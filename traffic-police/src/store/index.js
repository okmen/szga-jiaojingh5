import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  appoinSuccess: {
    appoinNum: '',
    appoinType: ''
  }
}

const actions = {
  postAppoin ({ commit }, appoinSuccess) {
    commit('saveAppoin', appoinSuccess)
  }
}

const mutations = {
  saveAppoin (state, appoinSuccess) {
    state.appoinSuccess = appoinSuccess
  }
}

const getters = {
  showAppoin (state) {
    return state.appoinSuccess
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
