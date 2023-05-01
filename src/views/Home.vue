<script>
import { ElButton } from 'element-plus';
import ElIcon from 'element-plus';
import { RouterLink } from 'vue-router';
// import { eventBus } from './eventBus.js';
export default {
  data() {
    return {
      mainLinks: [
        { name: 'price', title: 'Price' },
        { name: 'range', title: 'Range' },
        { name: 'request', title: 'Request' },
        { name: 'modifyarequest', title: 'Modify A Request' },
      ],
      loggedIn: false,
    }
  },
  // mounted() {
  //   eventBus.$on('loggedIn', value => {
  //     this.loggedIn = value;
  //   });
  // },
  methods: {
    // simulate router-link's "to" functionality
    push(link) {
      this.$router.push({ name: link.name });
      // router.go(-1)
    },
  }
}
</script>

<template>
    <div class="homepage">
      <div style="display: flex; justify-content: end;">
        <div class="loginNav">
          <RouterLink :to="{ name: 'login' }"><p class="login-text">Staff Login</p></RouterLink>
        </div>
      </div>
      
      <div class="header">
        <h1 class="title">SuperFrog Scheduler</h1>
        <div class="desc">
          <p>Add TCU Spirit to your event 
            <br> Request SuperFrog, TCU Cheerleaders, & Showgirls to your wedding, grad party,  and more!
          </p>
        </div>
        <div>
          <img src="./SuperFrog.jpg" alt="Image" class="ima">
        </div>
      </div>

      <div class="buttons">
        <div class="button-container">
          <RouterLink :to="{ name: 'price' }">
            <el-button class="button1" style="width: 200px; height: 100px; border-radius: 50px; display: block;">
              <el-icon style="font-size: 65px; font-weight: bolder;">
                <Money />
              </el-icon>
            </el-button>
          </RouterLink>
          <p class="button-text">Pricing</p>
        </div>

        <div class="button-container">
          <RouterLink :to="{ name: 'range' }">
            <el-button class="button2" style="width: 200px; height: 100px; border-radius: 50px;"> 
              <el-icon style="font-size: 65px; font-weight: bolder;">
                <Wallet />
              </el-icon> 
            </el-button>
          </RouterLink>
          <span class="button-text">Range</span>
        </div>

        <div class="button-container">
          <RouterLink :to="{ name: 'request' }">
          <el-button class="button3" style="width: 200px; height: 100px; border-radius: 50px;" >
            <el-icon style="font-size: 65px; font-weight: bolder;">
              <Calendar />
            </el-icon>
          </el-button>
          </RouterLink>
          <span class="button-text">Request</span>
        </div>

        <div class="button-container">
          <el-button class="button4" style="width: 200px; height: 100px; border-radius: 50px;">
            <el-icon style="font-size: 65px; font-weight: bolder;">
              <EditPen />
            </el-icon>
          </el-button>
            <span class="button-text">Modify a Request</span>
        </div>
      </div>

      <!-- <div>
        <div v-if="loggedIn">
          <p style="color: aqua">Welcome, Drake Do!</p>
        </div>
        <div  v-else style="display: flex; justify-content: center; margin-top: 50px;">
          <RouterLink :to="{ name: 'login' }"><p class="login-text">Staff Login here!</p></RouterLink>
        </div>
      </div> -->
    </div>
  </template>
  
  <style>
  * {
      margin: 0;
  }
  html, body {
    height: 100%;
  }
  #homepage {
    width: 100%;
    height: 100%;
  }
  .homepage {
    font-family: Arial Black, sans-serif;
    background-color: #501c7c;
    height: 100%;
    padding: 20px;
    top:0;
    left: 0;

    flex-wrap: wrap;
  }
  .header {
    position: relative;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white; 
  }

  .loginNav {
    display: flex;
    justify-content: end;
    padding: 15px;
  }

  .title {
    margin-top: 0; 
    padding-left: 15px; 
    margin-bottom: 10px;
  }

  .desc{
    width:50%;
    padding-left: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-style: italic;
  }
  .ima {
    position: absolute;
    top: 10px;
    right: 80px;
    max-width: 25%;
    height: 270px;
    width: 270px;
    border-radius: 200px;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
  }
  .button-container {
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  .button-text {
    font-size: 16px;
    font-family: Arial Black, sans-serif;
    color: white;
    text-align: center;
    max-width: 200px; 
  }
  .login-text {
    color: white;
    font-size: 27px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .login-text:hover {
    color: aqua;
    text-decoration: underline;
  }
  </style>