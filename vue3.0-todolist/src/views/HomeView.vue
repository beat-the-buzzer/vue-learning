<template>
  <div>
    <navHeader @addTodo="addTodo"/>
    <navMain :list="list" @delTodo="delTodo"/>
    <navFooter :list="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import navHeader from '@/components/navHeader/Index.vue'
import navMain from '@/components/navMain/Index.vue'
import navFooter from '@/components/navFooter/Index.vue'
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  components: {
    navHeader,
    navMain,
    navFooter
  },
  setup(props, ctx) {
    // let num = ref(6)
    // let name = ref('James')
    // let data = reactive({
    //   name: 'James',
    //   num: 6
    // })
    let store = useStore()
    let addTodo = (taskText) => {
      if(taskText) {
        store.commit('addTodo', {
          taskText: taskText,
          completed: false
        })
      }
    }
    let delTodo = (index) => {
      store.commit('delTodo', index)
    }

    let list = computed(() => {
      return store.state.list
    })
    return {
      // num,
      // names,
      // ...toRefs(data)
      addTodo,
      delTodo,
      list
    }
  }
})


</script>
