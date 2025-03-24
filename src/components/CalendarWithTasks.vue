<template>
  <div class="calendar-container">
    <!-- Month View Calendar -->
    <div class="month-calendar">
      <v-calendar 
        :attributes="calendarAttributes"
        @dayclick="onDayClick"
        is-expanded
      />
    </div>
    
    <!-- Task List View -->
    <div class="tasks-list">
      <div 
        v-for="(day, index) in upcomingDays" 
        :key="index"
        class="day-task-item"
        :class="{ 'current-day': day.isToday }"
      >
        <div class="day-info">
          <div class="day-date">{{ day.dateLabel }}</div>
          <div class="day-name">{{ day.dayLabel }}</div>
        </div>
        <div 
          class="day-task" 
          v-if="day.task"
          @click="$emit('task-click', day.task.id)"
        >
          {{ day.task.title }}
        </div>
        <div class="day-task empty" v-else>
          No tasks scheduled
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Calendar } from 'v-calendar';

export default {
  name: 'CalendarWithTasks',
  components: {
    'v-calendar': Calendar
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  emits: ['task-click'],
  setup(props, { emit }) {
    const selectedDate = ref(new Date());
    
    // Convert tasks to calendar attributes
    const calendarAttributes = computed(() => {
      return props.tasks.map(task => ({
        key: task.id,
        dates: new Date(task.date),
        dot: {
          color: '#3788d8'
        },
        popover: {
          label: task.title
        }
      }));
    });

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const upcomingDays = computed(() => {
      const today = new Date();
      const days = [];
      
      for (let i = 0; i < 10; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        
        // Find task for this day
        const task = props.tasks.find(task => {
          const taskDate = new Date(task.date);
          return taskDate.getDate() === date.getDate() &&
                 taskDate.getMonth() === date.getMonth() &&
                 taskDate.getFullYear() === date.getFullYear();
        });
        
        // Format date label (Feb 10)
        const dateLabel = `${monthNames[date.getMonth()]} ${date.getDate()}`;
        
        // Special label for today and tomorrow
        let dayLabel;
        if (i === 0) {
          dayLabel = 'Today';
        } else if (i === 1) {
          dayLabel = 'Tomorrow';
        } else {
          dayLabel = dayNames[date.getDay()];
        }
        
        days.push({
          date,
          dateLabel,
          dayLabel,
          isToday: i === 0,
          task
        });
      }
      
      return days;
    });

    const onDayClick = (day) => {
      selectedDate.value = day.date;
      
      // Find if there's a task for this day
      const task = props.tasks.find(task => {
        const taskDate = new Date(task.date);
        return taskDate.getDate() === day.date.getDate() &&
               taskDate.getMonth() === day.date.getMonth() &&
               taskDate.getFullYear() === day.date.getFullYear();
      });
      
      if (task) {
        emit('task-click', task.id);
      }
    };

    return {
      calendarAttributes,
      selectedDate,
      upcomingDays,
      onDayClick
    };
  }
};
</script>

<style scoped>
.calendar-container {
  width: 100%;
  margin: 0 auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 80vh; /* Set a fixed height for the container */
  position: relative;
}

.month-calendar {
  padding: 10px 10px 15px;
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

/* Make v-calendar use full width */
:deep(.vc-container) {
  width: 100% !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

:deep(.vc-weeks) {
  width: 100%;
}

:deep(.vc-day) {
  min-height: 40px;
  transition: background-color 0.2s;
}

:deep(.vc-day:hover) {
  background-color: rgba(55, 136, 216, 0.08) !important;
}

:deep(.vc-day-content) {
  font-weight: 500;
}

:deep(.vc-header) {
  padding: 10px 0;
}

:deep(.vc-title) {
  font-weight: 600;
  font-size: 1.2rem;
  color: #2c3e50;
}

:deep(.vc-day.is-today) {
  background-color: rgba(55, 136, 216, 0.08);
}

:deep(.vc-dot) {
  background-color: #3788d8 !important;
  width: 6px !important;
  height: 6px !important;
  margin-bottom: 2px !important;
}

/* Task list styling with scroll effects */
.tasks-list {
  border-top: 1px solid #f1f1f5;
  background: #ffffff;
  overflow-y: auto;
  flex-grow: 1;
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
  scroll-behavior: smooth;
  padding-bottom: 20px;
}

.tasks-list::-webkit-scrollbar {
  width: 6px;
}

.tasks-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.tasks-list::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 6px;
}

.day-task-item {
  display: flex;
  padding: 14px 20px;
  border-bottom: 1px solid #f1f1f5;
  transition: all 0.3s ease;
  position: relative;
  transform-origin: center left;
}

/* Scroll effect for task items */
.day-task-item {
  opacity: 0.7;
  transform: translateX(0) scale(0.98);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.tasks-list:hover .day-task-item {
  opacity: 0.6;
}

.day-task-item:hover {
  opacity: 1 !important;
  transform: translateX(5px) scale(1);
  z-index: 2;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.current-day {
  background-color: #f8f9ff;
  border-left: 3px solid #3788d8;
  opacity: 1 !important;
}

.day-info {
  width: 130px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.day-date {
  font-weight: 600;
  color: #3788d8;
  font-size: 0.95rem;
  letter-spacing: -0.2px;
}

.day-name {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 2px;
}

.day-task {
  flex-grow: 1;
  padding: 8px 15px;
  cursor: pointer;
  background-color: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  border-left: 3px solid #3788d8;
  font-weight: 500;
  color: #334155;
}

.day-task:hover {
  background-color: #f0f7ff;
  transform: translateX(2px);
}

.day-task.empty {
  color: #94a3b8;
  font-style: italic;
  cursor: default;
  border-left: 3px solid #e2e8f0;
  background-color: #f8fafc;
}

.day-task.empty:hover {
  background-color: #f8fafc;
  transform: none;
}

@media (max-width: 768px) {
  .day-task-item {
    padding: 12px 15px;
  }
  
  .day-info {
    width: 100px;
  }
  
  .day-date {
    font-size: 0.9rem;
  }
}
</style> 