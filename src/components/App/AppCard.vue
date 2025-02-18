<template>
  <!-- container -->
  <div class="container">
    <!-- profile -->
    <div class="profile">
      <!-- profile-img -->
      <div class="profile-img">
        <img src="../../assets/default-image.jpg" alt="Profile Picture">
      </div>

      <!-- profile-text -->
      <div class="profile-text">
        <h3>Lizzy Daniel</h3>
        <p>ayomideakorede0@gmail.com</p>
      </div>
    </div>

    <!-- acct-info -->
    <div class="acct-info">
      <h3>My Account</h3>

      <!-- personal -->
      <div class="personal">

        <!-- user -->
        <div class="user">

          <!-- user-details -->
          <div class="user-details">
            <i class="fa-solid fa-user"></i>
            <h4>Personal Details</h4>
          </div>

          <!-- angle-right -->
          <div class="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <!-- user -->
        <div class="user">

          <!-- user-details -->
          <div class="user-details">
            <i class="fa-solid fa-lock"></i>
            <h4>Change Password</h4>
          </div>

          <!-- angle-right -->
          <div class="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <!-- user - Enable Notification -->
        <div class="user">
          <div class="user-details">
            <i class="fa-solid fa-bell"></i>
            <h4>Enable Notification</h4>
          </div>

          <!-- Toggle Switch -->
          <label class="switch">
            <input type="checkbox" v-model="isNotificationEnabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- personal -->
      <div class="personal">

        <!-- user -->
        <div class="user">
          <div class="user-action">
            <i class="fa-solid fa-right-from-bracket"></i>
            <h4>Sign Out</h4>
          </div>

          <!-- angle-right -->
          <div class="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <!-- user -->
        <div class="user">
          <div class="user-action">
            <i class="fa-solid fa-trash"></i>
            <h4>Delete Account</h4>
          </div>

          <!-- angle-right -->
          <div class="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCardVue",
  data() {
    return {
      isNotificationEnabled: false, 
    };
  },
};
</script>

<style scoped>
.container {
  padding: 15px;
}

/* Profile section */
.profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Profile image */
.profile-img {
  border: 1px solid;
  border-radius: 100px;
}

.profile-img img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

/* Profile text */
.profile-text h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.profile-text p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #555;
}

/* Account Info */
.acct-info {
  margin-top: 20px;
}

.acct-info h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

/* Personal sections */
.personal {
  margin-top: 15px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}

/* User Options */
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  transition: 0.3s ease;
}

.user:hover {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

/* Icons and labels */
.user-details,
.user-action {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-details h4,
.user-action h4 {
  margin: 0;
  font-size: 14px;
}

.user-details i,
.user-action i {
  font-size: 16px;
  color: #3386ec;
}

/* Signout & Delete Colors */
.user-action i {
  color: #eb1212;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.3s;
}

.slider:before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

/* Checked (ON) State */
input:checked + .slider {
  background-color: #3386ec;
}

input:checked + .slider:before {
  transform: translateX(14px);
}
</style>
