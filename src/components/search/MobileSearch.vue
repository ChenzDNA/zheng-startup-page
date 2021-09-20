<template>
  <div id="m-search">
    <input type="text" v-model="searchValue" @keydown.enter="doSearch" placeholder="🔍"/>
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
#m-search {
  position: absolute;
  top: 30vh;
  left: 10vw;

  height: 63px;
  width: 80vw;
}
#m-search > input {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  height: 100%;
  width: 100%;
  font-size: 30px;
  color: white;
  padding-left: 20px;
  outline: none;
  letter-spacing: 3px;
}
</style>