<template>
  <!-- container -->
  <div>
    <div v-if="isLoading" class="container">
      <Preloader :isLoading="isLoading" />
    </div>
    <div class="container" v-else>
      <div>
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

        <!-- dashboard-container -->
        <div class="dashboard-container">
          <div class="dashboard-content">
            <h3>Today's Task</h3>
            <p>{{ filteredTasks.length }} <span> Tasks</span></p>
          </div>

          <div class="dashboard-icon">
            <img src="../../assets/render-todo-check-list.png" width="113" />
          </div>

          <div class="dashboard-button">
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1"
              :class="{ active: filterStatus === 'all' }"
              @click="filterStatus = 'all'"
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1"
              :class="{ active: filterStatus === 'pending' }"
              @click="filterStatus = 'pending'"
            >
              In Progress
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-100 px-2 py-1"
              :class="{ active: filterStatus === 'completed' }"
              @click="filterStatus = 'completed'"
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      <!-- dashboard -->
      <div>
        <div v-if="noTaskValue">
          <div class="dashboard-img">
            <img :src="images[imgIndex]" />
          </div>
          <div class="dashboard-text mb-5">
            <h4>Get a clear view of the day ahead</h4>
            <p>All your tasks that are due today will show up here. Tap + to add a task.</p>
          </div>
        </div>

        <div class="mt-4" v-else>
          <CardTaskVue
            :userDataApi="filteredTasks"
            @update-checked="handleStatusChange"
          />
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
import CardTaskVue from "../CardTask.vue";

export default {
  name: "AppDashboardVue",
  components: {
    MenuBar,
    Preloader,
    CardTaskVue,
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
      userId: null,
      userDataApi: [],
      filterStatus: "all",
    };
  },
  methods: {
    async initializeData() {
      this.getId();
      await this.getData();
      this.getUserData();
      this.isLoading = false;
    },

    getId() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser && currentUser.id) {
        this.userId = currentUser.id;
      }
    },

    async getData() {
      if (!this.userId) return;
      try {
        const response = await fetch(`http://localhost:3000/tasks?userId=${this.userId}`);
        this.userDataApi = await response.json();
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },

    handleScroll() {
      clearTimeout(this.scrollTimeout);

      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      this.menuPositionBar = currentScroll > this.lastScrollTop ? "-100px" : "10px";
      this.lastScrollTop = currentScroll !== 0 ? 0 : currentScroll;

      this.scrollTimeout = setTimeout(() => {
        this.menuPositionBar = "10px";
      }, 500);
    },

    getUserData() {
      const userData = localStorage.getItem("currentUser");
      if (userData) {
        this.Username = JSON.parse(userData);
      }
    },

    async handleStatusChange({ id, status }) {
      console.log(`Task ID: ${id}, New Status: ${status}`);

      try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        });

        if (response.ok) {
          this.userDataApi = this.userDataApi.map(task =>
            task.id === id ? { ...task, status } : task
          );
        } else {
          console.error("Failed to update task status.");
        }
      } catch (error) {
        console.error("Error updating task:", error);
      }
    },
  },

  computed: {
    filteredTasks() {
      return this.filterStatus === "all"
        ? this.userDataApi
        : this.userDataApi.filter(task => task.status === this.filterStatus);
    },

    noTaskValue() {
      return this.userDataApi.length === 0;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.initializeData();
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
}

/* greeting */
.greeting {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
  background: #3386ec;
  color: white;
  padding: 22px 20px;
  border-radius: 10px;
  margin-top: 1rem;
}

.dashboard-button {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.dashboard-button button {
  font-size: 12px;
  text-transform: capitalize;
}

.dashboard-img {
  display: flex;
  justify-content: center;
}

.dashboard-img img {
  width: 70%;
}

.dashboard-text {
  text-align: center;
}
</style>
