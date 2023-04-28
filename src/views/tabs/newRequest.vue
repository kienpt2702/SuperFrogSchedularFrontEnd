<template>
  <div class="form-container">
    <h2 class="form-header">Event Registration Form</h2>
    <form @submit.prevent="submitForm">
      <label for="event-title">Event Title:</label>
      <input type="text" id="event-title" name="event-title">
  
      <label for="event-date">Event Date:</label>
      <input type="date" id="event-date" name="event-date">
  
      <label for="event-time">Event Time:</label>
      <input type="time" id="event-time" name="event-time">
  
      <label for="event-address">Event Address:</label>
      <input type="text" id="event-address" name="event-address">
  
      <label for="event-description">Event Description:</label>
      <textarea id="event-description" name="event-description" rows="5" cols="40"></textarea>
  
      <label for="customer-first-name">Customer First Name:</label>
      <input type="text" id="customer-first-name" name="customer-first-name">
  
      <label for="customer-last-name">Customer Last Name:</label>
      <input type="text" id="customer-last-name" name="customer-last-name">
  
      <label for="customer-email">Customer Email:</label>
      <input type="email" id="customer-email" name="customer-email">
  
      <label for="customer-phone">Customer Phone Number:</label>
      <input type="tel" id="customer-phone" name="customer-phone">
  
      <input type="submit" value="Submit">
    </form>
  </div>
  

</template>


<script>
import axios from "axios";
export default {
  methods: {
    async submitForm() {
      // get the form data
      const formData = new FormData(document.querySelector("form"));

      try {
        // send the form data to the API endpoint
        const response = await axios.post("http://localhost:8080/api/v1/requests", formData);
        console.log(formData);

        // handle the response
        if (response.status === 200) {
          alert("Form submitted successfully!");
          console.log(response.data);
        } else {
          alert("Form submission failed.");
          console.error(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};

</script>



<style lang="scss" scoped>
  /* Style the form container */
  .form-container {
    width: 80%;
    margin: 20px auto;
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
}

/* Style the form fields */
.form-container input[type=text],
.form-container input[type=date],
.form-container input[type=time],
.form-container input[type=email],
.form-container input[type=tel],
.form-container textarea {
    width: 100%;
    padding: 8px;
    margin: 4px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    font-size: 14px;
}

/* Style the form labels */
.form-container label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
}

/* Style the form submit button */
.form-container input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

/* Change the color of the submit button on hover */
.form-container input[type=submit]:hover {
    background-color: #45a049;
}

/* Style the form header */
.form-header {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 10px;
}



</style>


