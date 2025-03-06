<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <div class="header">
        <button class="back-button" @click="closeModal">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h2>Create Your Task</h2>
      </div>

      <div class="form-group">
        <input
          v-model="task.title"
          placeholder="Title"
          class="input title-input"
        />
      </div>

      <div class="form-group">
        <textarea
          v-model="task.description"
          placeholder="Task Description"
          class="input description-input"
        ></textarea>
      </div>

      <div class="time-section">
        <div class="all-day">
          <span>All Day</span>
          <label class="switch">
            <input type="checkbox" v-model="task.allDay" />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="time-row">
          <label>Start</label>
          <div class="time-inputs">
            <button class="date-button" @click="showStartDatePicker = true">
              {{ formatDate(task.startDate) }}
            </button>
            <button
              class="time-button"
              v-if="!task.allDay"
              @click="showStartTimePicker = true"
            >
              {{ formatTime(task.startTime) }}
            </button>

            <!-- Date Picker Modal -->
            <div
              class="picker-modal"
              v-if="showStartDatePicker"
              @click.self="showStartDatePicker = false"
            >
              <div class="picker-content">
                <input
                  type="date"
                  v-model="task.startDate"
                  class="date-input"
                  :min="currentDate"
                  @change="showStartDatePicker = false"
                />
              </div>
            </div>

            <!-- Time Picker Modal -->
            <div
              class="picker-modal"
              v-if="showStartTimePicker"
              @click.self="showStartTimePicker = false"
            >
              <div class="picker-content">
                <input
                  type="time"
                  v-model="task.startTime"
                  class="time-input"
                  @change="showStartTimePicker = false"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="time-row">
          <label>End</label>
          <div class="time-inputs">
            <button class="date-button" @click="showEndDatePicker = true">
              {{ formatDate(task.endDate) }}
            </button>
            <button
              class="time-button"
              v-if="!task.allDay"
              @click="showEndTimePicker = true"
            >
              {{ formatTime(task.endTime) }}
            </button>

            <!-- Date Picker Modal -->
            <div
              class="picker-modal"
              v-if="showEndDatePicker"
              @click.self="showEndDatePicker = false"
            >
              <div class="picker-content">
                <input
                  type="date"
                  v-model="task.endDate"
                  class="date-input"
                  :min="task.startDate"
                  @change="showEndDatePicker = false"
                />
              </div>
            </div>

            <!-- Time Picker Modal -->
            <div
              class="picker-modal"
              v-if="showEndTimePicker"
              @click.self="showEndTimePicker = false"
            >
              <div class="picker-content">
                <input
                  type="time"
                  v-model="task.endTime"
                  class="time-input"
                  :min="
                    task.startDate === task.endDate ? task.startTime : undefined
                  "
                  @change="showEndTimePicker = false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button @click="saveTask" class="create-button">Create Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  data() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
    const endTime = new Date(now.getTime() + 60 * 60 * 1000);
    const endTimeStr = `${String(endTime.getHours()).padStart(2, "0")}:${String(
      endTime.getMinutes()
    ).padStart(2, "0")}`;

    return {
      show: false,
      showStartDatePicker: false,
      showStartTimePicker: false,
      showEndDatePicker: false,
      showEndTimePicker: false,
      task: {
        title: "",
        description: "",
        allDay: false,
        startDate: now.toISOString().split("T")[0],
        endDate: now.toISOString().split("T")[0],
        startTime: currentTime,
        endTime: endTimeStr,
      },
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    },
    saveTask() {
      if (this.task.title) {
        const colors = [
          "#FF5252",
          "#448AFF",
          "#66BB6A",
          "#FFA726",
          "#AB47BC",
          "#26A69A",
          "#EC407A",
          "#7E57C2",
        ];

        this.$emit("add-task", {
          id: Date.now(),
          title: this.task.title,
          description: this.task.description,
          date: this.task.startDate,
          allDay: this.task.allDay,
          startTime: this.task.startTime,
          endTime: this.task.endTime,
          color: colors[Math.floor(Math.random() * colors.length)],
        });

        this.show = false;
        this.task = {
          title: "",
          description: "",
          allDay: false,
          startDate: new Date().toISOString().split("T")[0],
          endDate: new Date().toISOString().split("T")[0],
          startTime: "08:00",
          endTime: "20:00",
        };
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;
    },
    formatTime(timeStr) {
      const [hours, minutes] = timeStr.split(":");
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      return `${displayHours}:${minutes} ${period}`;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.modal-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  color: #000;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
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
  height: 120px;
  resize: none;
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

.all-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.time-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.create-button {
  background: #0a2647;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: auto;
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

.picker-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.date-input,
.time-input {
  border: 1px solid #e0e0e0;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  width: 200px;
}
</style>
