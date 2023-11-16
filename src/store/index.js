import Vuex from "vuex";


export default new Vuex.Store({
  state: {
    registration: false,
    email: null,
    password: null,
    policy: false,
  },
  mutations: {
    setRegistration(state, data) {
      state.registration = data;
    },
    setEmail(state, data) {
      state.email = data;
    },
    setPassword(state, data) {
      state.password = data;
    },
    setPolicy(state, data) {
      state.policy = data;
    },
  },
})