import {fetchStations} from '../../lib/feed-adapter'

export const stationStore = {
  namespaced: true,
  state: {
    stations: []
  },
  getters: {
    stations: state => {
      return state.stations
    }
  },
  mutations: {
    fetchStations: (state, stations) => {
      state.stations = stations
    }
  },
  actions: {
    fetchStations: context => {
      fetchStations().then(stations => {
        context.commit('fetchStations', stations)
      })
    }
  }
}
