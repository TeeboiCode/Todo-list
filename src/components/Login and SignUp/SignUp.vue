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

        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              v-model.trim="fullName"
              placeholder="Full Name"
              required
            />
            <div class="valid-feedback">Please provide a valid name.</div>
          </div>

          <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label"
              >Email</label
            >
            <div class="input-group">
              <span
                class="input-group-text border-end-0"
                id="inputGroupPrepend2"
              >
                <i class="fa-solid fa-envelope" style="color: #a8a9aa"></i>
              </span>
              <input
                type="text"
                placeholder="ayomideakorede0@gmail.com"
                class="form-control border-start-0"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div class="col-md-4">
            <label for="Password" class="form-label">Password</label>
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
                id="password"
                aria-describedby="password"
                v-model="password"
                required
              />
            </div>
            <div class="valid-feedback">Please provide a valid name.</div>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
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
            <button
              class="btn btn-primary p-3 submitForm w-100"
              type="submit"
              @click="$router.push('/dashboard')"
            >
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
export default {
  name: "SignUpVue",
  emits: ["login"],
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
