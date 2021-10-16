<template>
  <div class="single-todo">
    <div
      @click="clickUpdateTodo"
      v-text="`${data.finished ? '☑' : '☐'}`"
      :class="`${data.finished ? 'todo-back' : 'todo-finish'}`"
    ></div>
    <div v-html="data.content" :class="`${data.finished ? 'done' : ''}`"></div>
    <div v-html="data.timeText"></div>
    <div class="delete-todo" @click="clickDeleteTodo">删除</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SingleTodo",
  props: {
    data: Object,
  },
  methods: {
    clickDeleteTodo() {
      this.data.visible = false;
      this.deleteTodo(this.data);
    },
    clickUpdateTodo() {
      this.data.finished = !this.data.finished;
      this.updateTodo(this.data);
    },
    ...mapActions(["deleteTodo", "updateTodo"]),
  },
};
</script>

<style>
.single-todo {
  height: 50px;
  vertical-align: middle;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.single-todo:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.single-todo > div {
  height: 50px;
  display: inline-block;
  line-height: 50px;
  transition: 0.2s;
}
.single-todo > div:nth-child(1) {
  width: 50px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}
.single-todo > div:nth-child(2) {
  flex: 1;
  position: relative;
  padding-left: 10px;
}
.single-todo > div:nth-child(3) {
  width: 100px;
}
.done {
  text-decoration-line: line-through;
}
.delete-todo {
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
}
.delete-todo:hover {
  background-color: rgba(250, 75, 60, 0.7);
}
.todo-finish:hover {
  background-color: rgba(10, 255, 100, 0.5);
}
.todo-back:hover {
  background-color: rgba(250, 105, 100, 0.5);
}
</style>