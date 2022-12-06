<template>
<v-app>
  <div class="d-flex flex-row main__index" height="full">
  <navbar>
  </navbar>
    <v-main>
      <router-view/>
    </v-main>
  </div>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'App',

  data: () => ({
  }),
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.main__index {
  height: 100vh;
}

</style>
