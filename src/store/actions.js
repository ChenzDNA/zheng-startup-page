import request from '../util/request'

export default {
  // 登录
  userLogin({ commit }, data) {
    if (!data) {
      data = new Object
    }
    request({
      url: '/user/login',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        commit('updateLoginMsg', res.message)
        return
      }
      commit('updateUserState', res.data)
    })
  },
  // 注册
  userRegister({ commit }, data) {
    request({
      url: '/user/register',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        commit('updateLoginMsg', res.message)
        return
      }
      commit('updateUserState', res.data)
    })
  },
  // 更新登录信息
  updateLoginMsg({ commit }, msg) {
    commit('updateLoginMsg', msg)
  },
  userLogout({ commit }) {
    request({
      url: '/user/logout',
      method: 'post'
    }).then(res => {
      if (res.code != 200) {
        alert('error');
      }
      commit('userLogout', res.data)
    })
  },
  // 更新用户信息
  updateUserData({ commit }, data) {
    request({
      url: '/user/updateUserData',
      data,
      method: 'post'
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      commit('updateUserState', res.data)
    })
  },
}