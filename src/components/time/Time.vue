<template>
  <div
    id="time-text"
    :style="{ color: fontColor, left: realLeft, width: realWidth }"
  >
    <div class="time-num">{{ time[0] }}</div>
    <div class="split-mark">{{ splitMark }}</div>
    <div class="time-num">{{ time[1] }}</div>
    <div class="split-mark" v-if="timeConf.second">{{ splitMark }}</div>
    <div class="time-num" v-if="timeConf.second">{{ time[2] }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Time",
  data() {
    return {
      time: [],
      splitMark: ":",
      fontColor: "#a2f58f",
      styleLeft: "30px",
    };
  },
  computed: {
    realLeft() {
      return this.timeConf.second ? "30px" : "95px";
    },
    realWidth() {
      return this.timeConf.second ? "175px" : "110px";
    },
    ...mapState(["timeConf"]),
  },
  mounted() {
    setInterval(() => {
      let date = new Date();
      this.splitMark = (date.getSeconds() & 1) === 0 ? "" : ":";
      this.time = [date.getHours(), date.getMinutes(), date.getSeconds()];
      this.time.map((val, index, arr) => {
        if (val / 10 < 1) {
          arr[index] = "0" + arr[index];
        }
      });
    }, 150);
  },
};
</script>

<style>
@font-face {
  font-family: "led";
  src: url("../../assets/font-family/led.otf");
}

#time-text {
  font-size: 55px;
  letter-spacing: 3px;
  font-family: "led";
  position: absolute;
  top: 30px;
  width: 175px;
  padding: 0px 15px;
  user-select: none;
}
#time-text > * {
  display: inline-block;
  text-align: left;
}
.time-num {
  width: 45px;
}
.split-mark {
  width: 18px;
}
</style>