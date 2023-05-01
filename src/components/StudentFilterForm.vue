<template>
  <el-form ref="form" :model="formData" :rules="rules" label-width="120px" class="form">
    <el-form-item label="First Name" prop="firstName">
      <el-input v-model.trim="formData.firstName"></el-input>
    </el-form-item>

    <el-form-item label="Last Name" prop="lastName">
      <el-input v-model.trim="formData.lastName"></el-input>
    </el-form-item>

    <el-form-item label="Email" prop="email">
      <el-input v-model="formData.email"></el-input>
    </el-form-item>

    <el-form-item label="Phone Number" prop="phoneNumber">
      <el-input v-model="formData.phoneNumber"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button color="#626aef" type="primary" @click="onApply">Apply</el-button>
      <el-button @click="onReset">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      rules: {
        firstName: [
          {min: 2, max: 30, message: 'First name must be between 2 and 30 characters', trigger: 'blur'}
        ],
        lastName: [
          {min: 2, max: 30, message: 'Last name must be between 2 and 30 characters', trigger: 'blur'}
        ],
        email: [
          { type: 'email', message: 'Invalid email format', trigger: ['blur', 'change'] }
        ],
        phoneNumber: [
          {
            pattern: /^\d{10}$/,
            message: 'Phone number must be a 10-digit number',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    getPhoneNumber() {
      const cleaned = ('' + this.formData.phoneNumber).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

      return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : null;
    },

    getSubmitInfo() {
      return {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        phoneNumber: this.getPhoneNumber(),

      }
    },

    onApply() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // form is valid, do something with formData
          this.$emit('user-filter', this.getSubmitInfo());
        } else {
          // form is invalid
          console.log('Form validation failed')
        }
      })
    },

    onReset() {
      this.$refs.form.resetFields();
      console.log(this.getSubmitInfo())
      this.$emit('user-filter', this.getSubmitInfo());
    }
  }
}
</script>
