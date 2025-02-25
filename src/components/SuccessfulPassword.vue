<template>
    <!-- container -->
    <div class="container">

        <!-- successful-password -->
        <div class="successful-password">

            <!-- correct-icon -->
            <div class="correct-icon">
                <i class="fa-solid fa-check"></i>
            </div>

            <!-- successful-password-text -->
            <div class="successful-password-text">
                <h4>Your Password Has Been Changed Successfully!</h4>
            </div>

            <!-- confirm-btn -->
            <div class="confirm-btn">
                <button type="submit" @click="goToLogin">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccessfulPassword",
    methods: {
        goToLogin() {
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
/* container */
.container {
    padding: 10px 16px;
    margin: auto;
}

/* successful-password */
.successful-password {
    padding: 30px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    animation: fadeIn 0.6s ease-in-out;
}

/* correct-icon */
.correct-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50%;
    background: #3386ec;
}

.correct-icon i {
    color: #fff;
    font-size: 35px;
}

/* successful-password-text */
.successful-password-text h4 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-top: 15px;
}

/* confirm-btn */
.confirm-btn {
    margin-top: 15%;
}

.confirm-btn button {
    background: #09203e;
    font-size: 16px;
    width: 100%;
    font-weight: 700;
    padding: 15px;
    color: #fff;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

</style>