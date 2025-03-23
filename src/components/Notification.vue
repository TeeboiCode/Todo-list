<template>
  <div class="container">
    <h3 class="text-center my-3 fw-bold">Notification</h3>

    <!-- messages -->

    <div class="row">
      <!-- msg 1 -->
      <div
        class="col-md-6 col-12 mb-3 mb-sm-0"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ notification.title }}</h5>
            <p class="card-text des">
              {{ notification.message }}
            </p>
            <div
              class="d-flex align-items-center justify-content-between card-text time"
            >
              <span style="color: #00000066">
                Date: <span>{{ formatDateTime(notification.createdAt) }}</span>
              </span>

              <button
                type="button"
                class="btn btn-link"
                style="color: #3386ec"
                @click="viewMessage(notification)"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <!-- Full Message Modal -->
    <div id="modal" class="container pt-4" v-if="selectedMessage">
      <i class="fa-solid fa-circle-xmark close" @click="close"></i>
      <h3 class="text-center fw-bold my-4">
        {{ selectedMessage.title }}
      </h3>
      <p>
        {{ selectedMessage.message }}
      </p>
    </div>

    <div class="menu-containerBar">
      <MenuVue :menuPosition="menuPositionBar" />
    </div>
  </div>
</template>

<script>
import MenuVue from "./Menu.vue";
export default {
  name: "NotificationVue",
  components: {
    MenuVue,
  },
  data() {
    return {
      selectedMessage: null,
      menuPositionBar: "10px",
      scrollTimeout: null,
      lastScrollTop: 0,
    };
  },

  computed: {
    notifications() {
      return this.$store.state.notifications;
    },
  },

  methods: {
    viewMessage(msg) {
      this.selectedMessage = msg;
    },

    handleScroll() {
      clearTimeout(this.scrollTimeout);

      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      this.menuPositionBar =
        currentScroll > this.lastScrollTop ? "-100px" : "10px";
      this.lastScrollTop = currentScroll !== 0 ? 0 : currentScroll;

      this.scrollTimeout = setTimeout(() => {
        this.menuPositionBar = "10px";
      }, 500);
    },

    close() {
      this.selectedMessage = null;
    },

    formatDateTime(dateString) {
      if (!dateString) return "";

      const date = new Date(dateString);

      const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true, // Ensures AM/PM format
      };

      return date.toLocaleString("en-US", options);
    },

    async fetchNotifications() {
      try {
        await this.$store.dispatch("fetchNotifications");
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    },
  },

  created() {
    this.fetchNotifications();
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
}

.card-text.des {
  font-size: 14px;
  overflow: hidden;
  max-width: fit-content;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease-in-out;
  border: none !important;
}

.btn-link {
  text-decoration: none;
}

#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: rgb(151, 4, 4) !important;
  font-size: 2rem;
  z-index: 9999; /* Increased z-index */
  cursor: pointer; /* Ensures it is clickable */
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;
}

.card-text.time {
  font-size: 14px;
  font-weight: 600;
}
</style>
