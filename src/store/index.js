import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000";

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
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getTasks: (state) => state.tasks,
  },
  mutations: {
    set_auth(state, { token, user, rememberMe }) {
      // Clear previous tokens
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");

      state.token = token;
      state.user = user

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

    update_user(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
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
        // commit("setUser", {
        //   email: response.data.email,
        //   full_name: response.data.full_name,
        // });
        commit("set_auth", {
          token: response.data.token,
          user: response.data,
          rememberMe: remember_me,
        });

        console.log(response.data)
        await Swal.fire({
          icon: "success",
          title: "Welcome to Taskly!",
          html: `Hello, <strong> ${response.data.full_name} </strong>`,
          confirmButtonColor: "#09203e",
        });

        return true;
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: response.data,
          text: "Please check your credentials and try again.",
          confirmButtonColor: "#09203e",
        });
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

    async logout({ commit }) {
      commit("log_out");
    },
  },

  modules: {},
});
