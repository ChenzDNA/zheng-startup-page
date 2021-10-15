export default {
  userState: {
    id: '',
    isLogin: false,
    userName: 'cz',
    collections: [
      {
        id: 1,
        name: "github",
        url: "https://github.com/",
        color: "#939393",
        visible: true,
      },
      {
        id: 2,
        name: "bilibili",
        url: "https://www.bilibili.com/",
        color: "rgb(100,160,210)",
        visible: true,
      },
      {
        id: 3,
        name: "pixiv",
        url: "https://www.pixiv.net/",
        color: "rgb(100,170,150)",
        visible: true,
      },
    ],
    notes: [
      {
        id: 0,
        title: "使用须知",
        content: "后台正在建设中，预计把这些自定义的东西都上传到服务器。<br />不会要求隐私信息。",
        timeText: "2021年 9月20日",
        ctime: 0,
        mtime: 0,
      },
    ],
    todos: [],
    cityName: '',
  },
  loginMsg: '',
  timeConf: {
    second: true,
    fontColor: "#a2f58f",
  },
  searchConf: {
    searchEngine: "bing",
    searchEngines: {
      bing: "https://www.bing.com/search?mkt=zh-CN&q=",
      baidu: "https://www.baidu.com/s?ie=UTF-8&wd=",
    },
  },
  catConf: {
    display: false,
  },
}