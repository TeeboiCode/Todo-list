<template>
  <div class="completed-task">
    <div class="task-header">
      <h2>Project</h2>
      <span class="status">{{ status }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>Start: {{ formatDate(startDateTime) }}</p>
    <p>End: {{ formatDate(endDateTime) }}</p>
  </div>
</template>

<script>
export default {
  name: "CompletedTask",
  props: {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Completed",
    },
    startDateTime: {
      type: String,
      required: true,
    },
    endDateTime: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return new Date(dateString).toLocaleString("en-US", options);
    },
  },
};
</script>

<style scoped>
.completed-task {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status {
  background-color: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
}
</style>
