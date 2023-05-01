<script>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>404, page not found!</div>

  <div class="backholder">
    <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .backtext {
        font-size: 15px;
        font-weight: bold;
    }
    .backholder {
        background-color: ghostwhite;
        display: grid;
        align-items: center;
        text-align: center;
        width: 170px;
        height: 50px;
        margin: 30px;
    }

    .backholder:hover {
        background-color: aqua;
    }
</style>
