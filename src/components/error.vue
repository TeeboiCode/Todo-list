<template>
  <div class="container">
    <div class="signup-box">
      <!-- Back Button & Title -->
      <div class="header">
        <span class="back-icon"><i class="fa-solid fa-less-than"></i></span>
        <h2 class="title">Let's Get Started</h2>
      </div>

      <!-- "Sign Up" text -->
      <h3 class="signup-text">Sign Up</h3>
      <p class="subtitle">Enter Your Details Below</p>

      <form>
        <!-- Full Name -->
        <div class="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" required />
        </div>

        <!-- Email -->
        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="Adebayonisola@gmail.com" required />
        </div>

        <!-- Phone Number -->
        <div class="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="07050419815" required />
        </div>

        <!-- Password -->
        <div class="input-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <!-- Remember Me -->
        <div class="remember-me">
          <input type="checkbox" />
          <label>Remember Me</label>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btns">Sign Up</button>
      </form>

      <!-- Login Link -->
      <p class="login-link">
        Already Have An Account?
        <a href="#">Log In</a>
      </p>
    </div>
  </div>
</template>

<script></script>
<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

/* Signup Box */
.signup-box {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.back-icon {
  position: absolute;
  left: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #000;
}

/* Title and Signup Text */
.title {
  font-size: 22px;
  color: #09203e;
}

.signup-text {
  font-size: 18px;
  color: #000;
  margin-top: 10px;
  text-align: left;
}

/* Subtitle */
.subtitle {
  font-size: 14px;
  color: #000;
  margin-bottom: 20px;
  text-align: left;
}

/* Input Group */
.input-group {
  text-align: left;
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #000;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  border-radius: 10px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

/* Phone Number Input */
.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.country-code {
  background-color: #eee;
  padding: 10px;
  font-size: 14px;
  border-right: 1px solid #ccc;
}

.phone-input input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
}

/* Remember Me */
.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #000;
}

.remember-me input {
  margin-right: 5px;
}

/* Sign-Up Button */
.btns {
  width: 100%;
  background-color: #1a1f36;
  color: white;
  padding: 12px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btns:hover {
  background-color: #0f172a;
}

/* Login Link */
.login-link {
  margin-top: 15px;
  font-size: 14px;
  color: #000;
}

.login-link a {
  color: #d9534f;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

/* RESPONSIVENESS */

@media screen and (max-width: 480px) {
  .signup-box {
    padding: 10px;
    width: 100%;
  }

  .back-icon {
    font-size: 18px;
    left: 5px;
  }

  .title {
    font-size: 20px;
  }

  .signup-text,
  .subtitle {
    font-size: 16px;
  }

  .input-group input,
  .phone-input input {
    padding: 8px;
    font-size: 13px;
  }

  .btns {
    padding: 10px;
    font-size: 14px;
  }
}

/* For medium screens like tablets (481px - 768px) */
@media screen and (max-width: 768px) {
  .signup-box {
    width: 100%;
  }
}
</style>
