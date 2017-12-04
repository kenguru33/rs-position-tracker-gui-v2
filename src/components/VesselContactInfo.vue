<template>
  <v-list two-line subheader>
    <v-btn fab small right absolute @click="expanded=!expanded">
      <v-icon darken>{{icon}}</v-icon>
    </v-btn>
    <v-subheader>Kontaktinformasjon</v-subheader>
    <v-flex v-show="expanded">
      <v-list-tile avatar>
        <v-list-tile icon>
          <v-icon>phone</v-icon>
        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Telefon</v-list-tile-title>
          <v-list-tile-sub-title>{{mobile}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile icon>
          <v-icon>mail</v-icon>
        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>E-post</v-list-tile-title>
          <v-list-tile-sub-title>{{email}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-flex>
  </v-list>
</template>

<script>
  export default {
    name: 'vessel-contact-info',
    props: ['mobile', 'email'],
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
