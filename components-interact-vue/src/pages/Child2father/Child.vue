<template>
  <div class="child2father">
    <h3>{{ msg }}</h3>
    <input type="text" v-model="inputValue" placeholder="请输入要传给父组件的值" />
    <br/>
    <button type="button" @click="passDataToFather">把输入框的值传给父组件</button>
    
  </div>
</template>

<script>
import Child from './Child';
export default {
  name: 'Child',
  data () {
    return {
      msg: '子组件传值给父组件',
      inputValue: '',
    }
  },
  methods: {
    // 使用emit传值
    passDataToFather () {
      var inputValue = this.inputValue.trim();
      if(inputValue) {
        this.$emit('passData', inputValue);
      } else {
        alert('请输入要传的值');
      }
    },
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
