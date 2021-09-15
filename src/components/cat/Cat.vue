<template>
  <div id="cat">
    <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html"></iframe>
  </div>
</template>

<script>
export default {
  name: "Cat",
};
</script>

<style>
#cat {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  background-color: rgba(252, 158, 158, 0) !important;

  width: 100vw;
  height: 100vh;
}
#cat > iframe {
  width: calc(100vw + 100px);
  height: 100%;
  position: absolute;
  top: 0;
  left: -100px;
  border: 0;
}
</style>