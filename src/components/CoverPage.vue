<template>
  <div class="cover-container">
    <div class="brand-container">
      <!-- <img
        src="../assets/logo.png"
        class="brand animate__animated animate__fadeIn animate__slow"
        alt=""
      /> -->
      <div class="brand">
        <img
          src="../assets/logo-icon.png"
          class="logo-icon"
          data-aos="flip-left"
          alt=""
        />
        <img src="../assets/logo-text.png" class="logo-text" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverPageVue",
};
</script>

<style scoped>
.cover-container {
  width: 100%;
  height: 100vh;
  background: #09203e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 9px;
}

.brand .logo-icon {
  width: 37px;
}

.brand img {
  width: 130px;
}

@media (min-width: 768px) {
  .brand {
    width: 300px;
  }
}
</style>
