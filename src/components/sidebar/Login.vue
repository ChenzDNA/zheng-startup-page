<template>
  <div id="login">
    <label for="user-name">用户名：</label>
    <input type="text" id="user-name" />
    <br />
    <label for="password">密&emsp;码：</label>
    <input type="password" id="password" />
    <br />
    <div>登录</div>
    <div>注册</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
    };
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
}
#login>div:hover{
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>