<template>
  <div class="UniqueKey">
    <h3>唯一的key</h3>
    <h4>index作为key的情况：</h4>
    <button @click="addList1">点击添加数组</button>
    <ul>
      <li 
        v-for="(item,index) in list1"
        :key="index"
      >
        {{item.text}}
      </li>
    </ul> 

    <h4>唯一key的情况：</h4>
    <button @click="addList2">点击添加数组</button>
    <ul>
      <li 
        v-for="item in list2"
        :key="item.text"
      >
        {{item.text}}
      </li>
    </ul> 

    
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'UniqueKey',
  data () {
    return {
      list1: [],
      list2: []
    }
  },
  methods: {
    addList1() {
      const len = this.list1.length;
      this.list1.unshift({
        id: len,
        text: `选项${len}`
      })
    },

    addList2() {
      const len = this.list2.length;
      var id = String.fromCharCode(97 + len);
      const item = {
        id,
        text: `选项${id}`
      };
      this.list2.unshift(item);
    }
  },
  mounted () {
    this.list1 = config.config.list1;
    this.list2 = config.config.list2;
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
