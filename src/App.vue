<template>
  <div id="app" :style="{ backgroundImage: `url(${imageUrl})` }">
    <link
      href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <Cat></Cat>
    <Time :second="timeConf.second"></Time>
    <Weather></Weather>
    <Search
      :searchEngine="searchConf.searchEngine"
      :searchEngines="searchConf.searchEngines"
    ></Search>
    <Sidebar :timeConf="timeConf" :searchConf="searchConf"></Sidebar>
  </div>
</template>

<script>
import axios from "axios";

import Sidebar from "./components/sidebar/Sidebar.vue";
// import ComponentsSwitch from './components/center-components/ComponentsSwitch.vue';
// import Note from './components/center-components/note/Note.vue';
// import Todo from './components/center-components/todo/Todo.vue';
import Time from "./components/time/Time.vue";
// import Collection from './components/center-components/collection/Collection.vue';
import Weather from "./components/weather/Weather.vue";
import Cat from "./components/cat/Cat.vue";
import Search from "./components/search/Search.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Time,
    Weather,
    Cat,
    Search,
  },
  metaInfo: {
    title: "werwqerqwer",
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
      imageUrl: "https://api.dujin.org/bing/1920.php",
    };
  },
  mounted() {
    axios.get("");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#app > * {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
}
body {
  overflow: hidden;
}
</style>
