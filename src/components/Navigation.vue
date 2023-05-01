<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation">
    <!-- This version will make changing path of a view easier -->
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <!--
    <RouterLink
      :to="{ name: 'articles' }"
      :class="{ 'router-link-exact-active': $route.path.includes('articles') }"
      >Articles
    </RouterLink>
    <RouterLink
      :to="{ name: 'users' }"
      :class="{ 'router-link-exact-active': $route.path.includes('users') }"
      >Users</RouterLink
    >
    -->
    <RouterLink :to="{ name: 'director' }">Director Page</RouterLink>
    <RouterLink :to="{ name: 'superfrogstudent' }">Director Page</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  a {
    background-color: #fff; // inactive route-lin is white
    text-decoration: none;
    padding: 5px 10px;
    color: #333;
    font-weight: bold;
  }
}
</style>
