<template>
  <div id="m-main" :style="{ backgroundImage: `url(${imageUrl})` }">
    <img id="app-logo" src="../assets/logo.png" alt="logo" />
    <MobileSearch
      class="background-void"
      :searchEngine="searchConf.searchEngine"
      :searchEngines="searchConf.searchEngines"
    ></MobileSearch>
  </div>
</template>

<script>
import MobileSearch from "./search/MobileSearch.vue";

export default {
  name: "Main",
  components: {
    MobileSearch,
  },
  data() {
    return {
      imageUrl: "https://api.dujin.org/bing/1920.php",
      searchConf: {
        searchEngine: "bing",
        searchEngines: {
          bing: "https://www.bing.com/search?mkt=zh-CN&q=",
          baidu: "https://www.baidu.com/s?ie=UTF-8&wd=",
        },
      },
    };
  },
};
</script>

<style>
#m-main {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}
#m-main > * {
  border-radius: 10px;
}
#app-logo {
  position: absolute;
  top: 5vh;
  left: 50vw;
  height: 20vh;
  transform: translateX(-50%);
}
</style>
