<template>
  <div>
    <input placeholder="请输入任务名称" v-model="taskText" @keydown.enter="enter"/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import { useStore } from 'vuex'

export default defineComponent({
  name: 'navHeader',
  setup(props, ctx) {
    let taskText = ref('') 
    let store = useStore()
    let enter = () => {
      if(taskText.value) {
        ctx.emit('addTodo', taskText.value)
        taskText.value = ''
      }
    }
    return {
      taskText,
      enter
    }
  }
})
</script>
