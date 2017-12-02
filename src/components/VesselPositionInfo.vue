<template>
  <v-list two-line subheader>
    <v-subheader>Posisjonsdata</v-subheader>
    <v-list-tile avatar>
      <v-list-tile icon>
        <v-icon>map</v-icon>
      </v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Posisjon</v-list-tile-title>
        <v-list-tile-sub-title>lat: {{vessel.ais_data.latitude}} lng: {{vessel.ais_data.longitude}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile avatar>
      <v-list-tile icon>
        <v-icon>explore</v-icon>
      </v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Kurs og fart</v-list-tile-title>
        <v-list-tile-sub-title>{{vessel.ais_data.cog}}° / {{vessel.ais_data.sog}} knop</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile avatar>
      <v-list-tile-content>
        <v-list-tile-sub-title>Sist oppdatert: {{vessel.ais_data.time_stamp}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'vessel-position-info',
    props: ['vessel']
  }
</script>

<style scoped>

</style>
