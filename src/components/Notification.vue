<template>
  <div class="container">
    <h3>Notification</h3>
    <!-- notification -->
    <div class="notification">
      <h4>Welcome to Taskly! 🎉</h4>

      <!-- notification-mssg -->
      <div class="notification-mssg">
        <p>
          Hi Lizzy, <br />
          We’re thrilled to have you on board!
        </p>
      </div>

      <!-- time -->
      <div class="time">
        <h4>Start: 7 June 2025, 8:00am</h4>
        <router-link
          to="NotificationView.vue"
          @click="$router.push('/notificationView')"
          >View</router-link
        >
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
  name: "notificationVue",
  components: {
    MenuVue,
  },
};
</script>

<style scoped>
.container {
  padding: 20px 16px;
}

.container h3 {
  text-align: center;
  font-size: 18px;
  color: #000;
}

.notification {
  padding: 10px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 10px;
  background: #fff;
}

.notification h4 {
  margin: 5px 0;
  font-size: 15px;
  font-weight: 700;
}

/* notification-mssg */
.notification-mssg p {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
}

/* time */
.time {
  margin: 2px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.time h4 {
  color: #00000066;
  margin: 0;
  font-size: 12px;
  font-weight: normal;
}

.time a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: #3386ec;
}
</style>
