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
          <h2 class="m-0">Login</h2>
        </div>

        <p class="des">Enter Your Details Below</p>

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
              @click="changeRe"
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
            Login
          </button>
          <p class="footer-link">
            already have an account ?
            <span class="signUp-link" @click="$router.push('/signPg')">
              Sign Up
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
        email: "",
        password: "",
        rememberMe: false,
      },
      errors: {},
      userDataApi: [],
      isLoading: false,
      showConfirmPassword: false,
      errorsBorder: {
        email: false,
        password: false,
      },
      result: {
        email: false,
        password: false,
      },
    };
  },

  methods: {
    changeRe() {
      this.formValue.rememberMe = !this.formValue.rememberMe;
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
      try {
        if (this.validateForm()) {
          this.isLoading = true;
          // Prepare the user data to send to the API
          const newUser = {
            email: this.formValue.email,
            password: this.formValue.password,
            remember_me: this.formValue.rememberMe,
          };

          // Call Vuex login action
          const success = await this.$store.dispatch("login", newUser);

          // Reset form fields
          this.formValue = {
            email: "",
            password: "",
            rememberMe: false,
          };

          this.isLoading = false;

          if (success) {
            this.$router.push("/dashboard");
          }
        }
      } catch (error) {
        this.isLoading = false;
      }
    },
  },

  watch: {
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
