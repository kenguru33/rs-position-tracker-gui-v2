<template>
  <v-card class="grey lighten-3">
    <v-card-media
      class="white--text"
      height="200px"
      :src="vessel.image_url"
    >
    </v-card-media>
    <v-container fluid ma-0 pa-0>
      <v-layout row nowrap>
        <v-flex xs12>
          <v-list three-line>
            <v-subheader>Fartøysstatus
              <v-spacer></v-spacer>
              <v-btn flat fab small @click="editVesselStateClicked">
                <v-icon small>edit</v-icon>
              </v-btn>
            </v-subheader>


              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-icon :style="{color: vessel.state.color}">flag</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{vessel.state.description}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title v-if="isOperative">
                    lat: {{vessel.ais_data.latitude}} - lng: {{vessel.ais_data.longitude}}<br>
                    SOG: {{vessel.ais_data.sog}} knop &nbsp
                    COG: {{vessel.ais_data.cog}}°
                  </v-list-tile-sub-title>
                  <v-list-tile-sub-title v-if="!isOperative">
                    {{vessel.state.reason.description || 'Årsak ikke gitt'}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile avatar v-if="!isOperative">
                <v-list-tile-avatar>
                  <v-icon color="blue-grey darken-1">date_range</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Forventet tilbake...</v-list-tile-title>
                  <v-list-tile-sub-title>21. mars 2017 kl. 21:00</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile avatar v-if="isOperative">
                <v-list-tile-avatar>
                  <v-icon color="amber darken-2">location_on</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{vessel.station.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{vessel.station.region}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-icon color="blue darken-1">insert_comment</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Merknader</v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{vessel.state.note}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

            <v-flex xs12 caption pl-4 pt-2 grey--text>
              Sist oppdatert: {{new Date(vessel.ais_data.time_stamp).toLocaleString()}}
            </v-flex>

          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import VesselStateDialog from './VesselStateDialog.vue'

  export default {
    components: {
      VesselStateDialog
    },
    name: 'vessel-card',
    props: ['vessel'],
    data: function () {
      return {
      }
    },
    computed: {
      isOperative: function () {
        return this.vessel.state.id < 3
      }
    },
    methods: {
      editVesselStateClicked: function () {
        this.$emit('editVesselStateClicked', this.vessel)
      }
    }
  }
</script>

<style scoped>
</style>
