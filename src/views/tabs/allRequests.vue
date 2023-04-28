<template>
  <div>
    <p id="view-requests"> Requests </p>
    <table>
      <thead>
        <tr>
          <th>Event Title</th>
          <th>Event Description</th>
          <th>Customer Name</th>
          <th>Email Address</th>
          <th>Request Status</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="requests in computedRequests" :key="requests.id">
          <td>{{ requests.eventTitle }}</td>
          <td>{{ requests.eventDescription }}</td>
          <!--<td>{{ requests.id }}</td>-->
          <td>{{ requests.customerFirstName +" "+  requests.customerLastName }}</td>
          <td>{{ requests.customerEmail }}</td>
          <td>{{ requests.status }}</td>
        </tr>
      </tbody>
    </table>
    <!--button added-->
    <button @click = "nextPage" v-if="page < lastPage">Next Page</button>
    <button @click = "prevPage" v-if="showPrevButton">Previous Page</button>
  </div>
</template>


<!-- eventually we should plan on making only requests that are Approved status visible, 
  maybe with a button next to it instead of having the Status column, when clicked will route to vue page that will sign up a super frog for the request-->



<script>
import axios from "axios";

export default {
  name: "ViewRequests",
  data() {
    return {
      requests: [],
      page: 1,
      showPrevButton:false, 
    };
  },
  mounted() {
    this.getRequests();
  },
  methods: {
    getRequests() {
     
      axios
        .get('http://localhost:8080/api/v1/requests')
        .then(response => {
          console.log(response.data.data);
          this.requests = response.data.data;
          this.showPrevButton = false;
         
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextPage(){
      this.page++;
      if (this.page === this.lastPage) { 
        this.showNextButton = false;
      }
      if (this.page > 1) {
        this.showPrevButton = true;
      }
      
    },
    prevPage(){
      
      if(this.page>1){
        this.page--;
      if(this.page === 1) {
        this.showPrevButton=false;
      }
      if(!this.showPrevButton){
        this.showNextButton=true;
      }
      }
    }
  },
  computed: {
    computedRequests() {
      const startIndex = (this.page - 1)*15;
      const endIndex = startIndex +15;
      return this.requests.slice(startIndex,endIndex);
    },
    lastPage(){
      return Math.ceil(this.requests.length/15);
    }
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #e6e6e6;
}

button {
  background-color: #4CAF50; 
  border: none; 
  color: white; 
  padding: 10px 20px; /* Some padding */
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer; 
  transition-duration: 0.4s;
}

button:hover {
  background-color: #4D1979;
}

.prev-button.hidden {
  opacity: 0; /* Set opacity to 0 when hidden */
}


</style>