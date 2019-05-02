<template>
  <li>
    {{content}}
    <span class="delete" @click="handleDelete">点击删除</span>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["content", "index"],
  methods: {
    handleDelete() {
      this.$emit("delete", this.index);
      // 子组件和父组件进行通信
    }
  }
};
</script>

<style scoped>
.delete {
  color: #6190e8;
  text-decoration: underline;
  cursor: pointer;
}
</style>
