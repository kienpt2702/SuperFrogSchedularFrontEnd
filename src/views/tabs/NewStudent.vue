<template>
  <StudentForm ref="studentForm"></StudentForm>

  <el-row style="border: 1px solid red">
    <el-col :xs="24" style="display: flex; justify-content: center">
      <el-form-item>
        <el-button type="primary" @click="submitForm">Register</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-col>
  </el-row>

</template>

<script>
import StudentForm from "@/components/StudentForm.vue";
import {createUser} from "@/apis/userApis.js";

export default {

  methods: {
    async submitForm() {

      try {
        const valid = await this.$refs.studentForm.validateForm();

        if(valid) {
          const res = await createUser(this.user);

          console.log(res)
        }

      } catch (e) {
        console.log(e)
      }
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
      return this.$refs.studentForm.user;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
