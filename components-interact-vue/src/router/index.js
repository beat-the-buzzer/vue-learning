import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import Father2child from '@/pages/Father2child/Father2child'
import Child2father from '@/pages/Child2father/Child2father';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Father2child',
      component: Father2child
    }, {
      path: '/father2child',
      name: 'Father2child',
      component: Father2child
    }, {
      path: '/child2father',
      name: 'Child2father',
      component: Child2father
    }
  ]
})
