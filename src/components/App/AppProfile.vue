<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <button class="back-button"><i class="fa-solid fa-arrow-left"></i></button>
      <h2>Account</h2>
      <button class="notification-button"><i class="fa-solid fa-bell"></i></button>
    </div>

    <!-- Profile Picture -->
    <div class="profile">
      <img src="@/assets/profile-img.png" alt="Profile" class="avatar">
      <p>Your Avatar photo will be public.</p>
      <span class="edit-profile">Edit <i class="fa-solid fa-pen"></i></span>
    </div>

    <!-- Form Fields -->
    <form>
      <label>Full Name</label>
      <div class="input-box">
        <i class="fa-solid fa-user"></i>
        <input type="text" placeholder="Ayomide Akorede">
      </div>

      <label>Email</label>
      <div class="input-box">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Ayomideakorede0@Gmail.Com">
      </div>

      <label>Phone Number</label>
      <div class="phone-input">
        <select>
          <option>+234</option>
          <option>+1</option>
          <option>+44</option>
        </select>
        <input type="tel" placeholder="7050419815">
      </div>

      <!-- Done Button -->
      <button type="submit" class="btn">Done</button>
    </form>
<div class="menu-containerBar">
      <MenuBar :menuPosition="menuPositionBar" />
    </div>

  </div>
</template>
<script>
import MenuBar from  "../Menu.vue";
export default {
name:"AppProfileVue",
components: {
    MenuBar,
  },
  
}
</script>
<style scoped>
/* General Container */
.container {
  max-width: 400px;
  width: 90%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-button, .notification-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

/* Profile Section */
.profile {
  text-align: center;
  margin: 20px 0;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ccc;
}

.edit-profile {
  display: block;
  color: red;
  font-size: 14px;
  margin-top: 5px;
  cursor: pointer;
}

/* Form Fields */
form {
  margin-top: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.input-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background: #f4f4f4;
  margin-bottom: 15px;
}

.input-box i {
  margin-right: 10px;
  color: gray;
}

.input-box input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
}

.phone-input {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.phone-input select, .phone-input input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Done Button */
.btn {
  width: 100%;
  background: #09203E;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  /* margin-top: 10px; */
}

.btn:hover {
  background: #05172A;
}

/* Bottom Navigation */
.footer {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.footer button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.add-task {
  background-color: blue;
  color: white;
  border-radius: 50%;
  font-size: 18px;
  padding: 5px;
}

.active {
  color: blue;
}

/* Responsive Styles */
@media (max-width: 360px) {
  .container {
    width: 95%;
    padding: 15px;
  }

  .btn {
    font-size: 14px;
    padding: 10px;
  }

  .footer button {
    font-size: 20px;
 }
}
</style>
