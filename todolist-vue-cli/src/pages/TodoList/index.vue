<template>
<div>
  <div>
    <input type="text" v-model="inputValue"/>
    <button @click="handleSubmit">提交</button>
  </div>
  <ul>
    <todo-item
      v-for="(item,index) of list"
      :content="item"
      :key="index"
      :index="index"
      @delete="handleDelete"
    >
    </todo-item>
  </ul>
  <p>{{remainNum}} item(s) unfinished</p>
</div>
</template>

<script>
import TodoItem from "../../components/TodoItem.vue";
export default {
  components: {
    "todo-item": TodoItem
  },
  data() {
    return {
      inputValue: "",
      list: []
    };
  },
  methods: {
    handleSubmit() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    }
  },

  computed: {
    remainNum() {
      return this.list.length;
    }
  }
};
</script>

<style scoped>
</style>


