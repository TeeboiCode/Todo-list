<template>
  <div class="calendar-view">
    <h1>My Calendar</h1>
    <CalendarWithTasks 
      :tasks="tasks" 
      @task-click="navigateToTask"
    />
    <Menu :menuPosition="menuPosition" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CalendarWithTasks from '@/components/CalendarWithTasks.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    CalendarWithTasks,
    Menu
  },
  setup() {
    const router = useRouter();
    const menuPosition = ref('10px');
    
    const tasks = ref([
      {
        id: 1,
        title: 'Project: Designing an application',
        description: 'Initial design phase for the new app',
        date: '2024-02-10'
      },
      {
        id: 2,
        title: 'Planning the concept',
        description: 'Brainstorming session',
        date: '2024-02-11'
      },
      {
        id: 3,
        title: 'Getting To Mr Adewale',
        description: 'Meeting with client',
        date: '2024-02-12'
      },
      {
        id: 4,
        title: 'Project Presentation',
        description: 'Final demo to stakeholders',
        date: '2024-02-14'
      }
    ]);
    
    const navigateToTask = (taskId) => {
      router.push(`/task/${taskId}`);
    };
    
    return {
      tasks,
      navigateToTask,
      menuPosition
    };
  }
};
</script>

<style scoped>
.calendar-view {
  padding: 20px;
  padding-bottom: 80px;
}

h1 {
  margin-bottom: 20px;
  color: #09203e;
}
</style> 