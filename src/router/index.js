import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MinhasTabs from '@/components/MinhasTabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloRoute/:meutitulo',
      name: 'HelloRoute',
      component: HelloWorld
    },
    {
      path: '/tabs',
      name: 'Testando Tabs',
      component: MinhasTabs
    }
  ]
})
