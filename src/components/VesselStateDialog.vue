<template>
  <v-card color="secondary" flat>
    <v-toolbar flat style="flex: 0 0 auto;" dark>
        <v-btn icon @click="closeDialog()">
          <v-icon>close</v-icon>
        </v-btn>
      <v-icon :style="{color: newStateColor}" left>lens</v-icon>
      <v-toolbar-title>{{vessel.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn dark flat @click.native="saveState()">Lagre</v-btn>
    </v-toolbar>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-select
              v-bind:items="states"
              v-model="newState"
              dark
              label="Tilstand"
              item-value="text"
              hint="beskrivelse inn her"
              prepend-icon="flag"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-select
              v-bind:items="vesselStateReasons"
              v-model="newStateReason"
              dark
              label="Årsak"
              item-value="text"
              hint="beskrivelse inn her"
              prepend-icon="error"
            ></v-select>
          </v-flex>
          <v-layout row xs12 wrap>
            <v-flex xs12>
              <v-checkbox v-bind:label="'Sett forventet tilbake tid'" v-model="expectedBack" dark></v-checkbox>
            </v-flex>
            <v-flex xs6>
              <v-dialog
                :close-on-content-click="false"
                v-model="modalDate"
                lazy
                dark
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  label="Dato"
                  v-model="newDate"
                  prepend-icon="event"
                  dark
                  readonly
                ></v-text-field>
                <v-date-picker v-model="newDate" scrollable actions>
                  <template slot-scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-dialog>
            </v-flex>

          <v-flex xs6>
            <v-menu
              lazy
              :close-on-content-click="false"
              v-model="modalTime"
              transition="scale-transition"
              offset-y
              full-width
              dark
              width="290px"
            >
              <v-text-field
                slot="activator"
                label="Klokkeslett"
                v-model="newTime"
                prepend-icon="access_time"
                readonly
                dark
              ></v-text-field>
              <v-time-picker v-model="newTime" autosave></v-time-picker>
            </v-menu>
          </v-flex>
          </v-layout>

          <v-flex xs12>
            <v-select
              v-bind:items="['Farsund', 'Svolvær', 'Skjærhalden']"
              v-model="newStation"
              dark
              label="Stasjon"
              item-value="text"
              hint="lands-region"
              persistent-hint
              autocomplete
              prepend-icon="places"
            ></v-select>
          </v-flex>
          <v-flex xs12 mt-4>
            <v-text-field
              name="input-marks"
              label="Merknader"
              :value="newComment"
              multi-line
              dark
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'vessel-state-dialog',
    props: ['vessel', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        newState: this.vessel.state.description,
        newStateColor: this.vessel.state.color,
        newStateReason: this.vessel.state.reason,
        newStation: this.vessel.station.name,
        newComment: 'Ingen merknader',
        newDate: null,
        newTime: null,
        modalDate: false,
        modalTime: false,
        expectedBack: false
      }
    },
    computed: {
      states: function () {
        return this.vesselStates.map(vesselState => {
          return vesselState.description
        })
      },
      stateReasons: function () {
        return this.vesselStates.map(vesselState => {
          return vesselState.reason
        })
      }
    },
    methods: {
      saveState () {
        console.log(this.vessel.rs)
        this.vessel.state.description = this.newState
        this.vessel.state.color = this.newStateColor
        this.vessel.state.reason = this.newStateReason
      },
      closeDialog () {
        this.$emit('closeDialog')
        this.resetDialog()
      },
      resetDialog () {
        this.newState = this.vessel.state.description
        this.newStateColor = this.vessel.state.color
        this.newStateReason = this.vessel.state.reason
        this.newStation = this.vessel.station.name
        this.newComment = 'Ingen merknader'
        this.newDate = null
        this.newTime = null
        this.modalDate = false
        this.modalTime = false
        this.expectedBack = false
      }
    },
    created: function () {
      console.log(this.name, 'created')
    }
  }
</script>

<style scoped>

</style>
