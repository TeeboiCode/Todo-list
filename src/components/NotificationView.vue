<template>
  <!-- container -->
  <div class="container">
    <!-- notification-heading -->
    <div class="notification-heading">
      <h2 class="mb-4">Welcome to Taskly! 🎉</h2>
    </div>

    <!-- notification-mssg -->
    <div class="notification-mssg">
      <strong> Subject:</strong> Welcome to Taskly – Let’s Design Something
      Amazing! 🎨 <br />
      <br />

      Hi Lizzy, Welcome to Taskly – your new go-to app for seamless UI/UX
      design! We’re excited to have you join our community of designers and
      creatives. <br />
      With Taskly, you can: <br />
      <br />
      <ul>
        <li>✅ Streamline your workflow with intuitive design tools.</li>
        <li>✅ Collaborate in real-time with your team.</li>
        <li>✅ Stay organized with smart task management features.</li>
      </ul>
      <br />
      <br />
      Get started now: <br />
      <br />

      Log in to your account. <br />
      <br />

      Explore the dashboard and create your first project. <br />
      <br />

      Invite your team and start collaborating! <br />
      <br />

      Need help or have questions? Check out our Help Center or reply to this
      email – we’re here to help! <br />
      <br />

      Let’s bring your design ideas to life. Happy designing! <br />
      <br />

      Best regards, <br />
      The Taskly Team 🚀 <br />
    </div>

    <div class="menu-containerBar">
      <MenuVue :menuPosition="menuPositionBar" />
    </div>
  </div>
</template>

<script>
import MenuVue from "./Menu.vue";
export default {
  name: "notificationView",
  components: {
    MenuVue,
  },
};
</script>

<style scoped>
.container {
  padding: 20px 20px;
}

.notification-heading h2 {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

.notification-mssg {
  align-items: center;
  font-size: 12px;
}

.notification-mssg ul {
  margin: 0;
  padding: 0;
}

.notification-mssg ul li {
  list-style: none;
}
</style>
