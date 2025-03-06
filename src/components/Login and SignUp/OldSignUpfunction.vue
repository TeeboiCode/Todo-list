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

        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName" class="form-label-text">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            class="input fullName-input"
            v-model.trim="formValue.fullName"
          />
          <span class="error" v-if="errors.fullName">{{
            errors.fullName
          }}</span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label-text">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            class="input email-input"
            v-model="formValue.email"
          />
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
          <i id="email-icon" class="fa-solid fa-envelope"></i>
        </div>

        <!-- Phone Number -->
        <div class="form-group">
          <label for="telephone" class="form-label-text">Phone Number</label>
          <input
            type="tel"
            placeholder="07050419815"
            id="telephone"
            class="input tel-input"
            v-model.trim="formValue.phoneNum"
          />
          <span class="error" v-if="errors.phoneNum">{{
            errors.phoneNum
          }}</span>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password" class="form-label-text">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            class="input password-input"
            v-model="formValue.password"
          />
          <span class="error" v-if="errors.password">{{
            errors.password
          }}</span>
          <div class="img-container">
            <img
              src="../../assets/icon-park-solid_personal-privacy.png"
              width="27"
            />
          </div>
          <i id="password-eye" class="fa-solid fa-eye"></i>
        </div>

        <!-- Checkbox -->
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

        <!-- Submit Button -->
        <div class="signUp-button-container">
          <button class="signUp-button">Sign Up</button>
          <p class="footer-link">
            Already have an account?
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
    };
  },

  methods: {
    validateForm() {
      this.errors = {}; // Reset errors

      // Full Name Validation
      if (!this.formValue.fullName) {
        this.errors.fullName = "Full name is required.";
      }

      // Email Validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.formValue.email) {
        this.errors.email = "Email is required.";
      } else if (!emailPattern.test(this.formValue.email)) {
        this.errors.email = "Enter a valid email address.";
      }

      // Phone Number Validation
      const phonePattern = /^[0-9]{10,15}$/; // Accepts 10-15 digit numbers
      if (!this.formValue.phoneNum) {
        this.errors.phoneNum = "Phone number is required.";
      } else if (!phonePattern.test(this.formValue.phoneNum)) {
        this.errors.phoneNum = "Enter a valid phone number.";
      }

      // Password Validation
      if (!this.formValue.password) {
        this.errors.password = "Password is required.";
      } else if (this.formValue.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      return Object.keys(this.errors).length === 0; // Return true if no errors
    },

    submitForm() {
      if (this.validateForm()) {
        console.log("Form submitted successfully:", this.formValue);
        alert("Sign-up successful!");
      } else {
        console.log("Validation errors:", this.errors);
      }
    },
  },
};
</script>


<style scoped>
.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

/* You can add more styling to improve UI */
</style>
