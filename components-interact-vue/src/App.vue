<template>
  <div id="app">
    <Index />
    <router-view />
  </div>
</template>

<script>
import Index from '@/pages/Index/Index'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
