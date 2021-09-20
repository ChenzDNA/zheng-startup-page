<template>
  <div id="m-main" :style="{ backgroundImage: `url(${imageUrl})` }">
    <img id="app-logo" src="../assets/logo.png" alt="logo" />
    <MobileSearch
      class="background-void"
      :searchEngine="searchConf.searchEngine"
      :searchEngines="searchConf.searchEngines"
      v-if="display"
    ></MobileSearch>
    <MobileComponentsSwitch v-if="display"></MobileComponentsSwitch>
    <div
      id="curtain"
      v-if="curtainConf.curtain"
      class="background-void"
      @click="sidebarIn"
    ></div>

    <MobileSidebar
      :timeConf="timeConf"
      :searchConf="searchConf"
      :weatherConf="weatherConf"
      :curtainConf="curtainConf"
      :sidebarConf="sidebarConf"
      class="background-void"
    ></MobileSidebar>
  </div>
</template>

<script>
import MobileSidebar from "./sidebar/MobileSidebar.vue";
import MobileComponentsSwitch from "./center-components/MobileComponentsSwitch.vue";
import MobileSearch from "./search/MobileSearch.vue";

export default {
  name: "Main",
  components: {
    MobileSidebar,
    MobileSearch,
    MobileComponentsSwitch,
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
