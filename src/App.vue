<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  methods: {
    isPC() {
      let userAgentInfo = navigator.userAgent;
      let Agents = [
        "Android",
        "Phone",
        "SymbianOS",
        "iPad",
        "iPod",
      ];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
  },
  mounted() {
    if (this.isPC()) {
      this.$router.push("/index");
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
body {
  overflow: hidden;
}
</style>