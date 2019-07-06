<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in linkData" :key="index">
        <router-link :to="item.url">
        {{item.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "组件间传值练习",
      linkData: [
        {
          url: "/father2child",
          text: "父传子"
        },
        {
          url: "/child2father",
          text: "子传父"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 40px;
}
a {
  color: #42b983;
}
</style>
