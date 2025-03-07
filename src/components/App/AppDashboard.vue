<template>
  <!-- container -->
  <div>
    <div v-if="isLoading" class="container">
      <Preloader :isLoading="isLoading" />
    </div>
    <div class="container" v-else>
      <!-- greeting -->
      <div class="greeting">
        <!-- greeting-img -->
        <div class="greeting-img-containers">
          <div class="greeting-img">
            <img src="../../assets/greeting-img-2.jpeg" />
          </div>
          <h3>Hello, {{ Username.full_name }}</h3>
        </div>

        <!-- greeting-icon -->
        <div class="greeting-icon">
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>

      <!-- dashboard -->
      <div>
        <!-- dashboard-container -->
        <div class="dashboard-container">
          <!-- dashboard-content -->
          <div class="dashboard-content">
            <h3>Today's Task</h3>
            <p>0 <span> Tasks</span></p>
          </div>

          <!-- dashboard-icon -->
          <div class="dashboard-icon">
            <img src="../../assets/render-todo-check-list.png" width="113" />
          </div>

          <div class="dashboard-button">
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1 active"
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1"
            >
              in progress
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1"
            >
              completed
            </button>
          </div>
        </div>

        <!-- dashboard-img -->
        <div class="dashboard-img">
          <img :src="images[imgIndex]" />
        </div>

        <!-- dashboard-text -->
        <div class="dashboard-text mb-5">
          <h4>Get a clear view of the day ahead</h4>
          <p>
            All your tasks that are due today will show up here Tap + to add a
            task
          </p>
        </div>
      </div>
    </div>

    <div class="menu-containerBar">
      <MenuBar :menuPosition="menuPositionBar" />
    </div>
  </div>
</template>

<script>
import MenuBar from "../Menu.vue";
import Preloader from "../Preloader.vue";
export default {
  name: "AppDashboardVue",
  components: {
    MenuBar,
    Preloader,
  },
  data() {
    return {
      images: [require("@/assets/dashboard-img.png")],
      imgIndex: 0,
      Username: "",
      isHidden: false,
      menuPositionBar: "10px",
      scrollTimeout: null,
      lastScrollTop: 0,
      isLoading: true,
    };
  },
  methods: {
    handleScroll() {
      clearTimeout(this.scrollTimeout);

      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > this.lastScrollTop) {
        this.menuPositionBar = "-100px";
      } else {
        this.menuPositionBar = "10px";
      }

      this.lastScrollTop = currentScroll != 0 ? 0 : currentScroll;

      this.scrollTimeout = setTimeout(() => {
        this.menuPositionBar = "10px";
      }, 500);
    },

    // get user's data from local storage
    getUserData() {
      const userData = localStorage.getItem("currentUser");
      if (userData) {
        return (this.Username = JSON.parse(userData));
      } else {
        return null;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);

    this.getUserData();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* container */
.container {
  padding: 16px;
}

/* greeting */
.greeting {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* greeting-img */
.greeting-img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
}

.greeting-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.greeting-img-containers {
  display: flex;
  align-items: center;
  gap: 10px;
}

.greeting h3 {
  margin: 0;
  font-size: 16px;
  color: #09203e;
  font-weight: 500;
}

.greeting-icon {
  display: flex;
  align-items: center;
  gap: 10px;
}

.greeting-icon i {
  color: #333333;
  align-items: center;
  font-size: 20px;
  color: #a8a9aa;
  transition: all 0.3s ease-in-out;
}

.greeting-icon i:hover {
  color: #09203e;
  transform: translateY(-2px);
  cursor: pointer;
}

/* dashboard */
.dashboard-container {
  position: relative;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  background: #3386ec;
  color: #ffffff;
  padding: 22px 20px;
  border-radius: 10px;
  width: 100%;
}

.dashboard h3 {
  font-size: 18px;
  font-weight: 500;
}

.dashboard-content p {
  font-size: 16px;
  margin-bottom: 0;
}

.dashboard-icon {
  position: absolute;
  top: -24px;
  right: 3px;
}

.dashboard-button {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  margin-top: 10px;
  gap: 15px;
}

.dashboard-button button {
  font-size: 12px;
  text-transform: capitalize;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #3386ec !important;
  border-color: #3386ec !important;
}

.dashboard-img {
  display: flex;
  justify-content: center;
}

.dashboard-img img {
  width: 70%;
}

.dashboard-text {
  padding: 10px 12px;
  align-items: center;
  text-align: center;
}

.dashboard-text h4 {
  font-size: 15px;
  font-weight: 500;
}

.dashboard-text p {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
}
</style>
