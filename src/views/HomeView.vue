<template>
  <div class="home">
    <!-- <CoverPageVue /> -->
     <AdsProjectVue />
  </div>
</template>

<script>
import CoverPageVue from "../components/CoverPage.vue";
export default {
  name: "HomeView",
  components: {
    CoverPageVue,
  },
};
</script>
