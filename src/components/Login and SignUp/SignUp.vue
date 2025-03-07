<template>
  <div class="signUp-container">
    <div class="signUp-content">
      <form class="form-container" @submit.prevent="submitForm">
        <div class="header">
          <button class="back-button" @click="$router.push('/presignup')">
            <img
              src="../../assets/back-arrow-icon.png"
              width="28"
              height="25"
              alt=""
            />
          </button>
          <h2 class="m-0">Sign Up</h2>
        </div>

        <p class="des">Enter Your Details Below</p>

        <div class="form-group">
          <label for="fullName" class="form-label-text">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            class="input fullName-input"
            :class="{ 'error-border': errorsBorder.fullName }"
            v-model.trim="formValue.fullName"
            ref="fullName"
          />
          <span class="error" v-if="errors.fullName">{{
            errors.fullName
          }}</span>
        </div>

        <div class="form-group">
          <label for="email" class="form-label-text">Email</label>
          <input
            type="email"
            placeholder="ayomideakorede0@gmail.com"
            id="email"
            class="input email-input"
            :class="{ 'error-border': errorsBorder.email }"
            v-model="formValue.email"
            ref="email"
          />
          <i id="email-icon" class="fa-solid fa-envelope"></i>
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="telephone" class="form-label-text">Phone Number</label>
          <input
            type="tel"
            placeholder="07050419815"
            id="telephone"
            class="input tel-input"
            :class="{ 'error-border': errorsBorder.phoneNum }"
            v-model.trim="formValue.phoneNum"
            ref="phoneNum"
          />
          <span class="error" v-if="errors.phoneNum">{{
            errors.phoneNum
          }}</span>
        </div>

        <div class="form-group">
          <label for="password" class="form-label-text">Password</label>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Password"
            id="password"
            class="input password-input"
            :class="{ 'error-border': errorsBorder.password }"
            v-model="formValue.password"
            ref="password"
          />
          <div class="img-container">
            <img
              src="../../assets/icon-park-solid_personal-privacy.png"
              width="27"
            />
          </div>
          <i
            id="password-eye"
            class="fa-solid"
            :class="showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'"
            @click="togglePassword('confirmPassword')"
          ></i>
          <span class="error" v-if="errors.password">{{
            errors.password
          }}</span>
        </div>

        <div class="container-checkbox">
          <div class="checkbox">
            <input
              type="checkbox"
              id="remember-me"
              v-model="formValue.rememberMe"
            />
            <label class="m-0" for="remember-me">Remember Me</label>
          </div>
          <div class="forgot">
            <label for="" @click="$router.push('/')">Forget Password</label>
          </div>
        </div>

        <div class="signUp-button-container">
          <button type="submit" class="signUp-button" :disabled="isLoading">
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Sign Up
          </button>
          <p class="footer-link">
            already have an account ?
            <span class="signUp-link" @click="$router.push('/login')">
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "SignUpVue",
  data() {
    return {
      formValue: {
        fullName: "",
        email: "",
        phoneNum: "",
        password: "",
        rememberMe: false,
      },
      errors: {},
      userDataApi: [],
      showConfirmPassword: false,
      isLoading: false,
      errorsBorder: {
        fullName: false,
        email: false,
        phoneNum: false,
        password: false,
      },
      result: {
        fullName: false,
        email: false,
        phoneNum: false,
        password: false,
      },
    };
  },
  methods: {
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

    togglePassword(type) {
      if (type === "password") {
        this.showPassword = !this.showPassword;
      } else {
        this.showConfirmPassword = !this.showConfirmPassword;
      }
    },

    //form validation
    validateForm() {
      this.errors = {}; // Reset errors before validation

      // Full Name Validation
      if (!this.formValue.fullName.trim()) {
        this.errors.fullName = "Full name is required.";
        this.errorsBorder.fullName = true;
      } else {
        this.errorsBorder.fullName = false;
      }

      // Email Validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.formValue.email.trim()) {
        this.errors.email = "Email is required.";
        this.errorsBorder.email = true;
      } else if (!emailPattern.test(this.formValue.email)) {
        this.errors.email = "Enter a valid email address.";
        this.errorsBorder.email = true;
      } else {
        this.errorsBorder.email = false;
      }

      // Phone Number Validation
      const phonePattern = /^[0-9]{10,15}$/;
      if (!this.formValue.phoneNum.trim()) {
        this.errors.phoneNum = "Phone number is required.";
        this.errorsBorder.phoneNum = true;
      } else if (!phonePattern.test(this.formValue.phoneNum)) {
        this.errors.phoneNum = "Enter a valid phone number.";
        this.errorsBorder.phoneNum = true;
      } else {
        this.errorsBorder.phoneNum = false;
      }

      // Password Validation
      if (!this.formValue.password.trim()) {
        this.errors.password = "Password is required.";
        this.errorsBorder.password = true;
      } else if (this.formValue.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
        this.errorsBorder.password = true;
      } else {
        this.errorsBorder.password = false;
      }

      // Return true if there are no errors
      return Object.keys(this.errors).length === 0;
    },

    //submit form
    async submitForm() {
      this.isLoading = true;

      try {
        if (this.validateForm()) {
          // Prepare the user data to send to the API
          const newUser = {
            full_name: this.formValue.fullName,
            email: this.formValue.email,
            phone_number: this.formValue.phoneNum,
            password: this.formValue.password,
            remember_me: this.formValue.rememberMe,
          };

          // Check if the email is already registered on the json server http://localhost:3000/users
          const existingUser = this.userDataApi.find(
            (user) => user.email === this.formValue.email
          );
          if (existingUser) {
            await Swal.fire({
              icon: "warning",
              title: "Email Already Used",
              text: "This email is already registered. Please log in.",
              confirmButtonColor: "#09203e",
            });
            this.isLoading = false;
            this.$router.push("/login");
            return;
          } else {
            // Send new user data to the json serve "http://localhost:3000/users"
            const postResponse = await fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            });

            // Log the response for debugging
            const responseData = await postResponse.json();
            console.log("Response Data:", responseData);

            // Clear the form and show success message
            this.formValue = {
              fullName: "",
              email: "",
              phoneNum: "",
              password: "",
              rememberMe: false,
            };
            this.isLoading = false;
            await Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registration Successful",
              confirmButtonColor: "#09203e",
            });
            this.$router.push("/login");
          }
        }
      } catch (error) {
        console.error("Error saving data:", error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred during registration. Please try again.",
          confirmButtonColor: "#09203e",
        });
      } finally {
        this.isLoading = false;
      }
    },
  },

  watch: {
    "formValue.fullName"(newValue) {
      if (newValue.trim()) {
        this.errorsBorder.fullName = false;
        this.errors.fullName = "";
      } else {
        this.errorsBorder.fullName = true;
        this.errors.fullName = "Full name is required.";
      }
    },
    "formValue.email"(newValue) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (newValue.trim()) {
        if (emailPattern.test(this.formValue.email)) {
          this.errorsBorder.email = false;
          this.errors.email = "";
        } else {
          this.errorsBorder.email = true;
          this.errors.email = "Enter a valid email address.";
        }
      }
    },
    "formValue.phoneNum"(newValue) {
      const phonePattern = /^[0-9]{10,15}$/;
      if (newValue.trim()) {
        if (phonePattern.test(this.formValue.phoneNum)) {
          this.errorsBorder.phoneNum = false;
          this.errors.phoneNum = "";
        } else {
          this.errorsBorder.phoneNum = true;
          this.errors.phoneNum = "Enter a valid phone number.";
        }
      }
    },
    "formValue.password"(newValue) {
      if (newValue) {
        if (this.formValue.password.length < 6) {
          this.errorsBorder.password = true;
          this.errors.password = "Password must be at least 6 characters.";
        } else {
          this.errorsBorder.password = false;
          this.errors.password = "";
        }
      }
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.signUp-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.signUp-content {
  padding: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
}

.header h2 {
  font-weight: 600;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 0;
}

.form-container .des {
  color: #a8a9aa;
  font-size: 14px;
  font-weight: 300 !important;
  margin-bottom: 5px;
}

.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
}

