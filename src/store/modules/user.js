const state = {
  user: null,
}

//mutation
const mutations = {
  saveUser(state, { username, id }) {
    state.user = { username, id }
  },
  deleteUser(state) {
    state.user = null
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
