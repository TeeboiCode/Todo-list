<template>

    <!-- container -->
    <div class="container">

        <!-- advert-button -->
        <div class="advert-button">
            <button>Skip</button>
        </div>
        
        <!-- advert-img -->
        <div class="advert-img">
            <img src="../assets/ads1.png" alt="">
        </div>

        <!-- welcome -->
        <div class="welcome">
            <h3>Welcome to <span>Taskly</span></h3>
            <p>Your Personal Task Manager To Help You Stay Organised And Productive</p>

            <!-- welcome-btn -->
            <div class="welcome-btn">
                <button>Next</button>
            </div>

            <!-- scroll -->
            <div class="scroll">
                <div class="scroll1 active"></div>
                <div class="scroll2"></div>
                <div class="scroll3"></div>
            </div>
        </div>

        <!-- footer -->
        <footer>
            <p>By continuing , you agree to  Taskly <span>Terms of Service.   Privacy Policy and Cookies Policy.</span></p>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    padding: 10px 12px;
}

/* advert-text */
.advert-button {
    position: relative;
}

.advert-button button {
    margin-top: 40px;
    position: absolute;
    top: 0;
    left: 80%;
    border: none;
    outline: none;
    background: transparent;
    color: rgba(114, 116, 118, 1);
    font-size: 18px;
}

.advert-img {
    width: 100%;
    text-align: center;
    margin-top: 60px;
}

.advert-img img {
    width: 70%;
}

/* welcome */
.welcome {
    text-align: center;
}

.welcome h3 {
    color: #000000;
    font-size: 18px;
    font-weight: 500;
}

.welcome h3 span {
    color: #219afd;
    font-weight: 600;
    font-size: 18px;
}

.welcome p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #000000;
}

.welcome-btn {
    width: 100%;
    margin-bottom: 3%;
}

.welcome-btn button {
    background: #09203e;
    padding: 12px 120px;
    border-radius: 25px;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
}

/* scroll */
.scroll {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0 5px;
    width: 100%;
    height: 5vh;
}

.scroll1,
.scroll2,
.scroll3 {
    width: 10px;
    height: 10px;
    border: 1px solid;
    border-radius: 100px;
}

.scroll1.active {
    background: #000;
}

footer {
    text-align: center;
    align-items: center;
}

footer p {
    font-size: 11px;
    color: #767676;
    font-weight: 400;
}

footer p span {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-style: solid;
}

</style>