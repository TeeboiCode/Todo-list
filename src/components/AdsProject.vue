<template>
  <div class="container">
    <div v-if="!showPreSignUp" class="container2">
      <div class="advert-button">
        <div class="back-btn" v-if="imgIndex !== 0" @click="prevImage">
          <img src="../assets/back-arrow-icon.png" width="28" height="25" />
        </div>
        <button
          type="button"
          v-show="!(imgIndex === images.length - 1)"
          @click="skipAds"
        >
          Skip
        </button>
      </div>

      <div class="advert-img">
        <div
          class="advert-img-container"
          @touchstart="startSwipe"
          @touchmove="moveSwipe"
          @touchend="endSwipe"
        >
          <div class="swipe-wrapper" :style="swipeStyle">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              class="advert-image"
            />
          </div>
        </div>
      </div>

      <div class="welcome">
        <h3>Welcome to <span>Taskly</span></h3>
        <p class="welcome-text">{{ text[imgIndex] }}</p>

        <div class="welcome-btn">
          <button type="button" @click="nextImage">Next</button>
        </div>

        <div class="scroll">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="['scroll-dot', { active: imgIndex === index }]"
          ></div>
        </div>
      </div>
    </div>

    <div v-else>
      <PreSignupVue @back="imgIndex = images.length - 1" />
    </div>

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
        "Effortlessly manage your tasks and achieve more.",
      ],
      imgIndex: 0,
      startX: 0,
      swipeOffset: 0,
      isSwiping: false,
    };
  },
  computed: {
    swipeStyle() {
      return {
        transform: `translateX(calc(-${this.imgIndex * 100}% + ${
          this.swipeOffset
        }px))`,
        transition: this.isSwiping ? "none" : "transform 0.3s ease-in-out",
      };
    },
    showPreSignUp() {
      return this.imgIndex === this.images.length;
    },
  },
  methods: {
    nextImage() {
      if (this.imgIndex < this.images.length) {
        this.imgIndex++;
      }
    },
    prevImage() {
      if (this.imgIndex > 0) {
        this.imgIndex--;
      }
    },
    skipAds() {
      this.imgIndex = this.images.length;
    },
    startSwipe(event) {
      this.startX = event.touches[0].clientX;
      this.isSwiping = true;
    },
    moveSwipe(event) {
      let currentX = event.touches[0].clientX;
      this.swipeOffset = currentX - this.startX;
    },
    endSwipe(event) {
      let endX = event.changedTouches[0].clientX;
      this.isSwiping = false;

      if (this.startX - endX > 50 && this.imgIndex < this.images.length - 1) {
        this.imgIndex++;
      } else if (endX - this.startX > 50 && this.imgIndex > 0) {
        this.imgIndex--;
      }

      this.swipeOffset = 0;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px 16px;
}
.advert-button {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
.advert-button button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: transparent;
  color: #a8a9aa;
  font-size: 18px;
  cursor: pointer;
}

.back-btn {
  position: absolute;
  top: 1.1rem;
  left: 1rem;
}

.advert-img {
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 35px; */
}
.advert-img-container {
  width: 80%;
  height: 250px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swipe-wrapper {
  display: flex;
  width: 300%;
}

.advert-image {
  width: 100%;
  flex: 0 0 100%;
  transition: transform 0.3s ease-in-out;
}

.welcome {
  text-align: center;
  margin-top: -17px;
}
.welcome h3 {
  color: #000;
  font-size: 18px;
  font-weight: 500;
}
.welcome h3 span {
  color: #219afd;
  font-weight: 600;
}
.welcome-text {
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
  color: #000;
}
.welcome-btn {
  width: 100%;
  margin-bottom: 3%;
}
.welcome-btn button {
  background: #09203e;
  padding: 12px 120px;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
}

.scroll {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.scroll-dot {
  width: 10px;
  height: 10px;
  background: rgba(217, 217, 217, 1);
  border-radius: 50%;
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
}

@media (min-height: 568px) {
  .welcome {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    padding: 0px 25px !important;
  }

  .advert-img {
    margin-top: 30%;
  }

  .advert-image {
    scale: 1.1;
  }
}

@media (min-height: 620px) {
  .advert-img-container {
    height: 295px;
  }

  .welcome {
    bottom: 80px;
  }
}

@media (min-height: 700px) {
  .advert-img {
    margin-top: 35%;
  }
}

@media (min-height: 800px) {
  .advert-img {
    margin-top: 45%;
  }

  .welcome {
    bottom: 95px;
  }
}
</style>
