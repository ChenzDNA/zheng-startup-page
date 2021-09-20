<template>
  <div id="m-components-switch">
    <div id="m-links" :style="{ height: linkHeight }">
      <router-link
        v-for="(com, index) in components"
        :key="index"
        :to="com.route"
        v-html="com.name"
        class="background-void"
      ></router-link>
    </div>
    <div id="m-content" class="background-void beautify-scrollbar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompenentsSwitch",
  data() {
    return {
      components: [
      ],
    };
  },
  computed: {
    linkHeight() {
      return `${this.components.length * 40}px`;
    },
  },
};
</script>

<style>
#m-components-switch {
  position: absolute;
  top: calc(30vh + 80px);
  left: 10vw;

  width: 80vw;
  color: white;
}
#m-links {
  width: 80px;
  text-align: center;
}
#m-links > a {
  display: inline-block;
  border-radius: 10px 0 0 10px;
  line-height: 50px;
}
#m-content {
  border-radius: 10px 10px 10px 10px;
  width: 80vw;

  height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>