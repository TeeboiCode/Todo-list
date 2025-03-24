<template>
  <div
    class="menu-container"
    :style="{
      bottom: menuPosition,
    }"
  >
    <div class="menu-content-container">
      <div class="menu-item" @click="$router.push('/dashboard')">
        <i class="fa-solid fa-house" :class="{ active: isActive('/dashboard') }"></i>
        <span :class="{ active: isActive('/dashboard') }">Home</span>
      </div>
      <div class="menu-item" @click="$router.push('/calendar')">
        <i class="fa-solid fa-calendar-days" :class="{ active: isActive('/calendar') }"></i>
        <span :class="{ active: isActive('/calendar') }">Calendar</span>
      </div>
      <div class="menu-item" @click="$router.push('/createTask')">
        <i class="fa-solid fa-circle-plus" :class="{ active: isActive('/createTask') }"></i>
        <span :class="{ active: isActive('/createTask') }">Add Task</span>
      </div>
      <div class="menu-item" @click="$router.push('/appProfile')">
        <i class="fa-solid fa-user" :class="{ active: isActive('/appProfile') }"></i>
        <span :class="{ active: isActive('/appProfile') }">Profile</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menuPosition: String,
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>

<style scoped>
.menu-container {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 0 16px;
  transition: all 0.3s ease-in-out;
}

.menu-content-container {
  background: #fff;
  display: flex;
  padding: 12px 10px;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  align-items: center;
  border-radius: 20px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.menu-item i {
  font-size: 20px;
  color: #a8a9aa;
}

.menu-item span.active,
.menu-item i.active {
  color: #09203e;
}

.menu-item span {
  font-size: 12px;
  color: #a8a9aa;
  font-weight: 500;
}

.menu-item:active {
  transform: scale(0.95);
}
</style>
