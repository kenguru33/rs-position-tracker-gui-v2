import Vue from 'vue'
import Router from 'vue-router'
import VesselList from '../components/VesselList'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: VesselList },
    { path: '/vessels', component: VesselList }

  ]
})
