<template>
  <div class="child">
    <h3>{{ msg }}</h3>
    <h4>通过props传过来的值是：{{ showText }}</h4>  
    <h4 :class="isRed ? 'red' : ''">通过调用子组件函数传过来的值是：{{ anotherMsg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['showText'],
  data () {
    return {
      msg: '子组件接收到的值是：',
      isRed: false,
      anotherMsg: '',
    }
  },
  methods: {
    changeColor(text) {
      this.isRed = !this.isRed;
      this.anotherMsg = text;
    }
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
.red {
  color: #DC143C;
}
</style>
