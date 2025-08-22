<template>
    <div class="component home-hero" ref="heroRef">
        <div id="left">
            <h1 id="title">
                <span class="line line-1">{{ line1 }}</span>
                <span class="line line-2">{{ line2 }}</span>
            </h1>
            <p id="sub-title" v-if="width > 1049">{{ subTitle }}</p>
            <BasicButton :text="'Sign up for free'" :type="2" v-if="width > 1049" />
        </div>
        <div id="right">
            <picture class="icon">
                <img src="/assets/Screen No 2.svg" alt="Hero Illustration" />
            </picture>
            <p id="sub-title" v-if="width <= 1049">{{ subTitle }}</p>
            <BasicButton id="action" :text="'Sign up for free'" :type="2" v-if="width <= 1049" />

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const width = ref(window.innerWidth);
const heroRef = ref(null);
const line1 = 'Driving Digital Innovation';
const line2 = 'in Healthcare & Beyond';
const subTitle = 'At Kaizen Technology, we’ve grown from healthcare SaaS specialists into a full-service digital partner. We design websites, apps, booking systems, and provide SEO, social media, and branding — delivering end-to-end solutions that drive growth.';

window.addEventListener('resize', (e) => {
    width.value = window.innerWidth;
});

// removed GSAP animation
</script>

<style scoped>
.home-hero {
    margin: 40px 0 70px;
    display: flex;
    justify-content: space-between;
}

#left {
    max-width: 50%;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: start;
}

#title {
    position: relative;
    display: inline-block;
    font-size: clamp(36px, 9.5vw, 86px);
    line-height: 1.08;
    max-width: 100%;
    overflow-wrap: anywhere;
}

.line { display: block; }

/* remove sweep layers */

#right {
    flex-shrink: 1;
}

.icon img {
    width: 750px;
    height: auto;
}

/* RESPONSIVE */
@media screen and (max-width: 1049px) {
    .home-hero {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #left {
        max-width: 100%;
        min-width: 0;
        display: flex;
        flex-direction: column;
    }

    #left #title {
        text-align: center;
    }

    #right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #right .icon {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    #right .icon img {
        width: 100%;
        max-width: 520px;
        height: auto;
    }

    #right #sub-title {
        text-align: center;
        margin-bottom: 35px;
    }

    #right #sub-title #action {
        max-width: max-content;
    }
}

@media screen and (max-width: 620px) {
    #right {
        align-items: initial;
    }

    .home-hero {
        margin: 24px 0 50px;
    }

    #right .icon img {
        max-width: 100%;
    }

    #right #sub-title #action {
        max-width: none;
        width: 100%;
    }
}
</style>