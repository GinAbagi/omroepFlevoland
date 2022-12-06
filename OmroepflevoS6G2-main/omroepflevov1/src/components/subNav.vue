/* eslint-disable */
<template>
<v-navigation-drawer>
        <v-list
          dense
          nav
        >
        <v-btn :to="'/StoryView/newstory'" class="py-2 button__width my-2">New story +</v-btn>
        <v-divider class="py-1"></v-divider>
           <v-list-item :to="'/StoryView/storiesview'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Stories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/StoryView/mediaview'">
          <v-list-item-icon>
            <v-icon>mdi-text-box-multiple-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Media</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/StoryView/listsview'"
        >
          <v-list-item-icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Lists</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="py-1"></v-divider>
        </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'subNav',
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>
<style scoped>
.button__width {
  width: 240px;
}
</style>
