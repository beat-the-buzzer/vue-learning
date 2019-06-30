<template>
  <div class="about">
    <h1>about页面</h1>
    <p>按钮点击了{{ msg }}次</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'About',
  store,
  data () {
    return {
      msg: store.state.count
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
