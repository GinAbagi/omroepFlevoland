<template>
<div class="d-flex flex-row main__index">
  <sub-nav></sub-nav>
  <router-view/>
</div>

</template>

<script>
import subNav from '../components/subNav.vue';

export default {
  name: 'StoryView',
  components: {
    subNav,
  },
};
</script>

<style scoped>
.main__index {
  height: 100vh;
}
</style>
