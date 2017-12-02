<template>
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
</template>

<script>
  export default {
    name: 'vessel-contact-info',
    props: ['vessel']
  }
</script>

<style scoped>

</style>
