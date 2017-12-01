import fetchVessels from '../../lib/json-vessel-feed'
import {vesselStates} from '../../lib/vessel-states'
export const vesselStore = {
  namespaced: true,
  state: {
    vessels: [],
    selectedVessel: null,
    vesselStates: vesselStates
  },
  getters: {
    vessels: state => {
      return state.vessels
    },
    aisData: state => {
      return state.aisData
    },
    selectedVessel: state => {
      return state.selectedVessel
    },
    vesselStates: state => {
      return vesselStates
    }
  },
  mutations: {
    fetchVessels: (state, vessels) => {
      state.vessels = vessels
    },
    setSelectedVessel: (state, vessel) => {
      state.selectedVessel = vessel
    }
  },
  actions: {
    fetchVessels: context => {
      fetchVessels().then(vessels => {
        context.commit('fetchVessels', vessels)
      })
    },
    setSelectedVessel: (context, vessel) => {
      context.commit('setSelectedVessel', vessel)
    }
  }
}
