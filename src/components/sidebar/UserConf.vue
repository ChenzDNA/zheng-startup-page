<template>
  <div id="user-conf">
    <div @click="submitUserConf">
      {{ userConfEdit ? "提交修改" : "编辑个人信息" }}
    </div>
    <div id="user-conf-items" v-show="userConfEdit">
      <label for="conf-nickname">昵称：</label>
      <input type="text" id="conf-nickname" v-model="newUickName" />
      <br />
      <label for="conf-password">密码：</label>
      <input type="password" id="conf-password" v-model="password" />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserConf",
  data() {
    return {
      userConfEdit: false,
      newUserName: "",
      password: "",
    };
  },
  methods: {
    submitUserConf() {
      this.userConfEdit = !this.userConfEdit;
    },
  },
};
</script>

<style>
#user-conf > div:nth-child(1) {
  cursor: pointer;
  user-select: none;
  width: 100px;
  text-align: center;
  margin-top: 10px;
}
#user-conf > div:nth-child(1):hover {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>