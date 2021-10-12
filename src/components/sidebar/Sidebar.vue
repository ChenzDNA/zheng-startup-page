<template>
  <div id="sidebar" @click="slideIn" :style="{ right: sidebarConf.realRight }">
    <div
      id="sidebar-move"
      @click.prevent="slideOut"
      class="background-void"
    ></div>
    <div id="user-selections">
      <p>
        {{
          userState.isLogin
            ? `欢迎！${userState.userName}`
            : "若想保存自定义信息，请先登录"
        }}
      </p>
      <Login v-if="!userState.isLogin"></Login>
      <UserConf
        v-if="userState.isLogin"
        :submitCityname="submitCityname"
      ></UserConf>
    </div>
    <div>
      <button @click="userLogout">退出登录</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Login from "./Login.vue";
import UserConf from "./UserConf.vue";

export default {
  name: "Sidebar",
  props: {
    curtainConf: Object,
    sidebarConf: Object,
  },
  components: {
    Login,
    UserConf,
  },
  computed: {
    ...mapState(["userState", "timeConf", "searchConf", "catConf"]),
  },
  methods: {
    slideOut() {
      if (this.curtainConf.curtain) {
        this.curtainConf.curtain = false;
        this.sidebarConf.realRight = "-300px";
        return;
      }
      this.sidebarConf.realRight = "-10px";
      this.curtainConf.curtain = true;
    },
    slideIn() {},
    submitCityname(cityName) {
      this.userState.cityName = cityName;
      this.sidebarConf.realRight = "-300px";
      this.curtainConf.curtain = false;
    },
    ...mapActions(["userLogout"]),
  },
};
</script>

<style>
#sidebar {
  width: 300px;
  height: 100vh;

  position: absolute;
  top: 0;
  color: white;
  transition: 0.2s;
}

#sidebar > * {
  margin-left: 10%;
  user-select: none;
  margin-top: 20px;
}

#sidebar-move {
  margin: 0;

  width: 15px;
  height: 80px;
  position: absolute;
  left: -15px;
  top: 45vh;
  border-radius: 10px 0 0 10px;

  cursor: pointer;
}
input {
  outline: none;
}
</style>