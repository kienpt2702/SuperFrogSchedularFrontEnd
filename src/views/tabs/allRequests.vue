<template>
  <div>
    <p id="view-requests"> Requests </p>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Request Status</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="requests in computedRequests" :key="requests.id">
          <td>{{ requests.id }}</td>
          <td>{{ requests.customerFirstName }}</td>
          <td>{{ requests.customerLastName }}</td>
          <td>{{ requests.customerEmail }}</td>
          <td>{{ requests.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ViewRequests",
  data() {
    return {
      requests: [],
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
         
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  computed: {
    computedRequests() {
      return this.requests;
    },
  },
};
</script>
