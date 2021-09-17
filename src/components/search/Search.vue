<template>
  <div id="search">
    <input type="text" v-model="searchValue" @keydown.enter="doSearch" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchEngine: String,
    searchEngines: Object,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    doSearch() {
      self.location = this.searchEngines[this.searchEngine] + this.searchValue;
    },
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