<template>
  <div>
    <!-- <nav>
      <router-link to="/createTask">Create Task</router-link> |
      <router-link to="/successfulPassword"> Password </router-link>
      <router-link to="/notification"> notification</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Poppins", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  text-align: center;
  padding: 30px;
  background: gray;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
