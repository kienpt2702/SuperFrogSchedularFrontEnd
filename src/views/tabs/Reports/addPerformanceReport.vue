<template>
  <h1>
    Create Performance Report(s)
  </h1>
  <div class="form-container">
    <form @submit.prevent="submitForm">
  <div class="box box1">
    <input type="text" id="ids" class="input1" name="ids" placeholder=" " required>
    <label class="placeholder" for="input">Student Ids(Separate by a space)</label>
  </div>

  <div class="box box1">
    <input type="date" id="startDate" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">Start Date</label>
  </div>

  <div class="box box1">
    <input type="date" id="endDate" class="input1" placeholder=" " required>
    <label class="placeholder" for="input">End Date</label>
  </div>

  <input type="submit" value="Submit">
  </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async submitForm() {
      // get the form data
      // const formData = new FormData(document.querySelector("form"));

      const periodP = {
        beginDate: document.querySelector("#startDate").value,
        endDate: document.querySelector("#endDate").value
      };

      const performanceFormData = {
        requestIds: document.querySelector("#ids").value.split(" "),
        period: periodP
      };


      try {
        // send the form data to the API endpoint
        console.log(performanceFormData);
        const response = await axios.post("http://localhost:8080/api/v1/performance-forms", performanceFormData);


        // handle the response
        if (response.status === 200) {
          alert("Report Generated successfully!");
          console.log(response.data);
        } else {
          alert("Report Generation failed.");
          console.error(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  margin: 30px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}

#ids, #startDate, #endDate {
  width: 350px;
}

.box1 {
  position: relative;
}

.input1 {
  padding: 10px;
  background: #8312A5;
  border-radius: 5px;
  outline: none;
  color: #f5f5f5;
  border: 1px solid #3c1351;
}

.placeholder {
  position: absolute;
  top: 10px;
  left: 8px;
  font-size: 14px;
  color: #f5f5f5;
  padding: 0px 5px;
  transition: 0.3s;
  pointer-events: none;
}

.input1:focus + .placeholder, .input1:not(:placeholder-shown) + .placeholder {
  top: -12px;
  border: 0.5px solid #3c1351;
  background-color: #8312A5;
}

/* Style the form submit button */
.form-container input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition-duration: 0.4s;
}

/* Change the color of the submit button on hover */
.form-container input[type=submit]:hover {
  background-color: #4D1979;
}

</style>
