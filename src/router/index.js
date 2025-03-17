import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"; // Import Vuex store

// Import Components
import HomeView from "../views/HomeView.vue";
import AppCard from "../components/App/AppCard.vue";
import Login from "../components/Login and SignUp/Login.vue";
import SignPg from "../components/Login and SignUp/SignUp.vue";
import SignupAndLogin from "../components/Login and SignUp/SignUpAndLogin.vue";
import PreSignup from "../components/PreSignup.vue";
import AppDashboard from "../components/App/AppDashboard.vue";
import DashboardCard from "../components/App/DashboardCard.vue";
import CreateTask from "../components/CreateTask.vue";
import AppProfile from "../components/App/AppProfile.vue";
import NotificationVue from "../components/Notification.vue";
import NotificationView from "../components/NotificationView.vue";
import ForgotPasswordOne from "../components/ForgotPasswordOne.vue";
import ForgotPasswordTwo from "../components/ForgotPasswordTwo.vue";
import ForgotPasswordThree from "../components/ForgotPasswordThree.vue";
import SuccessfulPassword from "../components/SuccessfulPassword.vue";
import Note from "../components/Note.vue";
import CardTask from "../components/CardTask.vue";
import ChangePassword from "../components/ChangePassword.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/login", name: "login", component: Login },
  { path: "/signPg", name: "signPg", component: SignPg },
  { path: "/create", name: "create", component: SignupAndLogin },
  { path: "/presignup", name: "presignup", component: PreSignup },

  // PROTECTED ROUTES (Require Authentication)
  {
    path: "/appcard",
    name: "appcard",
    component: AppCard,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: AppDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/createTask",
    name: "createTask",
    component: CreateTask,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboardcard",
    name: "dashboardcard",
    component: DashboardCard,
    meta: { requiresAuth: true },
  },
  {
    path: "/appProfile",
    name: "appProfile",
    component: AppProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationVue,
    meta: { requiresAuth: true },
  },
  {
    path: "/notificationView",
    name: "notificationView",
    component: NotificationView,
    meta: { requiresAuth: true },
  },
  {
    path: "/note",
    name: "note",
    component: Note,
    meta: { requiresAuth: true },
  },
  {
    path: "/cardTask",
    name: "cardTask",
    component: CardTask,
    meta: { requiresAuth: true },
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword,
    meta: { requiresAuth: true },
  },

  // PUBLIC ROUTES (No Authentication Required)
  {
    path: "/forgotPasswordOne",
    name: "forgotPasswordOne",
    component: ForgotPasswordOne,
  },
  {
    path: "/forgotPasswordTwo",
    name: "forgotPasswordTwo",
    component: ForgotPasswordTwo,
  },
  {
    path: "/forgotPasswordThree",
    name: "forgotPasswordThree",
    component: ForgotPasswordThree,
  },
  {
    path: "/successfulPassword",
    name: "successfulPassword",
    component: SuccessfulPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// NAVIGATION GUARD (Protect Routes)
router.beforeEach((to, from, next) => {
  // console.log("Navigating to:", to.name); // Log the route being navigated to
  // console.log("Authenticated:", store.getters.isAuthenticated); // Log the authentication status

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login"); // Redirect to login if user is not authenticated
  } else {
    next(); // Allow navigation
  }
});

export default router;
