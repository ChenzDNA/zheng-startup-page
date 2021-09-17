<template>
  <div id="single-collection">
    <a :href="colle.url">
      <div :style="{ backgroundColor: colle.color }">
        {{ colle.name.slice(0, 3).toUpperCase() }}
      </div>
      <p>{{ colle.name }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "SingleCollection",
  props: {
    colle: Object,
  },
};
</script>

<style>
#single-collection {
  /* border: 1px solid red; */
  margin: auto;
}
#single-collection > a {
  color: white;
}
#single-collection > a > div:hover {
  transform: scale(1.1);
}
#single-collection > a > div {
  /* border: 1px solid red; */
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
#single-collection > a > p {
  position: relative;
  top: 40px;
}
</style>