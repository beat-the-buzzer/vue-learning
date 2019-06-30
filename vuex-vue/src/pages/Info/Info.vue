<template>
  <div class="info">
    hello info component
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'Info',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    add() {
      console.log('Add is invoked');
      store.commit('increase');
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
</style>
