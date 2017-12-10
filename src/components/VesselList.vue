<template>
  <v-container pl-0 mt-1 pr-0>
    <div>
      Vessels number totol: {{vessels.length}}
    </div>
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
              :vesselStates="vesselStates"
              :vesselStateReasons="vesselStateReasons"
              :stateDescription="vessel.state.description"
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

  export default {
    components: {
      VesselCard,
      VesselListHeader
    },
    name: 'vessel-list',
    props: ['vessels', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        content: 'vessel',
        selectedVessel: {},
        isLoading: true
      }
    },
    computed: {
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
      vesselSelectionChanged (vessel) {
        this.selectedVessel = vessel
        this.$emit('vesselSelectionChanged', vessel)
      }
    },
    created: function () {
      console.log('vessel-list', 'created')
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
