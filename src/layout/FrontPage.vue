<script>
import Navigation from '@/components/Navigation.vue';
import { RouterView } from 'vue-router';
export default {
  components: { Navigation },
};
</script>

<template>
  <Navigation class="navigation"></Navigation>
  <div class="front-view">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
}
.front-view {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>
