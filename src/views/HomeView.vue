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
        <AppDashboardVue v-if="userRememberMe" />

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
  methods: {
    // get user's data from local storage
    getUserData() {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      if (userData) {
        this.userRememberMe = userData.remember_me;
      } else {
        return null;
      }

      console.log(this.userRememberMe);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showCoverPage = false;
    }, 5000);

    this.getUserData();
  },
};
</script>
