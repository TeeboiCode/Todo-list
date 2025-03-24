<template>
  <div class="notifications-container">
    <div class="container" v-if="notifications.length === 0">
      <div class="no-notifications fw-bold">No notifications yet</div>
    </div>

    <!-- Notification list -->
    <div class="container" v-else>
      <h3 class="text-center my-3 fw-bold">Notification</h3>

      <!-- messages -->

      <div class="row">
        <!-- msg 1 -->
        <div
          class="col-md-6 col-12 mb-3 mb-sm-0"
          v-for="notification in notifications"
          :key="notification.id"
          :class="{ unread: !notification.read }"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ notification.title }}</h5>
              <p
                class="card-text des"
                v-if="notification.isHtml"
                v-html="notification.message"
              ></p>
              <p class="card-text des" v-else>{{ notification.message }}</p>

              <div
                class="d-flex align-items-center justify-content-between card-text time"
              >
                <span style="color: #00000066">
                  Date:
                  <span>{{ formatDateTime(notification.createdAt) }}</span>
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
      <div class="modal-backdrop" v-if="selectedMessage" @click.self="close">
        <div id="modal" class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">{{ selectedMessage.title }}</h3>
            <button class="close-btn" @click="close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <div class="modal-body">
            <p
              class="message-content"
              v-if="selectedMessage.isHtml"
              v-html="selectedMessage.message"
            ></p>
            <p class="message-content" v-else>{{ selectedMessage.message }}</p>
          </div>
          
          <div class="modal-footer">
            <span class="notification-date">
              {{ formatDateTime(selectedMessage.createdAt) }}
            </span>
          </div>
        </div>
      </div>
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
      const notifications = this.$store.state.notifications;
      console.log("Notifications in component:", notifications); // Debug log
      return notifications || []; // Ensure we always return an array
    },
  },

  methods: {
    viewMessage(msg) {
      this.selectedMessage = msg;

      // Mark as read if it's currently unread
      if (!msg.read) {
        this.$store.dispatch("markNotificationAsRead", msg.id);
      }
    },

    handleScroll() {
      clearTimeout(this.scrollTimeout);

      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      this.menuPositionBar =
        currentScroll > this.lastScrollTop ? "-100px" : "10px";
      this.lastScrollTop = currentScroll !== 0 ? 0 : currentScroll;

      this.applyElevationEffect();

      this.scrollTimeout = setTimeout(() => {
        this.menuPositionBar = "10px";
      }, 500);
    },

    applyElevationEffect() {
      const cards = document.querySelectorAll('.card');
      const viewportHeight = window.innerHeight;
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerPosition = rect.top + rect.height/2;
        
        const distanceFromCenter = Math.abs(centerPosition - viewportHeight/2);
        const maxDistance = viewportHeight/2;
        
        if (distanceFromCenter < maxDistance * 0.4) {
          card.classList.add('elevated');
        } else {
          card.classList.remove('elevated');
        }
      });
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
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // Add debug logs
    console.log("NotificationVue mounted");
    this.$store.dispatch("fetchNotifications").then(() => {
      console.log("Notifications after fetch:", this.notifications);
      this.$nextTick(() => {
        this.applyElevationEffect();
      });
    });
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
  transition: box-shadow 0.3s ease;
}

.card.elevated {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;
}

.unread .card {
  position: relative;
}

.unread .card::before {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
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

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease-out;
}

.modal-content {
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fcfcfc;
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f1f1f1;
}

.close-btn i {
  font-size: 1.25rem;
  color: #666;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.message-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
}

.notification-date {
  font-size: 0.875rem;
  color: #888;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
}

/* Remove the old modal styles */
#modal {
  position: static; /* Override fixed positioning */
  width: auto;
  height: auto;
  transition: none;
  margin: 20px;
}

.close {
  position: static; /* Remove absolute positioning from old styles */
}

.no-notifications {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.725rem;
  padding: 24px;
  color: #666;
}
</style>
