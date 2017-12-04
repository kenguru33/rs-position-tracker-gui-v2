<template>
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel, i) in vessels" :key="i"
                                     @click.native="vesselSelectionChanged(vessel)">
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

            <v-flex xs12>
              <v-card>
                <img class="vessel-image" :src="vessel.image_url">
                <!--v-card-media :src="vessel.image_url" height="250px">
                </v-card-media -->
                <!-- TODO - use expansion panel -->
                <vessel-state-selector
                  :stateDescription="vessel.state.description"
                  :stateReason="''"
                  :vesselStates="vesselStates"
                  :vesselStateReasons="vesselStateReasons"
                >
                </vessel-state-selector>

                <v-divider></v-divider>

                <v-flex mt-3>
                  <vessel-position-info
                    :lat="vessel.ais_data.latitude"
                    :lng="vessel.ais_data.longitude"
                    :timeStamp="vessel.ais_data.time_stamp"
                    :sog="vessel.ais_data.sog"
                    :cog="vessel.ais_data.cog"
                  >
                  </vessel-position-info>
                </v-flex>
                <v-divider></v-divider>
                <v-flex mt-3>
                  <vessel-contact-info
                    :mobile="vessel.mobile"
                    :email="vessel.email"
                  ></vessel-contact-info>
                </v-flex>
                <div class="pb-5 pa-2"></div>
                <v-bottom-nav absolute :value="true" :active.sync="content" color="transparent">
                  <v-btn flat color="teal" value="vessel">
                    <span>Fartøy</span>
                    <v-icon>info</v-icon>
                  </v-btn>
                  <v-btn flat color="teal" value="station">
                    <span>Stasjon</span>
                    <v-icon>place</v-icon>
                  </v-btn>
                  <v-btn flat color="teal" value="map">
                    <span>Kart</span>
                    <v-icon>map</v-icon>
                  </v-btn>
                </v-bottom-nav>
              </v-card>

            </v-flex>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VesselStateSelector from '@/components/VesselStateSelector'
  import VesselPositionInfo from '@/components/VesselPositionInfo'
  import VesselContactInfo from '@/components/VesselContactInfo'
  import VesselListHeader from '@/components/VesselListHeader'

  export default {
    components: {
      VesselListHeader,
      VesselContactInfo,
      VesselPositionInfo,
      VesselStateSelector
    },
    name: 'vessel-list',
    props: ['vessels', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        content: 'vessel',
        selectedVessel: null
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
    watch: {
      state: function (val) {
        console.log('state value changed', this.selectedVessel.name)
      }
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
