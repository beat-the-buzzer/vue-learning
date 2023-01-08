<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <div>
        <input type="checkbox" v-model="item.completed" />
        {{ item.taskText }}
        <button @click="del(index)">删除</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
  name: 'navMain',
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup(props, ctx) {
    let list = computed(()=>{
      return props.list
    })
    let del = (index) => {
      ctx.emit('delTodo', index)
    }
    return {
      list,
      del
    }
  }
})
</script>
