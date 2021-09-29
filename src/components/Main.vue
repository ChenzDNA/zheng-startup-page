<template>
  <div id="main" :style="{ backgroundImage: `url(${imageUrl})` }">
    <Cat v-if="display && catConf.display"></Cat>
    <Time
      :second="timeConf.second"
      class="background-void"
      v-if="display"
    ></Time>
    <Weather
      class="background-void"
      :cityName="weatherConf.cityName"
      v-show="display"
    ></Weather>
    <Search
      class="background-void"
      :searchEngine="searchConf.searchEngine"
      :searchEngines="searchConf.searchEngines"
      v-if="display"
    ></Search>
    <ComponentsSwitch v-if="display"></ComponentsSwitch>
    <div
      id="curtain"
      v-if="curtainConf.curtain"
      class="background-void"
      @click="sidebarIn"
    ></div>
    <button
      id="see-background"
      class="background-void"
      @click="display = !display"
    >
      查看背景图片
    </button>

    <Sidebar
      :timeConf="timeConf"
      :searchConf="searchConf"
      :weatherConf="weatherConf"
      :curtainConf="curtainConf"
      :sidebarConf="sidebarConf"
      :catConf="catConf"
      class="background-void"
    ></Sidebar>
  </div>
</template>

<script>
import Sidebar from "./sidebar/Sidebar.vue";
import ComponentsSwitch from "./center-components/ComponentsSwitch.vue";
import Time from "./time/Time.vue";
import Weather from "./weather/Weather.vue";
import Cat from "./cat/Cat.vue";
import Search from "./search/Search.vue";

export default {
  name: "Main",
  components: {
    Sidebar,
    Time,
    Weather,
    Cat,
    Search,
    ComponentsSwitch,
  },
  data() {
    return {
      display: true,
      imageUrl: "https://api.dujin.org/bing/1920.php",
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
      },
      curtainConf: {
        curtain: false,
      },
      sidebarConf: {
        realRight: "-300px",
      },
      catConf: {
        display: false,
      },
    };
  },
  methods: {
    sidebarIn() {
      this.sidebarConf.realRight = "-300px";
      this.curtainConf.curtain = false;
    },
  },
  mounted() {},
};
</script>

<style>
#main {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#main > * {
  border-radius: 10px;
}
.background-void {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
#curtain {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
#see-background {
  position: absolute;
  right: 10px;
  bottom: 10px;
  user-select: none;
  outline: none;
  border: 0;
  padding: 5px;
  color: white;
  cursor: pointer;
}
</style>
