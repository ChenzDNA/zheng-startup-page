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

    state.userState.collections = data.collection === undefined || data.collection === null ? [] : data.collection
    for (let item of state.userState.collections) {
      item.visible = true
    }
    state.userState.notes = data.note === undefined || data.note === null ? [] : data.note
    for (let item of state.userState.notes) {
      item.timeText = new Date(item.ctime).toLocaleDateString()
      item.content = item.content.replaceAll("\n", "<br/>");
      item.content = item.content.replaceAll("&nbsp;", " ");
      item.content = item.content.replaceAll("&lt;", "<");
      item.content = item.content.replaceAll("&gt;", ">");
    }
    state.userState.todos = data.todo === undefined || data.todo === null ? [] : data.todo
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
  // 便签
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
    state.userState.notes.find((value, index) => {
      if (state.userState.notes[index].id === data.id)
        state.userState.notes[index].content = data.content
      return value.id === data.id
    })
  },
  // 待办
  addTodo(state, data) {
    data.finished = data.finished === 1 ? false : true
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
    data.finished = data.finished === 1 ? false : true
    state.userState.todos.splice(ind, 1, data)
  },
}