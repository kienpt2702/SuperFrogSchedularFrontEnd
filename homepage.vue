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
      <img class="ima" src="./assets/SuperFrog.jpg" alt="Image">
    </div>
    <div class="buttons">
      <div class="button-container">
        <button class="button1"></button>
        <span class="button-text">Pricing</span>
      </div>
      <div class="button-container">
        <button class="button2"></button>
        <span class="button-text">Range</span>
      </div>
      <div class="button-container">
        <button class="button3"></button>
        <span class="button-text">Request</span>
      </div>
      <div class="button-container">
        <button class="button4"></button>
        <span class="button-text">Modify a Request</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>

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
    top: 0;
    right: 0;
    max-width: 25%;
    height: auto;
    object-fit: c;
    border-radius: 50%;
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

.button1 {
  background-image: url('./images/pricing.png');
}
.button2 {
  background-image: url('./images/range.png');
}
.button3 {
  background-image: url('./images/Request.png');
}
.button4 {
  background-image: url('./images/Edit.png');
}

.button-text {
  font-size: 16px;
  font-family: Arial Black, sans-serif;
  color: white;
  margin-top: 5px;
  text-align: center;
  max-width: 200px; 
}
</style>

