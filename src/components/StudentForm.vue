<template>
  <el-form ref="form" :model="user" :rules="rules" label-position="top" label-width="100px" size="large">
    <el-row class="row" gutter="50">
      <el-col :xs="24" :sm="12">
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model.trim="user.firstName"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12">
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model.trim="user.lastName"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row gutter="50">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Email" prop="email">
          <el-input v-model.trim="user.email" placeholder="example@email.com"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12">
        <el-form-item label="Phone" prop="phoneNumber">
          <el-input v-model.number.trim="user.phoneNumber" placeholder="(xxx) xxx-xxxx"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row gutter="50">
      <el-col :xs="24" :sm="12">
        <el-form-item label="Street" prop="street">
          <el-input v-model="user.street"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="12" :sm="6">
        <el-form-item label="Suite" prop="suite">
          <el-input v-model.trim="user.suite"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="12" :sm="6">
        <el-form-item label="City" prop="city">
          <el-input v-model.trim="user.city"></el-input>
        </el-form-item>
      </el-col>

    </el-row>

    <el-row gutter="50">
      <el-col :xs="12" :sm="6">
        <el-form-item label="State" prop="state">
          <el-input v-model.trim="user.state"></el-input>
        </el-form-item>
      </el-col>

      <el-col :xs="12" :sm="6">
        <el-form-item label="ZIP" prop="postal">
          <el-input v-model.number.trim="user.postal"></el-input>
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
        street: '',
        suite: '',
        city: '',
        state: '',
        postal: '',
      },
      rules: {
        email: [
          {required: true, message: 'Email is required', trigger: 'blur'},
          {type: 'email', message: 'Please enter a valid email address', trigger: ['blur', 'change']}
        ],
        firstName: [
          {required: true, message: 'Please enter your first name', trigger: 'blur'},
          {min: 2, max: 30, message: 'First name must be between 2 and 30 characters', trigger: 'blur'}
        ],
        lastName: [
          {required: true, message: 'Please enter your last name', trigger: 'blur'},
          {min: 2, max: 30, message: 'Last name must be between 2 and 30 characters', trigger: 'blur'}
        ],
        phoneNumber: [
          {
            required: true,
            message: 'Please enter your phone number',
            trigger: 'blur'
          },
          {
            pattern: /^\d{10}$/,
            message: 'Phone number must be a 10-digit number',
            trigger: 'blur'
          }
        ],


        street: [
          {required: true, message: 'Please enter your street address', trigger: 'blur'},
          {min: 2, max: 50, message: 'Street address must be between 2 and 50 characters', trigger: 'blur'}
        ],
        suite: [
          {max: 50, message: 'Suite/Apt must be no longer than 50 characters', trigger: 'blur'}
        ],
        city: [
          {required: true, message: 'Please enter your city', trigger: 'blur'},
          {min: 2, max: 50, message: 'City must be between 2 and 50 characters', trigger: 'blur'}
        ],
        state: [
          {required: true, message: 'Please enter your state', trigger: 'blur'},
          {len: 2, message: 'State must be a 2-letter abbreviation', trigger: 'blur'}
        ],
        postal: [
          {required: true, message: 'Please enter your postal code', trigger: 'blur'},
          {pattern: /^\d{5}(?:[-\s]\d{4})?$/, message: 'Postal code must be a valid US ZIP code', trigger: 'blur'}
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
    },

    getAddress() {
      let suite = '';

      if(this.user.suite) {
        suite = `Room ${this.user.suite}, `
      }

      return `${this.user.street}, ${suite}${this.user.city}, ${this.user.state}, ${this.user.postal}`;
    },

    getPhoneNumber() {
      const cleaned = ('' + this.user.phoneNumber).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

      return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : null;
    },

    getSubmitInfo() {
      return {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        phoneNumber: this.getPhoneNumber(),
        address: this.getAddress(),

      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
