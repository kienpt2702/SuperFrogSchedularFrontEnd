<template>
  <div>
    <h1>Student Info</h1>
  </div>

  <div v-loading.lock="!user">
    <StudentForm ref="studentForm" v-if="user" :initial-user="user"></StudentForm>

    <el-form ref="studentAndPaymentForm" :model="studentTypeAndPayment" :rules="rules">
      <el-form-item label="Student Type" prop="studentType">
        <el-select v-model="studentTypeAndPayment.studentType">
          <el-option label="Domestic" value="false"></el-option>
          <el-option label="International" value="true"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Payment Preference" prop="paymentPreference">
        <el-select v-model="studentTypeAndPayment.paymentPreference">
          <el-option label="Mail Check" value="MAIL_CHECK"></el-option>
          <el-option label="PICK UP CHECK" value="PICK_UP_CHECK"></el-option>
        </el-select>
      </el-form-item>


      <el-button size="large" color="#626aef" loading-icon="Eleme" :loading="isLoading" @click="updateUser">
        Apply
      </el-button>

      <el-button type="danger" size="large" loading-icon="Eleme" :loading="isLoading" @click="deactivateUser">
        Deactivate
      </el-button>

    </el-form>


  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm.vue";
import {deactivateUser, getUserById, updateUser} from "@/apis/userApis.js";
import {ElNotification} from "element-plus";

export default {
  name: "StudentInfo",

  data() {
    return {
      isLoading: false,
      user: null,
      studentTypeAndPayment: {
        isInternational: null,
        paymentPreference: '',
      },


      rules: {
        studentType: [
          {required: true, message: 'Please select student type', trigger: 'change'},
        ],
        paymentPreference: [
          {required: true, message: 'Please select payment preference', trigger: 'change'},
        ],
      },
    }
  },

  components: {
    StudentForm,
  },

  methods: {
    async updateUser() {
      this.isLoading = true;

      try {
        // const valid = await this.$refs.studentForm.validateForm() && await this.$refs.studentAndPaymentForm.validateField();

        const valid = await Promise.all([this.$refs.studentForm.validateForm(), await this.$refs.studentAndPaymentForm.validateField()])

        if (valid) {
          const res = await updateUser(this.$route.params.id, {
            ...this.$refs.studentForm.getSubmitInfo(),
            ...this.studentTypeAndPayment
          });

          this.message = res.message;
          this.messageType = 'success';
        }

      } catch (e) {
        // if e.code exist -> is response from server
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


    async deactivateUser() {
      this.isLoading = true;

      try {
        const res = await deactivateUser(this.$route.params.id);
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

    convertPhoneNumber(phoneNumber) {
      let digitsOnly = phoneNumber.replace(/\D/g, '');
      return digitsOnly.substring(digitsOnly.length - 10);
    }
  },

  async created() {
    const user = await getUserById(this.$route.params.id)
    user.phoneNumber = this.convertPhoneNumber(user.phoneNumber);

    const addressParts = user?.address?.split(", ");
    const address = {}
    address.street = addressParts[0];

    // have full address (including suite)
    if (addressParts.length === 5) {
      address.suite = addressParts[1].split(' ')[1];
      address.city = addressParts[2];
      address.state = addressParts[3];
      address.postal = addressParts[4];
    } else {
      address.city = addressParts[1];
      address.state = addressParts[2];
      address.postal = addressParts[3];
    }

    this.user = {
      ...user,
      ...address
    }
  },
}
</script>

<style scoped>

</style>