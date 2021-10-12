<template>
  <div id="user-conf">
    <div @click="submitUserConf" v-show="!userConfEdit">编辑昵称</div>
    <div id="user-conf-items" v-show="userConfEdit">
      <label for="conf-nickname">昵称：</label>
      <input type="text" id="conf-nickname" v-model="newNickName" />
      <br />
      <label for="conf-password">密码：</label>
      <input type="password" id="conf-password" v-model="password" />
      <br />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserConf",
  data() {
    return {
      userConfEdit: false,
      newNickName: "",
      password: "",
    };
  },
  methods: {
    submitUserConf() {
      this.userConfEdit = !this.userConfEdit;
      if (this.userConfEdit) {
        return;
      }
      if (this.newNickName === "" || this.password === "") {
        alert("新用户名或密码为空");
        return;
      }
      this.updateNickname({
        nickname: this.newNickName,
        password: this.password,
      });
      this.newNickName = "";
      this.password = "";
    },
    ...mapActions(["updateUserData"]),
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