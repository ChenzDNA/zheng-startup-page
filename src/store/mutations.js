export default {
  updateUserState(state, data) {
    state.userState.isLogin = true
    if (data.userData.nickname != '') {
      state.userState.userName = data.userData.nickname
    }
    state.userState.cityName = data.userData.cityName === '' ? '' : data.userData.cityName
    state.searchConf.searchEngine = data.userData.searchEngine === '' ? 'bing' : data.userData.searchEngine
    state.catConf.display = data.userData.catDisplay === 2 ? true : false
    state.timeConf.second = data.userData.secondDisplay === 2 ? true : false

    state.userState.collections = data.collection
    for (let item of state.userState.collections) {
      item.visible = true
    }
    state.userState.notes = data.note
    for (let item of state.userState.notes) {
      item.timeText = new Date(item.ctime).toLocaleDateString()
    }
    state.userState.todos = data.todo
    for (let item of state.userState.todos) {
      item.timeText = new Date(item.ctime).toLocaleDateString()
      item.visible = true
    }
  },
  updateLoginMsg(state, msg) {
    state.loginMsg = msg;
  },
  userLogout(state) {
    state.userState.isLogin = false
  },
  addCollection(state, data) {
    state.userState.collections.push(data)
  },
  deleteCollection(state, data) {
    let ind
    state.userState.collections.find((value, index) => {
      ind = index
      return value.id === data.id
    })
    state.userState.collections.splice(ind, 1)
  },
  addNote(state, data) {
    state.userState.notes.push(data)
  },
  deleteNote(state, data) {
    let ind
    state.userState.notes.find((value, index) => {
      ind = index
      return value.id === data.id
    })
    state.userState.notes.splice(ind, 1)
  },
  updateNote(state, data) {
    let ind
    state.userState.notes.find((value, index) => {
      ind = index
      return value.id === data.id
    })
    state.userState.notes.splice(ind, 1, data)
  },
  // 待办
  addTodo(state, data) {
    state.userState.todos.push(data)
  },
  deleteTodo(state, data) {
    let ind
    state.userState.todos.find((value, index) => {
      ind = index
      return value.id === data.id
    })
    state.userState.todos.splice(ind, 1)
  },
  updateTodo(state, data) {
    let ind
    state.userState.todos.find((value, index) => {
      ind = index
      return value.id === data.id
    })
    state.userState.todos.splice(ind, 1, data)
  },
}