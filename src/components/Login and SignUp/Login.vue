<template>
  <div class="container">
    <div class="login-box">
      <!-- Back Button & Title -->
      <div class="header">
        <span class="back-icon"><i class="fa-solid fa-less-than"></i></span>
        <h2 class="title">Let's Get Started</h2>
      </div>

      <!-- Login Text -->
      <h3 class="login-text">Login</h3>
      <p class="subtitle">Enter Your Details Below</p>

      <form>
        <!-- Email / Phone -->
        <div class="input-group">
          <label>Email</label>
          <div class="input-icon">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <input type="text" placeholder="Email / Number" required />
          </div>
        </div>

        <!-- Password -->
        <div class="input-group">
          <label>Password</label>
          <div class="input-icon">
            <span class="icon"><i class="fa-solid fa-user"></i></span>
            <input type="password" placeholder="" required />
          </div>
        </div>

        <!-- Remember Me & Forget Password -->
        <div class="extras">
          <div class="remember-me">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <a href="#" class="forget-password">Forget Password</a>
        </div>

        <!-- Login Button -->
        <button type="submit" class="btns">Log In</button>
      </form>

      <!-- Sign Up Link -->
      <p class="signup-link">
        You Don't Have An Account? <a href="#">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>

</script>

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

/* Login Box */
.login-box {
  background-color: white;
  padding: 25px;
  border-radius: 15px;
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

/* Title & Login Text */
.title {
  font-size: 22px;
  font-weight: bold;
  color: #09203E;
}

.login-text {
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-top: 10px;
  text-align: left;
}

/* Subtitle */
.subtitle {
  font-size: 14px;
  color: #777;
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
  color: #555;
  margin-bottom: 5px;
}

/* Input with Icon */
.input-icon {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  overflow: hidden;
}

.icon {
  background-color: #eee;
  padding: 10px;
  font-size: 14px;
  color: #666;
  border-right: 1px solid #ccc;
}

.input-icon input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
  border-radius: 12px;
}

/* Remember Me & Forget Password */
.extras {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 15px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 5px;
}

.forget-password {
  color: #d9534f;
  text-decoration: none;
}

.forget-password:hover {
  text-decoration: underline;
}

/* Login Button */
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

/* Sign Up Link */
.signup-link {
  margin-top: 15px;
  font-size: 14px;
  color: #555;
}

.signup-link a {
  color: #d9534f;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* RESPONSIVENESS */

@media screen and (max-width: 480px) {
  .login-box {
    padding: 20px;
    width: 100%;
  }

  .back-icon {
    font-size: 18px;
    left: 5px;
  }

  .title {
    font-size: 20px;
  }

  .login-text, .subtitle {
    font-size: 16px;
  }

  .input-group input, .input-icon input {
    padding: 8px;
    font-size: 13px;
  }

  .btns {
    padding: 10px;
    font-size: 14px;
  }
}

/* For tablets (Medium screens) */
@media screen and (max-width: 768px) {
  .login-box {
    width: 80%;
 }
}
</style>

