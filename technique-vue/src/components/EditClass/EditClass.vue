<template>
  <div class="EditClass">
    <h3>点击添加删除class:</h3>
    <ul>
      <li 
        v-for="(item,index) in tabArr" 
        :key="item"
        :class="selected === index ? 'selected' : ''" 
        @click="changeColor(index)"
      >
        {{item}}
      </li>
    </ul> 
    <ul>
      <li 
        v-for="(item,index) in tabArr" 
        :key="item"
        :class="{ selected: selected === index }" 
        @click="changeColor(index)"
      >
        {{item}}
      </li>
    </ul>
    <ul>
      <li 
        v-for="(item,index) in tabArr" 
        :key="item"
        :class="[selected === index ? 'selected' : '']" 
        @click="changeColor(index)"
      >
        {{item}}
      </li>
    </ul>
    <ul>
      <li 
        v-for="(item,index) in tabArr" 
        :key="item"
        class="class1 class2"
        :class="[selected === index ? 'selected' : '']" 
        @click="changeColor(index)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'EditClass',
  data () {
    return {
      tabArr: [],
      selected: 0,
    }
  },
  methods: {
    changeColor(index) {
      this.selected = index;
    },
  },
  mounted () {
    this.tabArr = config.config.tabArr;
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
  cursor: pointer;
  padding: 5px 10px;
}
.selected {
  color: #ffffff;
  background: #42b983;
}
a {
  color: #42b983;
}
</style>
