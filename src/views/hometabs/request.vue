<template>

<div class="form-container">
    <h1 class="form-header">Request an appearance of SuperFrog</h1>
    <form @keyup.enter.native="submitForm">
      <h2>Customer's personal contact information:</h2>
      <br/>
      <div class="flex-container">
        <div class="flex-item">
          <label for="customer-first-name">First Name:</label>
          <input type="text" id="customer-first-name" name="customer-first-name" required>
        </div>

        <div class="flex-item">
          <label for="customer-last-name">Last Name:</label>
          <input type="text" id="customer-last-name" name="customer-last-name" required>
        </div>
      </div>

      <div class="flex-container">
        <div class="flex-item">
          <label for="customer-email">Customer Email:</label>
          <input type="email" id="customer-email" name="customer-email" required>
        </div>

        <div class="flex-item">
          <label for="customer-phone">Customer Phone Number:</label>
          <input type="tel" id="customer-phone" name="customer-phone" required>
        </div>
      </div>
      <br/>

      <h2>Details of event:</h2>
      <br/>
      <div class="flex-container">
        <div class="flex-item">
          <label for="event-title">Event Title:</label>
          <input type="text" id="event-title" name="event-title" required> 
        </div>
        <div class="flex-item">
          <label for="event-type">Event Type:</label>
            <select id="event-type" name="event-type" required>
              <option value="TCU">TCU</option>
              <option value="NONPROFIT">NONPROFIT</option>
              <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <label for="event-date">Event Date:</label>
          <input type="date" id="event-date" name="event-date" required>
        </div>
        <div class="flex-item">
          <label for="event-start-time">Event Start Time:</label>
          <input type="time" id="event-start-time" name="event-start-time" required>
        </div>
        <div class="flex-item">
          <label for="event-end-time">Event End Time:</label>
          <input type="time" id="event-end-time" name="event-end-time" required>
        </div>
      </div>
      <label for="event-address">Event Address:</label>
      <input type="text" id="event-address" name="event-address" required>     
      <p style="font-size: 15px; color: red;">*Warning: Appearances are only available in the DFW area. If more than 2 miles from TCU, a $0.75 per mile transportation fee will be included in the appearance total.</p>
      <br/>

      <div class="flex-container">
        <div class="flex-item">
          <label for="event-description">Event Description:</label>
          <textarea id="event-description" name="event-description" rows="7" cols="20" required></textarea>
        </div>
        <div class="flex-item">
          <label for="special-instruction">Special Instruction</label>
          <textarea id="special-instruction" name="special-instruction" rows="7" cols="20" required></textarea>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <label for="other-org">List anyother outside organizations involved in sponsoring the event:</label>
          <textarea id="other-org" name="other-org" rows="7" cols="20" required></textarea>
        </div>
        <div class="flex-item">
          <label for="benefits">Describe any expenses or benefits to the Spirit Team members</label>
          <textarea id="benefits" name="benefits" rows="7" cols="20" required></textarea>
        </div>
      </div>

      <input type="submit" value="Submit" @click="submitForm">
    </form>
</div>

    <div class="backholder">
        <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from "axios";
export default {
  methods: {
    async submitForm() {
      // get the form data
      // const formData = new FormData(document.querySelector("form"));
      const requestData = {
        customerFirstName: document.querySelector("#customer-first-name").value,
        customerLastName: document.querySelector("#customer-last-name").value,
        customerPhoneNumber: document.querySelector("#customer-phone").value,
        customerEmail: document.querySelector("#customer-email").value,

        eventTitle: document.querySelector("#event-title").value,
        eventType: document.querySelector("#event-type").value,
        eventDate: document.querySelector("#event-date").value,
        startTime: document.querySelector("#event-start-time").value,
        endTime: document.querySelector("#event-end-time").value,
        address: document.querySelector("#event-address").value,
        specialInstruction: document.querySelector("#special-instruction").value,
        otherOrg: document.querySelector("#other-org").value,
        benefit: document.querySelector("#benefits").value,
        status: "PENDING"
      };


      try {
        // send the form data to the API endpoint
        console.log(requestData);
        const response = await axios.post("https://superfrogscheduler.up.railway.app/api/v1/requests", requestData);
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

label {
  font-weight: 300;
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