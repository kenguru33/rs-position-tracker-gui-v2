<template>
  <v-card flat>
    <v-flex pt-3 pb-2>
    <v-btn fab small right absolute @click="expanded=!expanded">
      <v-icon>{{icon}}</v-icon>
    </v-btn>
    <v-subheader>
      Fartøysstatus
    </v-subheader>
    </v-flex>
    <v-card-text v-show="expanded" mb-4>
      <v-container fluid pt-0 mt-0>
        <v-layout row wrap>
          <v-flex xs12 md6 pr-3 pl-3>
            <v-select
              v-bind:items="vesselStateDescriptions"
              v-model="newState"
              v-bind:label="stateDescription"
              single-line

              item-value="abbr"
              return-object
              hint="Endre fartøysstatus"
              persistent-hint
            ></v-select>
          </v-flex>
          <v-flex xs12 md6 pr-3 pl-3>
            <v-select
              v-bind:items="vesselStateReasons"
              v-model="newReason"
              v-bind:label="stateReason"
              single-line
              item-text="state"
              item-value="abbr"
              return-object
              hint="Årsak"
              persistent-hint
            ></v-select>
          </v-flex>
          <v-flex v-show="showButtons">
          <v-btn
            color="red"
            dark
            top
            left
            small
            absolute
          >
            <v-icon left>save</v-icon>
            Oppdater Status
          </v-btn>
          <v-btn
            color="green"
            dark
            top
            right
            small
            absolute
          >
            <v-icon left>cancel</v-icon>
            Avbryt
          </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'vessel-state-selector',
    props: ['stateDescription', 'stateReason', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        newState: '',
        newReason: '',
        showButtons: false,
        expanded: true
      }
    },
    computed: {
      vesselStateDescriptions: function () {
        return this.vesselStates.map(state => {
          return state.description
        })
      },
      icon: function () {
        return this.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
      }
    },
    watch: {
      newState: function () {
        this.showButtons = this.newState !== this.stateDescription
      }
    }
  }
</script>

<style scoped>

</style>
