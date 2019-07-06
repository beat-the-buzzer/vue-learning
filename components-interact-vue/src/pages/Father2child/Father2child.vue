<template>
  <div class="father2child">
    <h3>{{ msg }}</h3>
    <input type="text" v-model="inputValue" placeholder="请输入要传给子组件的值" />
    <br/>
    <button type="button" @click="passData">把输入框的值传给子组件</button>
    <br/>
    <button type="button" @click="triggerChild">触发子组件的函数</button>
    <hr/>
    <Child :showText="showText" ref="myChild" />
  </div>
</template>

<script>
import Child from './Child';
export default {
  name: 'Father2child',
  data () {
    return {
      msg: '父组件传值给子组件',
      inputValue: '',
      showText: ''
    }
  },
  methods: {
    // 使用props传值
    passData () {
      var inputValue = this.inputValue.trim();
      if(inputValue) {
        this.showText = inputValue;
      } else {
        alert('请输入要传的值');
      }
    },

    // 父组件触发这个方法
    triggerChild () {
      var myChild = this.$refs.myChild;
      myChild.changeColor('father2child.');
    }
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
