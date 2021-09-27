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
  
}
const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})