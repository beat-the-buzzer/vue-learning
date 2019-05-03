import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/pages/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoList
    }
  ]
})
