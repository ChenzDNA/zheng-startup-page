<template>
  <div id="collection">
    <div id="collections">
      <SingleCollection
        v-for="(colle, index) in userState.collections"
        :key="index"
        :colle="colle"
        :edit="edit"
      ></SingleCollection>
    </div>
    <div id="collection-conf">
      <div
        @click="submitCollection"
        id="collection-edit-btn"
        class="background-void"
      >
        {{ edit ? "确定" : "编辑" }}
      </div>
      <div v-show="edit" id="collection-conf-items">
        <label for="collection-name">新建名称：</label>
        <input type="text" id="collection-name" v-model="newColleName" />
        <label for="collection-link">链接：</label>
        <input type="text" id="collection-link" v-model="newColleLink" />
        <label for="collection-color">颜色：</label>
        <input type="color" id="collection-color" v-model="newColleColor" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SingleCollection from "./SingleCollection.vue";

export default {
  name: "Collection",
  components: { SingleCollection },
  data() {
    return {
      edit: false,
      newColleName: "",
      newColleLink: "",
      newColleColor: "",
    };
  },
  methods: {
    submitCollection() {
      this.edit = !this.edit;
      if (
        this.edit ||
        this.newColleName
          .replace(/^(\s|\u00A0)+/, "")
          .replace(/(\s|\u00A0)+$/, "") === ""
      ) {
        this.newColleName = this.newColleLink = this.newColleColor = "";
        return;
      }
      let data = {
        name: new String(this.newColleName),
        url: new String(this.newColleLink),
        color: new String(
          this.newColleColor === "" ? "#ffffff" : this.newColleColor
        ),
        visible: true,
      };
      this.addCollection(data);
      this.newColleName = this.newColleLink = this.newColleColor = "";
    },
    ...mapActions(["addCollection"]),
  },
  computed: {
    ...mapState(["userState"]),
  },
};
</script>

<style>
#collections {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
}
#collections > * {
  height: 200px;
}

#collection-conf {
  position: absolute;
  left: 0;
  bottom: -70px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

#collection-conf > * {
  display: inline-block;
  height: 20px;
  margin-left: 10px;
}

#collection-edit-btn {
  padding: 10px;
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
}

#collection-conf-items {
  font-size: 20px;
}

#collection-conf-items > *:not(input) {
  margin-left: 20px;
}

#collection-color {
  border: 0;
  outline: 0;
  height: 30px;
  width: 30px;
}
</style>