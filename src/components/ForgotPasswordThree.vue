<template>
    <!-- container -->
    <div class="container">

        <!-- forgotPassword -->
        <div class="forgotPassword">

            <!-- key-icon -->
            <div class="key-icon">
                <i class="fa-solid fa-key"></i>
            </div>

            <!-- password -->
            <div class="input-field">
                <i class="fa-solid fa-user-lock"></i>
                <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Enter new password" />
                <i class="fa-solid" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
                    @click="togglePassword('password')"></i>
            </div>
            <p v-if="passwordError" class="error">{{ passwordError }}</p>

            <!-- confirm-password -->
            <div class="input-field">
                <i class="fa-solid fa-user-lock"></i>
                <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
                    placeholder="Confirm new password" />
                <i class="fa-solid" :class="showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'"
                    @click="togglePassword('confirmPassword')"></i>
            </div>
            <p v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</p>

            <!-- confirm-btn -->
            <div class="confirm-btn">
                <button type="submit" @click="submitPassword">Confirm</button>
            </div>

            <!-- return -->
            <div class="return">
                <i class="fa-solid fa-arrow-left"></i>
                <p>Return to login</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "forgotPasswordOneVue",
    data() {
        return {
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            passwordError: "",
            confirmPasswordError: "",
        };
    },
    methods: {
        togglePassword(type) {
            if (type === "password") {
                this.showPassword = !this.showPassword;
            } else {
                this.showConfirmPassword = !this.showConfirmPassword;
            }
        },
        submitPassword() {
            this.passwordError = "";
            this.confirmPasswordError = "";

            if (!this.password) {
                this.passwordError = "Password is required!";
                return;
            }

            if (!this.confirmPassword) {
                this.confirmPasswordError = "Confirm Password is required!";
                return;
            }

            if (this.password !== this.confirmPassword) {
                this.confirmPasswordError = "Passwords do not match!";
                return;
            }

            alert("Password successfully set!");
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

/* forgotPassword */
.forgotPassword {
    padding: 20px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background: #fff;
    text-align: center;
}

/* key-icon */
.key-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50%;
    background: #3386ec;
}

.key-icon i {
    color: #fff;
    font-size: 30px;
}

/* input-field */
.input-field {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px auto;
    width: 100%;
}

.input-field input {
    width: 100%;
    padding: 12px 40px;
    font-size: 16px;
    border: 2px solid #9da1a4;
    border-radius: 8px;
    outline: none;
}

.input-field i {
    position: absolute;
    color: #9da1a4;
    cursor: pointer;
}

.input-field i.fa-user-lock {
    left: 13px;
}

.input-field i.fa-eye,
.input-field i.fa-eye-slash {
    right: 13px;
}

/* Error messages */
.error {
    color: red;
    font-size: 14px;
    text-align: left;
    margin-left: 10px;
}

/* confirm-btn */
.confirm-btn {
    margin-top: 10%;
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
}

.confirm-btn button:hover {
    background: #ff9900;
}

/* return */
.return {
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0 5px;
    color: #3386ec;
    align-items: center;
    text-align: center;
}

.return i {
    padding: 5px;
    font-size: 12px;
    border: 1px solid;
    border-radius: 100px;
    background: #3386ec;
    color: #fff;
}   

.return p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
}
</style>