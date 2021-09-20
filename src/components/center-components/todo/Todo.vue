<template>
  <div id="todo">
    <div id="todo-list" class="beautify-scrollbar">
      <SingleTodo
        v-for="(item, index) in todoItems"
        :key="index"
        :data="item"
      ></SingleTodo>
      <input
        type="text"
        placeholder="待办内容"
        id="add-todo-input"
        v-show="addTodoCheck"
        v-model="addTodoText"
        @keydown.enter="submitTodoItem"
        @blur="submitTodoItem"
      />
      <div id="add-todo" @click="addTodo">添加</div>
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
      addTodoCheck: true,
      addTodoText: "",
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
          content: "肥肥14",
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
  methods: {
    addTodo() {
      this.addTodoCheck = !this.addTodoCheck;
      if (this.addTodoCheck) {
        setTimeout(() => {
          document.getElementById("add-todo-input").focus();
        }, 10);
      }
    },
    submitTodoItem() {
      this.addTodoCheck = false;
      if (this.addTodoText === "") {
        return;
      }
      this.items.push({
        id: 0,
        content: new String(this.addTodoText),
        timeText: "",
        finished: false,
        needAlarm: false,
        visible: true,
        index: 0,
        ctime: new Date().getTime(),
        mtime: new Date().getTime(),
      });
      this.addTodoText = "";
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
}
#todo-finished {
  border-left: 1px solid #8adaee;
  flex: 1;
}
#add-todo {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px;
  background-color: rgba(0, 150, 255, 0.3);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}
#add-todo:hover {
  background-color: rgba(0, 150, 255, 0.5);
}
#add-todo-input {
  font-size: 20px;
  margin-left: 50px;
  padding-left: 10px;
}
</style>