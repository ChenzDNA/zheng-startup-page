<template>
  <div id="note">
    <div id="note-list" class="beautify-scrollbar">
      <div id="note-search">
        <input type="text" v-model="noteSearch" placeholder="🔍" />
      </div>
      <div
        class="note-item"
        v-for="(note, index) in notesAfterFilter"
        :key="index"
        :index="index"
        v-html="note.title"
        @click="changeContent"
      ></div>
      <div v-show="newNote">
        <input
          id="new-note-input"
          type="text"
          placeholder="title"
          v-model="newTitle"
          @keydown.enter="createNewNote"
          @blur="createNewNote"
        />
      </div>
      <div id="note-control">
        <div @click="clickNewNote">新建</div>
        <div @click="deleteNote">删除</div>
      </div>
    </div>
    <div id="note-content" class="beautify-scrollbar" :index="contentIndex">
      <p v-html="title" v-if="!edit"></p>
      <br />
      <p v-html="content" v-if="!edit"></p>
      <textarea v-model="content" v-show="edit" id="edit-textarea"></textarea>
      <div v-html="timeText" v-show="!edit"></div>
      <p
        v-text="!edit ? '编辑' : '完成'"
        id="edit-button"
        @click="submitContent"
        v-if="contentIndex !== -1"
      >
        编辑
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
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
      title: "",
      content: "",
      timeText: "",
      edit: false,
      contentIndex: -1,
      noteSearch: "",
      newNote: false,
      newTitle: "",
    };
  },
  methods: {
    changeContent(e) {
      for (let item of e.target.parentNode.children) {
        item.classList.remove("note-item-selected");
      }
      e.target.classList.add("note-item-selected");
      let itemData = this.notes[e.target.getAttribute("index")];
      this.content = itemData.content;
      this.title = itemData.title;
      this.contentIndex = e.target.getAttribute("index");
      this.timeText = itemData.timeText;
      if (this.edit) {
        this.submitContent();
      }
    },
    submitContent() {
      this.edit = !this.edit;
      if (this.edit) {
        this.content = this.content.replaceAll("<br />", "\n");
        setTimeout(() => {
          document.getElementById('edit-textarea').focus()
        }, 10);
      } else {
        this.content = this.content.replaceAll("\n", "<br />");
      }
      this.notes[this.contentIndex].content = this.content;
    },
    createNewNote() {
      this.newNote = false;
      if (this.newTitle === "") return;
      console.log(this.newTitle);
      this.notes.push({
        id: 0,
        title: new String(this.newTitle),
        content: "",
        timeText: "",
        ctime: 0,
        mtime: 0,
      });
      this.newTitle = "";
    },
    deleteNote() {
      this.notes.splice(this.contentIndex, 1);
      this.title = "";
      this.content = "";
      this.timeText = "";
      this.contentIndex = -1;
    },
    clickNewNote() {
      this.newNote = true;
      setTimeout(() => {
        document.getElementById("new-note-input").focus();
      }, 10);
    },
  },
  computed: {
    notesAfterFilter() {
      if (this.noteSearch !== "")
        return this.notes.filter(
          (note) => !(note.title.indexOf(this.noteSearch) < 0)
        );
      else return this.notes;
    },
  },
};
</script>

<style>
#note {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
#note-list {
  height: calc(70vh - 30px);
  width: 230px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.note-item {
  padding: 10px;
  color: #c9c9c9;
  user-select: none;
  overflow-x: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.note-item:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.2) !important;
}
.note-item-selected {
  color: white;
  background-color: rgba(255, 255, 255, 0.1) !important;
}
#note-content {
  border-left: 2px solid #8adaee;

  width: calc(100% - 300px);
  height: 70vh;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 20px;

  white-space: normal;
  overflow-y: scroll;
}
#note-content > p {
  margin-top: 20px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}
#note-content > textarea {
  width: 100%;
  outline: 0;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 0;
  height: calc(70vh - 100px);
  resize: none;
  font-size: 20px;
}
#note-content > div {
  text-align: right;
  margin: 20px 0;
  font-size: 18px;
}
#edit-button {
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
}
#edit-button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
#note-search {
  margin: 5px;
}
#note-search > input {
  color: white;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: 0;
  font-size: 18px;
  padding: 3px;
}
#note-control {
  position: absolute;
  bottom: 0;
  width: 222px;
  height: 30px;
  display: flex;
}
#note-control > * {
  flex: 1;
  text-align: center;
  user-select: none;
  cursor: pointer;
  line-height: 30px;
}
#note-control > div:nth-child(1) {
  background-color: rgba(0, 150, 255, 0.3);
}
#note-control > div:nth-child(1):hover {
  background-color: rgba(0, 150, 255, 0.5);
}
#note-control > div:nth-child(2) {
  background-color: rgba(255, 50, 50, 0.3);
}
#note-control > div:nth-child(2):hover {
  background-color: rgba(255, 50, 50, 0.5);
}
#new-note-input {
  font-size: 20px;
}
</style>