<template>
  <div>
    <h1>View All Students</h1>
    <hr>
  </div>

  <div class="table">
    <el-table v-loading="isLoading" :data="userLists" stripe style="width: 100%" @sort-change="handleSortChange">
      <el-table-column prop="firstName" label="First Name" align="center" sortable/>
      <el-table-column prop="lastName" label="Last Name" align="center" sortable/>
      <el-table-column prop="email" label="Email" align="center" sortable/>
      <el-table-column prop="phoneNumber" label="Phone Number" sortable align="center"/>
      <el-table-column prop="address" label="Address" align="center"/>
<!--      last column, contain filter, edit, deactivate button-->
      <el-table-column align="left">
        <template #header>
          <el-popover placement="right" :width="400" trigger="click">
            <template #reference>
              <el-button type="primary" :icon="Search">
                Filter
              </el-button>
            </template>
            <StudentFilterForm @user-filter="handleUserFilter"></StudentFilterForm>

          </el-popover>
        </template>


        <template #default="scope">
          <el-form-item>
            <el-button size="small" color="#626aef" @click="viewStudent(scope.row)">
              View Profile
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" size="small" @click="deactivateUser(scope.row)">Deactivate</el-button>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </div>


  <div id="footer">
    <el-pagination
      class="mt-4"
      background
      :total="total"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      @current-change="handlePageChange"
      layout="total, prev, pager, next"
      style="display: flex; justify-content: center; margin-top: 50px; color: blueviolet ;"
    />
  </div>
</template>

<script>
import {deactivateUser, getAllUsers} from "@/apis/userApis.js";
import StudentFilterForm from "@/components/StudentFilterForm.vue";
import StudentForm from "@/components/StudentForm.vue";
import {ElNotification} from "element-plus";

export default {
  components: {
    StudentFilterForm,
    StudentForm
  },

  data() {
    return {
      userLists: [], // your data here
      currentPage: 1,
      pageSize: 5, // change it as per your requirement
      totalPages: 1,
      sortDirection: 'ASC',
      sortBy: 'firstName',
      userFilter: {},
      isLoading: true,
    };
  },

  created() {
    this.fetchData(this.searchParams);
  },

  methods: {
    async deactivateUser(user) {
      this.isLoading = true;

      try {
        const res = await deactivateUser(user.id);
        this.message = res.message;
        this.messageType = 'success';
      }

      catch (e) {
        this.message = e.code ? e.message : 'An error has occurred, please try again!';
        this.messageType = 'error';
      }

      ElNotification({
        title: this.messageType === 'success' ? 'Success' : 'Oops!',
        message: this.message,
        type: this.messageType,
      })

      this.isLoading = false;
    },

    viewStudent(user) {
      const userId = user.id;

      this.$router.push({
        name: 'studentProfile',
        params: {
          id: userId
        }
      })
    },

    async fetchData(searchParam) {
      // your code to fetch the data here
      // axios
      //   .get('https://dummyjson.com/products')
      //   .then(response => this.userLists = response.data.products)
      try {
        this.isLoading = true;
        const page = await getAllUsers(searchParam);
        this.userLists = page.elements;
        this.total = page.totalPages * page.pageSize;
        this.totalPages = page.totalPages

        this.isLoading = false;
      } catch (err) {
        console.log(err)
      }
    },

    handlePageChange(currentPage) {
      this.currentPage = currentPage;
      this.fetchData(this.searchParams);
    },

    handleSortChange(newSort) {
      this.sortBy = newSort.prop;
      this.sortDirection = newSort.order === 'ascending' ? 'ASC' : 'DSC';
      this.fetchData(this.searchParams);
    },

    handleUserFilter(user) {
      this.userFilter = {...user};
      this.currentPage = 1;
      this.fetchData(this.searchParams);
    }
  },

  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.userLists.slice(startIndex, endIndex);
    },

    total() {
      return this.pageSize * this.totalPages;
    },

    searchParams() {
      return {
        pageNumber: this.currentPage-1,
        pageSize: this.pageSize,
        totalPages: this.totalPages,
        sortDirection: this.sortDirection,
        sortBy: this.sortBy,
        ...this.userFilter
      }
    }
  },
};
</script>

<style lang="scss" scoped>

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

