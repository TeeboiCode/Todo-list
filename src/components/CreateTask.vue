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
              <!-- start date -->
              <input
                type="date"
                v-model="task.startDate"
                class="date-button"
                :min="getTodayDateString()"
              />

              <!-- start time -->
              <input
                type="time"
                v-model="task.startTime"
                class="time-button"
              />
            </div>
          </div>

          <div class="time-row">
            <label>End</label>
            <div class="time-inputs">
              <!-- end date -->
              <input
                type="date"
                v-model="task.endDate"
                class="date-button"
                :min="task.startDate"
              />

              <!-- end time -->
              <input
                type="time"
                v-model="task.endTime"
                class="time-button"
              />
            </div>
          </div>
        </div>

        <button class="create-button" type="submit">Create Task</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "CreateTask",
  data() {
    return {
      task: {
        title: "",
        description: "",
        allDay: false,
        startDate: this.getTodayDateString(),
        startTime: this.getCurrentTimeString(),
        endDate: this.getTodayDateString(),
        endTime: this.getCurrentTimeString(60), // 1 hour later by default
      },
      userDataApi: [],
    };
  },
  methods: {
    getTodayDateString() {
      const today = new Date();
      return today.toISOString().split('T')[0]; // YYYY-MM-DD format
    },
    
    getCurrentTimeString(addMinutes = 0) {
      const now = new Date();
      if (addMinutes) {
        now.setMinutes(now.getMinutes() + addMinutes);
      }
      return now.toTimeString().slice(0, 5); // HH:MM format
    },
    
    validateForm() {
      // Check if title and description are provided
      if (!this.task.title.trim()) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Title is required.",
        });
        return false;
      }
      if (!this.task.description.trim()) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Description is required.",
        });
        return false;
      }
      
      // Combine date and time for comparison
      const startDateTime = this.combineDateTime(this.task.startDate, this.task.startTime);
      const endDateTime = this.combineDateTime(this.task.endDate, this.task.endTime);
      
      // check if start date is before end date
      if (startDateTime > endDateTime) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Start date/time must be before end date/time.",
        });
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

      const taskData = {
        title: this.task.title,
        description: this.task.description,
        allDay: this.task.allDay,
        startDateTime,
        endDateTime,
        status: "pending",
      };

      await this.$store.dispatch("createTask", taskData);

      this.$router.push("/dashboard");
    },

    combineDateTime(date, time) {
      if (!date) return null;
      
      const [year, month, day] = date.split('-').map(Number);
      const [hours, minutes] = time.split(':').map(Number);
      
      return new Date(year, month - 1, day, hours, minutes);
    },
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
