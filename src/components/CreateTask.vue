<template>
  <div class="createTask-container">
    <div class="createTask-content">
      <form class="form-container" @submit.prevent="createTask">
        <div class="header">
          <button class="back-button" @click="$router.push('/dashboard')">
            <!-- <i class="fas fa-chevron-left"></i> -->
            <img
              src="../assets/back-arrow-icon.png"
              width="28"
              height="25"
              alt=""
            />
          </button>
          <h2 class="m-0">Create Your Task</h2>
        </div>

        <div class="form-group">
          <input
            v-model="task.title"
            placeholder="Title"
            class="input title-input"
          />
        </div>

        <div class="form-group">
          <div class="des-container">
            <div class="des-header">Task Description</div>
            <hr class="m-0" />
            <textarea
              v-model="task.description"
              placeholder="Task Description"
              class="input description-input"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="time-section">
          <div class="all-day">
            <span>All Day</span>
            <label class="switch">
              <input type="checkbox" v-model="task.allDay" role="switch" />
              <span class="slider round"></span>
            </label>
          </div>

          <div class="time-row">
            <label>Start</label>
            <div class="time-inputs">
              <DatePicker
                v-model="task.startDate"
                :min-date="new Date()"
                :masks="dateMasks"
                mode="date"
              >
                <template v-slot="{ inputEvents }">
                  <div class="date-button" v-on="inputEvents">
                    {{ formatDate(task.startDate) || "Select Date" }}
                  </div>
                </template>
              </DatePicker>

              <DatePicker
                v-model="task.startTime"
                mode="time"
                :is24hr="true"
                :masks="timeMasks"
                :model-config="timeModelConfig"
              >
                <template v-slot="{ inputEvents }">
                  <div class="time-button" v-on="inputEvents">
                    {{ formatTime(task.startTime) || "Select Time" }}
                  </div>
                </template>
              </DatePicker>
            </div>
          </div>

          <div class="time-row">
            <label>End</label>
            <div class="time-inputs">
              <DatePicker
                v-model="task.endDate"
                :min-date="task.startDate || new Date()"
                :masks="dateMasks"
                mode="date"
              >
                <template v-slot="{ inputEvents }">
                  <div class="date-button" v-on="inputEvents">
                    {{ formatDate(task.endDate) || "Select Date" }}
                  </div>
                </template>
              </DatePicker>

              <DatePicker
                v-model="task.endTime"
                mode="time"
                :is24hr="true"
                :masks="timeMasks"
                :model-config="timeModelConfig"
              >
                <template v-slot="{ inputEvents }">
                  <div class="time-button" v-on="inputEvents">
                    {{ formatTime(task.endTime) || "Select Time" }}
                  </div>
                </template>
              </DatePicker>
            </div>
          </div>
        </div>

        <button class="create-button" type="submit">Create Task</button>
      </form>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

export default {
  name: "CreateTask",
  components: {
    DatePicker,
  },
  data() {
    return {
      task: {
        title: "",
        description: "",
        allDay: false,
        startDate: new Date(),
        startTime: new Date(),
        endDate: new Date(),
        endTime: new Date(),
      },
      dateMasks: {
        input: "YYYY-MM-DD",
      },
      timeMasks: {
        input: "HH:mm",
      },
      timeModelConfig: {
        type: "date",
        mask: "HH:mm",
      },
      userDataApi: [],
    };
  },
  methods: {
    // getting data from json server
    async getData() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        this.userDataApi = data;
      } catch (error) {
        console.error(error);
      }
      return this.userDataApi;
    },

    validateForm() {
      // Check if title and description are provided
      if (!this.task.title.trim()) {
        alert("Title is required.");
        return false;
      }
      if (!this.task.description.trim()) {
        alert("Description is required.");
        return false;
      }
      // check if start date is before end date
      if (this.task.startDate > this.task.endDate) {
        alert("Start date must be before end date.");
        return false;
      }
      // check if start time is before end time
      if (this.task.startTime > this.task.endTime) {
        alert("Start time must be before end time.");
        return false;
      }
      return true;
    },

    async createTask() {
      // Validate the form before proceeding
      if (!this.validateForm()) {
        return;
      }

      // Combine date and time before sending to API
      const startDateTime = this.combineDateTime(
        this.task.startDate,
        this.task.startTime
      );
      const endDateTime = this.combineDateTime(
        this.task.endDate,
        this.task.endTime
      );

      // getting local storage
      const getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));

      const taskData = {
        userId: getCurrentUser.id,
        title: this.task.title,
        description: this.task.description,
        allDay: this.task.allDay,
        startDateTime,
        endDateTime,
        status: "pending",
      };

      // console.log("Task Created:", taskData);

      // Add the task to the API tasks
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      this.$router.push("/dashboard");
    },

    formatDate(date) {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    formatTime(time) {
      if (!time) return "";
      return new Date(time).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
    combineDateTime(date, time) {
      if (!date) return null;

      const combinedDate = new Date(date);
      if (time) {
        const timeDate = new Date(time);
        combinedDate.setHours(timeDate.getHours());
        combinedDate.setMinutes(timeDate.getMinutes());
      }

      return combinedDate;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.createTask-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.createTask-content {
  padding: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.header h2 {
  font-weight: 600;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input {
  width: 100%;
  /* border: 1px solid #e0e0e0; */
  border: 1px solid #3532326b !important;
  border-radius: 12px;
  padding: 13px;
  font-size: 16px;
  outline: none;
}

.input::placeholder {
  color: #9e9e9e;
}

.title-input {
  font-size: 18px;
}

.description-input {
  resize: none;
  border: none;
  border: none !important;
}

.time-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #e0e0e0;
}

.des-container {
  width: 100%;
  /* border: 1px solid #e0e0e0; */
  border: 1px solid #3532326b !important;
  border-radius: 12px;
  outline: none;
}

.des-header {
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
}

.all-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
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
  background-color: #e0e0e0;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #0a2647;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}

.time-inputs {
  display: flex;
  gap: 8px;
}

.date-button,
.time-button {
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  min-width: 140px;
}

.time-button {
  min-width: 100px;
}

.picker-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.time-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.create-button {
  background: #09203e;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 16px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600 !important;
  cursor: pointer;
  margin: 20px 0 6px;
}
</style>
