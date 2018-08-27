import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloRoute/:meutitulo',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
