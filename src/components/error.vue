<template>
  <div class="container-fluid p-0">
    <div class="login-box">
      <!-- Header -->
      <div class="header">
        <!-- <h1 class="title"><span class="checkmark">✔</span> Taskly</h1> -->
        <button class="login-btn">Log In</button>
      </div>

      <!-- Illustration -->
      <img
        src="..\assets\preSignUP-1.png"
        alt="Taskly Illustration"
        class="illustration"
      />

      <!-- Subtitle -->
      <p class="subtitle">Stay Organized. Stay Focused. Get Things Done</p>

      <!-- Signup Button -->
      <button class="btn signup-btn">Sign Up</button>

      <!-- Separator -->
      <div class="separator">
        <span class="line"></span> Or <span class="line"></span>
      </div>

      <!-- Social Logins -->
      <div class="button-group">
        <button class="btn apple">
          <i class="fa-brands fa-apple"></i>
          Continue with Apple
        </button>
        <button class="btn google">
          <i class="fa-brands fa-google"></i>
          Continue with Google
        </button>
      </div>
    </div>

    <div class="">
      <FooterContentVue />
    </div>
  </div>
</template>

<script>
import FooterContentVue from "./FooterContent.vue";
export default {
  name: "PreSignupVue",
  components: {
    FooterContentVue,
  },
};
</script>
<style scoped>
/* General Styles */
/* body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  width: 100%;
}

/* Header */
.header {
  display: flex;
  justify-content: end;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #09203e;
}

.checkmark {
  color: #09203e;
  margin-right: 5px;
}

.login-btn {
  background: none;
  border: 1.5px solid #09203e;
  padding: 3px 12px;
  border-radius: 5px;
  color: #09203e;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

.login-btn:hover {
  background: #09203e;
  color: white;
}

/* Illustration */
.illustration {
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
}

/* Subtitle */
.subtitle {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  padding: 0 10px;
}

/* Signup Button */

.signup-btn {
  background: #09203e;
  padding: 12px 120px;
  border-radius: 25px !important;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
}

.signup-btn:hover {
  background: #174884;
  color: #fff;
}

/* Separator */
.separator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  color: #666;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
}

/* Buttons */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.apple {
  background-color: white;
  color: white;
  color: black;
  border: 1px solid #ccc;
  transition: 3s;
  font-weight: 700;
}

.apple:hover {
  background-color: #f0f0f0;
}

.google {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  transition: 3s;
  font-weight: 700;
}

.google:hover {
  background-color: #f0f0f0;
}

/* Icon Styles */
.icon {
  width: 20px;
  height: 20px;
}

/* Terms */
.terms {
  font-size: 12px;
  color: gray;
  margin-top: 10px;
}

.terms a {
  color: blue;
  text-decoration: none;
}
</style>
