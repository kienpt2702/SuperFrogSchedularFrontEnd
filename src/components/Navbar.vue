<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation">
    <div style="display: flex; justify-content: end;">
        <div class="loginNav">
          <RouterLink :to="{ name: 'login' }"><p class="login-text">Staff Login</p></RouterLink>
        </div>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
    width: 100%;
  background-color: #501c7c;
}

.loginNav {
    display: flex;
    justify-content: end;
    padding: 15px;
  }
  .login-text {
    color: white;
    font-size: 27px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
