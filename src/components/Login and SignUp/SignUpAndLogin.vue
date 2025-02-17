<template>
  <div>
    <div class="signUp-component" v-if="showSignUp">
      <SignUpVue @login="showSignUp = false" />
    </div>
    <div class="login-component" v-else>
      <LoginVue @signup="showSignUp = true" />
    </div>
  </div>
</template>

<script>
import SignUpVue from "../Login and SignUp/SignUp.vue";
import LoginVue from "../Login and SignUp/Login.vue";
export default {
  name: "SignUpAndLoginVue",
  components: {
    SignUpVue,
    LoginVue,
  },
  data() {
    return {
      showSignUp: true,
    };
  },
};
</script>

<style scoped></style>
