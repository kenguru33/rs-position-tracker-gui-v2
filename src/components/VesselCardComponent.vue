<template>
  <v-list two-line subheader>
    <v-btn flat fab small right absolute @click="expanded=!expanded">
      <v-icon darken>{{icon}}</v-icon>
    </v-btn>
    <v-subheader>Kontaktinformasjon</v-subheader>
    <v-flex v-show="expanded">
      <slot></slot>
    </v-flex>
  </v-list>
</template>

<script>
  export default {
    name: 'vessel-card-component',
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>
