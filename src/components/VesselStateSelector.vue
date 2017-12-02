<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid pt-0 mt-0>
        <v-layout row wrap>
          <v-flex xs12 md6 pr-3 pl-3>
            <v-select
              v-bind:items="vesselStateDescriptions"
              v-model="state"
              v-bind:label="vessel.state.description"
              single-line
              item-text="state"
              item-value="abbr"
              return-object
              hint="Endre fartøysstatus"
              persistent-hint
            ></v-select>
          </v-flex>
          <v-flex xs12 md6 pr-3 pl-3>
            <v-select
              v-bind:items="vesselStateReasons"
              v-model="reason"
              v-bind:label="vessel.state.reason"
              single-line
              item-text="state"
              item-value="abbr"
              return-object
              hint="Årsak"
              persistent-hint
            ></v-select>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn fab small color="pink">
              <v-icon>save</v-icon>
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
    props: ['vessel', 'vesselStates', 'vesselStateReasons'],
    data: function () {
      return {
        state: '',
        reason: ''
      }
    },
    computed: {
      vesselStateDescriptions: function () {
        return this.vesselStates.map(state => {
          return state.description
        })
      }
    }
  }
</script>

<style scoped>

</style>
