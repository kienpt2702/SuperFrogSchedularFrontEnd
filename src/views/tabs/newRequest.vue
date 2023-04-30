<template>

  
  <div class="form-container">
    <h2 class="form-header">Event Registration Form</h2>
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
          <label for="event-city">City:</label>
          <input type="text" id="event-city" name="event-city">
        </div>
        <div class="flex-item">
          <label for="event-state">State:</label>
          <input type="text" id="event-state" name="event-state">
        </div>
        <div class="flex-item">
          <label for="event-zipcode">Zip Code:</label>
          <input type="text" id="event-zipcode" name="event-zipcode">
        </div>
      </div>

      
  
      
  
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
  
  
      <label for="event-description">Event Description:</label>
      <textarea id="event-description" name="event-description" rows="5" cols="40"></textarea>


      <div class="flex-container">
        <div class="flex-item">
          <label for="customer-first-name">Customer First Name:</label>
          <input type="text" id="customer-first-name" name="customer-first-name">
        </div>

        <div class="flex-item">
          <label for="customer-last-name">Customer Last Name:</label>
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
  

</template>


<script>
import axios from "axios";
export default {
  methods: {
    async submitForm() {
      const origin1 = 'Amon G. Carter Stadium 2850 Stadium Drive Fort Worth, TX 76109';
      // Retrieve the values of the input fields
      const address = document.getElementById("event-address").value;
      const city = document.getElementById("event-city").value;
      const state = document.getElementById("event-state").value;
      const zipcode = document.getElementById("event-zipcode").value;

      // Concatenate the values together into a single string
      const destinationA = address + ", " + city + ", " + state + " " + zipcode;
      const service = new google.maps.DistanceMatrixService();

      service.getDistanceMatrix(
        {
          origins: [origin1],
          destinations: [destinationA],
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            const distanceInKm = response.rows[0].elements[0].distance.value / 1000;
            const distanceInMiles = (distanceInKm / 1.609344).toFixed(2);
            console.log(distanceInMiles);
            const requestData = {
              eventType: document.querySelector("#event-type").value,
              address: document.querySelector("#event-address").value,
              eventDate: document.querySelector("#event-date").value,
              startTime: document.querySelector("#event-start-time").value,
              endTime: document.querySelector("#event-end-time").value,
              mileage: distanceInMiles,
              eventTitle: document.querySelector("#event-title").value,
              customerFirstName: document.querySelector("#customer-first-name").value,
              customerLastName: document.querySelector("#customer-last-name").value,
              customerPhoneNumber: document.querySelector("#customer-phone").value,
              customerEmail: document.querySelector("#customer-email").value,
              eventDescription: document.querySelector("#event-description").value,
              status: "PENDING"
            };

            // send the form data to the API endpoint
            axios
              .post("http://localhost:8080/api/v1/requests", requestData)
              .then(response => {
                if (response.status === 200) {
                  alert("Form submitted successfully!");
                  console.log(response.data);
                } else {
                  alert("Form submission failed.");
                  console.error(response.data);
                }
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            console.log("Error:", status);
          }
        }
      );
    },
  },
};
</script>




<style lang="scss" scoped>
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



</style>


