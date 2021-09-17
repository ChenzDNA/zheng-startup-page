<template>
  <div id="main" :style="{ backgroundImage: `url(${imageUrl})` }">
    <link
      href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <Cat></Cat>
    <Time :second="timeConf.second" class="background-void"></Time>
    <Weather class="background-void" :cityName="weatherConf.cityName"></Weather>
    <Search
      class="background-void"
      :searchEngine="searchConf.searchEngine"
      :searchEngines="searchConf.searchEngines"
    ></Search>
    <ComponentsSwitch></ComponentsSwitch>
    <Sidebar
      :timeConf="timeConf"
      :searchConf="searchConf"
      :weatherConf="weatherConf"
      class="background-void"
    ></Sidebar>
  </div>
</template>

<script>
// import axios from "axios";

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
      imageUrl: "https://api.dujin.org/bing/1920.php",
    };
  },
  mounted() {
    
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
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
body {
  overflow: hidden;
}
.background-void {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>