#email-icon {
  position: absolute;
  top: 55%;
  left: 16px;
  font-size: 25px;
  color: #9e9e9e;
}

.form-group .img-container img {
  position: absolute;
  top: 58%;
  left: 16px;
  color: #9e9e9e;
}

#password-eye {
  position: absolute;
  top: 55%;
  right: 16px;
  color: #9e9e9e;
  font-size: 25px;
}

.form-label-text {
  font-weight: 600;
  font-size: 16px;
  color: #09203e;
  cursor: pointer;
}

.input {
  width: 100%;
  /* border: 1px solid #e0e0e0; */
  border: 1px solid #3532326b !important;
  border-radius: 12px;
  padding: 13px;
  font-size: 16px;
  outline: none;
}

.input.email-input {
  padding: 13px 13px 13px 56px;
}

.input::placeholder {
  color: #9e9e9e;
}

.password-input {
  padding: 16px 56px 16px 56px;
}

.container-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* .checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  transform: scale(1);
  cursor: pointer;
  border-radius: 5px;
} */

.checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #9e9e9e;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  position: relative;
}

.checkbox input[type="checkbox"]:checked {
  background-color: #09203e;
  border-color: #09203e;
}

.checkbox input[type="checkbox"]::after {
  content: "✔";
  font-size: 14px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.checkbox input[type="checkbox"]:checked::after {
  display: block;
}

.forgot {
  color: #9e9e9e;
  cursor: pointer;
}

.signUp-button {
  background: #09203e;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 16px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600 !important;
  cursor: pointer;
  margin: 20px 0 6px;
}

.signUp-button-container {
  display: flex;
  flex-direction: column;
}

.signUp-link {
  color: #09203e;
  font-weight: 500;
}

.footer-link {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #a8a9aa;
}

.spinner-border {
  margin-right: 5px;
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}

/* error */
.error {
  font-size: 11px;
  margin-top: 2px;
  color: #dc3545;
  position: absolute;
  bottom: -16px;
  left: 0;
}

.error-border {
  border: 1px solid #dc3545 !important;
}

/* .input:focus {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  outline: none;
} */
</style>
