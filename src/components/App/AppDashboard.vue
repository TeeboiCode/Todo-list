<template>
  <!-- container -->
  <div class="container">

    <!-- greeting -->
    <div class="greeting">
      <h3>Good Morning, Jasmine</h3>

      <!-- greeting-icon -->
      <div class="greeting-icon">
        <i class='bx bx-bell'></i>
        <i class='bx bx-cog'></i>
      </div>
    </div>

    <!-- dashboard -->
    <div class="dashboard">
      <h3>Today's Task</h3>
      <p>0 <span> Tasks</span></p>
    </div>

    <!-- dashboard-img -->
    <div class="dashboard-img">
      <img :src="images[imgIndex]" />
    </div>

    <!-- dashboard-text -->
    <div class="dashboard-text">
      <h4>Get a clear view of the day ahead</h4>
      <p>All your tasks that are due today will show up here Tap + to add a task </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDashboardVue",
  data() {
    return{
        images:[
        require('@/assets/dashboard-img.png'),
        ],

  imgIndex: 0,
    };
  },
};
</script>

<style scoped>
/* container */
.container {
  padding: 10px 12px;
}

/* greeting */
.greeting {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.greeting h3 {
  margin: 0;
  font-size: 16px;
  color: #17468f;
  font-weight: 500;
}

.greeting-icon {
  display: flex;
  gap: 10px;
  width: 50px;
}

.greeting-icon i {
  color: #333333;
  align-items: center;
  font-size: 18px;
}

/* dashboard */
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  background: #3386ec;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 10px;
}

.dashboard h3 {
  font-size: 18px;
  font-weight: 500;
}

.dashboard p {
  font-size: 14px;
}

.dashboard-img {
  text-align: center;
}

.dashboard-img img {
  width: 80%;
}

.dashboard-text {
  padding: 10px 12px;
  margin-top: 10px;
  align-items: center;
  text-align: center;
}

.dashboard-text h4 {
  font-size: 15px;
  font-weight: 500;
}

.dashboard-text p {
  font-size: 13px;
  font-weight: 400;
}
</style>
