<template>
  <div class="home">
    <!-- <CoverPageVue /> -->
     <AdsProjectVue />
  </div>
</template>

<script>
// import CoverPageVue from "../components/CoverPage.vue";
import AdsProjectVue from "../components/AdsProject.vue";
export default {
  name: "HomeView",
  components: {
    // CoverPageVue,
    AdsProjectVue,
  },
};
</script>
