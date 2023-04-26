<template>
  <div class="box box1">
    <input type="text" id="input" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">First Name</label>
  </div>

  <div class="box box1">
    <input type="text" id="input" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">Last Name</label>
  </div>

  <div class="box box1">
    <input type="number" id="input" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">Phone Number</label>
  </div>

  <div class="box box1">
    <input type="email" id="input" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">Email</label>
  </div>

  <div class="box box1">
    <input type="text" id="input" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">Physical Address</label>
  </div>

  <div class="submit">
      <a href="" id="submit">Submit</a>
  </div>

  <div>
    <el-button>Click Here</el-button>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    display: inline-block;
    margin: 30px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
  }

  .submit {
    display: flex;
    justify-content: right;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  #submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: #561496;
    color: white;
    border-radius: 20px;
  }

  #input {
    width: 350px;
  }

  .box1 {
    position: relative;
  }

  .input1 {
    padding: 10px;
    background: #8312A5;
    border-radius: 5px;
    outline: none;
    color: #f5f5f5;
    border: 1px solid #3c1351;
  }

  .placeholder {
    position: absolute;
    top: 10px;
    left: 8px;
    font-size: 14px;
    color: #f5f5f5;
    padding: 0px 5px;
    transition: 0.3s;
    pointer-events: none;
  }

  .input1:focus + .placeholder, .input1:not(:placeholder-shown) + .placeholder {
    top: -12px;
    border: 0.5px solid #3c1351;
    background-color: #8312A5;
    .input1 ::placeholder {
      content: "Lener";
    }
  }

</style>
