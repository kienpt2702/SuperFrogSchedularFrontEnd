<template>
    <div>
      <p id="view-requests"> Requests </p>
  
      
      <label for="status-filter">Filter by status:</label>
      <select id="status-filter" v-model="filterStatus">
        <option value="">All</option>
        <option value="APPROVED">Approved</option>
        <option value="PENDING">Pending</option>
        <option value="REJECTED">Rejected</option>
      </select>
      <br />  
  
  
      <label for="superfrogid">Type in student id to assign:</label><br />
      <input type="text" id="superfrogid" name="superfrogid" v-model="title" /><br />
  
      <table>
        <thead>
          <tr>
            <th>Event Title</th>
            <th>Event Description</th>
            <th>Email Address</th>
            <th>Assigned Frog</th>
            <th>Request Status</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="requests in computedRequests" :key="requests.id">
            <td>{{ requests.eventTitle }}</td>
            <td>{{ requests.eventDescription }}</td>
            <!--<td>{{ requests.id }}</td>-->
            <td>{{ requests.customerEmail }}</td>
            
            <td v-if="requests.assignedSuperFrogStudent">{{ requests.assignedSuperFrogStudent.email +' '+ requests.assignedSuperFrogStudent.firstName + ' ' + requests.assignedSuperFrogStudent.lastName }}</td>
  <td v-else>N/A</td>
  <!-- <td> -->
    <!-- {{ requests.assignedSuperFrogStudent ? requests.assignedSuperFrogStudent.firstName + ' ' + requests.assignedSuperFrogStudent.lastName : '' }} -->
  <!-- </td> -->
  
  
            <td>{{ requests.status }}</td>
            <td>
              <button @click="signupRequests(requests)">SIGN UP</button>
              <button class="cancel" @click="cancelRequests(requests)">CANCEL</button>
           
            </td>
          </tr>
        </tbody>
      </table>
      <!--button added-->
      <button @click = "nextPage" v-if="page < lastPage">Next Page</button>
      <button @click = "prevPage" v-if="showPrevButton">Previous Page</button>
    </div>
  </template>
  
  
  
  
  
  
  <script>
  import axios from "axios";
  
  export default {
    name: "ViewRequests",
    data() {
      return {
        
        requests: [],
        page: 1,
        showPrevButton: false, 
        filterStatus: "",
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
            this.requests = response.data.data;
            this.showPrevButton = false;
            this.page = 1; // Reset page when resetting filter
          })
          .catch(error => {
            console.log(error);
          });
      },
      signupRequests(requests) {
        const id = document.querySelector("#superfrogid").value;
        console.log(id);
        axios
          .put(`http://localhost:8080/api/v1/requests/${requests.id}/signup/${id}`, {
          })
          .then((response) => {
            console.log(this.superfrogid);
            this.requests = response.data.data;
            console.log(response.data.data);
            this.getRequests();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      cancelRequests(requests) {
        const id = document.querySelector("#superfrogid").value;
        console.log(id);
        axios
          .delete(`http://localhost:8080/api/v1/requests/${requests.id}/cancel/${id}`, {
          })
          .then((response) => {
            console.log(this.superfrogid);
            this.requests = response.data.data;
            console.log(response.data.data);
            this.getRequests();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      Requests(requests) {
        axios
          .put(`http://localhost:8080/api/v1/requests/${requests.id}/status/CANCELLED`, {
          })
          .then((response) => {
            this.requests = response.data.data;
            console.log(response.data.data);
            this.getRequests();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      
  
     
     
      nextPage() {
        this.page++;
        if (this.page === this.lastPage) { 
          this.showNextButton = false;
        }
        if (this.page > 1) {
          this.showPrevButton = true;
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page--;
          if (this.page === 1) {
            this.showPrevButton = false;
          }
          if (!this.showPrevButton) {
            this.showNextButton = true;
          }
        }
      }
    },
    computed: {
      filteredRequests() {
        let filteredRequests = this.requests;
        if (this.filterStatus) {
          filteredRequests = this.requests.filter(
            (request) => request.status === this.filterStatus
          );
        }
        return filteredRequests;
      },
      computedRequests() {
        const startIndex = (this.page - 1) * 15;
        const endIndex = startIndex + 15;
  
        if (this.filteredRequests.length === 0) {
          return [];
        }
  
        return this.filteredRequests.slice(startIndex, endIndex);
      },
      lastPage() {
        if (this.filterStatus) {
          return Math.ceil(this.filteredRequests.length / 15);
        }
        return Math.ceil(this.requests.length / 15); 
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

  .cancel{
    background-color: #e1b700; 

  }
  
  button:hover {
    background-color: #4D1979;
  }
  
  .prev-button.hidden {
    opacity: 0; /* Set opacity to 0 when hidden */
  }
  
  #view-requests {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  </style>
  
  <!-- eventually we should plan on making only requests that are Approved status visible, 
    maybe with a button next to it instead of having the Status, when clicked will route to vue page that will sign up a super frog for the request-->