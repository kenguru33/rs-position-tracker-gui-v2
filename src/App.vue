<<template>
  <v-app>
    <v-toolbar fixed dark color="indigo darken-1">
      <v-toolbar-title class="white--text">RS-Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
    <!--<vessel-list :vessels="vessels" :vesselStates="vesselStates" :vesselStateReasons="vesselStateReasons" @vesselSelectionChanged="setSelectedVessel($event)" ></vessel-list>-->
  </v-app>
</template>

<script>

</script>

<style>

</style>
