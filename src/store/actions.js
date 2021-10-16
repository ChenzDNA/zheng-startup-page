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
      method: 'post',
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
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      commit('updateUserState', res.data)
    })
  },
  // 添加收藏
  addCollection({ commit }, data) {
    request({
      url: '/collection/insert',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      data.id = res.data.id
      commit('addCollection', data)
    })
  },
  // 删除收藏
  deleteCollection({ commit }, data) {
    request({
      url: '/collection/delete',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      commit('deleteCollection', data)
    })
  },
  addNote({ commit }, data) {
    request({
      url: '/note/insert',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      commit('addNote', data)
    })
  },
  deleteNote({ commit }, data) {
    request({
      url: '/note/delete',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.data)
        return
      }
      commit('deleteNote', data)
    })
  },
  updateNote({ commit }, data) {
    request({
      url: '/note/update',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.data)
        return
      }
      commit('updateNote', data)
    })
  },
  addTodo({ commit }, data) {
    data.finished = data.finished ? 2 : 1
    request({
      url: '/todo/insert',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      data.id = res.data.id
      commit('addTodo', data)
    })
  },
  deleteTodo({ commit }, data) {
    request({
      url: '/todo/delete',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.message)
        return
      }
      commit('deleteTodo', data)
    })
  },
  updateTodo({ commit }, data) {
    data.finished = data.finished ? 2 : 1
    request({
      url: '/todo/update',
      data,
      method: 'post',
    }).then(res => {
      if (res.code != 200) {
        alert(res.data)
        return
      }
      commit('updateTodo', data)
    })
  },
}