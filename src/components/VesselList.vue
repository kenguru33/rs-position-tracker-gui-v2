<template>
  <v-container pl-0 mt-1 pr-0>
    <v-layout row nowrap>
      <v-flex xs12 lg6>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel, mmsi) in vessels" :key="vessel.mmsi">
            <div slot="header">
              <vessel-list-header
                :name="vessel.name"
                :imageUrl="vessel.image_url"
                :stateDescription="vessel.state.description"
                :stateColor="vessel.state.color"
                :showState="true"
              >
              </vessel-list-header>
            </div>
            <vessel-card
              :vessel="vessel"
              @editVesselStateClicked="showVesselStateEditDialog"
            >
            </vessel-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VesselListHeader from '@/components/VesselListHeader'
  import VesselCard from '@/components/VesselCard'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      VesselCard,
      VesselListHeader
    },
    name: 'vessel-list',
    fetcherServiceID: null,
    data: function () {
      return {
      }
    },
    computed: {
      ...mapGetters('vesselStore', ['vessels', 'selectedVessel', 'vesselStates', 'vesselStateReasons']),
      ...mapGetters('stationStore', ['stations']),
      vesselStateDescriptions () {
        return this.vesselStates.map(state => {
          return state.description
        })
      },
      showReason () {
        if (this.state === '30min Beredskap') {
          this.reason = null
          return false
        }
        if ((this.state === 'Operativ')) {
          this.reason = null
          return false
        }
        return true
      }
    },
    methods: {
      ...mapActions('vesselStore', ['fetchVessels', 'setSelectedVessel']),
      ...mapActions('stationStore', ['fetchStations']),
      vesselSelectionChanged (vessel) {
        this.selectedVessel = vessel
        this.$emit('vesselSelectionChanged', vessel)
      },
      showVesselStateEditDialog () {
        console.log('kokokok')
      }
    },
    created () {
      this.fetchVessels()
      this.fetchStations()
      this.fetcherServiceID = setInterval(() => {
        this.fetchVessels()
      }, 300000)
    },
    destroyed () {
      clearInterval(this.fetcherServiceID)
    }
  }
</script>

<style scoped>


  @media (max-width: 599px) {
    .vessel-image {
      width: 100%;
      height: 200px
    }
  }

  @media (min-width: 600px) and (max-width: 959px) {
    .vessel-image {
      width: 100%;
      height: 300px
    }
  }

  @media (min-width: 960px) and (max-width: 1263px) {
    .vessel-image {
      width: 100%;
      height: 350px
    }
  }
  @media (min-width: 1264px) and (max-width: 1903px) {
    .vessel-image {
      width: 100%;
      height: 450px
    }
  }

  @media (min-width: 1904px) {
    .vessel-image {
      width: 100%;
      height: 550px
    }
  }

</style>
