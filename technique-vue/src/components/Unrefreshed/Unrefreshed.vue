<template>
  <div class="Unrefreshed">
    <h3>3、DOM不刷新</h3>
    <button @click="addAttr">点击添加属性</button>
    <button @click="triggerRefresh">点击触发render</button>
    <button @click="solution1">添加属性的解决方案</button>
    <button @click="solution2">添加属性监听</button>
    <div>已追踪的属性: {{obj.id}}</div>
    <div>未追踪的属性: {{obj.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Unrefreshed',
  data () {
    return {
      obj: {
        id: 1
      }
    }
  },
  methods: {
    addAttr() {
      this.obj.text = '测试属性';
      alert('添加成功:' + this.obj.text);
    },

    triggerRefresh() {
      this.obj.id = this.obj.id + 1;
    },

    solution1() {
      this.obj = {
        ...this.obj,
        text: '测试属性'
      }
    },

    solution2() {
      this.$set(this.obj, 'text', '添加监听');
      alert('点击第一个按钮看看刷不刷新');
    }


  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
