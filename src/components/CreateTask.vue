<template>
  <div>
    <div class="createTask-container">
      <div class="header">
        <div class="back-btn" @click="$router.push('/dashboard')">
          <img
            src="../assets/back-arrow-icon.png"
            width="28"
            height="25"
            alt=""
          />
        </div>
        <h3 class="heading">Create Task</h3>
      </div>

      <div class="login-form-container">

        <form
          class="row g-3 needs-validation mt-3"  
          novalidate
          @submit.prevent="handlecreateTask"
        >
          <div class="col-md-4">
            <div class="input-group">
              
              <input
                type="text"
                placeholder="Title"
                class="form-control"
                id="validationDefaultUsername"
                v-model.trim="formValue.title"
                required
              />
            </div>
          </div>


          <div class="col-md-4">
            
            <div class="card p-0">
              <div class="card-header">
                Task Description
              </div>
              <div class="card-body p-1">
                <textarea class="form-control h-100 border-0" id="exampleFormControlTextarea1" rows="3" placeholder="Description..." v-model.trim="formValue.description"></textarea>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            
            <div class="card p-0">
              <div class="card-header">
                <div class="date_time_container">
                  <span>All Day</span>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" v-model="formValue.allDay">
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                  </div> 
                </div>
              </div>
              

              <div class="card-body p-1">
                <div class="start_end_container">
                  <p class="m-0">Start</p>
                  <div class="start_end_input">
                    <input type="date" v-model="formValue.startValue.selectedDate" @change="handleStartDateChange">
                    <input type="time" v-model="formValue.startValue.selectedTime"  @change="handleStartTimeChange">
                  </div>
                  
                </div>
                <hr class="m-0">
                <div class="start_end_container">
                  <p class="m-0">End</p>
                  <div class="start_end_input">
                    <input type="date" v-model="formValue.endValue.selectedDate" @change="handleEndDateChange">
                    <input type="time" v-model="formValue.endValue.selectedTime" @change="handleEndTimeChane" >
                  </div>
                </div>
             
              </div>
              
            </div>
          </div>

        
          <div class="col-12 mt-5">
            <button
              class="btn btn-primary p-3 submitForm w-100"
              type="submit"
              :disabled="isLoading"
            >
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span v-else>Create Task</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "loginVue",
  emits: ["signup"],
  data() {
    return {
      formValue: {
        email: "",
        password: "",
        rememberMe: false,
      },
      errors: {
        email: false,
        password: false,
      },
      isLoading: false,
      userDataApi: [],
      showConfirmPassword: false,
      formValue: {
        title: "",
        description: "",
        allDay: false,
        startValue:{
          selectedTime:this.currentStartTime(),
          selectedDate: this.currentStartDate(),
        },
       endValue:{
        selectedTime:"",
        selectedDate:"",
        },
      },
    };
  },
  // watch: {
  //   "formValue.email"(newValue) {
  //     if (newValue.trim()) {
  //       this.errors.email = false;
  //     }
  //   },
  //   "formValue.password"(newValue) {
  //     if (newValue) {
  //       this.errors.password = false;
  //     }
  //   },
  // },
  methods: {
    togglePassword(type) {
            if (type === "password") {
                this.showPassword = !this.showPassword;
            } else {
                this.showConfirmPassword = !this.showConfirmPassword;
            }
        },

    //getting data from local server //http://localhost:3000/users
    async getData() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        this.userDataApi = data;
      } catch (error) {
        console.error(error);
      }
      return this.userDataApi;
    },

    currentStartDate() {
      const today = new Date();
      const date = today.toISOString().split("T")[0];
      return date ;
    },

    currentStartTime() {
      const nowTime = new Date();
      const time = nowTime.toTimeString().split(0,5);
      return time; // e.g. "12:34:56"
    },

    formatDate(dateString) {
      if (!dateString) return "";

      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long", // full name of the month (e.g., "January")
        day: "numeric",
      }).format(date); // output: "February 20, 2023"
    },

    formatTime(timeString) {
      if (!timeString) return "";
      const [hours, minutes] = timeString.split(":").map(Number);
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date(2025, 0, 1, hours, minutes));
    },

    // formattedDate() {
    //   return this.formatDate(this.formValue.startValue.selectedDate); 
    // },

    // formattedTime() {
    //   return this.formatTime(this.formValue.startValue.selectedTime);
    // },

    // handleStartDateChange() {
    
    // }
  },
  mounted() {
    this.getData();
    this.currentStartDate();
  },
};
</script>

<style scoped>
.createTask-container {
  padding:  16px;
}
.head_container{
  display: flex;
  justify-content: space-between;
}

.date_time_container{
  display: flex;
  justify-content: space-between;
}
.start_end_container{
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
}

.start_end_input{
  display: flex;
  gap: 10px 0;
  flex-direction: column;
}

@media (min-width: 389px){
  .start_end_input{
  gap: 0 10px;
  flex-direction: row;
}
}

.form-switch .form-check-input {
    width: 3em;
    height: 1.5em;
}

.start_end_input input{
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 14px;
    background: #d9d9d9;
    padding: 3px 5px;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0 10px;
}

.login-form-container .des {
  color: #a8a9aa;
  font-size: 14px;
  margin-top: 20px;
  font-weight: 300 !important;
}

textarea::placeholder,
input::placeholder {
  color: #a8a9aa !important;
  font-size: 14px !important;
  font-weight: 300 !important;
}

input {
  font-size: 14px !important;
  font-weight: 300 !important;
}

label {
  font-size: 16px !important;
  font-weight: 500;
}
.forget{
  color: #a8a9aa;
}

.card-header{
    color: #a8a9aa !important;
    background-color: transparent !important;
    border-color: #3532326b !important;

}

.heading {
  font-size: 20px !important;
}

.form-control:focus {
  color: #212529 !important;
  background-color: transparent !important;
  /* border-color: #dee2e6 !important; */
  border-color: #3532326b !important;
  outline: 0;
  box-shadow: none !important;
}

.form-control {
  height: 3rem;
}

.form-check-input:checked {
  background-color: #09203e;
  border-color: #09203e;
}

#togglePassword {
    position: absolute;
    top: 18px;
    right: 17px;
    color: #a8a9aa;
    z-index: 10;
}

.input-group-text {
  background-color: transparent !important;
  border-color: #3532326b !important;
}

.form-control.pass {
  padding: 0.375rem 3rem 0.375rem 0.5rem;
}

.btn-primary.submitForm {
  border-radius: 50px !important;
  background: #09203e !important;
  border-color: #09203e !important;
}

.login-link {
  color: #09203e;
  font-weight: 500;
}

.footer-link {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #a8a9aa;
}

.form-check-input,
.form-control {
  border-color: #3532326b !important;
}

.form-check-label {
  font-weight: 400;
}

.form-control.is-invalid {
  border-color: #dc3545 !important;
  background-image: none !important;
}

.input-group .form-control.is-invalid {
  z-index: 0;
}

.spinner-border {
  margin-right: 5px;
}
</style>
