<template>
  <v-list-tile avatar>

    <v-list-tile-avatar>
      <v-avatar>
        <img :src="imageUrl" :style="{backgroundColor: stateColor}"
             v-bind:class="[{showStateColoredImageBorder: showStateColoredImageBorder}]"/>
      </v-avatar>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title class="longText">{{name}}</v-list-tile-title>
      <v-list-tile-sub-title v-if="showState">
        <v-icon :style="{color: stateColor}" class="stateBullet">lens</v-icon>
        {{stateDescription}}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'vessel-list-header',
    props: {
      name: {
        type: String
      },
      stateDescription: {
        type: String
      },
      stateColor: {
        type: String
      },
      imageUrl: {
        type: String
      },
      showStateColoredImageBorder: {
        default: false,
        type: Boolean
      },
      showState: {
        default: false,
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  .stateColoredImageBorder {
    padding: 2px;
  }
  .stateBullet {
    margin-top: -2px;
    font-size: 14px;
  }

  @media (max-width: 374px) {
    .longText {
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  @media (min-width: 375px) and (max-width: 400px) {
    .longText {
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

</style>
