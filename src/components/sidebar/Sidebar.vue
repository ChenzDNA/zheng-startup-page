<template>
  <div id="sidebar" @mouseleave="slideIn" :style="{ right: barRight }">
    <div id="sidebar-move" @mouseenter="slideOut"></div>
    <div>
      <input
        type="checkbox"
        name="time-conf-second"
        id="time-conf-second"
        v-model="timeConf.second"
      />
      <label for="time-conf-second"> 显示秒数</label>
    </div>
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
    timeConf: Object,
    searchConf: Object,
  },
  data() {
    return {
      // barRight: "-10px",
      barRight: "-300px",
    };
  },
  methods: {
    slideOut() {
      this.barRight = "-10px";
    },
    slideIn() {
      this.barRight = "-300px";
    },
  },
};
</script>

<style>
#sidebar {
  width: 300px;
  height: 100vh;
  /* border: 1px solid red; */

  position: absolute;
  top: 0;
  color: white;
  transition: 0.2s;
}

#sidebar > * {
  margin-left: 10%;
  margin-top: 20px;
  user-select: none;
}

#sidebar-move {
  /* border: 1px solid red; */

  margin: 0;

  width: 10px;
  height: 100vh;
  position: absolute;
  left: -5px;
  border-radius: 10px;
}

#engine-select {
  display: inline-block;
}
#engine-select > select {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  height: 25px;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
}
#engine-select > select option {
  background: rgb(51, 48, 48);
  color: white;
}
</style>