import {fetchVessels, vesselStates, vesselStateReasons} from '../../lib/feed-adapter'

export const vesselStore = {
  namespaced: true,
  state: {
    vessels: [],
    selectedVessel: {},
    vesselStates: vesselStates,
    vesselStateReasons: vesselStateReasons
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
    },
    vesselStateReasons: state => {
      return vesselStateReasons
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
    },
    setVesselState: (context, vessel) => {
      // simulate state update
      setTimeout((vessel) => {
        console.log('state updated')
      }, 1000)
    }
  }
}
