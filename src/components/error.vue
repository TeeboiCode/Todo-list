<template>
  <!-- container -->
  <div class="container">
    <div v-if="!showPreSignUp" class="container2">
      <!-- advert-button -->
      <div class="advert-button">
        <div class="back-btn" v-if="imgIndex !== 0" @click="prevImage">
          <img
            src="../assets/back-arrow-icon.png"
            width="28"
            height="25"
            alt=""
          />
        </div>
        <button
          type="button"
          v-show="!(imgIndex === images.length - 1)"
          @click="skipAds"
        >
          Skip
        </button>
      </div>

      <!-- advert-img -->
      <div class="advert-img">
        <div class="advert-img-container">
          <div class="swipe-wrapper">
            <template v-for="image in images" :key="image">
              <img
                @touchstart="startSwipe"
                @touchmove="moveSwipe"
                @touchend="endSwipe"
                :src="image"
                v-if="imgIndex === images.indexOf(image)"
                :style="{
                  transform: `translateX(${swipeOffset}px)`,
                  transition: isSwiping ? 'none' : 'transform 0.3s ease-in-out',
                }"
              />
            </template>
          </div>

          <!-- <div v-if="imgIndex === 1" :key="imgIndex">
            <img :src="images[1]" />
          </div>

          <div v-if="imgIndex === 2" :key="imgIndex">
            <img :src="images[2]" />
          </div> -->
        </div>
      </div>

      <!-- data-aos="fade-left" -->

      <!-- welcome -->
      <div class="welcome">
        <h3>Welcome to <span>Taskly</span></h3>
        <p class="welcome-text">{{ text[imgIndex] }}</p>

        <!-- welcome-btn -->
        <div class="welcome-btn">
          <button type="button" @click="nextImage">Next</button>
        </div>

        <!-- scroll -->
        <div class="scroll">
          <div
            class="scroll1"
            v-bind:class="imgIndex === 0 ? 'active' : ''"
          ></div>
          <div
            class="scroll2"
            v-bind:class="imgIndex === 1 ? 'active' : ''"
          ></div>
          <div
            class="scroll3"
            v-bind:class="imgIndex === 2 ? 'active' : ''"
          ></div>
        </div>
      </div>
    </div>

    <div v-else>
      <PreSignupVue @back="imgIndex = 2" />
    </div>

    <!-- imported footer-content -->
    <div v-if="!showPreSignUp" class="footerContainer">
      <FooterContent />
    </div>
  </div>
</template>

<script>
import FooterContent from "./FooterContent.vue";
import PreSignupVue from "./PreSignup.vue";
export default {
  name: "AdsProject",
  components: {
    FooterContent,
    PreSignupVue,
  },

  data() {
    return {
      images: [
        require("@/assets/ads1.png"),
        require("@/assets/ads2.png"),
        require("@/assets/ads3.png"),
      ],

      text: [
        "Your Personal Task Manager To Help You Stay Organised And Productive",
        "Stay on top of your tasks and boost your productivity with your ultimate personal organizer",
        "Effortlessly manage your tasks and achieve more .",
      ],
      startX: 0,
      swipeOffset: 0,
      isSwiping: false,
      imgIndex: 0,
    };
  },

  methods: {
    nextImage() {
      if (this.imgIndex < this.images.length) {
        this.imgIndex += 1;
      }
    },

    skipAds() {
      return (this.imgIndex = 3);
    },

    prevImage() {
      if (this.imgIndex > 0) {
        this.imgIndex -= 1;
      }
    },
    startSwipe(event) {
      this.startX = event.touches[0].clientX; // Store starting touch position
      this.isSwiping = true; // Disable transition while swiping
    },
    moveSwipe(event) {
      let currentX = event.touches[0].clientX;
      this.swipeOffset = currentX - this.startX; // Update the swipe position dynamically
    },
    endSwipe(event) {
      let endX = event.changedTouches[0].clientX;
      this.isSwiping = false; // Enable transition

      if (this.startX - endX > 50) {
        this.nextImage(); // Swiped left
      } else if (endX - this.startX > 50) {
        this.prevImage(); // Swiped right
      }

      this.swipeOffset = 0; // Reset swipe offset
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },

  computed: {
    showPreSignUp() {
      return this.imgIndex === 3;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px 16px;
}

/* advert-text */
.advert-button {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.advert-button button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: #a8a9aa;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  z-index: 999;
}

.advert-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
}

.back-btn {
  padding: 0 3px 0 0;
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  z-index: 999;
}

.advert-img-container {
  width: 70%;
  height: 208px;
  background: transparent;
}

.advert-img-container img {
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease-in-out;
}

/* welcome */
.welcome {
  text-align: center;
}

.welcome h3 {
  color: #000000;
  font-size: 18px;
  font-weight: 500;
}

.welcome h3 span {
  color: #219afd;
  font-weight: 600;
  font-size: 18px;
}

.welcome-text {
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
  color: #000000;
}

.welcome-btn {
  width: 100%;
  margin-bottom: 3%;
}

.welcome-btn button {
  background: #09203e;
  padding: 12px 120px;
  border-radius: 25px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
}

.swipe-wrapper {
  display: flex;
  width: 300%;
}

/* scroll */
.scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 5vh;
}

.scroll1,
.scroll2,
.scroll3 {
  width: 10px;
  height: 10px;
  background: rgba(217, 217, 217, 1);
  border-radius: 100px;
}

.active {
  background: #000;
}

.footerContainer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  padding: 10px;
  text-align: center;
  align-items: center;
}

@media (min-height: 568px) {
  .advert-img img {
    width: 100%;
  }

  .back-btn {
    top: 1.2rem;
  }

  .advert-button button {
    position: absolute;
    top: 1.1rem;
  }

  .advert-img-container {
    width: 100%;
  }

  /* .advert-img {
    margin-top: 80px;
  } */

  .footer-container {
    margin-bottom: 10px;
  }

  .welcome {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
  }

  .welcome-text {
    padding: 0px 25px !important;
  }
}

@media (min-height: 620px) {
  .advert-img-container {
    width: 100%;
    height: 295px;
    background: transparent;
  }

  .back-btn {
    top: 1.5rem;
  }

  .advert-button button {
    top: 1.6rem;
  }

  .welcome-text {
    font-size: 13px !important;
    padding: 3px 25px !important;
  }
  .welcome {
    bottom: 80px;
  }

  .advert-img {
    margin-top: 20%;
  }

  .advert-img img {
    scale: 1.2;
  }

  /* .advert-button button,
  .back-btn {
    top: -30px;
  } */
}

@media (min-height: 700px) {
  .advert-img {
    margin-top: 30%;
  }

  .content-container-presignup {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
  }
}

@media (min-height: 800px) {
  .container {
    padding: 12px 20px;
  }

  .container2 {
    margin-top: 4rem;
  }

  .welcome-text {
    padding: 3px 25px !important;
    font-size: 1rem;
  }

  .welcome h3 {
    font-size: 1.5rem;
  }
  .welcome {
    bottom: 100px;
  }
}

@media (max-width: 400px) {
  .advert-img img {
    scale: 1.3;
  }
}
</style>
