<template>
  <div class="child2father">
    <h3>{{ msg }}</h3>
    <h4 >子组件传过来的值是： {{showText}}</h4>
    <Child @passData="showData" ref="myChild" />
  </div>
</template>

<script>
import Child from './Child';
export default {
  name: 'Child2father',
  data () {
    return {
      msg: '子组件传值给父组件',
      showText: ''
    }
  },
  methods: {
    // 子组件触发
    showData (text) {
      this.showText = text;
    },
  },
  components: {
    Child
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
