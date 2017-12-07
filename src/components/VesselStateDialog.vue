<template>
  <v-dialog v-model="show" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Endre Fartøystilstand</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-select
                :items="states"
                v-model="vessel.state.description"
                label="Velg tilstand"
                single-line
                bottom
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="show = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="show = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'vessel-state-dialog',
    props: {
      vessel: {
        type: Object
      },
      states: {
        type: Array
      },
      stateReasons: {
        type: Array
      },
      show: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>

</style>
