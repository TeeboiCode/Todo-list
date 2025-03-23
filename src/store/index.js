import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
// import { set } from "core-js/core/dict";

const API_URL = "http://localhost:3000";

// Setup axios interceptors
axios.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Instead of using store.commit, we'll handle the logout differently
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];

      await Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "Please login again",
        confirmButtonColor: "#09203e",
      });
    }
    return Promise.reject(error);
  }
);

export default createStore({
  state: {
    token:
      localStorage.getItem("token") || sessionStorage.getItem("token") || "",
    user: (() => {
      try {
        return (
          JSON.parse(localStorage.getItem("user")) ||
          JSON.parse(sessionStorage.getItem("user")) ||
          {}
        );
      } catch (error) {
        return {}; // Default to empty object if parsing fails
      }
    })(),
    tasks: [], // Store tasks
    notifications: [],
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getTasks: (state) => state.tasks,
    getNotification: (state) => state.notifications,
  },
  mutations: {
    set_auth(state, { token, user, rememberMe }) {
      // Clear previous tokens
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");

      state.token = token;
      state.user = user;

      // store token based on rememberMe option
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    log_out(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
    },

    set_tasks(state, tasks) {
      state.tasks = tasks;
    },

    update_task_status(state, { taskId, status }) {
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      );
    },

    update_user(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    add_notification(state, notification) {
      state.notifications.unshift(notification);
    },

    set_notifications(state, notifications) {
      state.notifications = notifications;
    },

    remove_notification(state, notificationId) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationId
      );
    },
  },

  actions: {
    async register({ commit }, user) {
      try {
        const response = await axios.post(`${API_URL}/register`, user);
        commit("set_auth", {
          token: response.data.token,
          user: response.data.full_name,
          rememberMe: false, // default to session storage
        });

        let message = "Registration Successful";

        if (response.data.message) {
          message = response.data || message;
        }

        await Swal.fire({
          icon: "success",
          title: message,
          confirmButtonColor: "#09203e",
        });

        return true;
      } catch (error) {
        await Swal.fire({
          icon: "warning",
          title: error.response.data,
          text: "Registration failed. Please try again.",
          confirmButtonColor: "#09203e",
        });
        throw error;
      }
    },

    async login({ commit }, { email, password, remember_me }) {
      try {
        const response = await axios.post(`${API_URL}/login`, {
          email,
          password,
          remember_me,
        });

        // Let's log the response to see what we're getting
        console.log("Login response:", response.data);

        commit("set_auth", {
          token: response.data.token,
          user: response.data,
          rememberMe: remember_me,
        });

        await Swal.fire({
          icon: "success",
          title: "Welcome to Taskly!",
          html: `Hello, <strong> ${response.data.full_name} </strong>`,
          confirmButtonColor: "#09203e",
        });

        return true;
      } catch (error) {
        if (error.response?.status === 401) {
          commit("log_out");
          await Swal.fire({
            icon: "error",
            title: response.data,
            text: "Please check your credentials and try again.",
            confirmButtonColor: "#09203e",
          });
          throw new Error("Session expired. Please login again.");
        }

        await Swal.fire({
          icon: "error",
          title: response.data,
          text: "Please check your credentials and try again.",
          confirmButtonColor: "#09203e",
        });
        throw error;
      }
    },

    async createTask({ commit }, task) {
      try {
        const response = await axios.post(`${API_URL}/tasks`, {
          task,
        });

        if (response.status === 201) {
          commit("set_tasks", response.data);

          await Swal.fire({
            icon: "success",
            title: "Task created successfully!",
            confirmButtonColor: "#09203e",
          });
          return response.data;
        }
      } catch (error) {
        if (error.response?.status === 401) {
          commit("log_out");
          throw new Error("Session expired. Please login again.");
        }
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to create task. Please try again.",
          confirmButtonColor: "#09203e",
        });
        throw error;
      }
    },

    async updateTaskStatus({ commit }, { taskId, status }) {
      try {
        // console.log("Updating task:", { taskId, status });

        const response = await axios.patch(`${API_URL}/tasks/${taskId}`, {
          status,
        });

        if (response.status === 200) {
          // Update the task in state
          const updatedTask = response.data;
          commit("update_task_status", { taskId, status });

          // await Swal.fire({
          //   icon: "success",
          //   title: "Task status updated",
          //   confirmButtonColor: "#09203e",
          // });
        }
      } catch (error) {
        // await Swal.fire({
        //   icon: "error",
        //   title: "Failed to update task status",
        //   text: error.response?.data?.error || "Please try again",
        //   confirmButtonColor: "#09203e",
        // });
        throw error;
      }
    },

    async fetchTasks({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        commit("set_tasks", response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
        throw error;
      }
    },

    async updateUser({ commit }, user) {
      try {
        const response = await axios.patch(`${API_URL}/users/${user.id}`, user);
        commit("update_user", response.data);
      } catch (error) {
        console.error("Failed to update user:", error);
        throw error;
      }
    },

    async fetchNotifications({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/notifications`);
        commit('SET_NOTIFICATIONS', response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    },

    async logout({ commit }) {
      commit("log_out");
    },
  },

  modules: {},
});
