<template>
  <div class="container">
    <!-- dashboardCard -->
    <div class="dashboardCard">
      <h3>Home/Chores</h3>

      <!-- progress -->
      <div class="progress">
        <p>In Progress</p>
      </div>

      <h3>Clean The Room</h3>

      <!-- time -->
      <div class="time">
        <h4>Start: 7 June 2025, 8:00am</h4>
        <h4>End: 7 June 2025, 8:00pm</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCardVue",
};
</script>

<style scoped>
.container {
  padding: 10px 16px;
}

.dashboardCard {
  padding: 10px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08); 
  border-radius: 10px;
  background: #fff;
  border-left: 8px solid #f8bd00; 
  border-right: 8px solid #f8bd00;
}

.dashboardCard h3 {
  margin: 5px 0;
  font-size: 10px;
}

/* progress */
.progress {
  width: 30%;
  background: #f8bd00;
  padding: 8px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  border-radius: 10px;
}

.progress p {
  margin: 0;
  font-size: 7px;
  font-weight: 600;
  color: #fff;
}

/* time */
.time {
  padding: 52x 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.time h4 {
  margin: 0;
  font-size: 8px;
  font-weight: normal;
}
</style>
