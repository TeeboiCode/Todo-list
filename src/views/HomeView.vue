<template>
  <div class="home">
    <div class="container-fluid p-0 m-0">
      <!-- showCoverPage at default -->
      <div v-if="showCoverPage">
        <CoverPageVue />
      </div>

      <!-- show AdsProject after 5secs -->
      <div v-else>
        <!-- if the local storage data for user remeber me is true show AppDashboard -->
        <AppDashboardVue v-if="getUserData" />

        <AdsProjectVue v-else />
      </div>
    </div>
  </div>
</template>

<script>
import CoverPageVue from "../components/CoverPage.vue";
import AdsProjectVue from "../components/AdsProject.vue";
import AppDashboardVue from "../components/App/AppDashboard.vue";
export default {
  name: "HomeView",
  components: {
    CoverPageVue,
    AdsProjectVue,
    AppDashboardVue,
  },
  data() {
    return {
      showCoverPage: true,
      userRememberMe: null,
    };
  },
  computed: {
    getUserData() {
      return this.$store.getters.isAuthenticated;
    },
  },

  mounted() {
    setTimeout(() => {
      this.showCoverPage = false;
    }, 5000);
  },
};
</script>
