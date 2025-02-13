<template>
    <!-- container -->
    <div class="container">
        <!-- advert-button -->
        <div class="advert-button">
            <button type="button">Skip</button>
        </div>

        <!-- advert-img -->
        <div class="advert-img">
            <img :src="images[imgIndex]" />
        </div>

        <!-- welcome -->
        <div class="welcome">
            <h3>Welcome to <span>Taskly</span></h3>
            <p>{{ text[textIndex] }}</p>

            <!-- welcome-btn -->
            <div class="welcome-btn">
                <button type="button" @click="nextImage">Next</button>
            </div>

            <!-- scroll -->
            <div class="scroll">
                <div class="scroll1" v-bind:class="imgIndex === 0 ? 'active' : ''" ></div>
                <div class="scroll2" v-bind:class="imgIndex === 1 ? 'active' : ''" ></div>
                <div class="scroll3" v-bind:class="imgIndex === 2 ? 'active' : ''" ></div>
            </div>
        </div>

        <!-- imported footer-content -->
        <FooterContent />
    </div>
</template>

<script>

import FooterContent from './FooterContent.vue'
export default {
    name: "AdsProject",
    components: {
        FooterContent,
    },

  data() {
    return{
        images:[
            require('@/assets/ads1.png'),
            require('@/assets/ads2.png'),
            require('@/assets/ads3.png'),
        ],

        text : [
            "Your Personal Task Manager To Help You Stay Organised And Productive",
            "Stay on top of your tasks and boost your productivity with your ultimate personal organizer",
            "Effortlessly manage your tasks and achieve more ."
        ],

  imgIndex: 0,
  textIndex: 0,
    };
  },
  methods: {
    nextImage() {
        this.imgIndex++ 
        this.textIndex++
    }
  }

};
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
    margin-top: 10px;
    position: absolute;
    top: 0;
    right: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: rgba(114, 116, 118, 1);
    font-size: 18px;
    cursor: pointer;
}

.advert-img {
    width: 100%;
    text-align: center;
    margin-top: 35px;
}

.advert-img img {
    width: 70%;
    max-width: 300px;
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
    font-size: 11px;
    font-weight: 400;
    line-height: 18px;
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
    transition: 0.3s;
}

/* scroll */
.scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 5vh;
}

.scroll1,
.scroll2,
.scroll3 {
    width: 10px;
    height: 10px;
    background: rgba(217, 217, 217, 1);
    border-radius: 100px;
}

.active {
    background: #000;
}

@media (min-height: 600px) {
    .advert-img img {
        width: 100%;
    }

    .advert-img {
        margin-top: 80px;
    }

    .footer-container {
        margin-bottom: 10px;
    }
}

@media (min-height: 800px) {

    .advert-button button {
        margin-top: 80px;
    }

    .container {
        padding: 12px 20px;
    }

    .advert-img {
        margin-top: 150px;
    }
}
</style>
