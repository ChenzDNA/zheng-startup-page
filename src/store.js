import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  timeConf: {
    second: true,
    fontColor: "#a2f58f",
  },
  searchConf: {
    searchEngine: "bing",
    searchEngines: {
      bing: "https://www.bing.com/search?mkt=zh-CN&q=",
      baidu: "https://www.baidu.com/s?ie=UTF-8&wd=",
    },
  },
  weatherConf: {
    cityName: "湘潭",
    tempHigh: "34℃",
    tempLow: "24℃",
    windDirection: "北风",
    windStrength: "<3级",
    weather: "晴",
    infoText: "",
  },
  curtainConf: {
    curtain: false,
  },
  sidebarConf: {
    realRight: "-300px",
  },
}
const getters = {

}
const mutations = {
  getWeatherInfo(cityName) {
    this.$axios
      .get(`http://wthrcdn.etouch.cn/weather_mini?city=${cityName}`)
      .then((res) => {
        let data = res.data.data;
        state.weatherConf.windStrength = data["forecast"][0]["fengli"]
          .split("[")[2]
          .split("]")[0];
        state.weatherConf.windDirection = data["forecast"][0]["fengxiang"];
        state.weatherConf.infoText = data["ganmao"];
        state.weatherConf.weather = data["forecast"][0]["type"];
        state.weatherConf.tempHigh = data["forecast"][0]["high"].split(" ")[1];
        state.weatherConf.tempLow = data["forecast"][0]["low"].split(" ")[1];
      })
      .catch(() => {
        state.weatherConf.windStrength = "";
        state.weatherConf.windDirection = "";
        state.weatherConf.infoText = "请确保输入正确的地名";
        state.weatherConf.weather = "";
        state.weatherConf.tempHigh = "";
        state.weatherConf.tempLow = "";
      });
    return cityName;
  },
}
const actions = {
  getWeatherInfo({ commit }, cityName) {
    commit('getWeatherInfo', cityName)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})