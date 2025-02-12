<template>
 <div class="container">
    <div class="login-box">
      <!-- Header -->
      <div class="header">
        <h1 class="title">
          <span class="checkmark">✔</span> Taskly
        </h1>
        <button class="login-btn" >Log In</button>
      </div>

      <!-- Illustration -->
      <img src="..\assets\preSignUP-1.png" alt="Taskly Illustration" class="illustration" />

      <!-- Subtitle -->
      <p class="subtitle">Stay Organized. Stay Focused. Get Things Done</p>

      <!-- Signup Button -->
      <button class="btn signup-btn" >Sign Up</button>

      <!-- Separator -->
      <div class="separator">
        <span class="line"></span> Or <span class="line"></span>
      </div>

      <!-- Social Logins -->
      <div class="button-group">
        <button class="btn apple" >
<i class="fa-brands fa-apple"></i>
          Continue with Apple
        </button>
        <button class="btn google">
<i class="fa-brands fa-google"></i>
          Continue with Google
        </button>
      </div>

      <!-- Terms -->
      <p class="terms">
        By continuing, you agree to Taskly's
        <a href="#">Terms of Service</a>,
        <a href="#">Privacy Policy</a>, and
        <a href="#">Cookies Policy</a>.
      </p>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>


/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.login-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  text-align: center;
  max-width: 400px;
  width: 90%;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color:#09203E;
}

.checkmark {
  color:  #09203E;
  margin-right: 5px;
}

.login-btn {
  background: none;
   border: 1.5px solid #09203E;
  padding: 6px 12px;
  border-radius: 5px;
  color: #09203E;
  font-size: 14px;
  cursor: pointer;
  transition: 3s;
}

.login-btn:hover {
  background: #09203E;
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
}

/* Signup Button */
.signup-btn {
  background:  #09203E;
;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 3s;
}

.signup-btn:hover {
  background:  #174884;
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

/* Responsive Design */
@media (max-width: 480px) {
  .login-box {
    width:90%;
 }
}


</style>