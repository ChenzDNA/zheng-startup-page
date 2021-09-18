<template>
  <div id="weather">
    
    <p>{{ realCityName }}</p>
    <br />
    
    <p>天气：{{ weather }}</p>
    <br />
    
    <p>温度：{{ tempLow }} ~ {{ tempHigh }}</p>
    <br />
    
    <p>风向：{{ windDirection }} {{ windStrength }}</p>
    <br />
    <p>{{ infoText }}</p>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    cityName: String,
  },
  data() {
    return {
      tempHigh: "34℃",
      tempLow: "24℃",
      windDirection: "北风",
      windStrength: "<3级",
      weather: "晴",
      infoText: "",
      weatherClass: "",
      weatherClasses: {
        多云: "fa-cloud",
        雪: "fa-snowflake-o",
        雷: "fa-flash",
        雨: "fa-tint",
        小雨: "fa-tint",
        晴: "fa-sun-o",
      },
    };
  },
  methods: {
    getWeatherInfo(cityName) {
      this.$axios
        .get(`http://wthrcdn.etouch.cn/weather_mini?city=${cityName}`)
        .then((res) => {
          let data = res.data.data;
          this.windStrength = data["forecast"][0]["fengli"]
            .split("[")[2]
            .split("]")[0];
          this.windDirection = data["forecast"][0]["fengxiang"];
          this.infoText = data["ganmao"];
          this.weather = data["forecast"][0]["type"];
          this.weatherClass = this.weatherClasses[this.weather];
          this.tempHigh = data["forecast"][0]["high"].split(" ")[1];
          this.tempLow = data["forecast"][0]["low"].split(" ")[1];
        })
        .catch(() => {
          console.log("jiba");
        });
      return cityName;
    },
  },
  mounted() {
    this.getWeatherInfo(this.cityName);
  },
  computed: {
    realCityName() {
      this.getWeatherInfo(this.cityName);
      return this.cityName;
    },
  },
};
</script>

<style>
#weather {
  /* border: 1px solid red; */
  color: #a2f58f;
  width: 200px;
  position: absolute;
  left: 30px;
  top: 110px;

  padding-bottom: 5px;
  padding-left: 5px;
}
i,
p {
  display: inline-block !important;
  margin-top: 5px;
}
</style>