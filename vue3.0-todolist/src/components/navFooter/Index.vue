<template>
  <div>已完成{{ completedNum }} / 全部 {{ total }}</div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'navFooter',
  props: {
    list: {
      type: Array,
      default: []
    },
  },
  setup(props, ctx) {
    let total = computed(() => {
      return props.list.length
    })
    let completedNum = computed(() => {
      return props.list.filter(v => v.completed).length
    })

    return {
      completedNum,
      total
    }
  }
})
</script>
