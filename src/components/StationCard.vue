<template>
    <div>
      <div v-for="station in stations">
        {{station.name}}
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'station-card',
    computed: {
      ...mapGetters('stationStore', ['stations'])
    }
  }
</script>

<style scoped>

</style>
