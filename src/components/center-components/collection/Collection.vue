<template>
  <div id="collection">
    <SingleCollection
      v-for="(colle, index) in collections"
      :key="index"
      :colle="colle"
    ></SingleCollection>
  </div>
</template>

<script>
import SingleCollection from "./SingleCollection.vue";

export default {
  name: "Collection",
  components: { SingleCollection },
  data() {
    return {
      collections: [
        {
          name: "github",
          url: "https://github.com/",
          color: "#939393",
        },
        {
          name: "bilibili",
          url: "https://www.bilibili.com/",
          color: "rgb(100,160,210)",
        },
        {
          name: "pixiv",
          url: "https://www.pixiv.net/",
          color: "rgb(100,170,150)",
        },
      ],
    };
  },
  mounted() {},
  computed: {},
};
</script>

<style>
#collection {
  display: grid;
  /* 300~200px */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
}
#collection > * {
  height: 200px;
}
</style>