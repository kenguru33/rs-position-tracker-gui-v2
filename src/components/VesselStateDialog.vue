<template>
  <v-card color="secondary" flat>
    <v-toolbar dark flat>
      <v-icon color="green" left>lens</v-icon>
      <v-toolbar-title>Endre tilstand</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-container fluid pt-0 pb-0>
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
              v-bind:items="states"
              v-model="newStateReason"
              dark
              label="Årsak"
              item-value="text"
              hint="beskrivelse inn her"
              prepend-icon="error"
            ></v-select>
          </v-flex>

          <v-layout row xs12 wrap>
            <v-flex xs7>
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
                  label="Forventet tilbake"
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

          <v-flex xs5>
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
                label=""
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
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
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
    props: ['vessel', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        newState: '',
        newStateReason: '',
        newStation: '',
        newDate: null,
        newTime: null,
        modalDate: false,
        modalTime: false
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
    }
  }
</script>

<style scoped>

</style>
