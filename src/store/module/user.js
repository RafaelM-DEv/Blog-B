
const state = {
  user: {}
}

const getters = {
  user: state => state.user

}

const actions = {
  logout ({ commit }) {
    localStorage.removeItem('userBlog')
    const user = {}
    commit('LOG_OUT', user)
  },

  singIn ({ commit }) {
    const user = localStorage.getItem('userBlog')
    const rawuser = JSON.parse(user)
    commit('SING_IN', rawuser)
  }
}

const mutations = {
  LOG_OUT (state, user) {
    state.user = user
  },

  SING_IN (state, user) {
    state.user = user
  }
}

export default {
  namespaced: false,

  state,
  getters,
  mutations,
  actions
}
