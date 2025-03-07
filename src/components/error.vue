<template>
  <div class="login-container">
    <div class="login-content">
      <form class="form-container" @submit.prevent="handleLogin">
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
            placeholder="Email"
            id="email"
            class="input email-input"
          />
          <i id="email-icon" class="fa-solid fa-envelope"></i>
        </div>

        <div class="form-group">
          <label for="password" class="form-label-text">Password</label>
          <input
            type="password"
            placeholder="**********"
            id="password"
            class="input password-input"
          />
          <div class="img-container">
            <img
              src="../../assets/icon-park-solid_personal-privacy.png"
              width="27"
            />
          </div>
          <i id="password-eye" class="fa-solid fa-eye"></i>
        </div>

        <div class="container-checkbox">
          <div class="checkbox">
            <input type="checkbox" id="remember-me" />
            <label class="m-0" for="remember-me">Remember Me</label>
          </div>
          <div class="forgot">
            <label for="" @click="$router.push('/')">Forget Password</label>
          </div>
        </div>

        <div class="login-button-container">
          <button type="submit" class="login-button" :disabled="isLoading">
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
            <span class="login-link" @click="$router.push('/Sign Up')"
              >Sign Up</span
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginVue",
  data() {
    return {
      errors: {},
      isLoading: false,
      errorsBorder: {
        fullName: false,
        email: false,
        phoneNum: false,
        password: false,
      },
    };
  },

  methods: {
    //form validation
    validateForm() {},

    async handleLogin() {
      this.isLoading = true;

      try {
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
.login-container {
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

.login-content {
  padding: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  padding: 13px 13px 13px 56px;
  font-size: 16px;
  outline: none;
}

.input::placeholder {
  color: #9e9e9e;
}

.password-input {
  padding: 13px 56px 13px 56px;
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

.login-button {
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

.login-button-container {
  display: flex;
  flex-direction: column;
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
</style>
