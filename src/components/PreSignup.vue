<template>
  <div>
    <div class="container-fluid p-0">
      <div class="login-box">
        <!-- Header -->
        <div class="header">
          <button class="login-btn">Log In</button>
        </div>

        <!-- Illustration -->
        <div class=".advert-img" id="advert">
          <div class="advert-img-container">
            <img
              src="..\assets\preSignUP-1.png"
              alt="Taskly Illustration"
              class="illustration"
              data-aos="fade-left"
            />
          </div>
        </div>

        <!-- Subtitle -->
        <p class="subtitle">Stay Organized. Stay Focused. Get Things Done</p>

        <!-- Signup Button -->
        <button class="btn signup-btn">
          <router-link to="/signPg" style="color: #fff; text-decoration: none"
            >Sign Up</router-link
          >
        </button>

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
    </div>
    <div class="footerContainer">
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
/* Header */
.header {
  display: flex;
  justify-content: end;
  align-items: center;
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

#advert {
  display: flex;
  justify-content: center;
  align-items: center;
}

.advert-img-container {
  width: 70%;
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.advert-img-container img {
  width: 100%;
}

/* Subtitle */
.subtitle {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  padding: 0 10px;
  text-align: center;
  margin-top: -20px;
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

.login-btn:hover .signup-btn:hover {
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

.footerContainer {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  text-align: center;
  align-items: center;
}

@media (min-height: 568px) {
  .advert-img img {
    width: 100%;
  }

  #advert {
    margin-top: 80px;
  }
}

@media (min-height: 620px) {
  .advert-img-container {
    width: 100%;
    height: 295px;
    background: transparent;
  }
}

@media (min-height: 700px) {
  .footerContainer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (min-height: 800px) {
  .advert-button button {
    margin-top: 80px;
  }

  .container {
    padding: 12px 20px;
  }

  #advert {
    margin-top: 150px;
  }
}
</style>
