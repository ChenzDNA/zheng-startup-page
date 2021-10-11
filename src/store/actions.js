import request from '../util/request'

export default {
  userLogin({ commit }, data) {
    if (!data) {
      data = new Object
    }
    request({
      url: '/user/login',
      data,
      method: 'post',
    }).then(res => {
      commit('updateUserState', res)
    })
  },
  userRegister({ commit }, data) {
    request({
      url: '/user/register',
      data,
      method: 'post',
    }).then(res => {
      commit('updateUserState', res)
    })
  },
  updateLoginMsg({ commit }, msg) {
    commit('updateLoginMsg', msg)
  },
  userLogout({ commit }) {
    request({
      url: '/user/logout',
      method: 'post'
    }).then(res => {
      console.log(res)
      commit('userLogout', res)
    })
  }
}