<template>
    <!-- container -->
    <div class="container">

        <!-- forgotPassword -->
        <div class="forgotPassword">

            <!-- forgortPassword-img -->
            <div class="forgotPassword-img">
                <img src="../assets/key-icon.png" alt="">
            </div>

            <!-- forgotPassword-text -->
            <div class="forgotPassword-text">
                <h4>We've sent a 6-digit verification code to your email. Enter it below to verify your account!</h4>
            </div>

            <!-- pin-container -->
            <div class="pin-container">
                <input v-for="(digit, index) in pin" :key="index" type="text" class="pin-input" v-model="pin[index]"
                    maxlength="1" @input="handleInput(index, $event)"
                    @keydown.backspace="handleBackspace(index, $event)" ref="pinInputs" />
            </div>

            <!-- confirm-btn -->
            <div class="confirm-btn">
                <button type="submit" @click="submitPin">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "forgotPasswordOneVue",
    data() {
        return {
            pin: ["", "", "", "", "", ""],
        };
    },
    methods: {
        handleInput(index, event) {
            const value = event.target.value;
            if (/^\d$/.test(value)) {
                this.pin[index] = value;
                if (index < this.pin.length - 1) {
                    this.$nextTick(() => this.$refs.pinInputs[index + 1].focus());
                }
            } else {
                this.pin[index] = "";
            }
        },
        handleBackspace(index, event) {
            if (index > 0 && !this.pin[index]) {
                this.$refs.pinInputs[index - 1].focus();
            }
        },
        submitPin() {
            const enteredPin = this.pin.join("");
            if (enteredPin.length === 6) {
                alert(`Entered PIN: ${enteredPin}`);

            } else {
                alert("Please enter a complete 6-digit PIN.");
            }
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
    width: 80%;
    max-width: 355px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background: #fff;
    text-align: center;
}

.forgotPassword-img {
    margin-bottom: 20px;
    align-items: center;
    justify-self: center;
}

.forgotPassword-img img {
    width: 50px;
}

.forgotPassword-text h4 {
    margin: 20px 0;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #000000;
}

/* pin-container */
.pin-container {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 15px;
}

.pin-input {
    width: 40px;
    height: 50px;
    text-align: center;
    font-size: 24px;
    border: 2px solid #3386ec;
    border-radius: 8px;
    outline: none;
}

.confirm-btn {
    margin-top: 10%;
    margin-bottom: 25px;
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
</style>