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

    <label for="sort-order">Sort by:</label>
    <select id="sort-order" v-model="sortOrder">
      <option value="desc">Newest</option>
      <option value="asc">Oldest</option>
    </select>

    <label for="search-request-id">Search by request ID:</label>
    <input id="search-request-id" v-model="searchRequestId">


    <table>
      <thead>
        <tr>
          <th>Event Title</th>
          <th>Event Description</th>
          <th>Customer Contact</th>
          <th>Request Status</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="requests in computedRequests" :key="requests.id">
          <td>{{ requests.eventTitle }}</td>
          <td>{{ requests.eventDescription }}</td>
          <!--<td>{{ requests.id }}</td>-->
          <td><p>{{ requests.customerFirstName +" "+  requests.customerLastName }}</p>
              <p>{{ requests.customerEmail }}</p>
          </td>
          <td><p>{{ requests.status }}</p>
              <p>{{ requests.id }}</p>
          </td>
          <td>
            <button @click="approveRequests(requests)" class="button2">Approve</button>
            <button @click="rejectRequests(requests)" class="reject button2">Reject</button>
            <button @click="deleteRequests(requests)" class="delete button2">Delete</button>
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
      sortOrder: "desc",
      searchRequestId: "",
    };
  },
  mounted() {
    this.getRequests();
  },
  methods: {
    getRequests() {
      axios
        .get('superfrogscheduler.up.railway.app/api/v1/requests')
        .then(response => {
          this.requests = response.data.data;
          this.showPrevButton = false;
          this.page = 1; // Reset page when resetting filter
        })
        .catch(error => {
          console.log(error);
        });
    },
    approveRequests(requests) {
      axios
        .put(`http://localhost:8080/api/v1/requests/${requests.id}/status/APPROVED`, {
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
    rejectRequests(requests) {
      axios
        .put(`http://localhost:8080/api/v1/requests/${requests.id}/status/REJECTED`, {
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
    deleteRequests(requests) {
      axios
        .delete(`http://localhost:8080/api/v1/requests/${requests.id}`, {
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
      let filteredRequests = [];
      if (this.filterStatus) {
        filteredRequests = this.requests.filter(
          (request) => request.status === this.filterStatus
        );
      } else {
        filteredRequests = this.requests;
      }

      if (this.searchRequestId) {
        const searchId = this.searchRequestId;
        filteredRequests = filteredRequests.filter(
          (request) => request.id === searchId
        );
    }

      return filteredRequests;
    },
    //   let filteredRequests = this.requests;
    //   if (this.filterStatus) {
    //     filteredRequests = this.requests.filter(
    //       (request) => request.status === this.filterStatus
    //     );
    //   }
    //   return filteredRequests;
    // },
    computedRequests() {
      let sortedRequests = this.filteredRequests.slice();
    if (this.sortOrder === 'desc') {
      sortedRequests.reverse();
    }
    const startIndex = (this.page - 1) * 5;
    const endIndex = startIndex + 5;
    return sortedRequests.slice(startIndex, endIndex);

      //return this.filteredRequests.slice(startIndex, endIndex);

      
      
    },
    lastPage() {
      if (this.filterStatus) {
        return Math.ceil(this.filteredRequests.length / 5);
      }
      return Math.ceil(this.requests.length / 5); 
    }
  },
};
</script>




<style>
nav {
  justify-content: unset !important;
}
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
  height: auto;
  widows: auto;
  margin: .2rem ;
  background-color: #4CAF50; 
  border: none; 
  color: white; 
  padding: 10px 20px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer; 
  transition-duration: 0.4s;
}

.reject{
  background-color: #e1b700; 
}

.delete{
  background-color: #ff6f6f; 

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

td:nth-of-type(1) {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

td:last-child {
  display: flex;
  flex-direction: column;
}

.button2 {
  margin-bottom: 5px;
  border: none; 
  color: white; 
  padding: 5px 10px; /* smaller padding */
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 14px; /* smaller font size */
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer; 
  transition-duration: 0.4s;

  
}



</style>

<!-- eventually we should plan on making only requests that are Approved status visible, 
  maybe with a button next to it instead of having the Status, when clicked will route to vue page that will sign up a super frog for the request-->