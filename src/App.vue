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
        "iPhone",
        "SymbianOS",
        "Windows Phone",
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
      this.$router.push('/index');
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
</style>