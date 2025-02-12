<template>
  <div class="home">
    <div class="container-fluid p-0 m-0">
      <div v-show="showCoverPage">
        <CoverPageVue />
      </div>
    </div>
  </div>
</template>

<script>
import CoverPageVue from "../components/CoverPage.vue";
export default {
  name: "HomeView",
  components: {
    CoverPageVue,
  },
  data() {
    return {
      showCoverPage: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCoverPage = false;
    }, 15000);
  },
};
</script>
