<template>
  <div id="components-switch">
    <div id="links" :style="{ height: linkHeight }">
      <router-link
        v-for="(com, index) in components"
        :key="index"
        :to="com.route"
        v-html="com.name"
        class="background-void"
      ></router-link>
    </div>
    <div id="content" class="background-void beautify-scrollbar">
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
        {
          route: "collection",
          name: "收藏",
        },
        {
          route: "note",
          name: "便签",
        },
        {
          route: "todo",
          name: "待办",
        },
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
#components-switch {
  position: absolute;
  top: 110px;
  left: 250px;

  width: 70%;
  color: white;
  display: flex;
}
a {
  text-decoration-line: none;
  color: #c7c7c7;
}
.router-link-active {
  color: white;
  background-color: rgba(105, 105, 105, 0.1) !important;
}
#links {
  flex-direction: column;
  display: flex;
  height: 100px;
  width: 80px;
  text-align: center;
}
#links > a {
  display: inline-block;
  flex: 1;
  border-radius: 10px 0 0 10px;
  line-height: 50px;
}
#content {
  border-radius: 0 10px 10px 10px;
  width: calc(100% - 70px);

  height: 70vh;
  overflow-y: scroll;
}
.beautify-scrollbar{

}
.beautify-scrollbar::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0, 0, 0, 0);
}
.beautify-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
}
.beautify-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>