<template>
  <div id="login">
    <label for="account">用户名：</label>
    <input type="text" id="account" v-model="account" />
    <br />
    <label for="password">密&emsp;码：</label>
    <input type="password" id="password" v-model="password1" />
    <br />
    <label for="password-repeat" v-show="isRegister">重&emsp;复：</label>
    <input
      type="password"
      id="password-repeat"
      v-model="password2"
      v-show="isRegister"
    />
    <br v-show="isRegister" />
    <div @click="login">登录</div>
    <div @click="register">{{ isRegister ? "提交" : "注册" }}</div>
    <br />
    <p id="login-msg">{{ loginMsg }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      isRegister: false,
      account: "",
      password1: "",
      password2: "",
    };
  },
  computed: {
    ...mapState(["loginMsg"]),
  },
  methods: {
    register() {
      this.isRegister = !this.isRegister;
      if (this.isRegister) {
        return;
      }
      if (!this.verifyUser(this.account, this.password1, this.password2)) {
        return;
      }
      this.userRegister({ account: this.account, password: this.password1 });
    },
    login() {
      if (!this.verifyUser(this.account, this.password1, this.password1)) {
        return;
      }
      this.userLogin({ account: this.account, password: this.password1 });
    },
    ...mapActions(["userLogin", "userRegister", "updateLoginMsg"]),
    initPassword() {
      this.password1 = "";
      this.password2 = "";
    },
    verifyUser(account, password1, password2) {
      let msg = "";
      if (password1 == "" || account == "") {
        msg = "输入密码为空";
      } else if (password1 != password2) {
        msg = "两次输入的密码不一致";
      } else if (password1.length > 16 || password1.length < 4) {
        msg = "密码须在4~16位之间";
      } else if (
        password1.match(/[0-9a-zA-Z]*/g).length > 2 ||
        account.match(/[^;\u0020\s,:"'$%(\\)&]*/g).length > 2
      ) {
        msg = "账号密码不能包含特殊字符";
      }
      if (msg != "") {
        this.updateLoginMsg(msg);
        this.initPassword();
        this.isRegister = false;
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.userLogin();
  },
};
</script>

<style>
#login > div {
  display: inline-block;
  width: 30%;
  text-align: center;
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
}
#login > div:hover {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
#login-msg {
  color: red;
}
</style>