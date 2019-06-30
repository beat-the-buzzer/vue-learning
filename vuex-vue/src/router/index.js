import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home/'
import Info from '@/pages/Info/Info/'
import About from '@/pages/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/info',
      name: 'Info',
      component: Info
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
