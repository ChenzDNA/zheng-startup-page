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
    state.userState.notes = data.note
    state.userState.todos = data.todo
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
}