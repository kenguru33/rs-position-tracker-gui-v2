<template>
  <v-flex mt-5>
  <vessel-list
    :vessels="vessels"
    :vesselStates="vesselStates"
    :vesselStateReasons="vesselStateReasons"
    @vesselSelectionChanged="setSelectedVessel($event)"
  >
  </vessel-list>
  </v-flex>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import VesselList from '@/components/VesselList.vue'

  let fetcherServiceID = null
  export default {
    components: {
      VesselList: VesselList
    },
    computed: {
      ...mapGetters('vesselStore', ['vessels', 'selectedVessel', 'vesselStates', 'vesselStateReasons']),
      ...mapGetters('stationStore', ['stations'])
    },
    methods: {
      ...mapActions('vesselStore', ['fetchVessels', 'setSelectedVessel']),
      ...mapActions('stationStore', ['fetchStations'])
    },
    created () {
      this.fetchVessels()
      this.fetchStations()
      fetcherServiceID = setInterval(() => {
        this.fetchVessels()
      }, 30000)
    },
    destroyed () {
      clearInterval(fetcherServiceID)
    }
  }
</script>
