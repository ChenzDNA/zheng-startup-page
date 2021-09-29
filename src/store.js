import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userState: {
    isLogin: false,
    userName: 'cz',
    collections: [],
    notes: [],
    todos: [],
    cityName: '',
  },
  loginMsg: '',
}
const getters = {

}
const mutations = {

}
const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})