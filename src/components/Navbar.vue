<script>
import cache from '@/utils/cacheUtils';
import { RouterLink } from 'vue-router';
import { logout } from '../utils/userLoginUtils';
var isLoggedIn = false;
export default {
    data() {
        return {
            isLoggedIn: (cache.get("login_token") != null),
        }
    },
    methods: {
        whenLogout: function() {
            logout();
        }
    }
}
</script>

<template>
  <nav class="navigation">
    <div v-if="isLoggedIn">
        <div class="imageHolder">
            <img src="../views/SuperFrogforLoginPage.jpg" alt="Image" class="image">
            <button @click="whenLogout">Logout</button>
        </div>
        
    </div> 
    <div v-else style="display: flex; justify-content: end;">
        <div class="loginNav">
          <RouterLink :to="{ name: 'login' }"><p class="login-text">Staff Login</p></RouterLink>
        </div>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
    .imageHolder {
        display: flex;
        justify-content: end;
    }
    .image {
        height: 80px;
        width: 80px;
        border-radius: 200px;
    }
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
