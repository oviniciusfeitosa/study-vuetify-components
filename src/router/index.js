import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MinhasTabs from '@/components/MinhasTabs'
import Axios from '@/components/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloRoute/:meutitulo',
      name: 'HelloRoute',
      component: HelloWorld
    },
    {
      path: '/rota-axios',
      name: 'TesteAxios',
      component: Axios
    },
    {
      path: '/tabs',
      name: 'Testando Tabs',
      component: MinhasTabs
    }
  ]
})
