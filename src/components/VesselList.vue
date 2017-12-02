<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel, i) in vessels" :key="i"
                                     @click.native="vesselSelectionChanged(vessel)">
            <div slot="header">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-avatar>
                    <img :src="vessel.image_url" :style="{backgroundColor: vessel.state.color}"
                         class="stateIndicator"/>
                  </v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{vessel.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    <v-icon :style="{color: vessel.state.color}" class="stateBullet">lens</v-icon>
                    {{vessel.state.description}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>

            <v-flex xs12>
              <v-card>
                <v-card-media :src="vessel.image_url" height="250px">
                </v-card-media>

                <vessel-state-selector :vessel="vessel" :vesselStates="vesselStates" :vesselStateReasons="vesselStateReasons"></vessel-state-selector>

                <v-divider></v-divider>

                <vessel-position-info :vessel="vessel"></vessel-position-info>

                <v-divider></v-divider>

                <vessel-contact-info :vessel="vessel"></vessel-contact-info>

                <div class="pb-5 pa-3"></div>
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

  export default {
    components: {
      VesselContactInfo,
      VesselPositionInfo,
      VesselStateSelector},
    name: 'vessel-list',
    props: ['vessels', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        content: 'vessel',
        selectedVessel: null,
        state: '',
        reason: ''
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

<style>
  .vessel-image {
    height:250px;
  }
</style>
