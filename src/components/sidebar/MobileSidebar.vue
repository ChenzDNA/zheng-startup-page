<template>
  <div
    id="sidebar"
    @click="slideIn"
    :style="{ right: sidebarConf.realRight }"
  >
    <div
      id="sidebar-move"
      @click.prevent="slideOut"
      class="background-void"
    ></div>
    <div id="engine-select">
      <p>选择搜索引擎&emsp;</p>
      <select v-model="searchConf.searchEngine">
        <option value="" disabled>请选择</option>
        <option
          v-for="(engine, index) in Object.keys(searchConf.searchEngines)"
          :key="index"
          :value="engine"
          v-html="engine"
        ></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    searchConf: Object,
    curtainConf: Object,
    sidebarConf: Object,
  },
  methods: {
    slideOut() {
      if (this.curtainConf.curtain) {
        this.curtainConf.curtain = false;
        this.sidebarConf.realRight = "-300px";
        return;
      }
      this.sidebarConf.realRight = "-10px";
      this.curtainConf.curtain = true;
    },
    slideIn() {},
    submitCityname() {
      this.sidebarConf.realRight = "-300px";
      this.curtainConf.curtain = false;
    },
  },
};
</script>

<style>
</style>