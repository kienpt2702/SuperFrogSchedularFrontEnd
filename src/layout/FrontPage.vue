<script>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
export default {
  components: { Navbar },
};
</script>

<template>
  <!-- <Navbar class="navigation"></Navbar> -->
  <div class="front-view">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  margin-top: 20px;
}
.front-view {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>
