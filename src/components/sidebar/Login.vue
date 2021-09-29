<template>
  <div id="login">
    <label for="user-name">用户名：</label>
    <input type="text" id="account" v-model="account" />
    <br />
    <label for="password">密&emsp;码：</label>
    <input type="password" id="password" v-model="password" />
    <br />
    <div>登录</div>
    <div>注册</div>
    <br>
    <p id="login-msg">{{ loginMsg }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["loginMsg"]),
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
#login-msg{
  color: red;
}
</style>