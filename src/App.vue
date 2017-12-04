<<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <vessel-list :vessels="vessels" :vesselStates="vesselStates" :vesselStateReasons="vesselStateReasons" @vesselSelectionChanged="setSelectedVessel($event)" ></vessel-list>
  </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import VesselList from '@/components/VesselList.vue'
export default {
  components: {
    VesselList
  },
  computed: {
    ...mapGetters('vesselStore', ['vessels', 'selectedVessel', 'vesselStates', 'vesselStateReasons'])
  },
  methods: {
    ...mapActions('vesselStore', ['fetchVessels', 'setSelectedVessel'])
  },
  created () {
    this.fetchVessels()
    setInterval(() => {
      this.fetchVessels()
    }, 30000)
  }
}
</script>

<style>

</style>
