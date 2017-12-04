<template>
  <v-list two-line subheader>
    <v-btn fab small right absolute @click="expanded=!expanded">
      <v-icon>{{icon}}</v-icon>
    </v-btn>
    <v-subheader>
      Posisjonsdata
    </v-subheader>
    <v-flex v-show="expanded">
      <v-list-tile avatar>
        <v-list-tile icon>
          <v-icon>map</v-icon>
        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Posisjon</v-list-tile-title>
          <v-list-tile-sub-title>lat: {{lat}} lng: {{lng}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile icon>
          <v-icon>explore</v-icon>
        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Kurs og fart</v-list-tile-title>
          <v-list-tile-sub-title>{{cog}}° / {{sog}} knop</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title>Sist oppdatert: {{timeStamp}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-flex>
    </v-list>

</template>

<script>
  export default {
    name: 'vessel-position-info',
    props: ['lat', 'lng', 'timeStamp', 'cog', 'sog'],
    data: function () {
      return {
        expanded: true
      }
    },
    computed: {
      icon: function () {
        return this.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
      }
    }
  }
</script>

<style scoped>

</style>
