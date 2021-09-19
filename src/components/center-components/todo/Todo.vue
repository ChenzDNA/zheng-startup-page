<template>
  <div id="todo">
    <div id="todo-list" class="beautify-scrollbar">
      <SingleTodo
        v-for="(item, index) in todoItems"
        :key="index"
        :data="item"
      ></SingleTodo>
    </div>
    <div id="todo-finished" class="beautify-scrollbar">
      <SingleTodo
        v-for="(item, index) in finishedItems"
        :key="index"
        :data="item"
      ></SingleTodo>
    </div>
  </div>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";

export default {
  name: "Todo",
  components: {
    SingleTodo,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          content: "吃饭",
          timeText: "11月11日",
          finished: false,
          needAlarm: false,
          visible: true,
          index: 0,
          ctime: "",
          mtime: "",
        },
        {
          id: 0,
          content: "睡觉",
          timeText: "11月11日",
          finished: false,
          needAlarm: false,
          visible: true,
          index: 1,
          ctime: "",
          mtime: "",
        },
        {
          id: 0,
          content: "打豆豆",
          timeText: "11月11日",
          finished: false,
          needAlarm: false,
          visible: true,
          index: 2,
          ctime: "",
          mtime: "",
        },
        {
          id: 0,
          content: "睡觉02",
          timeText: "11月11日",
          finished: true,
          needAlarm: false,
          visible: true,
          index: 3,
          ctime: "",
          mtime: "",
        },
        {
          id: 0,
          content: "魔界战记",
          timeText: "11月1日",
          finished: true,
          needAlarm: false,
          visible: true,
          index: 4,
          ctime: "",
          mtime: "",
        },
      ],
    };
  },
  computed: {
    todoItems() {
      return this.items.filter((item) => !item.finished && item.visible);
    },
    finishedItems() {
      return this.items.filter((item) => item.finished && item.visible);
    },
  },
};
</script>

<style>
#todo {
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
}
#todo > * {
  overflow-y: scroll;
  overflow-x: hidden;
}
#todo-list {
  border-right: 1px solid #8adaee;
  flex: 1;
  height: 100%;
}
#todo-finished {
  border-left: 1px solid #8adaee;
  flex: 1;
  height: 100%;
}
</style>