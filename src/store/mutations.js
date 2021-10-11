export default {
  updateUserState(state, data) {
    if (data.code != 200) {
      state.loginMsg = data.message
      return
    }
    state.userState.isLogin = true
    state.userState.userName = data.data.userData.nickname
  },
  updateLoginMsg(state, msg) {
    state.loginMsg = msg;
  },
  userLogout(state, data) {
    if (data.code != 200) {
      alert('error');
    }
    state.userState.isLogin = false
  }
}