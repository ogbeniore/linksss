import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app_name: 'Links Application',
    links: [],
    status: null
  },
  getters: {
    name: (state) => state.app_name,
    status: (state) => state.status,
    all: state => state.links
  },
  mutations: {
    addLink(state, link) {
      const myLinks = state.links
      myLinks.push(link)
      state.links  = myLinks
    },
    statusSuccess(state) {
      state.status = 'success'
    },
    statusFailure(state) {
      state.status = 'failure'
    },
    statusPending(state) {
      state.status = 'pending'
    },
  },
  actions: {
    postLink({ commit }, link) {
      setTimeout(() => {
        commit('addLink', link)
        commit('statusSuccess')
      }, 2000)
    }
  }
})
