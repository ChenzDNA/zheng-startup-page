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
  },
  updateLoginMsg(state, msg) {
    state.loginMsg = msg;
  },
  userLogout(state) {
    state.userState.isLogin = false
  },
}