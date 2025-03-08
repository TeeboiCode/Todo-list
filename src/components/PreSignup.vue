<template>
  <div class="preSignUp-container">
    <!-- <Preloader :isLoading="isLoading" /> -->
    <div class="container-fluid">
      <div class="login-box">
        <!-- Header -->
        <div class="header">
          <!-- <div class="back-btn" @click="$emit('back')">
            <img
              src="../assets/back-arrow-icon.png"
              width="28"
              height="25"
              alt=""
            />
          </div> -->
          <button class="login-btn" @click="$router.push('/login')">
            Login
          </button>
        </div>

        <!-- advert-img -->
        <div class="advert-img" id="advert">
          <div class="advert-img-container">
            <img
              src="..\assets\preSignUP-1.png"
              alt="Taskly Illustration"
              class="illustration"
              data-aos="fade-left"
            />
          </div>
        </div>

        <div class="content-container-presignup">
          <!-- Subtitle -->
          <p class="subtitle">Stay Organized. Stay Focused. Get Things Done</p>

          <!-- Signup Button -->

          <router-link to="/create" style="color: #fff; text-decoration: none">
            <button class="btn signup-btn">Sign Up</button>
          </router-link>

          <!-- Separator -->
          <div class="separator">
            <span class="line"></span> Or <span class="line"></span>
          </div>

          <!-- Social Logins -->
          <div class="button-group">
            <button class="btn apple">
              <!-- <i class="fa-brands fa-apple"></i> -->
              <img src="../assets/tdesign_logo-apple-filled.png" alt="" />
              Continue with Apple
            </button>
            <button class="btn google">
              <!-- <i class="fa-brands fa-google"></i> -->
              <img src="../assets/devicon_google.png" alt="" />
              Continue with Google
            </button>
          </div>
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
import Preloader from "./Preloader.vue";

export default {
  name: "PreSignupVue",
  components: {
    FooterContentVue,
    Preloader,
  },
  emits: ["back"],
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Hide preloader after 3 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  },
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  width: 100%;
  min-height: 90vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  padding: 16px 20px;
}

/* Header */
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 5px 0;
}

.login-btn {
  background: transparent;
  border: 1.5px solid #09203e;
  padding: 6px 20px;
  border-radius: 8px;
  color: #09203e;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: #09203e;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(9, 32, 62, 0.2);
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
  padding: 12px 0;
  width: 100%;
  max-width: 320px;
  border-radius: 50px !important;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 20px auto;
  display: block;
}

.signup-btn:hover {
  background: #09203e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(9, 32, 62, 0.2);
}

/* separator */
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
  color: black;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  font-weight: 700;
}

.apple:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.google {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  font-weight: 700;
}

.google:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footerContainer {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  text-align: center;
  align-items: center;
}

.button-group img {
  width: 24px;
}

@media (min-height: 568px) {
  .advert-img img {
    width: 100%;
  }

  #advert {
    margin-top: 5px;
  }
}

@media (min-width: 349px) and (min-height: 620px) {
  .advert-img-container {
    width: 100%;
    height: 295px;
    background: transparent;
  }

  .back-btn {
    margin-left: -20px;
  }

  /* .login-btn {
    margin-right: -20px;
  } */

  /* .container-fluid {
    padding: 16px 20px;
  } */
}

@media (min-height: 700px) {
  #advert {
    margin-top: 10%;
  }

  .content-container-presignup {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
  }
}

@media (min-width: 768px) {
  #advert {
    margin-top: 20%;
  }
  .footerContainer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* left: 50%;
    transform: translateX(-50%); */
  }
}

@media (min-height: 800px) {
  .container {
    padding: 12px 20px;
  }
}

@media (min-height: 820px) {
  #advert {
    margin-top: 35%;
  }
}
</style>
