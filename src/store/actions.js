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
      commit('userLogin', res)
    })
  },
  userRegister({ commit }, data) {
    console.log('in register')
    request({
      url: '/user/register',
      data,
      method: 'post',
    }).then(res => {
      commit('userRegister', res)
    })
  },
  updateLoginMsg({ commit }, msg) {
    commit('updateLoginMsg', msg)
  },
}