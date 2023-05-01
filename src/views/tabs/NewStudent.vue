<template>
  <StudentForm ref="studentForm"></StudentForm>

  <el-row style="border: 1px solid red">
    <el-col :xs="24">
      <el-form-item>
        <el-button class="btn" size="large" loading-icon="Eleme" :loading="isLoading" color="#626aef" @click="submitForm">
          Create
        </el-button>

        <el-button class="btn" size="large" @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-col>
  </el-row>

</template>

<script>
import StudentForm from "@/components/StudentForm.vue";
import {createUser} from "@/apis/userApis.js";
import {ElNotification} from "element-plus";
export default {

  data() {
    return {
      isLoading: false,
      message: '',
      messageType: 'success'
    }
  },

  methods: {
    async submitForm() {
      this.isLoading = true;

      try {
        const valid = await this.$refs.studentForm.validateForm();

        if(valid) {
          const res = await createUser(this.user);

          this.message = 'Create user successfully';
          this.messageType = 'success';
          console.log(res)
        }

      } catch (e) {
        console.log(e)
        // if e.code exist -> is response from server
        this.message = e.code ? e.message : 'An error has occurred, please try again!';
        this.messageType = 'error';
      }

      ElNotification({
        title: this.messageType === 'success' ? 'Account create success' : 'Oops!',
        message: this.message,
        type: this.messageType,
      })

      this.isLoading = false;
    },
    resetForm() {
      this.$refs.studentForm.resetForm();
    }
  },

  components: {
    StudentForm
  },

  computed: {
    user() {
      return this.$refs.studentForm.getSubmitInfo();
    }
  }
};
</script>

<style lang="scss" scoped>
  .btn {
    margin-left: 0;
  }
</style>
