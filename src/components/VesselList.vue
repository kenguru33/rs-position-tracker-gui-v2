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
                    <img :src="vessel.image_url" :style="{backgroundColor: vessel.state_color}"
                         class="stateIndicator"/>
                  </v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{vessel.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    <v-icon :style="{color: vessel.state_color}" class="stateBullet">lens</v-icon>
                    {{vessel.state_description}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
            <v-flex xs12>
              <v-card>
                <v-card-media :src="vessel.image_url" height="250px">
                </v-card-media>
                <v-card flat>
                  <v-card-text>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs12 md6 pr-3 pl-3>
                          <v-select
                            v-bind:items="stateDescriptions"
                            v-model="state"
                            v-bind:label="vessel.state_description"
                            single-line
                            item-text="state"
                            item-value="abbr"
                            return-object
                            hint="Endre fartøysstatus"
                            persistent-hint
                          ></v-select>
                        </v-flex>
                        <v-flex v-if="state!=='Operativ'"xs12 md6 pr-3 pl-3>
                          <v-select
                            v-bind:items="reasons"
                            v-model="reason"
                            v-bind:label="vessel.state_reason"
                            single-line
                            item-text="state"
                            item-value="abbr"
                            return-object
                            hint="Årsak"
                            persistent-hint
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-divider></v-divider>
                <v-list two-line subheader>
                  <v-subheader>Posisjonsdata</v-subheader>
                  <v-list-tile avatar>
                    <v-list-tile icon>
                      <v-icon>map</v-icon>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Posisjon</v-list-tile-title>
                      <v-list-tile-sub-title>lat: {{vessel.latitude}} lng: {{vessel.longitude}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile icon>
                      <v-icon>explore</v-icon>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Kurs og fart</v-list-tile-title>
                      <v-list-tile-sub-title>{{vessel.cog}}° / {{vessel.sog}} knop</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Sist oppdatert: {{vessel.time_stamp}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list two-line subheader>
                  <v-subheader>Kontaktinformasjon</v-subheader>
                  <v-list-tile avatar>
                    <v-list-tile icon>
                      <v-icon>phone</v-icon>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>+47 916 79 602</v-list-tile-title>
                      <v-list-tile-sub-title>Vakttelefon</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile icon>
                      <v-icon>mail</v-icon>
                    </v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>rs102@rs.no</v-list-tile-title>
                      <v-list-tile-sub-title>Send e-post til fartøyet</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <div class="pb-5"></div>
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
  export default {
    props: ['vessels', 'vesselStates'],
    data () {
      return {
        content: 'vessel',
        selectedVessel: null,
        state: '',
        reason: ''
      }
    },
    computed: {
      reasons () {
        return ['Ingen', 'Verksted', 'Bemanning']
      },
      stateDescriptions () {
        console.log(this.vesselStates)
        return this.vesselStates.map(state => {
          return state.state_description
        })
      }
    },
    methods: {
      vesselSelectionChanged (vessel) {
        this.$emit('vesselSelectionChanged', vessel)
      }
    }
  }
</script>

<style>
  .vessel-image {
    height:250px;
  }
</style>
