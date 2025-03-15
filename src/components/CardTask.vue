<template>
  <div class="row g-3" style="margin-bottom: 4rem">
    <template v-for="userTask in userDataApi" :key="userTask.id">
      <div class="col-12">
        <div
          class="card-content-container"
          :class="
            userTask.status === 'pending' ? 'pendingColor' : 'completedColor'
          "
        >
          <div class="card">
            <div class="card-body">
              <div class="title-btn">
                <h5 class="card-title">{{ userTask.title }}</h5>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    :checked="userTask.status === 'completed'"
                    @change="
                      emitCheckedValue(userTask.id, $event.target.checked)
                    "
                  />
                </div>
              </div>
              <div
                class="statusContainer"
                :class="
                  userTask.status === 'pending'
                    ? 'pendingColor'
                    : 'completedColor'
                "
              >
                {{
                  userTask.status === "pending" ? "In Progress" : "Compeleted"
                }}
              </div>
              <p class="card-text des">
                {{ userTask.description }} : id : {{ userTask.id }}
              </p>
              <p class="card-text des"></p>

              <p class="card-text time">
                <span>Start: 7 June 2025, 8:00am</span>
                <span>End: 7 June 2025, 8:00am</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "CardTask",
  props: {
    userDataApi: {
      type: Array,
      required: true,
    },
  },

  methods: {
    emitCheckedValue(taskId, isChecked) {
      const newStatus = isChecked ? "completed" : "pending";
      this.$emit("update-checked", { id: taskId, status: newStatus });
    },
  },
};
</script>

<style scoped>
.card-content-container {
  width: 100%;
  padding: 0 10px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.pendingColor {
  background: #f8bd00;
}

.completedColor {
  background: #34c759;
}

.card-content-container .card-title {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;
}

.title-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.statusContainer {
  padding: 5px 20px;
  border-radius: 40px;
  display: flex;
  color: #fff;
  font-weight: 600;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  margin-bottom: 10px;
  font-size: 12px;
}

.card-text.des {
  font-size: 14px;
  overflow: hidden;
  max-width: fit-content;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease-in-out;
  margin-bottom: 5px;
}

.card-text.time {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.form-switch .form-check-input {
  width: 2.5em;
  height: 1.5em;
}

.form-check-input:checked {
  background-color: green;
}

.form-check-input:checked:focus {
  box-shadow: 0 0 5px #0a2647b3;
}

/* .form-switch .form-check-input:focus {
  --bs-form-switch-bg: url(data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e) !important;
} */

.form-check-input:focus {
  box-shadow: 0 0 5px #8080807d;
  border-color: gray;
}
</style>
