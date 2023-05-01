<template>
  <h1>
    Performance Reports
  </h1>
  <div class="table">
    <el-table :data="paginatedData" stripe style="width: 100%">
      <el-table-column prop="performanceFormId" label="ID" align="center"/>
      <el-table-column prop="performancePeriod.beginDate" label="Begin Date" align="center"/>
      <el-table-column prop="performancePeriod.endDate" label="End Date" align="center"/>
      <el-table-column prop="firstName" label="First Name" align="center" sortable/>
      <el-table-column prop="lastName" label="Last Name" align="center" sortable/>
      <el-table-column prop="studentId" label="Student ID" align="center" />
      <el-table-column prop="completedRequests" label="#Completed Reports" align="center" />
    </el-table>
  </div>

  <div id="footer">
    <el-pagination
        class="mt-4"
        background
        :total="totalPages * pageSize"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        @current-change="handlePageChange"
        layout="total, prev, pager, next"
        style="display: flex; justify-content: center; margin-top: 50px; color: blueviolet ;"
    />
  </div>
  <div class="submit">
    <a href="" id="submit">Generate Report</a>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      performanceFormLists: [], // your data here
      currentPage: 1,
      pageSize: 10, // change it as per your requirement
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      // your code to fetch the data here
      axios
          .get('http://localhost:8080/api/v1/performance-forms')
          .then(response => this.performanceFormLists = response.data.data)
    },

    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    }
  },

  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.performanceFormLists.slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(this.performanceFormLists.length / this.pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  justify-content: center;
}
.th-block {
  background-color: violet;
  line-height: 30px;
}

#footer {
  margin-bottom: 10px;
}

el-pagination {
  background-color: blueviolet;
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
</style>

