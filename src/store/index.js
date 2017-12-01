import Vue from 'vue'
import Vuex from 'vuex'
import { vesselStore } from './modules/vesselStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    vesselStore
  }
})
