<template>
  <div>
    <div class="sign-up-contain">
      <div class="header">
        <div class="back-btn" @click="$router.back()">
          <img
            src="../../assets/back-arrow-icon.png"
            width="28"
            height="25"
            alt=""
          />
        </div>
        <h3 class="heading">Sign Up</h3>
      </div>

      <div class="signUp-form-container">
        <p class="des">enter your details below</p>

        <form
          class="row g-3 needs-validation"
          novalidate
          @submit.prevent="submitForm"
        >
          <div class="col-md-4">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.fullName }"
              id="fullName"
              v-model.trim="formValue.fullName"
              placeholder="Full Name"
              ref="fullName"
              required
            />
            <div class="valid-feedback">Please provide a valid name.</div>
          </div>

          <div class="col-md-4">
            <label for="email" class="form-label">Email</label>
            <div class="input-group">
              <span
                class="input-group-text border-end-0"
                id="inputGroupPrepend2"
              >
                <i class="fa-solid fa-envelope" style="color: #a8a9aa"></i>
              </span>
              <input
                type="email"
                placeholder="ayomideakorede0@gmail.com"
                class="form-control border-start-0"
                :class="{ 'is-invalid': errors.email }"
                id="email"
                v-model="formValue.email"
                ref="email"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <label for="phoneNum" class="form-label">Phone Number</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.phoneNum }"
              id="phoneNum"
              v-model.trim="formValue.phoneNum"
              placeholder="07050419815"
              ref="phoneNum"
              required
            />
            <div class="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>

          <div class="col-md-4">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <span class="input-group-text border-end-0" id="password">
                <div class="icon">
                  <img
                    src="../../assets/icon-park-solid_personal-privacy.png"
                    width="24"
                    height="24"
                  />
                </div>
              </span>
              <input
                type="password"
                placeholder="Password"
                class="form-control pass border-start-0"
                :class="{ 'is-invalid': errors.password }"
                id="password"
                v-model="formValue.password"
                ref="password"
                required
              />
            </div>
            <div class="valid-feedback">Please provide a valid password.</div>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="invalidCheck"
                v-model="formValue.rememberMe"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                remember me
              </label>
              <!-- <div class="invalid-feedback">
              You must agree before submitting.
            </div> -->
            </div>
          </div>
          <div class="col-12 mt-5">
            <button class="btn btn-primary p-3 submitForm w-100" type="submit">
              Sign Up
            </button>
          </div>
          <div class="col-12 mb-3">
            <p class="footer-link">
              already have an account ?
              <span class="login-link" @click="$emit('login')">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "SignUpVue",
  emits: ["login"],
  data() {
    return {
      formValue: {
        fullName: "",
        email: "",
        phoneNum: "",
        password: "",
        rememberMe: false,
      },
      errors: {
        fullName: false,
        email: false,
        phoneNum: false,
        password: false,
      }
    };
  },
  watch: {
    // Watch each form field and clear its error when it's filled
    'formValue.fullName'(newValue) {
      if (newValue.trim()) {
        this.errors.fullName = false;
      }
    },
    'formValue.email'(newValue) {
      if (newValue.trim()) {
        this.errors.email = false;
      }
    },
    'formValue.phoneNum'(newValue) {
      if (newValue.trim()) {
        this.errors.phoneNum = false;
      }
    },
    'formValue.password'(newValue) {
      if (newValue) {
        this.errors.password = false;
      }
    }
  },
  methods: {
    resetErrors() {
      this.errors = {
        fullName: false,
        email: false,
        phoneNum: false,
        password: false,
      };
    },
    checkExistingEmail(email) {
      const existingUsers = JSON.parse(localStorage.getItem('usersData')) || [];
      return existingUsers.some(user => user.email === email);
    },
    submitForm() {
      try {
        this.resetErrors();
        let hasError = false;
        let firstEmptyField = null;

        // Check each field and mark errors
        if (!this.formValue.fullName.trim()) {
          this.errors.fullName = true;
          hasError = true;
          firstEmptyField = 'fullName';
        }
        if (!this.formValue.email.trim()) {
          this.errors.email = true;
          hasError = true;
          firstEmptyField = firstEmptyField || 'email';
        }
        if (!this.formValue.phoneNum.trim()) {
          this.errors.phoneNum = true;
          hasError = true;
          firstEmptyField = firstEmptyField || 'phoneNum';
        }
        if (!this.formValue.password) {
          this.errors.password = true;
          hasError = true;
          firstEmptyField = firstEmptyField || 'password';
        }

        if (hasError) {
          if (firstEmptyField) {
            this.$refs[firstEmptyField].focus();
          }
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Please fill in the ${firstEmptyField.replace(/([A-Z])/g, ' $1').toLowerCase()} field`,
            confirmButtonColor: '#09203e'
          });
          return;
        }

        // Check for existing email
        if (this.checkExistingEmail(this.formValue.email.trim())) {
          this.errors.email = true;
          this.$refs.email.focus();
          Swal.fire({
            icon: 'error',
            title: 'Email Already Exists',
            text: 'This email is already registered. Please use a different email.',
            confirmButtonColor: '#09203e'
          });
          return;
        }

        // Get existing users or initialize empty array
        const existingUsers = JSON.parse(localStorage.getItem('usersData')) || [];
        
        // Add new user to array
        existingUsers.push({
          ...this.formValue,
          id: Date.now(), // Add unique ID for each user
          createdAt: new Date().toISOString()
        });

        // Save updated array back to localStorage
        localStorage.setItem('usersData', JSON.stringify(existingUsers));
        
        console.log('All users:', existingUsers);
        
        // Clear the form
        this.formValue = {
          fullName: "",
          email: "",
          phoneNum: "",
          password: "",
          rememberMe: false,
        };

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Registration successful!',
          confirmButtonColor: '#09203e'
        });
      } catch (error) {
        console.error('Error saving data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error saving your data. Please try again.',
          confirmButtonColor: '#09203e'
        });
      }
    },
  },
};
</script>

<style scoped>
.sign-up-contain {
  padding: 15px 16px;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0 10px;
}

.signUp-form-container .des {
  color: #a8a9aa;
  font-size: 14px;
  margin-top: 20px;
  font-weight: 300 !important;
}

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

.input-group-text {
  background-color: transparent !important;
  border-color: #3532326b !important;
}

.form-control.pass {
  padding: 0.375rem 2.5rem 0.375rem 0.5rem;
}

.btn-primary.submitForm {
  border-radius: 50px !important;
  background: #09203e !important;
  border-color: #09203e !important;
}

.btn.submitForm {
  padding: 12px auto !important;
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
</style>
