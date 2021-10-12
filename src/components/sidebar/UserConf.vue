<template>
  <div id="user-conf">
    <div @click="submitUserConf">{{ !userConfEdit ? "编辑昵称" : "完成" }}</div>
    <div id="user-conf-items" v-show="userConfEdit">
      <label for="conf-nickname">昵称：</label>
      <input type="text" id="conf-nickname" v-model="newNickName" />
      <br />
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
      <p>选择搜索引擎：</p>
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
      <label for="cityname">更改城市天气：</label>
      <input
        type="text"
        name="cityname"
        id="cityname"
        v-model="cityName"
        @keydown.enter="submitCityname"
      />&nbsp;
      <button @click="submitCityname(cityName)">确定</button>
    </div>
    <div
      class="background-void normal-button"
      @click="submitUserConf"
      v-if="!userConfEdit"
    >
      保存更改
    </div>
    <div v-show="userConfEdit">
      <label for="conf-password">输入密码：</label>
      <input type="password" id="conf-password" v-model="password" />
      <br />
      <div
        class="background-void normal-button"
        id="save-user-data"
        @click="update"
      >
        保存
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UserConf",
  data() {
    return {
      userConfEdit: false,
      newNickName: "",
      password: "",
      cityName: "",
    };
  },
  props: {
    submitCityname: Function,
  },
  methods: {
    submitUserConf() {
      this.userConfEdit = !this.userConfEdit;
      if (this.userConfEdit) {
        return;
      }
    },
    update() {
      this.updateUserData({
        nickname: this.newNickName,
        searchEngine: this.searchConf.searchEngine,
        cityName: this.cityName,
        secondDisplay: this.timeConf.second ? 2 : 1,
        catDisplay: this.catConf.display ? 2 : 1,
        password: this.password,
      });
      this.userConfEdit = !this.userConfEdit;
      this.password = "";
      this.newNickName = "";
    },
    ...mapActions(["updateUserData"]),
  },
  computed: {
    ...mapState(["userState", "timeConf", "searchConf", "catConf"]),
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
#user-conf > * {
  margin-top: 20px;
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
#weather-cityname > input {
  width: 70px;
  line-height: 18px;
}
#save-user-data {
  width: 60px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}
.normal-button {
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  width: 80px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>