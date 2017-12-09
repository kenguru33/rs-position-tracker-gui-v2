import Vue from 'vue'
import Router from 'vue-router'
import VesselView from '../components/VesselView'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: VesselView },
    { path: '/vessels', component: VesselView }

  ]
})
