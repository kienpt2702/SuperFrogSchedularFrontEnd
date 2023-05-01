<template>
  <div class="table">
    <el-table :data="paginatedData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" align="center"/>
      <el-table-column prop="title" label="First Name" align="center" sortable/>
      <el-table-column prop="price" label="Last Name" align="center" sortable/>
      <el-table-column prop="price" label="Email" align="center" />
      <el-table-column prop="price" label="Account Status" align="center" />
      <el-table-column prop="price" label="Action" align="center"/>
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
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userLists: [], // your data here
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
        .get('https://dummyjson.com/products')
        .then(response => this.userLists = response.data.products)
    },

    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    }
  },

  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.userLists.slice(startIndex, endIndex);
    },
    
    totalPages() {
      return Math.ceil(this.userLists.length / this.pageSize);
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
</style>

