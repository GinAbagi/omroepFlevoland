/* eslint-disable */
<template>
    <v-navigation-drawer

        :color="color"
        :mini-variant= true
        :permanent="permanent"
        :src="bg"
      >
        <v-list
          dense
          nav
          class="py-0"
        >
           <v-list-item :to="'/homeView'"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/StoryView'"
        >
          <v-list-item-icon>
            <v-icon>mdi-text-box-multiple-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Story's</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/'"
        >
          <v-list-item-icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Add story</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>
