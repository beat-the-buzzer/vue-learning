<template>
  <div class="Index">
    <h1>{{msg}}</h1>
    <edit-class/>
    <unique-key/>
  </div>
</template>

<script>
import EditClass from '../../components/EditClass/EditClass';
import UniqueKey from '../../components/UniqueKey/UniqueKey';

export default {
  name: 'Index',
  components: {
    'edit-class': EditClass,
    'unique-key': UniqueKey
  },
  data () {
    return {
      msg: 'Technique for Vue'
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
