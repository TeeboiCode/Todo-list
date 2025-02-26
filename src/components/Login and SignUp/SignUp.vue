<template>
  <div>
    <div class="sign-up-contain">
      <div class="header">
        <div class="back-btn" @click="$router.push('/presignup')">
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
              <span v-else>Sign Up</span>
            </button>
          </div>
          <div class="col-12 mb-3">
            <p class="footer-link">
              already have an account ?
              <span class="login-link" @click="$router.push('/login')"
                >Login</span
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

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
      },
      isLoading: false,
    };
  },
  watch: {
    // Watch each form field and clear its error when it's filled
    "formValue.fullName"(newValue) {
      if (newValue.trim()) {
        this.errors.fullName = false;
      }
    },
    "formValue.email"(newValue) {
      if (newValue.trim()) {
        this.errors.email = false;
      }
    },
    "formValue.phoneNum"(newValue) {
      if (newValue.trim()) {
        this.errors.phoneNum = false;
      }
    },
    "formValue.password"(newValue) {
      if (newValue) {
        this.errors.password = false;
      }
    },
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
      const existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];
      return existingUsers.some((user) => user.email === email);
    },
    async submitForm() {
      this.isLoading = true;
      try {
        this.resetErrors();
        let hasError = false;

        // Validate fields
        if (!this.formValue.fullName.trim()) {
          this.errors.fullName = true;
          hasError = true;
        }
        if (!this.formValue.email.trim()) {
          this.errors.email = true;
          hasError = true;
        }
        if (!this.formValue.phoneNum.trim()) {
          this.errors.phoneNum = true;
          hasError = true;
        }
        if (!this.formValue.password) {
          this.errors.password = true;
          hasError = true;
        }

        if (hasError) {
          // Handle validation errors
          Swal.fire({
            icon: "error",
            title: "Validation Error",
            text: "Please fill in all required fields.",
            confirmButtonColor: "#09203e",
          });
          return;
        }

        // Prepare the user data to send to the API
        const newUser = {
          full_name: this.formValue.fullName,
          email: this.formValue.email,
          phone_number: this.formValue.phoneNum,
          password: this.formValue.password,
        };

        // Send new user data to the external API
        const postResponse = await fetch(
          "https://task.fashion-life-agency.com/signup.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );

        // Log the response for debugging
        const responseData = await postResponse.json();
        console.log("Response Data:", responseData);

        // Check if the response indicates an error
        if (responseData.status === "error") {
          if (responseData.message === "Email already exists") {
            await Swal.fire({
              icon: "warning",
              title: "Email Already Used",
              text: "This email is already registered. Please log in.",
              confirmButtonColor: "#09203e",
            });
            this.$emit("login"); // Emit the login event to navigate to the login page
            return;
          }
          // Handle other potential error messages from the API
          await Swal.fire({
            icon: "error",
            title: "Error",
            text:
              responseData.message || "An error occurred. Please try again.",
            confirmButtonColor: "#09203e",
          });
          return;
        }

        // Clear the form and show success message
        this.formValue = {
          fullName: "",
          email: "",
          phoneNum: "",
          password: "",
          rememberMe: false,
        };

        // Show success message
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now log in.",
          confirmButtonColor: "#09203e",
        });
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
.form-control {
  height: 3rem;
}

.form-check-input:checked {
  background-color: #09203e;
  border-color: #09203e;
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

.spinner-border {
  margin-right: 5px;
}
</style>
