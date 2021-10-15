<template>
  <div class="single-collection" v-if="colle.visible">
    <a :href="colle.url">
      <div :style="{ backgroundColor: colle.color }">
        {{ colle.name.slice(0, 2).toUpperCase() }}
        <div
          class="collection-delete"
          @click.prevent="deleteCollection(colle)"
          v-show="edit"
        >
          x
        </div>
      </div>
      <p>{{ colle.name }}</p>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "SingleCollection",
  props: {
    colle: Object,
    edit: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['deleteCollection'])
  },
};
</script>

<style>
.single-collection {
  margin: auto;
}
.single-collection > a {
  color: white;
}
.single-collection > a > div:hover {
  transform: scale(1.1);
}
.single-collection > a > div {
  position: relative;
  top: 30px;
  height: 100px;
  width: 100px;
  line-height: 100px;
  font-size: 35px;

  background-color: gray;
  border-radius: 10px;

  transition: 0.1s;
}
.single-collection > a > p {
  position: relative;
  top: 40px;
  width: 100px;
  overflow: hidden;
}
.collection-delete {
  position: absolute;
  font-size: 30px;
  top: -50px;
  right: 0;
}
.collection-delete:hover {
  font-size: 50px;
}
</style>