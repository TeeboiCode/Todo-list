<template>
  <div class="cover-container">
    <div class="brand-container">
      <img
        src="../assets/logo.png"
        class="brand animate__animated animate__fadeIn animate__slow"
        alt=""
      />
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
  width: 200px;
}

@media (min-width: 768px) {
  .brand {
    width: 300px;
  }
}
</style>
