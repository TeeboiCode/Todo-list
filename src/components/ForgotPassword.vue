<template>

    <!-- forgot-container -->
    <div class="forgot-container">

        <!-- overlay-container -->
        <div class="overlay-container">
        </div>

        <ForgotPasswordOne/>

    </div>

</template>

<script>
import ForgotPasswordOne from "../components/ForgotPasswordOne.vue"
export default {
    name: "ForgotPassword",
    components: {
        ForgotPasswordOne,
    }
}
</script>

<style scoped>
.overlay-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: #a8a5a5;
    z-index: -90;
}
</style>