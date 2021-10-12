<template>
  <div id="search">
    <input
      type="text"
      v-model="searchValue"
      @keydown.enter="doSearch"
      placeholder="🔍"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    doSearch() {
      self.location =
        this.searchConf.searchEngines[this.searchConf.searchEngine] +
        this.searchValue;
    },
  },
  computed: {
    ...mapState(["searchConf"]),
  },
};
</script>

<style>
#search {
  position: absolute;
  top: 30px;
  left: 250px;

  height: 63px;
  width: 70%;
}
#search > input {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  height: 100%;
  width: 100%;
  font-size: 30px;
  color: white;
  padding-left: 20px;
  outline: none;
  text-align: center;
  letter-spacing: 3px;
}
</style>