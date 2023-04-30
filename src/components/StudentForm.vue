<template>
  <el-form ref="form" :model="user" :rules="rules" label-position="left" label-width="100px">
    <el-row class="row">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Email" prop="email">
          <el-input v-model.trim="user.email" placeholder="example@email.com"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model.trim="user.firstName" placeholder="firstname"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model.trim="user.lastName" placeholder="lastname"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-form-item label="Phone" prop="phoneNumber">
          <el-input v-model="user.phoneNumber" placeholder="(xxx) xxx-xxxx"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Address" prop="address">
          <el-input v-model="user.address" placeholder="23 Main St, Suite 100 (Optional), Fort Worth, TX, 76109"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
      },
      rules: {
        email: [
          { required: true, message: 'Email is required', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid email address', trigger: ['blur', 'change'] }
        ],
        firstName: [
          { required: true, message: 'Please enter your first name', trigger: 'blur' },
          { min: 2, max: 30, message: 'First name must be between 2 and 30 characters', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Please enter your last name', trigger: 'blur' },
          { min: 2, max: 30, message: 'Last name must be between 2 and 30 characters', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: 'Please enter your phone number', trigger: 'blur' },
          {
            pattern: /^\(\d{3}\)\s\d{3}-\d{4}$/,
            message: 'Phone number must be in the format (xxx) xxx-xxxx',
            trigger: 'blur'
          }

        ],
        address: [
          { required: true, message: 'Please enter your address', trigger: 'blur' },
          {
            pattern: /^\d+\s[\w\s]+(,\s+(Suite|Ste|Rm|Room|Floor)\s*\d+)?,\s*[\w\s]+,\s*[A-Z]{2},\s*\d{5}(-\d{4})?$/,
            message: 'Invalid US address format. Example of valid address: 123 Main St, Suite 100 (Optional), Fort Worth, TX, 76109',
            trigger: 'blur'
          }

        ]
      }
    };
  },
  methods: {
    async validateForm() {
      return await this.$refs.form.validate();
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
