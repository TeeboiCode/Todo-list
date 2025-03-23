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
            <h5 class="card-title fw-bolder">{{ notification.title }}</h5>
            <p class="card-text des">
              {{ notification.message }}
            </p>
            <div class="d-flex align-items-center justify-content-between">
              <span style="color: #00000066"
                >Start: <span>{{ notification.createdAt }}</span></span
              >
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
      <i
        class="fa-solid fa-circle-xmark close"
        @click="selectedMessage = null"
      ></i>
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
      notifications: [
        {
          id: "1234567891",
          user_id: "taskly-001",
          title: "Reminder: Complete Your Task",
          message:
            "Hey Oluwaleye Taiwo, don't forget to complete your pending tasks for today!",
          type: "reminder",
          read: false,
          createdAt: "2024-03-22T12:00:00.000Z",
        },
        {
          id: "1234567892",
          user_id: "taskly-001",
          title: "Task Completed 🎉",
          message:
            "Great job, Oluwaleye Taiwo! You've completed your task successfully. Keep it up!",
          type: "success",
          read: false,
          createdAt: "2024-03-22T14:30:00.000Z",
        },
        {
          id: "1234567893",
          user_id: "taskly-001",
          title: "New Feature Alert 🚀",
          message:
            "Hey Oluwaleye Taiwo, check out our new feature that makes task management even easier!",
          type: "update",
          read: false,
          createdAt: "2024-03-22T16:45:00.000Z",
        },
        {
          id: "1234567894",
          user_id: "taskly-001",
          title: "Your Weekly Progress Report",
          message:
            "Hello Oluwaleye Taiwo, here’s your weekly progress report. Keep pushing forward!",
          type: "report",
          read: false,
          createdAt: "2024-03-22T18:00:00.000Z",
        },
        {
          id: "1234567895",
          user_id: "taskly-001",
          title: "Task Overdue ⚠️",
          message:
            "Hey Oluwaleye Taiwo, you have overdue tasks that need your attention. Please check your list.",
          type: "warning",
          read: false,
          createdAt: "2024-03-22T20:15:00.000Z",
        },
        {
          id: "1234567896",
          user_id: "taskly-001",
          title: "Motivation for the Day 💡",
          message:
            "Hey Oluwaleye Taiwo, remember: 'Success is the sum of small efforts repeated day in and day out.' Keep going!",
          type: "motivation",
          read: false,
          createdAt: "2024-03-22T22:30:00.000Z",
        },
      ],
      menuPositionBar: "10px",
      scrollTimeout: null,
      lastScrollTop: 0,
    };
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
  z-index: 101;
}
</style>
