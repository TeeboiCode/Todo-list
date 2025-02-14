<template>
  <div class="home">
    <div class="container-fluid p-0 m-0">
      <!-- showCoverPage at default -->
      <div v-if="showCoverPage">
        <CoverPageVue />
      </div>

      <!-- show AdsProject after 5secs -->
      <div v-else>
        <AdsProjectVue />
      </div>
    </div>
  </div>
</template>

<script>
import CoverPageVue from "../components/CoverPage.vue";
import AdsProjectVue from "../components/AdsProject.vue";
export default {
  name: "HomeView",
  components: {
    CoverPageVue,
    AdsProjectVue,
  },
  data() {
    return {
      showCoverPage: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCoverPage = false;
    }, 4500);
  },
};
</script>
