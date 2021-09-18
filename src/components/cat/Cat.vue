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