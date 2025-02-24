<template>
  <div class="container">
    <!-- Header with Back Button -->
    <div class="header">
      <button class="back-button"><i class="fa-duotone fa-regular fa-less-than"></i></button>
      <h2>Create Your Task</h2>
    </div>

    <!-- Task Form -->  
    <form>
      <input type="text" id="taskTitle" placeholder="Title" required />
      <textarea id="taskDescription" placeholder="Task Description"></textarea>

      <div class="time-container">
        <!-- All Day Toggle -->
        <div class="all-day" >
          <span>All Day</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
          </label>
        </div>

        <!-- Start Date & Time -->
        <div class="datetime">
          <label>Start</label>
          <div class="datetime-box">
            <input type="date" value="2024-06-05">
            <input type="time" value="08:00">
          </div>
        </div>

        <!-- End Date & Time -->
        <div class="datetime" >
          <label>End</label>
          <div class="datetime-box">
            <input type="date" value="2024-06-05">
            <input type="time" value="20:00">
          </div>
        </div>
      </div>

      <!-- Create Task Button -->
      <button type="submit" class="btn" >Create Task</button>
    </form>

<div class="menu-containerBar">
      <MenuBar :menuPosition="menuPositionBar" />
    </div>
  </div>
</template>
<script>
import MenuBar from "../components/Menu.vue";

export default {
  name: "CreateTaskVue",
  components: {
    MenuBar,
  },
  
};
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

/* Header - Back Button & Title */
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Input Fields */
input, textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
}

textarea {
  height: 80px;
  resize: none;
}

/* Time Selection */
.time-container {
  /* background: #f4f4f4; */
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px solid #9DA1A4;
}

.all-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #9DA1A4;

}

.datetime {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
   border-bottom: 1px solid #9DA1A4;


}

.datetime label {
  font-size: 14px;
  text-align: left;
  flex: 1;
}

.datetime-box {
  display: flex;
  gap: 10px;
  flex: 2;
}

.datetime-box input {
  width: 48%;
  font-size: 14px;
  padding: 6px;
    background: #f4f4f4;
}

/* Switch Toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
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
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

/* Create Task Button */
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
  transition: 3s;
}

.btn:hover {
 background: #09203E;
}

/* Footer Navigation */
.footer {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 15px ;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  left: 50%;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius:20px ;
  transform: translateX(-50%);
  /* border-top: 1px solid #ddd; */
}

.footer button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

}

.add-task {
  background-color: blue;
  color: black;
  border-radius: 50%;
  font-size: 18px;
  
}

/* Responsive Styles */
@media (max-width: 360px) {
  .container {
    width: 95%;
    padding: 15px;
  }

  .header {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 16px;
  }

  .back-button {
    font-size: 18px;
  }

  .datetime-box input {
    width: 45%;
    font-size: 12px;
  }

  .footer {
    padding: 20px 0;
  }

  .footer button {
    font-size: 12px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 500px;
  }

  .btn {
    font-size: 18px;
 }
}
</style>
