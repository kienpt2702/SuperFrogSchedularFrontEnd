<script>
import { ElButton } from 'element-plus';
import ElIcon from 'element-plus';
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
      mainLinks: [
        { name: 'price', title: 'Price' },
        { name: 'range', title: 'Range' },
        { name: 'request', title: 'Request' },
        { name: 'modifyarequest', title: 'Modify A Request' },
      ]
    }
  },
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
      <div class="header">
        <h1>SuperFrog Scheduler</h1>
        <div class="desc">
        <p>Add TCU Spirit to your event 
          <br> Request SuperFrog, TCU Cheerleaders, & Showgirls to your wedding, grad party,  and more!
        </p>
        <p></p>
        </div>
        <div>
          <img src="./SuperFrog.jpg" alt="Image" class="ima">
        </div>
      </div>

      <!-- <div class="button-container">
        <div v-for="(link, index) of mainLinks" style="display: inline;" :key="index" @click="push(link)">
          <el-button class="button1" style="width: 200px; height: 100px; border-radius: 50px;">
            <el-icon style="font-size: 60px; font-weight: bolder;">
              <Money />
            </el-icon><br>
            <p class="button-text">{{ link.title }}</p>
          </el-button>
        </div>
        
        <main>
          <RouterView />
        </main>
      </div> -->
      

      <div class="buttons">
        <div class="button-container">
          <el-button class="button1" style="width: 200px; height: 100px; border-radius: 50px; display: block;">
            <el-icon style="font-size: 65px; font-weight: bolder;">
              <Money />
            </el-icon>
          </el-button>
            <p class="button-text">Pricing</p>
        </div>

        <div class="button-container">
          <el-button class="button2 banner" style="width: 200px; height: 100px; border-radius: 50px;"> 
            <el-icon style="font-size: 65px; font-weight: bolder;">
              <Wallet />
            </el-icon> 
          </el-button>
          <span class="button-text">Range</span>
        </div>

        <div class="button-container">
          <el-button class="button3" style="width: 200px; height: 100px; border-radius: 50px;" >
            <el-icon style="font-size: 65px; font-weight: bolder;">
              <Calendar />
            </el-icon>
          </el-button>
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
  }
  .header {
    position: relative;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white; 
  }
  .desc{
    width:50%;
  }
  .ima {
    position: absolute;
    top: 10px;
    right: 25px;
    max-width: 25%;
    height: 250px;
    width: 250px;
    border-radius: 200px;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
      margin: 30px;
      margin-top: 150px;
      padding: 20px;
      width: 150px;
      height: 100px;
      border: none;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      color: white;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
  }
  .button-container {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
  .button-text {
    font-size: 16px;
    font-family: Arial Black, sans-serif;
    color: white;
    text-align: center;
    max-width: 200px; 
  }
  </style>