<template>
  <div id="main" :style="{ backgroundImage: `url(${imageUrl})` }">
    <Cat v-if="display && catConf.display"></Cat>
    <Time class="background-void" v-if="display"></Time>
    <Weather class="background-void" v-show="display"></Weather>
    <Search class="background-void" v-if="display"></Search>
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
      :sidebarConf="sidebarConf"
      :curtainConf="curtainConf"
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
import { mapState } from "vuex";

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
      sidebarConf: {
        realRight: "-300px",
      },
      curtainConf: {
        curtain: false,
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
  computed: {
    ...mapState(["catConf"]),
  },
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
