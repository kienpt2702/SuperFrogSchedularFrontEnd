<template>

<div class="form-container">
    <h2 class="form-header">Request an appearance of SuperFrog</h2>
    <form @submit.prevent="submitForm">

      <div class="flex-container">
        <div class="flex-item">
          <label for="event-title">Event Title:</label>
          <input type="text" id="event-title" name="event-title">
        </div>

        <div class="flex-item">
          <label for="event-type">Event Type:</label>
            <select id="event-type" name="event-type">
              <option value="TCU">TCU</option>
              <option value="NONPROFIT">NONPROFIT</option>
              <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>
      </div>

      <label for="event-address">Event Address:</label>
      <input type="text" id="event-address" name="event-address">     
  
      <div class="flex-container">
        <div class="flex-item">
          <label for="event-date">Event Date:</label>
          <input type="date" id="event-date" name="event-date">
        </div>
        <div class="flex-item">
          <label for="event-start-time">Event Start Time:</label>
          <input type="time" id="event-start-time" name="event-start-time">
        </div>
        <div class="flex-item">
          <label for="event-end-time">Event End Time:</label>
          <input type="time" id="event-end-time" name="event-end-time">
        </div>
      </div>
  
      

      <label for="event-title">Event Mileage testing:</label>
      <input type="text" id="event-mileage" name="event-mileage">
  
      <label for="event-description">Event Description:</label>
      <textarea id="event-description" name="event-description" rows="5" cols="40"></textarea>


      <div class="flex-container">
        <div class="flex-item">
          <label for="customer-first-name">First Name:</label>
          <input type="text" id="customer-first-name" name="customer-first-name">
        </div>

        <div class="flex-item">
          <label for="customer-last-name">Last Name:</label>
          <input type="text" id="customer-last-name" name="customer-last-name">
        </div>

      </div>
  

      <div class="flex-container">
        <div class="flex-item">
          <label for="customer-email">Customer Email:</label>
          <input type="email" id="customer-email" name="customer-email">
        </div>

        <div class="flex-item">
          <label for="customer-phone">Customer Phone Number:</label>
          <input type="tel" id="customer-phone" name="customer-phone">
        </div>

      </div>
      
  
      <input type="submit" value="Submit">
    </form>
</div>

    <div class="backholder">
        <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
/*---------------------------------------------------------- */
    import axios from "axios";
export default {
  methods: {
    async submitForm() {
      // get the form data
      // const formData = new FormData(document.querySelector("form"));


      const requestData = {
        eventType: document.querySelector("#event-type").value,
        address: document.querySelector("#event-address").value,
        eventDate: document.querySelector("#event-date").value,
        startTime: document.querySelector("#event-start-time").value,
        endTime: document.querySelector("#event-end-time").value,
        mileage: document.querySelector("#event-mileage").value,
        eventTitle: document.querySelector("#event-title").value,
        customerFirstName: document.querySelector("#customer-first-name").value,
        customerLastName: document.querySelector("#customer-last-name").value,
        customerPhoneNumber: document.querySelector("#customer-phone").value,
        customerEmail: document.querySelector("#customer-email").value,
        eventDescription: document.querySelector("#event-description").value,
        status: "PENDING"
      };


      try {
        // send the form data to the API endpoint
        console.log(requestData);
        const response = await axios.post("http://localhost:8080/api/v1/requests", requestData);
        

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

<style>

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
    display: block; /* add this property */
}

/* Add a class for flex container */
.flex-container {
    display: flex;
    flex-wrap: wrap;
}

/* Add a class for flex items */
.flex-item {
    flex: 1;
    margin-right: 10px;
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
    margin-top: 10px;
    transition-duration: 0.4s;
  }

/* Change the color of the submit button on hover */
.form-container input[type=submit]:hover {
  background-color: #4D1979;
}

/* Style the form header */
.form-header {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 10px;
}

#event-type {
  width: 100%;
}

select {
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  display: block;
}

/*---------------------------------------------------------- */

    .backtext {
        font-size: 15px;
        font-weight: 200;
    }
    .backholder {
        border: 1.5px solid blue;
        border-radius: 15px;
        background-color: ghostwhite;
        display: grid;
        align-items: center;
        text-align: center;
        width: 170px;
        height: 50px;
        margin: 30px;
    }

    .backholder:hover {
        border: 1.5px solid orangered;
        background-color: blueviolet;   
        font-weight: 700;
    }
</style>