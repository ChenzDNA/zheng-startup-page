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
      <UserConf v-if="userState.isLogin"></UserConf>
    </div>
    <div>
      <input type="checkbox" id="cat-conf-display" v-model="catConf.display" />
      <label for="cat-conf-display"> 猫（需要一些加载时间）</label>
    </div>
    <div>
      <input type="checkbox" id="time-conf-second" v-model="timeConf.second" />
      <label for="time-conf-second"> 显示秒数</label>
    </div>
    <div id="engine-select">
      <p>选择搜索引擎&emsp;</p>
      <select v-model="searchConf.searchEngine">
        <option value="" disabled>请选择</option>
        <option
          v-for="(engine, index) in Object.keys(searchConf.searchEngines)"
          :key="index"
          :value="engine"
          v-html="engine"
        ></option>
      </select>
    </div>
    <div id="weather-cityname">
      <label for="cityname">查询城市天气 </label>
      <input
        type="text"
        name="cityname"
        id="cityname"
        v-model="cityName"
        @keydown.enter="submitCityname"
      />
      <button @click="submitCityname">确定</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Login from "./Login.vue";
import UserConf from "./UserConf.vue";

export default {
  name: "Sidebar",
  props: {
    timeConf: Object,
    searchConf: Object,
    weatherConf: Object,
    curtainConf: Object,
    sidebarConf: Object,
    catConf: Object,
  },
  components: {
    Login,
    UserConf,
  },
  data() {
    return {
      cityName: "湘潭",
    };
  },
  computed: {
    ...mapState(["userState"]),
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
    submitCityname() {
      this.weatherConf.cityName = this.cityName;
      this.sidebarConf.realRight = "-300px";
      this.curtainConf.curtain = false;
    },
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
  margin-top: 20px;
  user-select: none;
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

#engine-select {
  display: inline-block;
}
#engine-select > select {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  height: 25px;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
}
#engine-select > select option {
  background: rgb(51, 48, 48);
  color: white;
}
input {
  outline: none;
}
#weather-cityname > input {
  width: 70px;
  line-height: 18px;
}
</style>