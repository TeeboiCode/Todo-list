<template>
  <div class="preloader" v-if="isLoading">
    <div class="loader-container">
      <div class="loader-square">
        <img
          src="../assets/logo-icon.png"
          alt="Logo"
          class="loader-image checkmark-animation"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  margin: 0;
  padding: 0;
}

.loader-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

.loader-square {
  width: 80px;
  height: 80px;
  background-color: #09203e;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(9, 32, 62, 0.2);
}

.loader-image {
  width: 50px;
  height: 44px;
  animation: imageAnimation 2s infinite ease-in-out;
}

@keyframes imageAnimation {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

/* Animation 1: Fade and Rotate */
.fade-rotate {
  animation: fadeRotate 2s infinite ease-in-out;
}

@keyframes fadeRotate {
  0% {
    opacity: 0.5;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: rotate(180deg);
  }
  100% {
    opacity: 0.5;
    transform: rotate(360deg);
  }
}

/* Animation 2: Pulse */
.pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}

/* Animation 3: Slide and Fade */
.slide-fade {
  animation: slideFade 2s infinite ease-in-out;
}

@keyframes slideFade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

/* Animation 4: Spin Wave */
.spin-wave {
  animation: spinWave 3s infinite ease-in-out;
}

@keyframes spinWave {
  0% {
    transform: rotate(0deg) scale(1);
  }
  33% {
    transform: rotate(120deg) scale(1.2);
  }
  66% {
    transform: rotate(240deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

/* Animation 5: Flip and Scale */
.flip-scale {
  animation: flipScale 2.5s infinite ease-in-out;
}

@keyframes flipScale {
  0% {
    transform: perspective(400px) rotateY(0) scale(1);
  }
  50% {
    transform: perspective(400px) rotateY(180deg) scale(1.2);
  }
  100% {
    transform: perspective(400px) rotateY(360deg) scale(1);
  }
}

@keyframes squareAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.checkmark-animation {
  animation: checkmark 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  75% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
