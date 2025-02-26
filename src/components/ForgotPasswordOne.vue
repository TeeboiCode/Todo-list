<template>

    <!-- container -->
    <div class="container">

        <!-- forgotPassword -->
        <div class="forgotPassword">

            <!-- forgortPassword-img -->
            <div class="forgotPassword-img">
                <img src="../assets/forgot password image.png" alt="">
            </div>

            <!-- forgotPassword-text -->
            <div class="forgotPassword-text">
                <h4>Enter You Email To Receive A Code To Reset Your Password</h4>
            </div>

            <!-- email -->
            <div class="email">
                <label for="email">Email</label>

                <!-- input-container -->
                <div class="input-container">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" id="email" placeholder="Email/Number">
                </div>
            </div>

            <!-- confirm-btn -->
            <div class="confirm-btn">
                <button type="submit">Confirm</button>
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
};
</script>

<style scoped>
.container {
    padding: 10px 16px;
    margin: auto;
}

.forgotPassword {
    padding: 20px 20px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background: #fff;
}

.forgotPassword-img {
    align-items: center;
    justify-self: center;
}

.forgotPassword-img img {
    width: 50px;
}

.forgotPassword-text h4 {
    margin: 5px 0;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #000000;
}

label {
    font-size: 15px;
    font-weight: 600;
    color: #000;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    padding: 12px 20px;
    border-radius: 10px;
}

.input-container i {
    margin-right: 10px;
    color: #555;
}

.input-container input {
    border: none;
    outline: none;
    flex: 1;
}

/* confitm-btn */
.confirm-btn {
    margin-top: 5%;
}

.confirm-btn button {
    background: #09203e;
    font-size: 16px;
    width: 100%;
    font-weight: 700;
    padding: 15px 30px;
    color: #fff;
    border-radius: 10px;
    outline: none;
    border: none;
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